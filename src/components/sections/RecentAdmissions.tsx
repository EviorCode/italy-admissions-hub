import { ArrowRight, Calendar, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Admission {
  id: number;
  university: string;
  universityLogo: string;
  program: string;
  degreeLevel: string;
  language: string;
  openedDate: string;
  deadline: string;
  isNew: boolean;
  deadlineSoon: boolean;
}

const admissions: Admission[] = [
  {
    id: 1,
    university: "Politecnico di Milano",
    universityLogo: "🏛️",
    program: "MSc Computer Science & Engineering",
    degreeLevel: "Master's",
    language: "English",
    openedDate: "Opened 2 days ago",
    deadline: "March 15, 2026",
    isNew: true,
    deadlineSoon: false,
  },
  {
    id: 2,
    university: "University of Bologna",
    universityLogo: "🎓",
    program: "BA Economics and Finance",
    degreeLevel: "Bachelor's",
    language: "English",
    openedDate: "Opened 5 days ago",
    deadline: "February 28, 2026",
    isNew: true,
    deadlineSoon: true,
  },
  {
    id: 3,
    university: "Sapienza University of Rome",
    universityLogo: "🏫",
    program: "PhD Data Science",
    degreeLevel: "PhD",
    language: "English",
    openedDate: "Opened 1 week ago",
    deadline: "April 10, 2026",
    isNew: false,
    deadlineSoon: false,
  },
  {
    id: 4,
    university: "Bocconi University",
    universityLogo: "📚",
    program: "MSc International Management",
    degreeLevel: "Master's",
    language: "English",
    openedDate: "Opened 3 days ago",
    deadline: "March 1, 2026",
    isNew: true,
    deadlineSoon: true,
  },
  {
    id: 5,
    university: "University of Padua",
    universityLogo: "🏛️",
    program: "BSc Biotechnology",
    degreeLevel: "Bachelor's",
    language: "Italian",
    openedDate: "Opened 4 days ago",
    deadline: "March 20, 2026",
    isNew: true,
    deadlineSoon: false,
  },
  {
    id: 6,
    university: "University of Milan",
    universityLogo: "🎓",
    program: "MSc Artificial Intelligence",
    degreeLevel: "Master's",
    language: "English",
    openedDate: "Opened 6 days ago",
    deadline: "March 30, 2026",
    isNew: false,
    deadlineSoon: false,
  },
];

function AdmissionCard({ admission }: { admission: Admission }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 card-hover shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
            {admission.universityLogo}
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">{admission.university}</h4>
            <p className="text-xs text-muted-foreground">{admission.openedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {admission.isNew && (
            <Badge className="bg-accent text-accent-foreground text-xs">New</Badge>
          )}
          {admission.deadlineSoon && (
            <Badge variant="destructive" className="text-xs">Deadline Soon</Badge>
          )}
        </div>
      </div>

      {/* Program Info */}
      <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{admission.program}</h3>

      {/* Details */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {admission.degreeLevel}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Globe className="w-3.5 h-3.5" />
          {admission.language}
        </div>
      </div>

      {/* Deadline */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 p-3 bg-secondary/50 rounded-lg">
        <Calendar className="w-4 h-4 text-primary" />
        <span>Deadline: <span className="font-medium text-foreground">{admission.deadline}</span></span>
      </div>

      {/* CTA */}
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        View Details
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

export function RecentAdmissions() {
  return (
    <section id="admissions" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recently Open Admissions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The latest admission announcements from Italian universities, sorted by opening date.
          </p>
        </div>

        {/* Admissions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {admissions.map((admission) => (
            <AdmissionCard key={admission.id} admission={admission} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full px-8">
            View all open admissions
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
