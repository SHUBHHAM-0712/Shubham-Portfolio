const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDb = require("./config/db");
const otpRoutes = require("./routes/otp");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", otpRoutes);
app.use("/api", contactRoutes);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[api] listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("[api] failed to connect to MongoDB:", error);
    process.exit(1);
  });
