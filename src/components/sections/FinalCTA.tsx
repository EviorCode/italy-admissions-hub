import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
      <div className="section-container text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
            <Bell className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Never Miss an Admission Deadline
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Get instant notifications when new admissions open at your preferred universities.
            Stay ahead with deadline reminders and application tips.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full px-10 shadow-lg"
          >
            <Bell className="w-5 h-5" />
            Get Admission Alerts
          </Button>
        </div>
      </div>
    </section>
  );
}
