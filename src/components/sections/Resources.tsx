import { ArrowRight, FileText, Plane, Wallet, Home } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "How to Apply to Italian Universities",
    description: "Step-by-step guide to the application process",
    href: "#",
  },
  {
    icon: Plane,
    title: "Italy Student Visa Process",
    description: "Visa requirements and application tips",
    href: "#",
  },
  {
    icon: Wallet,
    title: "Scholarships & Funding",
    description: "Financial aid options for international students",
    href: "#",
  },
  {
    icon: Home,
    title: "Cost of Living in Italy",
    description: "Budget guide for students in Italian cities",
    href: "#",
  },
];

export function Resources() {
  return (
    <section id="resources" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study in Italy Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to plan your education journey in Italy.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="group bg-secondary/30 rounded-xl p-6 border border-border card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              <div className="flex items-center text-sm text-primary font-medium">
                Read more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
