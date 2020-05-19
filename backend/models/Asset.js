import { Schema, model } from "mongoose";

const AssetSchema = new Schema({
  // Basic info
  name: String,
  serial_number: String,
  model: String,
  brand: { type: String, enum: ["NA", "philips", "3A healthcare"] },
  department: {
    type: String,
    enum: ["reception", "open heart icu", "cardiology & surgery", "NA"],
    required: true,
  },
  description: String,
  classification: String,

  // Suppliment info
  COO: String, // Country of origin
  supply_date: Date,
  operation_date: Date,
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
  notes: String,

  // Operating info
  lifetime: Number, // in years
  proper_freq_of_use: String,
  electricity_sensitivity: {
    type: String,
    enum: ["Class |", "Class ||", "Class |||", "NA"],
  },
  risk_level: { type: String, enum: ["A", "B", "C", "NA"] },
  work_env: String,
  efficiency: String,

  // More info
  condition: {
    type: String,
    enum: ["In service", "Need repair", "Scrapped", "Out of service"],
    default: "In service",
  },
});

const Asset = model("Asset", AssetSchema);

export default Asset;
