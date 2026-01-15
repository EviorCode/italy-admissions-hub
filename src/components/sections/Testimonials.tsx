import { Quote, MapPin, GraduationCap } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  university: string;
  program: string;
  image: string;
  quote: string;
  year: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "India",
    university: "Politecnico di Milano",
    program: "MSc Computer Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "The team guided me through every step - from choosing the right program to visa approval. I couldn't have done it without their support!",
    year: "2024",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    country: "Egypt",
    university: "University of Bologna",
    program: "BA Economics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "I was confused about Italian university applications. Their expertise made the process smooth and stress-free. Highly recommended!",
    year: "2024",
  },
  {
    id: 3,
    name: "Maria Santos",
    country: "Brazil",
    university: "Sapienza University",
    program: "MSc Architecture",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "From scholarship guidance to pre-departure support, they were with me at every step. Now I'm living my dream in Rome!",
    year: "2023",
  },
  {
    id: 4,
    name: "John Okonkwo",
    country: "Nigeria",
    university: "Bocconi University",
    program: "MSc Finance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "The visa process seemed daunting, but their team prepared me perfectly for the interview. Got approved on first attempt!",
    year: "2024",
  },
  {
    id: 5,
    name: "Li Wei",
    country: "China",
    university: "University of Padua",
    program: "PhD Biotechnology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "Their knowledge of Italian universities helped me find the perfect PhD program with full scholarship. Forever grateful!",
    year: "2023",
  },
  {
    id: 6,
    name: "Sofia Rodriguez",
    country: "Colombia",
    university: "University of Milan",
    program: "BA Fashion Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    quote: "I thought studying in Italy was just a dream. They made it a reality with their personalized guidance and support.",
    year: "2024",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="bg-white rounded-xl border border-gray-300 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
        {/* Quote Icon & Content */}
        <div className="p-6">
          {/* Quote Icon */}
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <Quote className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
          </div>

          {/* Quote Text */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
            "{testimonial.quote}"
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-4">
            {/* Profile */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" strokeWidth={2} />
                  <span>{testimonial.country}</span>
                </div>
              </div>
            </div>

            {/* University & Program */}
            <div className="flex items-center gap-2 text-xs">
              <GraduationCap className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
              <span className="text-foreground font-medium">{testimonial.university}</span>
              <span className="text-muted-foreground">• {testimonial.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Success Stories
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Hear from students who achieved their dream of studying in Italy with our help
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
