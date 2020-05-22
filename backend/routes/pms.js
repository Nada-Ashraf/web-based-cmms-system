import { Router } from "express";
import PM from "../models/PM";
import { pick } from "lodash";

const router = Router();

// Add pm
router.post("/add_pm", async (req, res) => {
  const pm = new PM(
    pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "status",
      "schedules",
      "notes",
      "report_title",
      "report_body",
      "report_date",
    ])
  );
  await pm.save();
  res.json(pm);
  res.end();
});

// View All pms
router.get("/", async (req, res) => {
  const pms = await PM.find().populate("asset").populate("assigned_to");
  res.json(pms);
});

// View details of one pm
router.get("/:id", async (req, res) => {
  const pm = await PM.findById(req.params.id)
    .populate("asset")
    .populate("assigned_to");
  res.json(pm);
});

// Edit pm
router.put("/edit/:id", async (req, res) => {
  const pm = await PM.findByIdAndUpdate(
    req.params.id,
    pick(req.body, [
      "title",
      "asset",
      "instructions",
      "assigned_to",
      "status",
      "schedules",
      "notes",
      "report_title",
      "report_body",
      "report_date",
    ]),
    { new: true }
  );
  res.send(pm);
});
// Delete pm
router.delete("/delete/:id", async (req, res) => {
  const pm = await PM.findByIdAndRemove(req.params.id);
  res.send(pm);
});

export default router;
