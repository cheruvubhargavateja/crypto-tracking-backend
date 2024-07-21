import { Router } from "express";
import { Data } from "../models/Data";

const router = Router();

router.get("/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await Data.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
