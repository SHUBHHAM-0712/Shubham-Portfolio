const mongoose = require("mongoose");

const OtpVerificationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    otpHash: { type: String, required: true },
    expiresAt: { type: Date, required: true, index: { expires: 0 } },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.OtpVerification ||
  mongoose.model("OtpVerification", OtpVerificationSchema);
