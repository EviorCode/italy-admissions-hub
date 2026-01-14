import { ArrowRight, Globe, Calendar, MapPin, Clock, Euro } from "lucide-react";

interface Admission {
  id: number;
  university: string;
  universityImage: string;
  program: string;
  degreeLevel: string;
  language: string;
  deadline: string;
  isNew: boolean;
  deadlineSoon: boolean;
  city: string;
  duration: string;
  tuitionFee: string;
  intake: string;
}

const admissions: Admission[] = [
  {
    id: 1,
    university: "Politecnico di Milano",
    universityImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop",
    program: "MSc Computer Science & Engineering",
    degreeLevel: "Master's",
    language: "English",
    deadline: "Mar 15, 2026",
    isNew: true,
    deadlineSoon: false,
    city: "Milan",
    duration: "2 Years",
    tuitionFee: "€3,900/year",
    intake: "Fall 2026",
  },
  {
    id: 2,
    university: "University of Bologna",
    universityImage: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&h=400&fit=crop",
    program: "BA Economics and Finance",
    degreeLevel: "Bachelor's",
    language: "English",
    deadline: "Feb 28, 2026",
    isNew: true,
    deadlineSoon: true,
    city: "Bologna",
    duration: "3 Years",
    tuitionFee: "€2,800/year",
    intake: "Fall 2026",
  },
  {
    id: 3,
    university: "Sapienza University of Rome",
    universityImage: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&h=400&fit=crop",
    program: "PhD Data Science",
    degreeLevel: "PhD",
    language: "English",
    deadline: "Apr 10, 2026",
    isNew: false,
    deadlineSoon: false,
    city: "Rome",
    duration: "3-4 Years",
    tuitionFee: "Free + Scholarship",
    intake: "Fall 2026",
  },
  {
    id: 4,
    university: "Bocconi University",
    universityImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop",
    program: "MSc International Management",
    degreeLevel: "Master's",
    language: "English",
    deadline: "Mar 1, 2026",
    isNew: true,
    deadlineSoon: true,
    city: "Milan",
    duration: "2 Years",
    tuitionFee: "€14,000/year",
    intake: "Fall 2026",
  },
  {
    id: 5,
    university: "University of Padua",
    universityImage: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=400&fit=crop",
    program: "BSc Biotechnology",
    degreeLevel: "Bachelor's",
    language: "Italian",
    deadline: "Mar 20, 2026",
    isNew: true,
    deadlineSoon: false,
    city: "Padua",
    duration: "3 Years",
    tuitionFee: "€2,500/year",
    intake: "Fall 2026",
  },
  {
    id: 6,
    university: "University of Milan",
    universityImage: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=800&h=400&fit=crop",
    program: "MSc Artificial Intelligence",
    degreeLevel: "Master's",
    language: "English",
    deadline: "Mar 30, 2026",
    isNew: false,
    deadlineSoon: false,
    city: "Milan",
    duration: "2 Years",
    tuitionFee: "€3,200/year",
    intake: "Fall 2026",
  },
];

function AdmissionCard({ admission, index }: { admission: Admission; index: number }) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-300 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* University Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={admission.universityImage}
          alt={admission.university}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Status Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {admission.isNew && (
            <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-md shadow-lg">
              NEW
            </span>
          )}
          {admission.deadlineSoon && (
            <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md shadow-lg">
              CLOSING SOON
            </span>
          )}
        </div>

        {/* University Logo/Name Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-primary">
              {admission.university.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">
                {admission.university}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Program Title */}
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {admission.program}
        </h3>

        {/* Primary Meta Information */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-medium">{admission.degreeLevel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Globe className="w-3.5 h-3.5" strokeWidth={2} />
            <span>{admission.language}</span>
          </div>
        </div>

        {/* Detailed Information Grid */}
        <div className="space-y-3 mb-4">
          {/* City & Duration */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{admission.city}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{admission.duration}</span>
            </div>
          </div>

          {/* Tuition Fee */}
          <div className="flex items-center gap-2 text-sm">
            <Euro className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
            <span className="font-semibold text-foreground">{admission.tuitionFee}</span>
          </div>
        </div>

        {/* Deadline & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Deadline</p>
              <p className="text-sm font-semibold text-foreground">{admission.deadline}</p>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-primary flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function RecentAdmissions() {
  return (
    <section id="admissions" className="py-20 md:py-24 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Recently Open Admissions
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Latest admission announcements from Italian universities
          </p>
        </div>

        {/* Admissions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {admissions.map((admission, index) => (
            <AdmissionCard key={admission.id} admission={admission} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors font-medium rounded-lg shadow-md hover:shadow-lg">
            View All Admissions
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
