const express = require("express");
const bcrypt = require("bcryptjs");
const OtpVerification = require("../models/OtpVerification");
const OtpRateLimit = require("../models/OtpRateLimit");
const { sendOtpEmail } = require("../utils/emailjs");

const router = express.Router();

const OTP_WINDOW_MS = 5 * 60 * 1000;
const MAX_OTP_PER_WINDOW = 3;

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

async function enforceRateLimit(email, ip) {
  const key = `${email}:${ip}`;
  const now = new Date();

  let record = await OtpRateLimit.findOne({ key });
  if (!record || now - record.windowStart > OTP_WINDOW_MS) {
    await OtpRateLimit.findOneAndUpdate(
      { key },
      {
        $set: {
          key,
          email,
          ip,
          windowStart: now,
          count: 1,
          expiresAt: new Date(now.getTime() + OTP_WINDOW_MS),
        },
      },
      { upsert: true },
    );

    return { allowed: true };
  }

  if (record.count >= MAX_OTP_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterMs: OTP_WINDOW_MS - (now - record.windowStart),
    };
  }

  await OtpRateLimit.findOneAndUpdate(
    { key },
    {
      $inc: { count: 1 },
      $set: { expiresAt: new Date(now.getTime() + OTP_WINDOW_MS) },
    },
  );

  return { allowed: true };
}

router.post("/send-otp", async (req, res) => {
  const email = normalizeEmail(req.body?.email);
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const ip = getClientIp(req);
    const rate = await enforceRateLimit(email, ip);
    if (!rate.allowed) {
      return res.status(429).json({
        message: "Too many OTP requests. Please try again later.",
        retryAfterMs: rate.retryAfterMs,
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + OTP_WINDOW_MS);

    await OtpVerification.deleteMany({ email });
    await OtpVerification.create({ email, otpHash, expiresAt });

    await sendOtpEmail(email, otp);

    return res.status(200).json({ message: "OTP sent" });
  } catch (error) {
    console.error("[api] send-otp error:", error);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
});

router.post("/verify-otp", async (req, res) => {
  const email = normalizeEmail(req.body?.email);
  const otp = String(req.body?.otp || "").trim();

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const record = await OtpVerification.findOne({ email });
    if (!record) {
      return res.status(400).json({ message: "OTP expired or invalid" });
    }

    const isValid = await bcrypt.compare(otp, record.otpHash);
    if (!isValid) {
      return res.status(400).json({ message: "OTP expired or invalid" });
    }

    await OtpVerification.deleteOne({ _id: record._id });

    return res.status(200).json({ verified: true });
  } catch (error) {
    console.error("[api] verify-otp error:", error);
    return res.status(500).json({ message: "Failed to verify OTP" });
  }
});

module.exports = router;
