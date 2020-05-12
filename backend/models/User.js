const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["Manager", "Supervisor", "Technician"],
  },
});

const User = mongoose.model("User", UserSchema);

exports.User = User;
