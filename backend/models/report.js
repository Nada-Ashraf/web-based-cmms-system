const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: String,
  body: String,
});

// compile schema into a model to create a class
const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
