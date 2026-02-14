import { Router } from "express";
import Profile from "../models/profile.js";
import { nutrientsForPhase } from "../utils/cycle.js";
import { getRecipeByFilters } from "../services/foodoscope.services.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { mood, craving } = req.body;

    const profile = await Profile.findOne().sort({ createdAt: -1 });

    if (!profile) {
      return res.status(400).json({ message: "Profile not found" });
    }

    const phase = profile.cycleInfo?.phase;
    if (!phase) {
      return res.status(400).json({ message: "Cycle phase missing" });
    }

    const nutrients = nutrientsForPhase(phase);

    // 🥗 STEP 4 — nutrient → food mapping
    let includeIngredients = [];

    if (nutrients.includes("iron")) includeIngredients.push("spinach", "dates");
    if (nutrients.includes("magnesium")) includeIngredients.push("dark chocolate", "banana");
    if (nutrients.includes("protein")) includeIngredients.push("eggs", "paneer");
    if (nutrients.includes("fiber")) includeIngredients.push("oats", "fruits");

    // 🧠 mood → healthy foods
    if (mood === "tired") includeIngredients.push("oats");
    if (mood === "anxious") includeIngredients.push("banana");
    if (mood === "stressed") includeIngredients.push("nuts");

    // 🧠 craving → healthy alternatives
    if (craving === "sweet") includeIngredients.push("dark chocolate", "dates");
    if (craving === "salty") includeIngredients.push("roasted chana");
    if (craving === "comfort") includeIngredients.push("khichdi");

    // 🚫 unhealthy filters (global healthy guard)
    const excludeIngredients = ["maida", "refined sugar", "soda"];
    const excludeCategories = ["Fast Food", "Deep Fried", "High Sugar"];

    // 🚫 iron absorption blocker
    if (nutrients.includes("iron")) {
      excludeIngredients.push("coffee");
    }

    // 🔍 DEBUG LOGS (important for testing)
    console.log("Phase:", phase);
    console.log("Nutrients:", nutrients);
    console.log("Include Ingredients:", includeIngredients);
    console.log("Exclude Ingredients:", excludeIngredients);
    console.log("Exclude Categories:", excludeCategories);

    const recipe = await getRecipeByFilters({
      includeIngredients,
      excludeIngredients,
      excludeCategories,
    });

    return res.json({
      success: true,
      context: {
        phase,
        mood,
        craving,
        focusNutrients: nutrients,
        dayInPhase: profile.cycleInfo.dayInPhase,
        dayOfCycle: profile.cycleInfo.dayOfCycle,
      },
      recommended_recipe: {
        title: recipe.Recipe_title || "Healthy Recipe",
        calories: recipe.Calories || "250",
        time: recipe.total_time || "20",
        ingredients: recipe.ingredients || [],
        reason: `Good for ${phase} phase — rich in ${nutrients.join(", ")}`,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Recommendation failed" });
  }
});

export default router;
