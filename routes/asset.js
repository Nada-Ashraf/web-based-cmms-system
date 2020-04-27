const express = require("express");
const router = express.Router();
const { Asset } = require("../models/asset");
const _ = require("lodash");

// Add Asset
router.post("/add_asset", async (req, res) => {
  let asset = await Asset.findOne({
    serial_number: req.body.serial_number,
  });
  if (asset) {
    return res.status(400).send("This asset already exisits!");
  } else {
    asset = new Asset(
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
      ])
    );
    await asset.save();
    res.send(asset);
  }
});

// View All assets
router.get("/view_assets", async (req, res) => {
  const assets = await Asset.find();
  res.send(assets);
});

// View details of one asset
router.get("/view_assets/:id", async (req, res) => {
  const asset = await Asset.find({ serial_number: req.params.id });
  res.send(asset);
  console.log(asset);
});

module.exports = router;
