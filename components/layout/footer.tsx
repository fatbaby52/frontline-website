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
      { name: "Elise 1200", href: "/equipment/elise-1200" },
      { name: "CBL 1200", href: "/equipment/cbl-1200" },
    ],
  },
  {
    title: "Locations",
    links: [
      { name: "Salinas Rentals", href: "/salinas-rentals" },
      { name: "Lodi Rentals", href: "/lodi-rentals" },
      { name: "Statewide Delivery", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Drone & LiDAR", href: "/services/drone-lidar" },
      { name: "Project Support", href: "/services/project-management" },
      { name: "For Contractors", href: "/for-contractors" },
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
    <footer className="bg-primary text-white">
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
              <p className="mt-4 max-w-sm text-white/70">
                Electric construction equipment rentals for California contractors.
                DVBE certified.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-lime"
                >
                  <Phone className="h-5 w-5" />
                  {COMPANY.phone}
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-lime"
                >
                  <Mail className="h-5 w-5" />
                  {COMPANY.email}
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="h-5 w-5" />
                  Salinas & Lodi, California
                </div>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((group) => (
              <nav key={group.title} aria-label={`${group.title} links`}>
                <p className="font-heading font-bold text-lime">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 transition-colors hover:text-white"
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
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-lime px-4 py-1.5 text-sm font-bold text-primary">
                DVBE Certified
              </span>
              <span className="text-sm text-white/50">
                CA #{COMPANY.certificationId} • CAGE {COMPANY.cageCode}
              </span>
            </div>
            <p className="text-sm text-white/50">
              © {CURRENT_YEAR} {COMPANY.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
