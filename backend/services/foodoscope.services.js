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
        includeIngredients: includeIngredients.join(","),
        excludeIngredients: excludeIngredients.join(","),
        excludeCategories: excludeCategories.join(","),
      },
    });

    const recipe = res.data?.payload?.data?.[0]; // ✅ correct path

    return recipe || null;
  } catch (err) {
    console.error("RecipeDB error:", err.response?.data || err.message);

    return null; // ❗ fallback route me handle karenge
  }
};
