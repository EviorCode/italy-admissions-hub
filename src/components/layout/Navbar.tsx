import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Building2,
  MapPin,
  Star,
  BookOpen,
  FileText,
  Users,
  Globe,
  Award
} from "lucide-react";

const megaMenuData = {
  universities: {
    byType: [
      { name: "Public Universities", href: "#", icon: Building2, desc: "State-funded institutions" },
      { name: "Private Universities", href: "#", icon: Award, desc: "Premium private education" },
      { name: "Medical Universities", href: "#", icon: FileText, desc: "Healthcare programs" },
      { name: "Arts & Design", href: "#", icon: Star, desc: "Creative academies" },
    ],
    byCity: [
      { name: "Milan", href: "#", programs: "142+" },
      { name: "Rome", href: "#", programs: "289+" },
      { name: "Bologna", href: "#", programs: "215+" },
      { name: "Turin", href: "#", programs: "98+" },
      { name: "Florence", href: "#", programs: "156+" },
      { name: "Naples", href: "#", programs: "127+" },
    ],
    featured: [
      {
        name: "Politecnico di Milano",
        href: "#",
        ranking: "Top 5 in Italy",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop"
      },
      {
        name: "University of Bologna",
        href: "#",
        ranking: "Oldest in Europe",
        image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=300&h=200&fit=crop"
      },
    ],
  },
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar - Premium Design */}
      <div className="bg-gradient-to-r from-accent to-accent/90 border-b border-accent/20">
        <div className="section-container">
          <div className="flex items-center justify-between py-2.5 text-sm text-white">
            <div className="flex items-center gap-6">
              <a href="tel:+390123456789" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="hidden sm:inline font-medium">+39 (0) 123 456 789</span>
              </a>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <a href="mailto:info@italyadmissions.edu" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="hidden md:inline font-medium">info@italyadmissions.edu</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Premium Design */}
      <nav className="bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Premium */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-sm group-hover:shadow transition-shadow">
                <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground leading-tight">
                  ItalyAdmissions
                </span>
                <span className="text-[11px] text-muted-foreground font-medium tracking-wide">
                  Study in Italy Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/"
                className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </Link>

              {/* Universities Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setIsUniversitiesOpen(true)}
                onMouseLeave={() => setIsUniversitiesOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                  Universities
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUniversitiesOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </button>

                {/* Mega Menu Dropdown */}
                {isUniversitiesOpen && (
                  <div className="absolute top-full left-0 mt-0 w-screen max-w-5xl -translate-x-1/4">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 mt-2">
                      <div className="grid grid-cols-3 gap-8">
                        {/* By Type Column */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">By Type</h3>
                          <div className="space-y-0.5">
                            {megaMenuData.universities.byType.map((type) => (
                              <Link
                                key={type.name}
                                to={type.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors flex-shrink-0">
                                  <type.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                    {type.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{type.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* By City Column */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">By City</h3>
                          <div className="grid grid-cols-2 gap-1.5">
                            {megaMenuData.universities.byCity.map((city) => (
                              <Link
                                key={city.name}
                                to={city.href}
                                className="group p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {city.name}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">{city.programs} programs</div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Featured Universities */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Featured</h3>
                          <div className="space-y-3">
                            {megaMenuData.universities.featured.map((uni) => (
                              <Link
                                key={uni.name}
                                to={uni.href}
                                className="group block rounded-lg overflow-hidden border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all"
                              >
                                <div className="relative h-20 overflow-hidden">
                                  <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                  <div className="absolute bottom-1.5 left-2 right-2">
                                    <div className="text-xs font-bold text-white line-clamp-1">{uni.name}</div>
                                    <div className="text-[10px] text-white/90 mt-0.5">{uni.ranking}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                  Programs
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </button>
                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-1.5">
                    <Link to="#bachelor" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <BookOpen className="w-4 h-4" strokeWidth={2} />
                      Bachelor's Degrees
                    </Link>
                    <Link to="#master" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <Award className="w-4 h-4" strokeWidth={2} />
                      Master's Degrees
                    </Link>
                    <Link to="#phd" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <GraduationCap className="w-4 h-4" strokeWidth={2} />
                      PhD Programs
                    </Link>
                    <div className="my-1.5 border-t border-gray-200"></div>
                    <Link to="#language" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <Globe className="w-4 h-4" strokeWidth={2} />
                      Language Courses
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-1.5">
                    <Link to="#visa" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <FileText className="w-4 h-4" strokeWidth={2} />
                      Visa Guide
                    </Link>
                    <Link to="#scholarships" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <Award className="w-4 h-4" strokeWidth={2} />
                      Scholarships
                    </Link>
                    <Link to="#living" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <Users className="w-4 h-4" strokeWidth={2} />
                      Cost of Living
                    </Link>
                    <Link to="#faqs" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
                      <BookOpen className="w-4 h-4" strokeWidth={2} />
                      FAQs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="#admissions"
                className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                Admissions
              </Link>

              <Link
                to="#contact"
                className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg shadow-sm hover:shadow transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2.5} /> : <Menu className="w-6 h-6" strokeWidth={2.5} />}
            </button>
          </div>

          {/* Mobile Menu - Premium Design */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-0.5">
                <Link
                  to="/"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="#universities"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Universities
                </Link>

                <Link
                  to="#programs"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programs
                </Link>

                <Link
                  to="#resources"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </Link>

                <Link
                  to="#admissions"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admissions
                </Link>

                <div className="mt-4 px-4">
                  <Link
                    to="#contact"
                    className="block w-full px-6 py-3 text-sm font-semibold text-center text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm hover:shadow transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
