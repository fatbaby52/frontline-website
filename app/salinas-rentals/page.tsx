import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Check, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rental Salinas CA | Free Pickup",
  description:
    "Rent electric skid steers in Salinas, California. Free yard pickup, zero emissions, DVBE certified. Perfect for Central Coast construction projects.",
  alternates: {
    canonical: "https://frontline.rentals/salinas-rentals",
  },
  openGraph: {
    title: "Electric Skid Steer Rental Salinas CA | Frontline",
    description:
      "Rent electric skid steers in Salinas with free yard pickup. Zero emissions, DVBE certified for government contractors.",
    url: "https://frontline.rentals/salinas-rentals",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Frontline Equipment Rentals - Salinas",
  description:
    "Electric construction equipment rentals serving Salinas and the Central Coast. DVBE certified, free yard pickup.",
  url: "https://frontline.rentals/salinas-rentals",
  telephone: "(209) 470-6385",
  email: "alex@frontline.rentals",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salinas",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Salinas" },
    { "@type": "City", name: "Monterey" },
    { "@type": "City", name: "Santa Cruz" },
    { "@type": "City", name: "Watsonville" },
    { "@type": "City", name: "Hollister" },
  ],
  priceRange: "$450-$525/day",
};

export default function SalinasRentalsPage() {
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
              Free Yard Pickup
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Electric Skid Steer Rental in Salinas, CA
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80">
              Zero emission construction equipment for the Central Coast.
              DVBE certified for government contractors.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Get a Quote
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

      {/* Why Salinas */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Electric Equipment Rental for Salinas & Central Coast
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our Salinas yard provides free pickup for contractors working throughout
              Monterey County and the Central Coast region. Electric skid steers are
              ideal for the area's agricultural facilities, wineries, residential
              developments, and environmentally-sensitive coastal projects.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                "Free pickup from our Salinas yard",
                "Delivery available to Monterey, Santa Cruz, Watsonville",
                "Zero emissions for indoor & sensitive sites",
                "Whisper quiet for residential areas",
                "DVBE certified for government projects",
                "Same-week availability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{item}</span>
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
              Equipment Available in Salinas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Electric skid steers ready for pickup or delivery
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} equipment={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Areas We Serve from Salinas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Free pickup from our yard or delivery throughout the region
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Salinas",
                "Monterey",
                "Santa Cruz",
                "Watsonville",
                "Hollister",
                "Carmel",
                "Pacific Grove",
                "Marina",
                "Seaside",
                "Gilroy",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-teal-light px-5 py-2 text-sm font-medium text-primary"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact for Delivery Pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Ready to Rent in Salinas?"
        subhead="Get a quote in minutes. Free yard pickup available."
        ctaLabel="Request a Quote"
        ctaHref="/quote"
      />
    </>
  );
}
