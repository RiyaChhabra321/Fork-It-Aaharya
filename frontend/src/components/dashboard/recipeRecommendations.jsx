import { useState } from "react";
import { getRecommendations } from "../services/recommendation.service";
import { MoodCravingSelector } from "./MoodCravingSelector";

export const RecipeRecommendations = () => {
  const [input, setInput] = useState({ mood: "", craving: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    const res = await getRecommendations(input);
    setData(res);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <MoodCravingSelector value={input} onChange={handleChange} />

      <button onClick={fetchRecommendations} disabled={loading}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      {data && (
        <>
          {/* CONTEXT */}
          <div>
            <h3>Current Phase: {data.context.phase}</h3>
            <p>
              Day {data.context.dayInPhase} of {data.context.totalDaysInPhase}
            </p>
            <p>Focus nutrients: {data.context.focusNutrients.join(", ")}</p>
          </div>

          {/* RECIPES */}
          <div className="space-y-4">
            {data.recommended_recipes.map((recipe) => (
              <div key={recipe.id} className="border p-4 rounded">
                <h4>{recipe.title}</h4>
                <p>{recipe.reason}</p>
                <p>{recipe.calories} kcal</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
