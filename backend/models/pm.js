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
    default: "5ec4510eac0f96432c01830f",
  },
  status: {
    type: String,
    enum: ["Assigned", "Not Assigned", "Done", "There's an issue", ""],
    default: "Not Assigned",
  },
  schedules: {
    type: String,
    enum: [
      "NA",
      "weekly",
      "monthly",
      "annual",
      "every 3 years",
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
