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
    <section id="why-italy" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Why Study in Italy?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Discover why thousands of international students choose Italy for their higher education
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-white rounded-xl border border-gray-300 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
