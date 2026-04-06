import Link from "next/link";
import type { Metadata } from "next";
import {
  Truck,
  Clock,
  MapPin,
  Check,
  ArrowRight,
  Phone,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Equipment Delivery California | 48-Hour Statewide Delivery",
  description:
    "Electric skid steer delivery anywhere in California within 48 hours. Free pickup from Salinas or Lodi. Statewide delivery for construction equipment.",
  keywords: [
    "electric equipment delivery California",
    "skid steer delivery service",
    "construction equipment delivery CA",
    "equipment rental delivery",
  ],
  alternates: {
    canonical: "https://frontline.rentals/delivery",
  },
  openGraph: {
    title: "48-Hour Statewide Delivery | Frontline EV Rentals",
    description:
      "Electric skid steer delivery anywhere in California within 48 hours.",
    url: "https://frontline.rentals/delivery",
  },
};

const deliveryBenefits = [
  {
    icon: Clock,
    title: "48-Hour Delivery",
    description:
      "We deliver electric skid steers anywhere in California within 48 hours of confirmation.",
  },
  {
    icon: MapPin,
    title: "Statewide Coverage",
    description:
      "From San Diego to the Oregon border. No job site is too far.",
  },
  {
    icon: Truck,
    title: "Free Yard Pickup",
    description:
      "Pick up from our Salinas or Lodi yards at no extra cost if delivery is not needed.",
  },
  {
    icon: Zap,
    title: "Ready to Work",
    description:
      "Equipment arrives charged and ready. We provide operator orientation on delivery.",
  },
];

const regions = [
  {
    name: "Central Coast",
    hub: "Salinas",
    cities: ["Monterey", "Santa Cruz", "Watsonville", "Hollister", "Carmel", "Pacific Grove", "Gilroy"],
  },
  {
    name: "Central Valley",
    hub: "Lodi",
    cities: ["Sacramento", "Stockton", "Modesto", "Fresno", "Manteca", "Tracy", "Turlock", "Merced"],
  },
  {
    name: "Bay Area",
    hub: "Salinas or Lodi",
    cities: ["San Jose", "Oakland", "San Francisco", "Fremont", "Hayward", "Palo Alto", "Berkeley"],
  },
  {
    name: "Southern California",
    hub: "Statewide Delivery",
    cities: ["Los Angeles", "San Diego", "Riverside", "Orange County", "Bakersfield", "Ventura"],
  },
];

export default function DeliveryPage() {
  return (
    <>
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
              <Truck className="h-4 w-4" />
              Statewide Delivery
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Delivery Anywhere in California Within 48 Hours
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Electric skid steers delivered to your job site. Free pickup from Salinas or Lodi, or we bring the equipment to you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Get Delivery Quote
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

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How Delivery Works
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {deliveryBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pickup Options */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Pickup or Delivery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Choose the option that works best for your project
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {/* Free Pickup */}
              <div className="rounded-xl border-2 border-primary bg-white p-8">
                <div className="mb-4 inline-flex rounded-full bg-lime px-4 py-1 text-sm font-bold text-primary">
                  Free
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Yard Pickup
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Pick up equipment from our Salinas or Lodi yard at no additional cost.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "No delivery fee",
                    "Same-day availability",
                    "Operator orientation included",
                    "Flexible pickup times",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/salinas-rentals">Salinas</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/lodi-rentals">Lodi</Link>
                  </Button>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-xl border border-border bg-white p-8">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
                  Statewide
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Job Site Delivery
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We deliver to your job site anywhere in California within 48 hours.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "48-hour delivery anywhere in CA",
                    "Equipment arrives charged",
                    "On-site orientation available",
                    "Return pickup included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full">
                  <Link href="/quote">Get Delivery Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Regions */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Areas We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Delivery available throughout California. These are common service areas.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {region.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Hub: {region.hub}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              Do not see your area listed? We still deliver there. Contact us for a quote.
            </p>
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Equipment Available for Delivery
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {equipment.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.type}</p>
                  <p className="mt-4 text-2xl font-bold text-primary">
                    ${item.dailyRate}
                    <span className="text-base font-normal text-muted-foreground">
                      /day
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.unitsAvailable} units available
                  </p>
                  <Button asChild className="mt-4 w-full">
                    <Link href={`/equipment/${item.slug}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How to Schedule */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How to Schedule Delivery
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Request a Quote
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us your job site location, dates, and equipment needs.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Confirm Details
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We provide a delivery quote and confirm availability.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Equipment Arrives
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Delivery within 48 hours. Equipment arrives charged and ready.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBand
        headline="Need Equipment Delivered to Your Job Site?"
        subhead="Get a delivery quote. We reach anywhere in California within 48 hours."
        ctaLabel="Get Delivery Quote"
        ctaHref="/quote"
        secondaryCtaLabel="Call Us"
        secondaryCtaHref="tel:8312622847"
      />
    </>
  );
}
