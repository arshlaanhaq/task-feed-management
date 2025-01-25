const express = require("express");
const {
    addPost,
    getAllPosts,
} = require("../controllers/feedController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticate, addPost); // For adding a post
router.get("/",authenticate, getAllPosts); // For retrieving all posts

module.exports = router;
