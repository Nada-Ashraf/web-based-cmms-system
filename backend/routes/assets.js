import { Router } from "express";
import Asset from "../models/Asset";
import { pick } from "lodash";

const router = Router();

// Add Asset
router.post("/add_asset", async (req, res) => {
  const asset = new Asset(
    pick(req.body, [
      "name",
      "serial_number",
      "model",
      "brand",
      "department",
      "COO",
      "supply_date",
      "operation_date",
      "supply_country",
      "warranty_period",
      "parts",
      "price",
      "maintenance_company",
      "contract_type",
      "contract_start_date",
      "contract_end_date",
      "recieved_by",
      "condition",
      "notes",
    ])
  );
  await asset.save();
  res.json(asset);
  res.end();
});

// View All assets
router.get("/", async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
});

// View details of one asset
router.get("/:id", async (req, res) => {
  const asset = await Asset.findById(req.params.id);
  res.send(asset);
  console.log(asset);
});

// Edit asset
router.put("/edit/:id", async (req, res) => {
  const asset = await Asset.findByIdAndUpdate(
    req.params.id,
    pick(req.body, [
      "name",
      "serial_number",
      "model",
      "brand",
      "department",
      "COO",
      "supply_date",
      "operation_date",
      "supply_country",
      "warranty_period",
      "parts",
      "price",
      "maintenance_company",
      "contract_type",
      "contract_start_date",
      "contract_end_date",
      "recieved_by",
      "condition",
      "notes",
    ]),
    { new: true }
  );
  res.send(asset);
});

// Delete asset
router.delete("/delete/:id", async (req, res) => {
  const asset = await Asset.findByIdAndRemove(req.params.id);
  res.send(asset);
});

export default router;
