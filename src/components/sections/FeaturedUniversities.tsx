import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const universities = [
  {
    name: "Politecnico di Milano",
    city: "Milan",
    logo: "🏛️",
    programs: 142,
  },
  {
    name: "University of Bologna",
    city: "Bologna",
    logo: "🎓",
    programs: 215,
  },
  {
    name: "Sapienza University of Rome",
    city: "Rome",
    logo: "🏫",
    programs: 289,
  },
  {
    name: "Bocconi University",
    city: "Milan",
    logo: "📚",
    programs: 68,
  },
  {
    name: "University of Padua",
    city: "Padua",
    logo: "🏛️",
    programs: 178,
  },
  {
    name: "University of Milan",
    city: "Milan",
    logo: "🎓",
    programs: 195,
  },
];

export function FeaturedUniversities() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore programs from Italy's top-ranked universities.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="bg-card rounded-xl border border-border p-6 card-hover flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
                {uni.logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1 truncate">{uni.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {uni.city}
                </div>
                <p className="text-xs text-primary font-medium">{uni.programs} programs</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            View all universities
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
