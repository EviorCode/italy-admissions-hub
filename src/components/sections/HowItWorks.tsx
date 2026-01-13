import { Search, GitCompare, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover Verified Admissions",
    description:
      "Browse through our curated list of recently opened admissions from verified Italian universities.",
  },
  {
    icon: GitCompare,
    step: "02",
    title: "Compare Programs & Deadlines",
    description:
      "Filter and compare programs based on your preferences, field of study, and application deadlines.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Apply with Confidence",
    description:
      "Access official application links and requirements to submit your applications directly to universities.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How This Platform Helps Students
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A simple, trusted process to find and apply to Italian university programs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-primary-foreground/20" />
              )}

              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
