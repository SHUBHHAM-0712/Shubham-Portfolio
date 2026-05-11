const bcrypt = require("bcryptjs");
const connectDb = require("../server/config/db");
const OtpVerification = require("../server/models/OtpVerification");
const { readJsonBody } = require("./_utils/body");

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = await readJsonBody(req);
  const email = normalizeEmail(body?.email);
  const otp = String(body?.otp || "").trim();

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    await connectDb();

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
};
