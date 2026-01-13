import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const universities = {
  byType: [
    { name: "Public Universities", href: "#" },
    { name: "Private Universities", href: "#" },
    { name: "Medical Universities", href: "#" },
    { name: "Arts & Design Academies", href: "#" },
  ],
  byCity: [
    { name: "Milan", href: "#" },
    { name: "Rome", href: "#" },
    { name: "Bologna", href: "#" },
    { name: "Turin", href: "#" },
    { name: "Florence", href: "#" },
    { name: "Naples", href: "#" },
  ],
  popular: [
    { name: "University of Bologna", href: "#" },
    { name: "Sapienza University of Rome", href: "#" },
    { name: "Politecnico di Milano", href: "#" },
    { name: "University of Milan", href: "#" },
    { name: "University of Padua", href: "#" },
  ],
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <nav className="section-container">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Italy<span className="text-primary">Admissions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="#admissions"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Admissions
            </Link>

            {/* Universities Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsUniversitiesOpen(true)}
              onMouseLeave={() => setIsUniversitiesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Universities
                <ChevronDown className={`w-4 h-4 transition-transform ${isUniversitiesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {isUniversitiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-card rounded-xl shadow-lg border border-border p-6 animate-fade-in">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 - By Type */}
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Browse by Type
                      </h4>
                      <ul className="space-y-2">
                        {universities.byType.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2 - By City */}
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Browse by City
                      </h4>
                      <ul className="space-y-2">
                        {universities.byCity.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to="#"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View all cities →
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 - Popular */}
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Popular Universities
                      </h4>
                      <ul className="space-y-2">
                        {universities.popular.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to="#"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View all universities →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="#programs"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Programs
            </Link>

            <Link
              to="#resources"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Study in Italy
            </Link>

            <Link
              to="#scholarships"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Scholarships
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full px-5">
              <Bell className="w-4 h-4" />
              Get Admission Alerts
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="#admissions" className="text-sm font-medium text-foreground hover:text-primary">
                Admissions
              </Link>
              <Link to="#universities" className="text-sm font-medium text-foreground hover:text-primary">
                Universities
              </Link>
              <Link to="#programs" className="text-sm font-medium text-foreground hover:text-primary">
                Programs
              </Link>
              <Link to="#resources" className="text-sm font-medium text-foreground hover:text-primary">
                Study in Italy
              </Link>
              <Link to="#scholarships" className="text-sm font-medium text-foreground hover:text-primary">
                Scholarships
              </Link>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full w-full mt-2">
                <Bell className="w-4 h-4" />
                Get Admission Alerts
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
