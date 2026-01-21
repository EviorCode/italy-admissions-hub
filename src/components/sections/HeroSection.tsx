import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { GraduationCap, Users, Award, Globe } from "lucide-react";

const carouselSlides = [
  {
    id: 1,
    title: "Your Dream of Studying in Italy Starts Here",
    subtitle: "Expert Admission Guidance",
    description: "We help you secure admission in top Italian universities with personalized support at every step",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    icons: [
      { Icon: GraduationCap, color: "bg-pink-100 text-pink-500" },
      { Icon: Users, color: "bg-purple-100 text-purple-500" },
      { Icon: Award, color: "bg-green-100 text-green-500" },
      { Icon: Globe, color: "bg-cyan-100 text-cyan-500" },
    ],
  },
  {
    id: 2,
    title: "500+ Students Successfully Placed",
    subtitle: "Proven Track Record",
    description: "Join hundreds of students who achieved their dream of studying at prestigious Italian universities",
    image: "https://images.unsplash.com/photo-1561525985-654e6a2fa04a?w=1200&h=600&fit=crop",
    icons: [],
  },
  {
    id: 3,
    title: "Never Miss a Deadline",
    subtitle: "Stay Updated with Real-Time Alerts",
    description: "Get notified when new admissions open at your dream universities",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
    icons: [],
  },
];

export function HeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[650px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
                </div>

                {/* Content */}
                <div className="section-container relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
                    {/* Text Content */}
                    <div className="text-white animate-slide-up max-w-2xl">
                      {slide.icons.length > 0 && (
                        <div className="flex gap-4 mb-8">
                          {slide.icons.map(({ Icon, color }, idx) => (
                            <div
                              key={idx}
                              className={`w-16 h-16 rounded-full ${color} flex items-center justify-center shadow-lg animate-fade-in`}
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              <Icon className="w-8 h-8" />
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-lg md:text-xl text-gray-200 mb-4 font-medium">
                        {slide.subtitle}
                      </p>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light">
                        {slide.description}
                      </p>
                    </div>

                    {/* Right Side - Image/Visual */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative">
                        {slide.id === 1 ? (
                          <div className="relative w-full max-w-md">
                            <img
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop"
                              alt="Student studying"
                              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                            />
                          </div>
                        ) : slide.id === 2 ? (
                          <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-6xl font-bold text-white mb-2">500+</p>
                              <p className="text-xl text-gray-200">Students Placed</p>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full max-w-md">
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 shadow-2xl">
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                  </svg>
                                </div>
                                <div className="text-white">
                                  <p className="text-3xl font-bold">Daily</p>
                                  <p className="text-lg text-gray-200">Notifications</p>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white/20 rounded-lg p-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
                                  <p className="text-white text-sm font-semibold">New: Politecnico di Milano</p>
                                  <p className="text-gray-200 text-xs">Master's admission opened</p>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
                                  <p className="text-white text-sm font-semibold">Deadline: University of Bologna</p>
                                  <p className="text-gray-200 text-xs">Application closes in 5 days</p>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
                                  <p className="text-white text-sm font-semibold">Alert: Sapienza University</p>
                                  <p className="text-gray-200 text-xs">PhD program now accepting</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-4 lg:left-8 bg-white/90 hover:bg-white text-gray-800 border-none shadow-lg" />
          <CarouselNext className="right-4 lg:right-8 bg-white/90 hover:bg-white text-gray-800 border-none shadow-lg" />
        </div>
      </Carousel>
    </section>
  );
}
