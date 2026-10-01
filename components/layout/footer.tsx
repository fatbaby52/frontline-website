import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./container";
import { COMPANY } from "@/lib/constants";

const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = [
  {
    title: "Equipment",
    links: [
      { name: "All Equipment", href: "/equipment" },
      { name: "Elise 1200 (Cab)", href: "/equipment/elise-1200" },
      { name: "Elise 1200 CBL", href: "/equipment/elise-1200-cbl" },
    ],
  },
  {
    title: "Locations",
    links: [
      { name: "Salinas Rentals", href: "/salinas-rentals" },
      { name: "Lodi Rentals", href: "/lodi-rentals" },
      { name: "Skid Steer Rental Salinas", href: "/electric-skid-steer-salinas" },
      { name: "Skid Steer Rental Lodi", href: "/electric-skid-steer-lodi" },
      { name: "Zero Emission Equipment CA", href: "/zero-emission-equipment-california" },
      { name: "Statewide Delivery", href: "/delivery" },
    ],
  },
  {
    title: "For Contractors",
    links: [
      { name: "DVBE Equipment Rental", href: "/dvbe-equipment-rental" },
      { name: "DVBE Participation Support", href: "/dvbe-participation" },
      { name: "Utility & Public Works", href: "/utility-public-works" },
      { name: "Contractor Info", href: "/for-contractors" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-teal-dark text-on-dark/70">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Image
                src="/images/logo.png"
                alt="Frontline EV Rentals"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="mt-4 max-w-sm text-on-dark/70">
                Electric construction equipment rentals for California contractors.
                DVBE certified.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-on-dark/70 transition-colors hover:text-on-dark"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-3 text-on-dark/70 transition-colors hover:text-on-dark"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY.email}
                </a>
                <div className="flex items-center gap-3 text-on-dark/70">
                  <MapPin className="h-4 w-4" />
                  Salinas & Lodi, California
                </div>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((group) => (
              <nav key={group.title} aria-label={`${group.title} links`}>
                <p className="text-sm font-medium text-on-dark">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-on-dark/70 transition-colors hover:text-on-dark"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-on-dark/10 pt-8 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 text-sm font-medium text-on-dark before:h-1.5 before:w-1.5 before:rounded-full before:bg-lime">
                DVBE Certified
              </span>
              <span className="text-xs text-on-dark/60">
                CA #{COMPANY.certificationId} • CAGE {COMPANY.cageCode}
              </span>
              <a
                href="https://www.veteranownedbusiness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/images/veteran-owned-badge.png"
                  alt="Veteran Owned Business"
                  width={80}
                  height={72}
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <p className="text-xs text-on-dark/60">
              © {CURRENT_YEAR} {COMPANY.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
