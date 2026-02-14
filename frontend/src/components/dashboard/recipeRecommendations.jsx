import { Clock, Flame, MapPin, Leaf, ExternalLink } from "lucide-react";

export const RecipeRecommendations = ({ recipes = [], loading }) => {
  if (loading) {
    return (
      <p className="text-center text-gray-500 animate-pulse">
        Loading recommendations...
      </p>
    );
  }

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return (
      <p className="text-center text-gray-400">
        Select your mood and craving to get recommendations
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe, index) => (
        <div
          key={recipe.recipe_id ?? recipe.title ?? index}
          className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
        >
          {/* IMAGE */}
          {(recipe.img_url || recipe.image) && (
            <div className="relative h-44 overflow-hidden">
              <img
                src={recipe.img_url ?? recipe.image}
                alt={recipe.recipe_title ?? recipe.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          {/* CONTENT */}
          <div className="p-4 space-y-3">
            {/* TITLE */}
            <h4 className="text-lg font-semibold line-clamp-1">
              {recipe.recipe_title ?? recipe.title}
            </h4>

            {/* META */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {recipe.region && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {recipe.region}
                </span>
              )}

              {recipe.time && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {recipe.time} min
                </span>
              )}

              {recipe.calories && (
                <span className="flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5" />
                  {Math.round(recipe.calories)} kcal
                </span>
              )}
            </div>

            {/* REASON */}
            {recipe.reason && (
              <p className="flex items-start gap-2 text-sm text-green-700">
                <Leaf className="mt-0.5 h-4 w-4" />
                <span>{recipe.reason}</span>
              </p>
            )}

            {/* INGREDIENTS */}
            {recipe.ingredients && (
              <p className="text-xs text-gray-500 line-clamp-2">
                {recipe.ingredients}
              </p>
            )}

            {/* CTA */}
            {recipe.url && (
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View full recipe
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
