const bcrypt = require("bcryptjs");
const connectDb = require("../server/config/db");
const OtpVerification = require("../server/models/OtpVerification");
const { sendContactEmails } = require("../server/utils/emailjs");
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
  const name = String(body?.name || "").trim();
  const email = normalizeEmail(body?.email);
  const subject = String(body?.subject || "").trim();
  const message = String(body?.message || "").trim();
  const otp = String(body?.otp || "").trim();

  if (!name || !email || !subject || !message || !otp) {
    return res.status(400).json({ message: "All fields and OTP are required" });
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

    await sendContactEmails({ name, email, subject, message });

    return res.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("[api] send-contact error:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
};
