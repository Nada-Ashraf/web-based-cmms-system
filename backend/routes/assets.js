const express = require("express");
const router = express.Router();
const { Asset } = require("../models/asset");
const _ = require("lodash");

// Add Asset
router.post("/add_asset", async (req, res) => {
  // let asset = await Asset.findOne({
  //   serial_number: req.body.serial_number,
  // });
  // if (asset) {
  //   return res.status(400).send("This asset already exisits!");
  // } else {
  // const asset = new Asset(
  //   _.pick(req.body, [
  //     "name",
  //     "serial_number",
  //     "model",
  //     "department",
  //     "price",
  //     "location",
  //     "supplier",
  //     "condition",
  //     "last_pm_date",
  //     "last_failure_date",
  //     "last_fix_date",
  //     "notes",
  //     "title",
  //     "instructions",
  //     "assigned_to",
  //     "status",
  //     "schedules",
  //   ])
  // );
  const asset = new Asset({
    name: req.body.name,
    serial_number: req.body.serial_number,
    model: req.body.model,
    department: req.body.department,
    price: req.body.price,
    location: req.body.location,
    supplier: req.body.supplier,
    condition: req.body.condition,
    last_pm_date: req.body.last_pm_date,
    last_failure_date: req.body.last_failure_date,
    last_fix_date: req.body.last_fix_date,
    notes: req.body.notes,
    pm: {
      title: req.body.pm.title,
      instructions: req.body.pm.instructions,
      assigned_to: req.body.pm.assigned_to,
      status: req.body.pm.status,
      schedules: req.body.pm.schedules,
    },
  });
  await asset.save();
  res.json(asset);
  res.end();
  // }
});

// View All assets
router.get("/", async (req, res) => {
  const assets = await Asset.find();
  // res.send(assets);
  res.json(assets);
});

// View details of one asset
router.get("/:id", async (req, res) => {
  const asset = await Asset.findById(req.params.id);
  res.send(asset);
  console.log(asset);
});

// Edit asset
router.put("/:id", async (req, res) => {
  const asset = await Asset.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, [
      "name",
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
      "inspection_period_days",
      "notes",
    ]),
    { new: true }
  );
  res.send(asset);
});

// Delete asset
router.delete("/delete/:id", async (req, res) => {
  const asset = await Asset.findByIdAndRemove(req.params.id);
  res.send(asset);
});

module.exports = router;
