import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube, Menu, X, GraduationCap, ChevronDown } from "lucide-react";
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
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-accent via-accent to-orange-500">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm text-white">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+390123456789" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call: +39 (0) 123 456 789</span>
              </a>
              <a href="tel:+390987654321" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Hotline: +39 (0) 987 654 321</span>
              </a>
              <a href="mailto:info@italyadmissions.edu" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Email: info@italyadmissions.edu</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="section-container">
          <div className="flex h-[80px] items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-blue-600 to-blue-700 shadow-lg group-hover:shadow-xl transition-shadow">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary leading-tight">
                  ItalyAdmissions
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Study in Italy Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-border py-2 animate-fade-in">
                    <Link to="#about" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      About Us
                    </Link>
                    <Link to="#team" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Our Team
                    </Link>
                    <Link to="#mission" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Our Mission
                    </Link>
                  </div>
                )}
              </div>

              {/* Study Abroad Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsStudyAbroadOpen(true)}
                onMouseLeave={() => setIsStudyAbroadOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Study Abroad
                  <ChevronDown className={`w-4 h-4 transition-transform ${isStudyAbroadOpen ? 'rotate-180' : ''}`} />
                </button>
                {isStudyAbroadOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-border py-2 animate-fade-in">
                    <Link to="#universities" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Italian Universities
                    </Link>
                    <Link to="#admissions" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Admission Process
                    </Link>
                    <Link to="#visa" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Visa Information
                    </Link>
                    <Link to="#scholarships" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Scholarships
                    </Link>
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Courses
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCoursesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-border py-2 animate-fade-in">
                    <Link to="#bachelor" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Bachelor Programs
                    </Link>
                    <Link to="#master" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Master Programs
                    </Link>
                    <Link to="#phd" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      PhD Programs
                    </Link>
                    <Link to="#language" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      Language Courses
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="#services"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                Services
              </Link>

              <Link
                to="#contact"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                Contact
              </Link>

              <Link
                to="#news"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                News & Posts
              </Link>
            </div>

            {/* Search Icon */}
            <div className="hidden lg:flex items-center">
              <button className="p-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                <Link to="/" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Home
                </Link>
                <Link to="#about" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  About
                </Link>
                <Link to="#study-abroad" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Study Abroad
                </Link>
                <Link to="#courses" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Courses
                </Link>
                <Link to="#services" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Services
                </Link>
                <Link to="#contact" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  Contact
                </Link>
                <Link to="#news" className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                  News & Posts
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
