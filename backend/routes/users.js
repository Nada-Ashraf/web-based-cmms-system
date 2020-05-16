const express = require("express");
const router = express.Router(); // User Model
const { User } = require("../models/User");
const Emp = require("../models/employee");

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  res.send(user);
});

module.exports = router;
