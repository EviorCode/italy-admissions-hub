import { Building2, Globe, Calendar } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "80+",
    label: "Italian Universities",
    accentColor: "border-blue-500",
  },
  {
    icon: Globe,
    value: "EN & IT",
    label: "Taught Programs",
    accentColor: "border-purple-500",
  },
  {
    icon: Calendar,
    value: "Daily",
    label: "Admissions Updated",
    accentColor: "border-orange-500",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="section-container">
        {/* Minimalist Stats Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group flex-1 w-full animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Clean Card with Left Border Accent */}
              <div className={`relative border-l-4 ${stat.accentColor} pl-6 py-2`}>
                {/* Icon - Small and Minimal */}
                <div className="mb-4 inline-flex opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <stat.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>

                {/* Value - Large Typography */}
                <div className="mb-2">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight">
                    {stat.value}
                  </h3>
                </div>

                {/* Label - Simple Typography */}
                <p className="text-sm md:text-base text-muted-foreground font-normal tracking-wide uppercase">
                  {stat.label}
                </p>

                {/* Subtle Hover Indicator */}
                <div className="absolute left-0 bottom-0 h-0 w-1 bg-foreground opacity-0 group-hover:h-full group-hover:opacity-10 transition-all duration-500 ease-out" />
              </div>

              {/* Vertical Divider (except last) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-border opacity-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
