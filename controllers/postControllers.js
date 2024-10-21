const Post = require("../models/Post.js");

const getPosts = (req, res) => {
  res.send("THERE IS NOTING HERE!, WE ARE SORRY");
};

const getPostByID = (req, res) => {
  res.send("SORRY FOR THAT");
};

const postHandler = async (req, res) => {
  try {
    const { title, content, topic, answer, userID, email, referralID } =
      req.body;

    // Create a new post object
    const post = new Post({
      title,
      content,
      topic,
      answer: {
        comment: answer.comment,
        identity: answer.identity,
        refer: answer.refer,
        notifications: answer.notifications,
      },
    });

    // Add userID if identity is true
    if (answer.identity === true) {
      if (!userID) {
        return res
          .status(400)
          .json({ message: "User ID is required when identity is true." });
      }
      post.userID = userID;
    }

    // Add email if notifications is true
    if (answer.notifications === true) {
      if (!email) {
        return res
          .status(400)
          .json({ message: "Email is required when notifications are true." });
      }
      post.email = email;
    }

    // Add referralID if refer is true
    if (answer.refer === true) {
      if (!referralID) {
        return res
          .status(400)
          .json({
            message: "Referral ID is required when referring to a past post.",
          });
      }
      post.referralID = referralID;
    }

    // Save the post to the database
    const savedPost = await post.save();

    // Respond with the saved post
    res.status(201).json(savedPost);
  } catch (err) {
    console.log(err);
    
    res.status(400).json({
      message: "Unable to process your post, please try again!",
    });
  }
};

module.exports = { getPosts, getPostByID, postHandler };
