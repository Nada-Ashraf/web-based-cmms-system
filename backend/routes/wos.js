const express = require("express");
const router = express.Router();
const { WO } = require("../models/wo");
const _ = require("lodash");

// Add wo
router.post("/create", async (req, res) => {
  const wo = new WO(
    _.pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "priority",
      "importance",
      "issue_date",
      "due_date",
      "notes",
      "report_title",
      "report_body",
    ])
  );
  await wo.save();
  res.json(wo);
  res.end();
});

// View All wos
router.get("/", async (req, res) => {
  const wos = await WO.find().populate("asset").populate("assigned_to");
  res.json(wos);
});

// View details of one pm
router.get("/:id", async (req, res) => {
  const wo = await WO.findById(req.params.id)
    .populate("asset")
    .populate("assigned_to");
  res.json(wo);
});

// Edit wo
router.put("/edit/:id", async (req, res) => {
  const wo = await WO.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "priority",
      "importance",
      "issue_date",
      "due_date",
      "notes",
      "report_title",
      "report_body",
    ]),
    { new: true }
  );
  res.send(wo);
});
// Delete wo
router.delete("/delete/:id", async (req, res) => {
  const wo = await WO.findByIdAndRemove(req.params.id);
  res.send(wo);
});

module.exports = router;
