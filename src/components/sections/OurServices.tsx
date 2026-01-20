"use client";
import { useState, useEffect } from "react";
import { GraduationCap, FileCheck, Plane, Users, BookOpen, HeadphonesIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get visible cards (current + 2 next)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push({ ...services[index], position: i });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();
  const currentService = services[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            How We Help You Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete end-to-end support for your Italian university admission journey
          </p>
        </div>

        {/* Desktop: Stacked Card Carousel */}
        <div className="hidden lg:block relative">
          <div className="relative max-w-5xl mx-auto px-20">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Stacked Cards */}
            <div className="relative h-[420px]">
              {visibleCards.map((service, idx) => {
                const Icon = service.icon;
                const zIndex = 3 - idx;
                const scale = 1 - idx * 0.05;
                const yOffset = idx * 16;
                const opacity = idx === 0 ? 1 : 0.5;

                return (
                  <motion.div
                    key={service.id}
                    className="absolute inset-0 bg-white rounded-2xl border border-gray-300 shadow-xl"
                    style={{
                      zIndex,
                    }}
                    initial={{ scale, y: yOffset, opacity }}
                    animate={{ scale, y: yOffset, opacity }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="p-10 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="pt-6 border-t border-gray-200">
                        <ul className="grid grid-cols-3 gap-4">
                          {service.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                              <span className="leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Single Card Carousel */}
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto px-12">
            {/* Navigation */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Card */}
            <div className="relative h-[460px] sm:h-[420px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl border border-gray-300 shadow-xl p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                        <currentService.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {currentService.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                      {currentService.description}
                    </p>

                    {/* Features */}
                    <div className="pt-4 border-t border-gray-200">
                      <ul className="space-y-2">
                        {currentService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}