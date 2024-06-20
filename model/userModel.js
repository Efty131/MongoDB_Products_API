// models/userModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: {
     type: String,
     required: true,
     unique: true, 
    },
  email: {
     type: String,
     required: true,
    },
  displayName: {
     type: String,
     required: true,
    },
  photoURL: {
     type: String,
     required: true,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;