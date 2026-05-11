const mongoose = require("mongoose");

const OtpRateLimitSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    ip: { type: String, required: true },
    windowStart: { type: Date, required: true },
    count: { type: Number, required: true, default: 1 },
    expiresAt: { type: Date, required: true, index: { expires: 0 } },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.OtpRateLimit ||
  mongoose.model("OtpRateLimit", OtpRateLimitSchema);
