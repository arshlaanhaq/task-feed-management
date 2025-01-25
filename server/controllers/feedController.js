const Feed = require("../models/Feed");

// Add a post
exports.addPost = async (req, res) => {
  try {
    const { caption, imgurl } = req.body;

    if (!caption || !imgurl) {
      return res.status(400).json({ error: "Caption and image URL are required." });
    }

    const post = new Feed({
      user: req.user.id, 
      caption,
      imgurl,
    });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error while adding post:", error.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    // console.log("Fetching all posts...");
    const posts = await Feed.find().populate("user", "name email");
    // console.log("Posts fetched:", posts); 

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error while getting all posts:", error.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};
