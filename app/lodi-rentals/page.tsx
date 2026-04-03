import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Check, Phone, Zap, Volume2, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rental Lodi CA | Zero Emission Equipment",
  description:
    "Electric skid steer rental in Lodi, California. Zero emission construction equipment for San Joaquin County contractors. DVBE certified. Free yard pickup.",
  keywords: [
    "electric skid steer rental Lodi",
    "zero emission equipment rental Lodi",
    "electric construction equipment San Joaquin County",
    "skid steer rental Central Valley",
    "DVBE equipment rental Lodi",
  ],
  alternates: {
    canonical: "https://frontline.rentals/lodi-rentals",
  },
  openGraph: {
    title: "Electric Skid Steer Rental Lodi CA | Frontline EV Rentals",
    description:
      "Rent zero emission electric skid steers in Lodi with free yard pickup. DVBE certified for government contractors.",
    url: "https://frontline.rentals/lodi-rentals",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Frontline EV Rentals - Lodi",
  description:
    "Electric skid steer rentals serving Lodi, Sacramento, Stockton, and the Central Valley. Zero emission equipment, DVBE certified, free yard pickup.",
  url: "https://frontline.rentals/lodi-rentals",
  telephone: "(209) 470-6385",
  email: "alex@frontline.rentals",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lodi",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Lodi" },
    { "@type": "City", name: "Sacramento" },
    { "@type": "City", name: "Stockton" },
    { "@type": "City", name: "Modesto" },
    { "@type": "City", name: "Manteca" },
    { "@type": "City", name: "Tracy" },
    { "@type": "City", name: "Elk Grove" },
  ],
  priceRange: "$450-$525/day",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electric Skid Steer Rentals",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "FirstGreen Elise 1200 Electric Skid Steer",
        },
        price: "525",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "FirstGreen Elise 1200 CBL Electric Skid Steer",
        },
        price: "450",
        priceCurrency: "USD",
      },
    ],
  },
};

const useCases = [
  "Warehouse and distribution centers",
  "Agricultural processing facilities",
  "Urban infill construction",
  "Residential developments",
  "School and campus projects",
  "Hospital and healthcare facilities",
  "AQMD-regulated job sites",
  "Municipal and public works projects",
];

const whyElectricLodi = [
  {
    icon: Zap,
    title: "Zero Emissions",
    text: "Work inside warehouses, processing facilities, and AQMD-regulated sites without exhaust issues.",
  },
  {
    icon: Volume2,
    title: "Low Noise",
    text: "Operate in residential areas, near schools, and in noise-restricted zones without complaints.",
  },
  {
    icon: ShieldCheck,
    title: "DVBE Certified",
    text: "Count your rental toward DVBE participation goals on San Joaquin County and state projects.",
  },
  {
    icon: Truck,
    title: "Free Local Pickup",
    text: "Pick up from our Lodi yard at no extra cost. Delivery available throughout the Central Valley.",
  },
];

export default function LodiRentalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div
          className="absolute -right-20 top-20 h-40 w-[500px] rotate-[-20deg] bg-lime opacity-20 blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime" aria-hidden="true" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-primary">
              <MapPin className="h-4 w-4" />
              Free Yard Pickup in Lodi
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Electric Skid Steer Rental in Lodi, California
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Zero emission construction equipment for San Joaquin County, Sacramento, and Central Valley contractors. Quiet, powerful, and ready for compliance-driven jobs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Check Availability
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Electric in Lodi */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Contractors Choose Electric in Lodi
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
              Electric skid steers are the right choice for Central Valley jobs where noise, emissions, and compliance matter.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {whyElectricLodi.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Equipment Available in Lodi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Electric skid steers ready for pickup or delivery to your Central Valley job site
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} equipment={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Pricing: <span className="font-semibold text-foreground">$450-$525/day</span> depending on model. Weekly and monthly rates available.
            </p>
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Common Applications in the Central Valley
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Electric skid steers are ideal for these Lodi and Central Valley job types
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Serve */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Who Rents from Frontline in Lodi
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "General contractors",
                "Warehouse operators",
                "Agricultural businesses",
                "Utility contractors",
                "Municipal public works",
                "Property developers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Areas We Serve from Lodi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Free pickup from our Lodi yard. Delivery available throughout San Joaquin County and the Central Valley.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Lodi",
                "Sacramento",
                "Stockton",
                "Modesto",
                "Manteca",
                "Tracy",
                "Elk Grove",
                "Galt",
                "Turlock",
                "Merced",
                "Fresno",
                "Roseville",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How to Rent */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How to Rent in Lodi
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Tell Us Your Job
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Location, dates, and what kind of work you are doing.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Get Matched
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We recommend the right machine and confirm availability.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Pick Up or Deliver
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Free pickup in Lodi or delivery to your job site.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBand
        headline="Need Electric Equipment in Lodi?"
        subhead="Check availability or get a quote. Free pickup from our Lodi yard."
        ctaLabel="Check Availability"
        ctaHref="/quote"
        secondaryCtaLabel="Get a Quote"
        secondaryCtaHref="/quote"
      />
    </>
  );
}
