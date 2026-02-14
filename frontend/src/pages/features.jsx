
import { PageLayout } from "../components/layout/pageLayout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Home,
  ShoppingBasket,
  Utensils,
  Activity,
  Trophy,
  Egg,
  Soup,
  Salad,
  Candy,
  Check,
  Moon,
  Building2,
} from "lucide-react";
export const Features = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6">
              Powerful <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Designed for real life, not perfect conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Hostel Mode */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="p-8 rounded-3xl bg-card border border-sage-200 shadow-soft">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-sage-50 border border-sage-100 flex items-center gap-2">
                      <Egg className="w-4 h-4 text-sage-600" />
                      <span className="text-sm font-medium text-sage-600">No-cook breakfast ideas</span>
                    </div>
                    <div className="p-4 rounded-xl bg-lavender-50 border border-lavender-100 flex items-center gap-2">
                      <Soup className="w-4 h-4 text-lavender-500" />
                      <span className="text-sm font-medium text-lavender-500">Mess-friendly hacks</span>
                    </div>
                    <div className="p-4 rounded-xl bg-sage-50 border border-sage-100 flex items-center gap-2">
                      <Salad className="w-4 h-4 text-sage-600" />
                      <span className="text-sm font-medium text-sage-600">5-minute salad bowls</span>
                    </div>
                    <div className="p-4 rounded-xl bg-lavender-50 border border-lavender-100 flex items-center gap-2">
                      <Candy className="w-4 h-4 text-lavender-500" />
                      <span className="text-sm font-medium text-lavender-500">Healthier junk alternatives</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-600 text-sm font-medium mb-4">
                  <Home className="w-4 h-4" />
                  <span>Hostel Mode</span>
                </div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Real Constraints, Real Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A dedicated mode designed for students and anyone dealing with limited ingredients, 
                  minimal cooking access, or budget constraints.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> No-cook or low-cook meals
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> Mess-friendly hacks
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> Healthier alternatives to junk cravings
                  </li>
                </ul>
              </div>
            </div>

            {/* Ingredient-First Recipes */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm font-medium mb-4">
                  <ShoppingBasket className="w-4 h-4" />
                  <span>Ingredient-First Recipes</span>
                </div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  What Do You Already Have?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Before suggesting recipes, Aaharya asks what ingredients you already have. 
                  Using <strong>RecipeDB</strong>, we build recipes only from available ingredients.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> Save money
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> Avoid unnecessary shopping
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" /> Make faster decisions
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="p-8 rounded-3xl gradient-soft border border-sage-200">
                  <p className="text-center text-lg font-serif text-foreground mb-4">
                    "I have tomatoes, onions, and eggs..."
                  </p>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <p className="text-center text-lg font-serif text-primary mt-4">
                    "Here are 12 quick recipes you can make!"
                  </p>
                </div>
              </div>
            </div>

            {/* Flavor-Based Substitutions */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="p-8 rounded-3xl bg-card border border-sage-200 shadow-soft">
                  <h4 className="font-serif font-semibold text-foreground mb-4 text-center">
                    Smart Substitutions
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50">
                      <span className="text-muted-foreground">Processed cheese</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Paneer</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-lavender-50">
                      <span className="text-muted-foreground">Heavy cream</span>
                      <ArrowRight className="w-4 h-4 text-lavender-400" />
                      <span className="font-medium text-foreground">Curd</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50">
                      <span className="text-muted-foreground">Refined oil</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Cold-pressed oil</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-600 text-sm font-medium mb-4">
                  <Utensils className="w-4 h-4" />
                  <span>Flavor-Based Substitutions</span>
                </div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Same Taste, Better Nutrition
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Using <strong>FlavorDB</strong>, Aaharya preserves the taste you love while improving 
                  nutrition. Smart substitutions that don't sacrifice satisfaction.
                </p>
                <p className="text-primary font-medium italic mt-4">
                  Same taste satisfaction, better nourishment.
                </p>
              </div>
            </div>

            {/* Calorie Awareness */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm font-medium mb-4">
                  <Activity className="w-4 h-4" />
                  <span>Calorie Awareness</span>
                </div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Awareness, Not Obsession
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Every recipe includes approximate calorie estimates, portion guidance, and lighter 
                  alternatives if needed — without creating fear or guilt around food.
                </p>
                <p className="text-primary font-medium italic">
                  Calorie awareness, not calorie fear.
                </p>
              </div>
              <div className="flex-1">
                <div className="p-8 rounded-3xl gradient-soft border border-sage-200 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border-4 border-sage-200 mb-4">
                    <span className="text-2xl font-serif font-bold text-primary">~350</span>
                  </div>
                  <p className="text-muted-foreground">calories per serving</p>
                  <p className="text-sm text-sage-600 mt-2">
                    Lighter alternative available: 280 cal
                  </p>
                </div>
              </div>
            </div>

            {/* Gamification */}
            <div className="p-8 lg:p-12 rounded-3xl bg-card border border-sage-200 shadow-card">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm font-medium mb-4">
                  <Trophy className="w-4 h-4" />
                  <span>Gamification & Emotional Wins</span>
                </div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Celebrate Your Wins
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Encouragement, not pressure. Earn badges for your healthy choices and build positive habits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl gradient-soft border border-sage-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground">Smart Craving Conqueror</h4>
                </div>
                <div className="p-6 rounded-2xl gradient-soft border border-sage-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lavender-100 flex items-center justify-center">
                    <Moon className="w-8 h-8 text-lavender-400" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground">Cycle Sync Champion</h4>
                </div>
                <div className="p-6 rounded-2xl gradient-soft border border-sage-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-sage-600" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground">Hostel Health Hero</h4>
                </div>
              </div>

              <p className="text-center text-primary font-medium italic mt-8">
                Positive reinforcement. Habit building. Emotional wins without guilt.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link to="/why-aaharya">
                <Button variant="hero" size="lg" className="gap-2">
                  Why Choose Aaharya
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
