import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/pageLayout";
import { Button } from "../components/ui/button";
import { ArrowRight, Heart, Sparkles, Leaf } from "lucide-react";
import heroImage from "../assets/hero_illus.jpg";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16 lg:py-24">

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Women-centric nutrition companion</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                <span className="text-primary">Aaharya</span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-sage-600 mb-6">
                Food That Nourishes Every Phase of Her Life
              </p>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Know what you eat with women-centric, life-stage-aware, craving-friendly recipes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/onboarding">
                  <Button variant="hero" size="xl" className="gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="soft" size="xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Aaharya - Women's nutrition companion"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-elevated"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};