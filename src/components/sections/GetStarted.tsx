import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Users, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendConsultationEmail, type ConsultationFormData } from "@/services/emailService";

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
];

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  interestedIn?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function GetStarted() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (basic - allows international formats)
    const phoneRegex = /^[+]?[\d\s\-()]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Interest validation
    if (!formData.interestedIn) {
      newErrors.interestedIn = "Please select your interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await sendConsultationEmail(formData);

      if (response.success) {
        setStatus("success");
        setMessage(response.message);
        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interestedIn: "",
        });
      } else {
        setStatus("error");
        setMessage(response.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Get input class based on error state
  const getInputClass = (fieldName: keyof FormErrors) => {
    const baseClass =
      "w-full px-4 py-3 rounded-lg border bg-white text-sm focus:outline-none focus:ring-1 transition-colors";
    const errorClass = "border-red-400 focus:border-red-500 focus:ring-red-500";
    const normalClass = "border-gray-300 focus:border-primary focus:ring-primary";

    return `${baseClass} ${errors[fieldName] ? errorClass : normalClass}`;
  };

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
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 h-12 px-8 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Right: Form */}
                <div id="inquiry-form" className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Inquiry Form
                  </h3>

                  {/* Success Message */}
                  {status === "success" && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800">{message}</p>
                        <p className="text-xs text-green-600 mt-1">Check your email for confirmation.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-red-800">{message}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className={getInputClass("fullName")}
                        disabled={status === "submitting"}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className={getInputClass("email")}
                        disabled={status === "submitting"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (with country code)"
                        className={getInputClass("phone")}
                        disabled={status === "submitting"}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className={`${getInputClass("interestedIn")} ${
                          !formData.interestedIn ? "text-muted-foreground" : "text-foreground"
                        }`}
                        disabled={status === "submitting"}
                      >
                        <option value="">Interested In...</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD Program</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                      {errors.interestedIn && (
                        <p className="mt-1 text-xs text-red-500">{errors.interestedIn}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-primary text-white hover:bg-primary/90 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Free Consultation
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
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
