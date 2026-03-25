import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Check, Camera, ScanLine, Search, Leaf, FileCheck, ClipboardList, Handshake, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SearchBar } from "@/components/sections/search-bar";
import { ValueProps } from "@/components/sections/value-props";
import { CtaBand } from "@/components/sections/cta-band";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";

export const metadata: Metadata = {
  title: "Electric Construction Equipment Rental California",
  description:
    "Rent electric skid steers in California. Zero emissions, whisper quiet. DVBE certified for government contractors. Free pickup Salinas & Lodi.",
  alternates: {
    canonical: "https://frontline.rentals",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://frontline.rentals/#business",
      name: "Frontline Equipment Rentals",
      alternateName: "Frontline EV Rentals",
      description:
        "Electric construction equipment rentals for California contractors. DVBE certified small business offering electric skid steers, LiDAR mapping, and project management services.",
      url: "https://frontline.rentals",
      telephone: "(209) 470-6385",
      email: "alex@frontline.rentals",
      image: "https://frontline.rentals/images/og-image.jpg",
      logo: "https://frontline.rentals/images/logo.png",
      priceRange: "$450-$525/day",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Salinas",
          addressRegion: "CA",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Lodi",
          addressRegion: "CA",
          addressCountry: "US",
        },
      ],
      areaServed: {
        "@type": "State",
        name: "California",
      },
      knowsAbout: [
        "Electric Skid Steer Rental",
        "LiDAR Mapping",
        "Drone Aerial Services",
        "Project Management Consulting",
        "DVBE Certification",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "DVBE Certified",
          description: "Disabled Veteran Business Enterprise - California #2048632",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Small Business - Micro",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "FAA Part 107 Certified",
          description: "Commercial drone operations license",
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electric Skid Steer Rental",
            description: "Zero emission electric skid steers for construction sites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LiDAR Mapping & 3D Scanning",
            description: "Professional drone-based LiDAR mapping and aerial documentation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Project Management Consulting",
            description: "Compliance, quality control, and project coordination services",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://frontline.rentals/#website",
      url: "https://frontline.rentals",
      name: "Frontline EV Rentals",
      publisher: { "@id": "https://frontline.rentals/#business" },
    },
    {
      "@type": "Product",
      name: "FirstGreen Elise 1200 Electric Skid Steer",
      description: "Wheeled electric skid steer - compact power for tight spaces. Zero emissions, full-day battery life.",
      image: "https://frontline.rentals/images/elise-1200.jpg",
      brand: { "@type": "Brand", name: "FirstGreen" },
      offers: {
        "@type": "Offer",
        price: "525",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "Product",
      name: "FirstGreen CBL 1200 Electric Skid Steer",
      description: "Wheeled electric skid steer - compact and maneuverable for any job site. Zero emissions, full-day battery life.",
      image: "https://frontline.rentals/images/cbl-1200.jpg",
      brand: { "@type": "Brand", name: "FirstGreen" },
      offers: {
        "@type": "Offer",
        price: "450",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="Electric Construction Equipment Rentals"
        subhead="Zero emissions. Full power. DVBE certified for California contractors."
        primaryCta={{ label: "Get a Quote", href: "/quote" }}
        secondaryCta={{ label: "View Equipment", href: "/equipment" }}
        showBadges
      />

      {/* Search Bar */}
      <SearchBar />

      {/* Value Props */}
      <ValueProps />

      {/* Equipment */}
      <section className="bg-muted py-20 lg:py-28">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
              Electric Fleet
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Our Equipment
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Electric skid steers built for California job sites
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {equipment.map((item, index) => (
              <EquipmentCard key={item.slug} equipment={item} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Aerial Services */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-block rounded-full bg-lime px-4 py-1.5 text-sm font-bold text-primary">
                  FAA Part 107 Certified
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Aerial Documentation & Inspection
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                  Professional drone services for construction, infrastructure, and
                  environmental projects. Capture millions of data points for accurate
                  3D topographical mapping.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "LiDAR mapping & 3D modeling",
                    "Site documentation & progress monitoring",
                    "Aerial inspections - no scaffolding needed",
                    "Environmental & compliance documentation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime">
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button asChild size="lg">
                    <Link href="/services/drone-lidar">
                      View Drone Services
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Camera, label: "Site Photography", color: "bg-primary text-white" },
                  { icon: ScanLine, label: "LiDAR Scanning", color: "bg-lime text-primary" },
                  { icon: Search, label: "Inspections", color: "bg-teal-light text-primary" },
                  { icon: Leaf, label: "Environmental", color: "bg-primary text-white" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center justify-center rounded-2xl p-8 text-center ${item.color}`}
                  >
                    <item.icon className="mb-3 h-10 w-10" strokeWidth={1.5} />
                    <p className="font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Support */}
      <section className="bg-teal-light py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="lg:order-2">
                <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
                  Included Free
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Project Support & Coordination
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                  We don&apos;t just drop off equipment. Our team ensures your crew
                  is ready to operate from day one.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Equipment selection guidance",
                    "Flexible delivery scheduling",
                    "On-site operator orientation",
                    "Charging infrastructure support",
                    "Direct phone support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button asChild size="lg">
                    <Link href="/services/project-management">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative lg:order-1">
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Every rental includes
                  </h3>
                  <div className="mt-6 grid gap-4">
                    {[
                      "Equipment manuals",
                      "Charging instructions",
                      "Safety checklists",
                      "Phone support",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-muted p-4">
                        <div className="h-2 w-2 rounded-full bg-lime" />
                        <span className="font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Management Consulting */}
      <section className="bg-primary py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  DVBE Certified • CA #2048632
                </div>
                <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  Project Management Consulting
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-white/80">
                  We handle the details so you can focus on the work. Paperwork,
                  compliance, quality control, and contract interpretation.
                </p>
                <p className="mt-4 text-white/60">
                  Flexible consulting arrangements that help primes meet
                  subcontracting goals while adding real value.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
                  >
                    Let&apos;s Talk
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/for-contractors"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                  >
                    For Prime Contractors
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileCheck, title: "Compliance", desc: "Permits, submittals, RFIs" },
                  { icon: ClipboardList, title: "Quality Control", desc: "Inspections, punch lists" },
                  { icon: Search, title: "Contracts", desc: "Scope, change orders" },
                  { icon: Handshake, title: "Coordination", desc: "Scheduling, oversight" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
                  >
                    <item.icon className="mb-3 h-8 w-8 text-lime" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-teal-light px-4 py-1.5 text-sm font-bold text-primary">
              Statewide Delivery
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Serving All of California
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Free pickup from Salinas or Lodi. Delivery available statewide.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              {[
                { city: "Salinas", region: "Central Coast" },
                { city: "Lodi", region: "Central Valley" },
              ].map((location) => (
                <div key={location.city} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-xl font-bold text-foreground">{location.city}</p>
                    <p className="text-muted-foreground">{location.region}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Bay Area", "Sacramento", "Fresno", "Los Angeles"].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-muted px-5 py-2 text-sm font-medium text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact for Delivery Info
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand
        headline="Ready to Go Electric?"
        subhead="Get a quote in minutes. Same-week availability."
        ctaLabel="Request a Quote"
        ctaHref="/quote"
      />
    </>
  );
}
