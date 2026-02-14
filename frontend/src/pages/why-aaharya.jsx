import { PageLayout } from "../components/layout/PageLayout ";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Heart, Database, Brain, Users, Sparkles, Check } from "lucide-react";

export const WhyAaharya = () => {
  return (
    <div>
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Why <span className="text-primary">Aaharya</span> Stands Out
          </h1>
          <p className="text-xl text-muted-foreground">
            More than just recipes — a companion that truly understands you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="p-8 rounded-2xl border shadow">
              <Heart className="w-10 h-10 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-3">
                Deeply Women-Centric
              </h3>
              <p>
                Every feature is designed around the unique rhythms and realities
                of women's lives.
              </p>
            </div>

            <div className="p-8 rounded-2xl border shadow">
              <Database className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">
                Computational Gastronomy
              </h3>
              <p>
                Powered by RecipeDB and FlavorDB for intelligent, science-backed suggestions.
              </p>
            </div>

          </div>

          <div className="text-center">
            <Link to="/onboarding">
              <Button className="gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};