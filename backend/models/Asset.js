import { Schema, model } from "mongoose";
import Joi from "@hapi/joi";

const AssetSchema = new Schema({
  // Basic info
  name: String,
  serial_number: String,
  model: String,
  brand: {
    type: String,
    enum: [
      "linvatec",
      "surgiris",
      "covidien",
      "toshiba",
      "NA",
      "hill-rom",
      "philips",
      "3A healthcare",
      "kabi fresenuis",
      "schilir",
      "multi master",
      "newport",
      "spacelabs",
      "apik",
      "gem",
    ],
  },
  department: {
    type: String,
    enum: ["reception", "open heart icu", "cardiology", "surgery", "NA", "OR"],
    required: true,
  },
  description: String,
  classification: {
    type: String,
    enum: [
      "life support devices",
      "miscellaneous",
      "monitoring devices",
      "diagnostic devices",
      "therapeutic devices",
      "NA",
    ],
  },

  // Suppliment info
  COO: {
    type: String,
    enum: ["US", "germany", "italy", "egypt", "switzerland", "japan", "france"],
  }, // Country of origin
  supply_date: { type: Date, default: undefined },
  supply_company: String,
  operation_date: { type: Date, default: undefined },
  warranty_period: String, // in months
  price: String,

  // Maintenance info
  maintenance_company: String,
  contract_type: String,
  contract_start_date: { type: Date, default: undefined },
  contract_end_date: { type: Date, default: undefined },

  // Device details
  alarms: String,
  accessories: String,
  sterilization: String,
  notes: String,

  // Operating info
  lifetime: String, // in years
  proper_freq_of_use: String,
  electricity_sensitivity: {
    type: String,
    enum: ["Class |", "Class ||", "Class |||", "NA"],
  },
  risk_level: { type: String, enum: ["A", "B", "C", "NA"] },
  work_env: String,
  efficiency: String,

  // More info
  status: {
    type: String,
    enum: ["In service", "Need repair", "Scrapped", "Out of service"],
    default: "In service",
  },
});

const Asset = model("Asset", AssetSchema);

function validateAsset(asset) {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    serial_number: Joi.string().required(),
    //   maintanince_date: Joi.date().required(),
    //   status: Joi.string().required(),
    //   sterileDates: Joi.date().required(),
    //   sterileOperation: Joi.string().required(),
  });
  return schema.validate(asset);
}

export { Asset, validateAsset };
