const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDb() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(MONGODB_URI);
}

module.exports = connectDb;
