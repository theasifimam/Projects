const bcrypt = require("bcrypt");
const User = require("../../models/user.model.js");

// Signup
const signup = async (req, res) => {
  const { fname, lname, email, mnumber, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    fname,
    lname,
    mnumber,
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Signup
const signin = async (req, res) => {
  const { fname, lname, email, mnumber, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    fname,
    lname,
    mnumber,
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Signup
const signout = async (req, res) => {
  const { fname, lname, email, mnumber, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    fname,
    lname,
    mnumber,
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signin, signup, signout };
