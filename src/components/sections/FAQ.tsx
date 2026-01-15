import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are the requirements for studying in Italy?",
    answer: "Requirements vary by program and university, but generally you need: a high school diploma (for Bachelor's) or Bachelor's degree (for Master's), proof of English/Italian proficiency, academic transcripts, statement of purpose, and valid passport. We help you understand and prepare all requirements based on your target program.",
  },
  {
    question: "How much does it cost to study in Italy?",
    answer: "Italy offers some of the most affordable education in Europe. Public university tuition ranges from €900 to €4,000 per year. Many scholarships and fee waivers are available based on merit and financial need. Living costs average €700-1,200/month depending on the city.",
  },
  {
    question: "Do I need to know Italian to study in Italy?",
    answer: "Not necessarily! Over 500 degree programs are taught entirely in English across Italian universities. However, knowing basic Italian can enhance your daily life experience. Some programs may require Italian proficiency, which we'll clarify during your consultation.",
  },
  {
    question: "What is your success rate for visa approvals?",
    answer: "We maintain a 95% visa success rate. Our team provides comprehensive visa documentation support, interview preparation, and guidance throughout the embassy process. We've helped over 500 students successfully obtain their Italian student visas.",
  },
  {
    question: "How long does the entire admission process take?",
    answer: "The typical timeline is 3-6 months from consultation to university admission, depending on the intake and university deadlines. We recommend starting at least 6-8 months before your intended start date to have comfortable preparation time.",
  },
  {
    question: "What if I don't get admitted to my preferred university?",
    answer: "We always recommend applying to 3-5 universities to maximize your chances. Our team helps you identify backup options that match your profile. In the rare case of rejection, we guide you on next steps, including reapplication or alternative programs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Everything you need to know about studying in Italy with our support
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start gap-4 text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4 h-4 text-primary" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pl-18">
                    <p className="text-sm text-muted-foreground leading-relaxed ml-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
