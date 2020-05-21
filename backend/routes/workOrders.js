import { Router } from "express";
import { WO } from "../models/WorkOrder";
import { pick } from "lodash";

const router = Router();

// Add wo
router.post("/create", async (req, res) => {
  const wo = new WO(
    pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "priority",
      "importance",
      "issue_date",
      "due_date",
      "notes",
      "report_title",
      "report_body",
      "status",
    ])
  );
  await wo.save();
  res.json(wo);
  res.end();
});

// View All wos
router.get("/", async (req, res) => {
  const wos = await WO.find().populate("asset").populate("assigned_to");
  res.json(wos);
});

// View details of one pm
router.get("/:id", async (req, res) => {
  const wo = await WO.findById(req.params.id)
    .populate("asset")
    .populate("assigned_to");
  res.json(wo);
});

// Edit wo
router.put("/edit/:id", async (req, res) => {
  const wo = await WO.findByIdAndUpdate(
    req.params.id,
    pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "priority",
      "importance",
      "issue_date",
      "due_date",
      "notes",
      "report_title",
      "report_body",
      "status",
    ]),
    { new: true }
  );
  res.send(wo);
});
// Delete wo
router.delete("/delete/:id", async (req, res) => {
  const wo = await WO.findByIdAndRemove(req.params.id);
  res.send(wo);
});

export default router;
