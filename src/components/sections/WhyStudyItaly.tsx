import { Award, Euro, Globe2, Landmark } from "lucide-react";

const reasons = [
  {
    icon: Landmark,
    title: "World-Renowned Universities",
    description:
      "Home to some of the oldest and most prestigious universities in Europe, with centuries of academic excellence.",
  },
  {
    icon: Euro,
    title: "Affordable Tuition & Scholarships",
    description:
      "Significantly lower tuition fees compared to the US and UK, with generous scholarships available for international students.",
  },
  {
    icon: Award,
    title: "Globally Recognized Degrees",
    description:
      "Italian degrees are recognized worldwide and highly valued by employers across industries.",
  },
  {
    icon: Globe2,
    title: "Rich Cultural Experience",
    description:
      "Immerse yourself in art, history, cuisine, and lifestyle while studying in one of the world's most beautiful countries.",
  },
];

export function WhyStudyItaly() {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Study in Italy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of international students choose Italy for their higher education.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-secondary/30 rounded-xl p-6 text-center card-hover border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
