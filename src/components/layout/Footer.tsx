import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const footerLinks = {
  admissions: {
    title: "Admissions",
    links: [
      { name: "Open Admissions", href: "#" },
      { name: "Admission Calendar", href: "#" },
      { name: "Universities", href: "#" },
      { name: "Programs", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Study in Italy", href: "#" },
      { name: "Visa Guide", href: "#" },
      { name: "Scholarships", href: "#" },
      { name: "Entrance Exams", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">ItalyAdmissions</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping students discover and apply to Italian university admissions with confidence.
            </p>
          </div>

          {/* Admissions Links */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.admissions.title}</h4>
            <ul className="space-y-3">
              {footerLinks.admissions.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.resources.title}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.company.title}</h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} ItalyAdmissions. All rights reserved.</p>
            <p>Information sourced from official university websites.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
