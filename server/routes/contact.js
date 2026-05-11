const express = require("express");
const bcrypt = require("bcryptjs");
const OtpVerification = require("../models/OtpVerification");
const { sendContactEmails } = require("../utils/emailjs");

const router = express.Router();

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

router.post("/send-contact", async (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = normalizeEmail(req.body?.email);
  const subject = String(req.body?.subject || "").trim();
  const message = String(req.body?.message || "").trim();
  const otp = String(req.body?.otp || "").trim();

  if (!name || !email || !subject || !message || !otp) {
    return res.status(400).json({ message: "All fields and OTP are required" });
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

    await sendContactEmails({ name, email, subject, message });

    return res.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("[api] send-contact error:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
