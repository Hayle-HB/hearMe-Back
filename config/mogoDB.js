const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;
module.exports = mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
