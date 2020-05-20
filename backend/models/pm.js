const mongoose = require("mongoose");
const pmSchema = new mongoose.Schema({
  title: String,
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
  },
  instructions: [String],
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["Asssined", "Not Assigned", "Done", "There's an issue", ""],
  },
  schedules: {
    type: String,
    enum: [
      "NA",
      "weekly",
      "monthly",
      "annual",
      "every 3 months",
      "every 6 months",
    ],
  },
  notes: String,
  report_title: String,
  report_body: String,
});

// compile schema into a model to create a class
const PM = mongoose.model("PM", pmSchema);

exports.PM = PM;
