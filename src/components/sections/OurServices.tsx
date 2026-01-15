import { GraduationCap, FileCheck, Plane, Users, BookOpen, HeadphonesIcon } from "lucide-react";

interface Service {
  id: number;
  icon: typeof GraduationCap;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "University Selection",
    description: "We help you find the perfect Italian university and program based on your academic background, career goals, and budget.",
    features: ["Profile Assessment", "University Matching", "Program Shortlisting"],
  },
  {
    id: 2,
    icon: FileCheck,
    title: "Application Support",
    description: "End-to-end assistance with your university applications, from document preparation to submission.",
    features: ["Document Review", "SOP & LOR Guidance", "Application Submission"],
  },
  {
    id: 3,
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete guidance for Italian student visa application with a 95% success rate.",
    features: ["Visa Documentation", "Interview Preparation", "Embassy Appointment"],
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Pre-Departure Support",
    description: "Everything you need to know before flying to Italy - accommodation, travel, and settling in.",
    features: ["Accommodation Help", "Travel Guidance", "City Orientation"],
  },
  {
    id: 5,
    icon: Users,
    title: "Scholarship Guidance",
    description: "We help you identify and apply for scholarships to reduce your education costs significantly.",
    features: ["Scholarship Search", "Application Support", "Financial Planning"],
  },
  {
    id: 6,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Our support doesn't end after admission. We're here throughout your journey in Italy.",
    features: ["Post-Arrival Help", "Academic Guidance", "Community Access"],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-300 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="p-6">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
            <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features List */}
        <div className="pt-4 border-t border-gray-200">
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            How We Help You Succeed
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Complete end-to-end support for your Italian university admission journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
