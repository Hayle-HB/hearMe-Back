const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  topic: {
    type: [String], // Array of selected topics
    required: true,
  },
  answer: {
    comment: { type: Boolean, required: true },
    identity: { type: Boolean, required: true },
    refer: { type: Boolean, required: true },
    notifications: { type: Boolean, required: true },
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: function () {
      return this.answer.identity === true;
    },
  },
  email: {
    type: String,
    required: function () {
      return this.answer.notifications === true;
    },
  },
  referralID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", 
    required: function () {
      return this.answer.refer === true;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
