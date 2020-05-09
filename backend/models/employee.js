const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  ssn: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  position: {
    type: String,
    enum: ["Manager", "Supervisor", "Technician"],
  },
  phone_number: String,
  shift_start: Date,
  shift_end: Date,
});

// compile schema into a model to create a class
const Employee = mongoose.model("Employee", employeeSchema);

exports.Employee = Employee;
