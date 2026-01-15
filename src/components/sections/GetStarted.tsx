import { ArrowRight, CheckCircle2, Clock, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Free Profile Evaluation",
  },
  {
    icon: Clock,
    text: "Get Response Within 24 Hours",
  },
  {
    icon: Users,
    text: "500+ Students Placed in 2024",
  },
  {
    icon: Shield,
    text: "95% Visa Success Rate",
  },
];

export function GetStarted() {
  return (
    <section id="get-started" className="relative py-20 md:py-24 bg-gradient-to-br from-primary/5 via-white to-purple-50/30">
      <div className="section-container">
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 p-8 md:p-10">
              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Text Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    Ready to Start Your Italian Education Journey?
                  </h2>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    Book a free consultation with our admission experts. We'll evaluate your profile,
                    suggest the best universities for you, and create a personalized admission roadmap.
                  </p>

                  {/* Benefits List */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 animate-fade-in"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Right: Form or Visual */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Inquiry Form
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (with country code)"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        <option value="">Interested In...</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD Program</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-primary/90 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    No spam, ever. Your data is safe with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
