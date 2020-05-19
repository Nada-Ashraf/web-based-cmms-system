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
  department: {
    type: String,
    enum: ["reception", "open heart icu", "cardiology & surgery", "NA"],
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

exports.User = User;
