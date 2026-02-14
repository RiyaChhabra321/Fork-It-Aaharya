import { Router } from "express";
import Profile from "../models/profile.js";
import { getCyclePhaseInfo } from "../utils/cycle.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { lastPeriod, cycleLength, mood, craving } = req.body;

    if (!lastPeriod || !cycleLength) {
      return res.status(400).json({
        success: false,
        message: "lastPeriod and cycleLength are required",
      });
    }

    const cycleInfo = getCyclePhaseInfo(
      String(lastPeriod),
      Number(cycleLength)
    );

    const profile = await Profile.create({
      cycleInfo,
      mood,
      craving,
    });

    res.status(201).json({
      success: true,
      profile,
    });
  } catch (err) {
    console.error("PROFILE CREATE ERROR ❌", err);

    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
});

export default router;
