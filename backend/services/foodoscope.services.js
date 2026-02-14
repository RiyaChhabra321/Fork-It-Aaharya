import axios from "axios";

const BASE_URL =
  "https://cosylab.iiitd.edu.in/recipe2-api/recipe/recipe-day/with-ingredients-categories";

export const getRecipeByFilters = async ({
  includeIngredients = [],
  excludeIngredients = [],
  excludeCategories = [],
}) => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${process.env.FOOD_API_KEY}`,
        "Content-Type": "application/json",
      },
      params: {
        includeIngredients: includeIngredients.join(","), // ✅ NEW
        excludeIngredients: excludeIngredients.join(","),
        excludeCategories: excludeCategories.join(","),
      },
    });

    return res.data.payload;
  } catch (err) {
    console.error(
      "RecipeDB error:",
      err.response?.data || err.message
    );

    return {
      Recipe_title: "Dark Chocolate Oats",
      Calories: "220",
      total_time: "10",
    };
  }
};
