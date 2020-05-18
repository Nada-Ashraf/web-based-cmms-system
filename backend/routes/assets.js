import { Router } from "express";
import Asset from "../models/Asset";
import { pick } from "lodash";

const router = Router();

/**
 * @route   POST api/assets
 * @desc    Create An Asset
 * @access  Public
 */

router.post("/", async (req, res) => {
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

/**
 * @route   GET api/assets
 * @desc    View All Assets
 * @access  Public
 */

router.get("/", async (req, res) => {
  const assets = await Asset.find().populate("recieved_by");
  res.json(assets);
});

/**
 * @route   GET api/assets/:id
 * @desc    View details of one asset
 * @access  Public
 */

router.get("/:id", async (req, res) => {
  const asset = await Asset.findById(req.params.id).populate("recieved_by");
  res.send(asset);
  console.log(asset);
});

/**
 * @route   PUT api/assets/edit/:id
 * @desc    Edit an asset
 * @access  Public
 */
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

/**
 * @route   DELETE api/assets/delete/:id
 * @desc    Delete an asset
 * @access  Public
 */
router.delete("/delete/:id", async (req, res) => {
  const asset = await Asset.findByIdAndRemove(req.params.id);
  res.send(asset);
});

export default router;
