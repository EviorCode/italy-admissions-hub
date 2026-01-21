import { Award, Euro, Globe2, Landmark } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const reasons = [
  {
    icon: Landmark,
    title: "World-Renowned Universities",
    description:
      "Home to some of the oldest and most prestigious universities in Europe, with centuries of academic excellence.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop",
  },
  {
    icon: Euro,
    title: "Affordable Education",
    description:
      "Significantly lower tuition fees compared to the US and UK, with generous scholarships available for international students.",
    image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&h=600&fit=crop",
  },
  {
    icon: Award,
    title: "Globally Recognized Degrees",
    description:
      "Italian degrees are recognized worldwide and highly valued by employers across industries.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
  },
  {
    icon: Globe2,
    title: "Rich Cultural Experience",
    description:
      "Immerse yourself in art, history, cuisine, and lifestyle while studying in one of the world's most beautiful countries.",
    image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&h=600&fit=crop",
  },
];

export function WhyStudyItaly() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="why-italy" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Why Study in Italy?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of international students choose Italy for their higher education
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {reasons.map((reason, index) => (
                <CarouselItem key={reason.title} className="pl-4 md:basis-full">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-300 shadow-sm">
                    <div className="grid md:grid-cols-2 items-center">
                      {/* Image Side */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={reason.image}
                          alt={reason.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                      </div>

                      {/* Content Side */}
                      <div className="p-8 md:p-10">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6">
                          <reason.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                          {reason.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 mt-8">
                          {reasons.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                i === index
                                  ? "w-8 bg-primary"
                                  : "w-2 bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-50 text-gray-700 shadow-md" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-50 text-gray-700 shadow-md" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <p className="text-center text-xs text-muted-foreground mt-6 md:hidden">
            Swipe to explore more reasons
          </p>
        </div>
      </div>
    </section>
  );
}
