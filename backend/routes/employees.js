const express = require("express");
const router = express.Router();
const { Employee } = require("../models/employee");
const _ = require("lodash");

// Add employee
router.post("/add_employee", async (req, res) => {
  let employee = await Employee.findOne({
    serial_number: req.body.serial_number,
  });
  if (employee) {
    return res.status(400).send("This employee already exisits!");
  } else {
    employee = new Employee(
      _.pick(req.body, [
        "ssn",
        "position",
        "phone_number",
        "gender",
        "shift_start",
        "shift_end",
      ])
    );
    await employee.save();
    res.send(employee);
  }
});

// View All employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  // res.send(employees);
  res.json(employees);
});

// View details of one asset
router.get("/:id", async (req, res) => {
  const employee = await Employee.find({ ssn: req.params.id });
  res.send(employee);
  console.log(employee);
});

// Edit employee
router.put("/:id", async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, [
      "ssn",
      "position",
      "phone_number",
      "gender",
      "shift_start",
      "shift_end",
    ]),
    { new: true }
  );
  res.send(employee);
});

// Delete employee
router.delete("/:id", async (req, res) => {
  const employee = await Employee.findByIdAndRemove(req.params.id);
  res.send(employee);
});

module.exports = router;
