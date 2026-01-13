import { ArrowRight, Building2, Globe, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/assets/hero-students.jpg";

const trustIndicators = [
  { icon: Building2, value: "80+", label: "Italian Universities" },
  { icon: Globe, value: "EN & IT", label: "Taught Programs" },
  { icon: CalendarCheck, value: "Daily", label: "Admissions Updated" },
];

export function HeroSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Recently Open Admissions in{" "}
              <span className="text-primary">Italian Universities</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Discover the latest bachelor's, master's, and PhD admissions across Italy.
              Updated daily with official deadlines and eligibility details for international and local students.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full px-8">
                View Recent Admissions
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              >
                Browse Universities
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8">
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Placeholder - Academic Scene */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroStudents}
                  alt="International students at Italian university campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">New Admissions</p>
                    <p className="text-xs text-muted-foreground">12 opened this week</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
