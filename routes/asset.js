const express = require("express");
const router = express.Router();
const { Asset } = require("../models/asset");
const _ = require("lodash");

// routes

// Add Equipment
router.post("/add_asset", async (req, res) => {
  equipment = new Asset(
    _.pick(req.body, [
      "name",
      "number",
      "serial_number",
      "model",
      "department",
      "price",
      "location",
      "supplier",
      "condition",
      "last_pm_date",
      "last_failure_date",
      "last_fix_date",
    ])
  );
  await equipment.save();
  res.send(equipment);
});

module.exports = router;
