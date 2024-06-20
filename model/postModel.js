// models/postModel.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  content: { 
    type: String,
    required: true, 
},
  createdAt: { 
    type: Date,
    default: Date.now, 
},
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;