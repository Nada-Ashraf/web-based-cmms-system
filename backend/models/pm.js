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
    enum: ["Asssined", "In progress", "Done", "Missed"],
  },
  schedules: String,
  notes: String,
});

// compile schema into a model to create a class
const PM = mongoose.model("PM", pmSchema);

exports.PM = PM;
