const express = require("express");
const router = express.Router();
const { PM } = require("../models/pm");
const _ = require("lodash");

// Add Asset
router.post("/add_pm", async (req, res) => {
  const pm = new PM({
    title: req.body.title,
    asset: req.body.asset,
    instructions: req.body.instructions,
    assigned_to: req.body.assigned_to,
    status: req.body.status,
    schedules: req.body.schedules,
  });
  await pm.save();
  res.json(pm);
  res.end();
});

// View All assets
router.get("/", async (req, res) => {
  const pms = await PM.find()
    .populate({
      path: "assigned_to",
      model: "Employee",
    })
    .populate({
      path: "asset",
      model: "Asset",
    });
  // res.send(assets);
  res.json(pms);
});

// // View details of one asset
// router.get("/:id", async (req, res) => {
//   const asset = await Asset.findById(req.params.id);
//   res.send(asset);
//   console.log(asset);
// });

// // Edit asset
// router.put("/:id", async (req, res) => {
//   const asset = await Asset.findByIdAndUpdate(
//     req.params.id,
//     _.pick(req.body, [
//       "name",
//       "serial_number",
//       "model",
//       "department",
//       "price",
//       "location",
//       "supplier",
//       "condition",
//       "last_pm_date",
//       "last_failure_date",
//       "last_fix_date",
//       "inspection_period_days",
//       "notes",
//     ]),
//     { new: true }
//   );
//   res.send(asset);
// });

// // Delete asset
// router.delete("/delete/:id", async (req, res) => {
//   const asset = await Asset.findByIdAndRemove(req.params.id);
//   res.send(asset);
// });

module.exports = router;
