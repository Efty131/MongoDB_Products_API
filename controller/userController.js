// controllers/userController.js
const User = require('../model/userModel');

const saveUser = async (req, res) => {
  try {
    const { uid, email, displayName, photoURL } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ uid });

    if (!user) {
      // Create a new user if not exists
      user = new User({
        uid,
        email,
        displayName,
        photoURL
      });

      await user.save();
    }

    // Send back the MongoDB ObjectId
    res.status(200).json({ objectId: user._id });
  } catch (error) {
    console.error('Error saving user', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = saveUser;