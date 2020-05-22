import { Schema, model } from "mongoose";

const PMSchema = new Schema({
  title: String,
  asset: {
    type: Schema.Types.ObjectId,
    ref: "Asset",
  },
  instructions: String,
  assigned_to: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: "5ec835b40747450f040fe50c",
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
  report_date: { type: Date, default: null },
});

// compile schema into a model to create a class
const PM = model("PM", PMSchema);

export default PM;
