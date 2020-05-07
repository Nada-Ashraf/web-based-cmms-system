const express = require("express");
const router = express.Router();
const { PM } = require("../models/pm");
const _ = require("lodash");

// Add pm
router.post("/add_pm", async (req, res) => {
  pm = new PM(
    _.pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "status",
      "schedules",
    ])
  );

  await pm.save();
  res.json(pm);
  res.end();
});

// View All pms
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
  res.json(pms);
});

// View details of one pm
router.get("/:id", async (req, res) => {
  const pm = await PM.findById(req.params.id);
  res.send(pm);
});

// Edit pm
router.put("/:id", async (req, res) => {
  const pm = await PM.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "status",
      "schedules",
    ]),
    { new: true }
  );
  res.send(pm);
});

// Delete pm
router.delete("/delete/:id", async (req, res) => {
  const pm = await PM.findByIdAndRemove(req.params.id);
  res.send(pm);
});

module.exports = router;
