const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  ssn: String,
  position: {
    type: String,
    enum: ["Manager", "Supervisor", "Maintenance Personnel"],
  },
  phone_number: Number,
  gender: { type: String, enum: ["Female", "Male"] },
  shift_start: Date,
  shift_end: Date,
});

// compile schema into a model to create a class
const Employee = mongoose.model("Employee", employeeSchema);

exports.Employee = Employee;
