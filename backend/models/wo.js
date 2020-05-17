const mongoose = require("mongoose");
const woSchema = new mongoose.Schema({
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
  priority: {
    type: String,
    enum: ["Urgent", "Not Urgent", ""],
  },
  importance: {
    type: String,
    enum: ["Important", "Not Important", ""],
  },
  issue_date: {
    type: Date,
    default: Date.now,
  },
  due_date: Date,
  notes: String,
  report_title: String,
  report_body: String,
});

// compile schema into a model to create a class
const WO = mongoose.model("WO", woSchema);

exports.WO = WO;
