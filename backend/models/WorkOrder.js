import { Schema, model } from "mongoose";

const WorkOrderSchema = new Schema({
  title: String,
  asset: {
    type: Schema.Types.ObjectId,
    ref: "Asset",
  },
  instructions: [String],
  assigned_to: {
    type: Schema.Types.ObjectId,
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
  status: {
    type: String,
    enum: ["Done", "There's an issue", "Assigned"],
    default: "Assigned",
  },
  report_date: { type: Date, default: null },
});

// compile schema into a model to create a class
const WorkOrder = model("WorkOrder", WorkOrderSchema);

export default WorkOrder;
