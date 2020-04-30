const express = require("express");
const router = express.Router();
const { Report } = require("../models/report");
const _ = require("lodash");

// Add Report
router.post("/report_asset", async (req, res) => {
  report = new Report(
    _.pick(req.body, [
      "name_of_reporter",
      "asset",
      "body",
      "date",
      "finish_date",
    ])
  );
  await report.save();
  res.send(report);
});

// view reports
router.get("/", async (req, res) => {
  const reports = await Report.find().populate();
  res.send(reports);
});

module.exports = router;
