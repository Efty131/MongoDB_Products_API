// controllers/userController.js
const User = require('../model/userModel');

const saveUser = async (req, res) => {
  const { uid, email, displayName, photoURL } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email, displayName, photoURL });
      await user.save();
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = saveUser;