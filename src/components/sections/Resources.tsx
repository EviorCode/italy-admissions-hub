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
    <section id="resources" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Study in Italy Resources
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Everything you need to plan your education journey in Italy
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <a
              key={resource.title}
              href={resource.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-white rounded-xl border border-gray-300 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-sm text-primary font-medium pt-3 border-t border-gray-200">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
