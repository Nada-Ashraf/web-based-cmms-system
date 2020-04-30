const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name_of_reporter: String,
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
  },
  body: String,
  date: Date,
  finish_date: Date,
});

// compile schema into a model to create a class
const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
