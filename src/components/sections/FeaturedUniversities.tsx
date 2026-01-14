import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const universities = [
  {
    name: "Politecnico di Milano",
    city: "Milan",
    initial: "P",
    programs: 142,
    students: "45K+",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=300&fit=crop",
    ranking: "Top 5 in Italy",
  },
  {
    name: "University of Bologna",
    city: "Bologna",
    initial: "U",
    programs: 215,
    students: "85K+",
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&h=300&fit=crop",
    ranking: "Oldest in Europe",
  },
  {
    name: "Sapienza University of Rome",
    city: "Rome",
    initial: "S",
    programs: 289,
    students: "115K+",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&h=300&fit=crop",
    ranking: "Top 3 in Italy",
  },
  {
    name: "Bocconi University",
    city: "Milan",
    initial: "B",
    programs: 68,
    students: "14K+",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=300&fit=crop",
    ranking: "Top Business School",
  },
  {
    name: "University of Padua",
    city: "Padua",
    initial: "U",
    programs: 178,
    students: "60K+",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=300&fit=crop",
    ranking: "Historic Excellence",
  },
  {
    name: "University of Milan",
    city: "Milan",
    initial: "U",
    programs: 195,
    students: "64K+",
    image: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=600&h=300&fit=crop",
    ranking: "Research Leader",
  },
];

export function FeaturedUniversities() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Featured Universities
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Explore programs from Italy's top-ranked universities
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {universities.map((uni, index) => (
            <div
              key={uni.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-white rounded-xl border border-gray-300 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                {/* University Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Logo Badge Overlay */}
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{uni.initial}</span>
                  </div>
                  {/* Ranking Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground shadow-md">
                    {uni.ranking}
                  </div>
                </div>

                {/* University Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                    <span>{uni.city}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-primary" strokeWidth={2} />
                      <span className="text-sm font-medium text-foreground">{uni.programs} Programs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" strokeWidth={2} />
                      <span className="text-sm font-medium text-foreground">{uni.students}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-foreground hover:bg-primary hover:text-white hover:border-primary rounded-lg px-8 font-medium shadow-sm hover:shadow-md transition-all"
          >
            View All Universities
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
