import { Schema, model } from "mongoose";

const AssetSchema = new Schema({
  // Basic info
  name: String,
  serial_number: String,
  model: String,
  brand: String,
  department: { type: String, enum: ["radiology", "cardiology", "operations"] },
  description: String,
  classification: String,

  // Suppliment info
  COO: String, // Country of origin
  supply_date: Date,
  operation_date: Date,
  supply_country: String,
  warranty_period: Number, // in months
  parts: [String],
  price: Number,

  // Maintenance info
  maintenance_company: String,
  contract_type: String,
  contract_start_date: Date,
  contract_end_date: Date,

  // Device details
  alarms: [String],
  accessories: [String],
  sterilization: String,

  // operating info
  lifetime: Number, // in years
  proper_freq_of_use: String,
  electricity_sensitivity: String,
  risk_level: String,
  work_env: String,
  efficiency: String,

  // More info
  recieved_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  condition: {
    type: String,
    enum: ["In service", "Need repair", "Scrapped", "Out of service"],
    default: "In service",
  },
  notes: String,
});

const Asset = model("asset", AssetSchema);

export default Asset;
