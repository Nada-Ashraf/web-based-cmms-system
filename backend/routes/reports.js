const express = require("express");
const router = express.Router();
const { Report } = require("../models/report");
const _ = require("lodash");

// Add Report
router.post("/report_asset", async (req, res) => {
  report = new Report(
    _.pick(req.body, [
      "name_of_reporter",
      "title",
      "asset",
      "body",
      "open_date",
      "finish_date",
    ])
  );
  await report.save();
  res.json(report);
});

// view reports
router.get("/", async (req, res) => {
  const reports = await Report.find().populate("asset");
  res.json(reports);
});

module.exports = router;
