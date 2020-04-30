const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  title: String,
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
  },
  body: String,
  open_date: Date,
  status: {
    type: String,
    enum: ["Open", "Assigned", "Closed"],
  },
  finish_date: Date,
});

// compile schema into a model to create a class
const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
