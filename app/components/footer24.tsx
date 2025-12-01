import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerData = {
  heading: "BY THE WAY",
  email: {
    label: "info@bytheway.ch",
    href: "mailto:info@bytheway.ch",
  },
  phone: {
    label: "077 290 52 31",
    href: "tel:+41772905231",
  },
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/bytheway.ch" },
  ],
  navLinks: [
    { label: "Startseite", href: "/de" },
    { label: "Speisekarte", href: "/de/speisekarte" },
    { label: "Über uns", href: "/de/ueber-uns" },
    { label: "Impressum", href: "/de/impressum" },
    { label: "Datenschutz", href: "/de/datenschutz" },
  ],
  address: "Wehntalerstrasse 1, 8162 Steinmaur",
  hours: "Mi-Fr 11:00-13:30 & 17:00-21:00, Sa-So 13:00-21:00",
};

const Footer24 = () => {
  return (
    <section className="py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="bg-input rounded-2xl border border-border p-8 md:p-16">
          <div className="border-border mb-6 border-b pb-6 text-center md:mb-8 md:pb-8">
            <h2 className="tracking-tight">
              {footerData.heading}
            </h2>
            <p className="text-muted-foreground mt-2 text-body-lg">BURGER & GRILLHAUS</p>
          </div>

          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Address Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-label">
                Adresse
              </h3>
              <p className="text-muted-foreground text-base">
                {footerData.address}
              </p>
            </div>

            {/* Hours Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-label">
                Öffnungszeiten
              </h3>
              <p className="text-muted-foreground text-base">
                {footerData.hours}
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-label">
                Telefon
              </h3>
              <a
                href={footerData.phone.href}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-base transition-colors"
              >
                {footerData.phone.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-label">
                E-Mail
              </h3>
              <a
                href={footerData.email.href}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-base transition-colors"
              >
                {footerData.email.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:py-4">
          <nav className="flex flex-wrap gap-4">
            {footerData.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-muted-foreground text-sm md:text-right md:text-xs">
            © 2025 BY THE WAY - BURGER & GRILLHAUS. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer24 };
