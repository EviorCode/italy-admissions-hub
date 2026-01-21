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
} from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Italy", href: "#why-italy" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar - Full Width Background */}
      <div className="w-full bg-gradient-to-r from-accent to-accent/90 border-b border-accent/20">
        <div className=" px-4 sm:px-6 lg:px-8">
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

      {/* Main Navigation - Full Width Background */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
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
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#get-started"
                onClick={(e) => scrollToSection(e, "#get-started")}
                className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm hover:shadow transition-all"
              >
                Get Started
              </a>
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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="mt-4 px-4">
                  <a
                    href="#get-started"
                    onClick={(e) => scrollToSection(e, "#get-started")}
                    className="block w-full px-6 py-3 text-sm font-semibold text-center text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
