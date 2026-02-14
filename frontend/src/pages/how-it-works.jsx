import { PageLayout } from "../components/layout/pageLayout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  User,
  Calendar,
  Brain,
  Heart,
  Briefcase,
  Moon,
  Baby,
  Clock,
  Zap,
  BookOpen,
  Salad,
  CircleDot,
  Sprout,
  Sun,
  Leaf,
  Smile,
  Frown,
  Angry,
  BatteryLow,
  HeartPulse,
  Flame,
  Pizza,
  Candy,
  Grip,
  Soup,
  Apple
} from "lucide-react";

const moods = [
  { label: "Calm", icon: Smile },
  { label: "Low", icon: Frown },
  { label: "Stressed", icon: Angry },
  { label: "Tired", icon: BatteryLow },
  { label: "Happy", icon: HeartPulse },
  { label: "Emotional", icon: Heart }
];

const cravings = [
  { label: "Spicy", icon: Flame },
  { label: "Cheesy", icon: Pizza },
  { label: "Sweet", icon: Candy },
  { label: "Crunchy", icon: Grip },
  { label: "Warm", icon: Soup },
  { label: "Fresh", icon: Apple }
];

export const HowItWorks = () => {
  return (
    <div>{/* Hero */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6">
              How It <span className="text-primary">Understands</span> You
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Smart profiling that adapts to your life, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Profiling */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-600 text-sm font-medium mb-4">
                <User className="w-4 h-4" />
                Smart Profiling
              </div>
              <h2 className="text-3xl font-serif font-semibold mb-4">
                A Friendly Onboarding Flow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us a little about yourself, and we'll personalize everything just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Life Situation */}
              <div className="p-6 rounded-2xl bg-card border border-sage-200 shadow-soft text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-lavender-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-lavender-500" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Life Situation</h3>
                <p className="text-sm text-muted-foreground">
                  Student, working professional, married, or managing childcare
                </p>
              </div>

              {/* Life Stage */}
              <div className="p-6 rounded-2xl bg-card border border-sage-200 shadow-soft text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-sage-100 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Life Stage</h3>
                <p className="text-sm text-muted-foreground">
                  Menarche, regular menstruation, or menopause
                </p>
              </div>

              {/* Pregnancy */}
              <div className="p-6 rounded-2xl bg-card border border-sage-200 shadow-soft text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-lavender-100 flex items-center justify-center">
                  <Baby className="w-6 h-6 text-lavender-500" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Pregnancy Phase</h3>
                <p className="text-sm text-muted-foreground">
                  Pre, during, or post-pregnancy (optional)
                </p>
              </div>
            </div>

            {/* Adjustments */}
            <div className="p-8 rounded-2xl gradient-soft border border-sage-200 mb-16">
              <h3 className="text-xl font-serif font-semibold mb-6 text-center">
                This helps Aaharya adjust
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Clock className="w-6 h-6 mx-auto mb-2 text-sage-600" />
                  <p className="text-sm text-muted-foreground">Cooking time expectations</p>
                </div>
                <div>
                  <Zap className="w-6 h-6 mx-auto mb-2 text-sage-600" />
                  <p className="text-sm text-muted-foreground">Energy needs</p>
                </div>
                <div>
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-sage-600" />
                  <p className="text-sm text-muted-foreground">Recipe complexity</p>
                </div>
                <div>
                  <Salad className="w-6 h-6 mx-auto mb-2 text-sage-600" />
                  <p className="text-sm text-muted-foreground">Nutritional focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Period Intelligence */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                Period Intelligence
              </div>
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Zero-Effort Cycle Sync
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enter your last period date once. Aaharya estimates all phases automatically.
              </p>
              <p className="text-primary font-medium italic">
                No daily tracking. No mental load.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Phase icon={CircleDot} label="Menstrual" desc="Iron-rich comfort foods" />
              <Phase icon={Sprout} label="Follicular" desc="Light, energizing meals" />
              <Phase icon={Sun} label="Ovulation" desc="Fiber & antioxidants" />
              <Phase icon={Leaf} label="Luteal" desc="Magnesium & comfort" />
            </div>
          </div>
        </div>
      </section>

      {/* Mood & Cravings */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100 rounded-full text-lavender-500 text-sm mb-4">
              <Brain className="w-4 h-4" />
              Moodometer & Crave Engine
            </div>
            <h2 className="text-3xl font-serif font-semibold">
              The Heart of Aaharya
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card title="Select Your Mood" icon={Heart} className="w-5 h-5 text-lavender-400">
              {moods.map(({ label, icon: Icon }) => (
                <Chip key={label} icon={Icon} label={label} />
              ))}
            </Card>

            <Card title="What Are You Craving?" icon={Salad} className="w-5 h-5 text-lavender-400">
              {cravings.map(({ label, icon: Icon }) => (
                <Chip key={label} icon={Icon} label={label} />
              ))}
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="hero" size="lg" className="gap-2">
                Explore All Features
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section></div>
  );
};

const Phase = ({ icon: Icon, label, desc }) => (
  <div className="p-4 bg-card rounded-xl border text-center">
    <Icon className="w-6 h-6 mx-auto mb-2" />
    <p className="text-sm font-medium">{label}</p>
    <p className="text-xs text-muted-foreground">{desc}</p>
  </div>
);

const Card = ({ title, icon: Icon, children, className }) => (
  <div className="p-8 rounded-2xl bg-card border shadow-soft">
    <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
      {Icon && <Icon className={className || "w-5 h-5"} />}
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const Chip = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm">
    <Icon className="w-4 h-4" />
    {label}
  </span>
);