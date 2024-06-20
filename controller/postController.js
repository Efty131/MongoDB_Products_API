const Post = require('../model/postModel');

// Create a new post
const createPost = async (req, res) => {
  const { uid, content } = req.body;
  try {
    const post = new Post({ uid, content });
    await post.save();
    res.status(200).send(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('uid', 'displayName photoURL');
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createPost, getPosts };