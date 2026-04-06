import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Phone,
  Truck,
  Volume2,
  Zap,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rental Lodi CA | Frontline EV Rentals",
  description:
    "Electric skid steer rental in Lodi, California. Zero-emission equipment for contractors, public works, and utility jobs. Delivery available.",
  keywords: [
    "electric skid steer rental Lodi",
    "skid steer rental Lodi CA",
    "zero emission equipment Lodi",
    "electric construction equipment San Joaquin County",
    "skid steer Lodi California",
  ],
  alternates: {
    canonical: "https://frontline.rentals/electric-skid-steer-lodi",
  },
  openGraph: {
    title: "Electric Skid Steer Rental Lodi CA | Frontline EV Rentals",
    description:
      "Electric skid steer rental in Lodi, California. Zero-emission equipment for contractors, public works, and utility jobs.",
    url: "https://frontline.rentals/electric-skid-steer-lodi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electric Skid Steer Rental in Lodi, California",
  description:
    "Zero-emission electric skid steer rentals for contractors, public works, and utility jobs in Lodi and San Joaquin County.",
  provider: {
    "@type": "LocalBusiness",
    name: "Frontline EV Rentals",
    telephone: "(831) 262-2847",
    email: "alex@frontline.rentals",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lodi",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Lodi" },
    { "@type": "AdministrativeArea", name: "San Joaquin County" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electric Skid Steers",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Elise 1200 Electric Skid Steer",
        },
        price: "525",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "CBL 1000 Electric Skid Steer",
        },
        price: "450",
        priceCurrency: "USD",
      },
    ],
  },
};

const commonJobs = [
  "Construction and site preparation",
  "Utility and infrastructure work",
  "Tree care and vegetation management",
  "Public works projects",
  "Urban and residential jobs",
  "Jobs with emissions or noise restrictions",
];

const whyElectric = [
  "Zero tailpipe emissions",
  "Lower noise levels",
  "Access to more restrictive job sites",
  "A cleaner option for modern projects",
];

const whyNotTraditional = [
  "Electric-focused fleet, not an afterthought",
  "Equipment suited for compliance-driven jobs",
  "Lower noise for urban and sensitive environments",
  "DVBE-certified business",
  "Local, flexible service from Salinas and Lodi",
];

const builtForLodi = [
  "Delivery available throughout Lodi and surrounding areas",
  "Electric equipment suited for emissions-sensitive projects",
  "Quiet operation for urban and public-facing work",
  "DVBE-certified business for public contract participation",
];

export default function ElectricSkidSteerLodiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-primary">
              <MapPin className="h-4 w-4" />
              Lodi, California
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Electric Skid Steer Rental in Lodi, California
            </h1>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium text-foreground">
              Looking for electric skid steer rental in Lodi?
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals provides zero-emission skid steers for contractors, construction, and public projects throughout Lodi and San Joaquin County.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We are one of the few providers in the region focused specifically on electric equipment, with machines that are quiet, practical, and ready for real job site use.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/quote">
                  Check Availability Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Built for Lodi */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Built for Lodi and San Joaquin County Job Sites
            </h2>
            <ul className="mt-6 space-y-3">
              {builtForLodi.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Available Equipment */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Available Electric Skid Steers
            </h2>

            <div className="mt-8 space-y-6">
              {/* Elise 1200 */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Elise 1200
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Full-size electric skid steer with strong lift capacity and all-day usability.
                </p>
                <p className="mt-4 text-lg font-semibold text-primary">
                  Starting at $525 per day
                </p>
                <Button asChild className="mt-4">
                  <Link href="/quote">Check Availability</Link>
                </Button>
              </div>

              {/* CBL 1000 */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  CBL 1000
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Compact, maneuverable, and ideal for tighter access work.
                </p>
                <p className="mt-4 text-lg font-semibold text-primary">
                  Starting at $450 per day
                </p>
                <Button asChild className="mt-4">
                  <Link href="/quote">Check Availability</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Jobs */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Common Jobs We Support in Lodi
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our electric skid steers are used across Lodi and San Joaquin County for:
            </p>
            <ul className="mt-6 space-y-3">
              {commonJobs.map((job) => (
                <li key={job} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{job}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              If diesel equipment is too loud, restricted, or impractical, electric equipment is often the better option.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Electric Makes Sense */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Why Electric Equipment Makes Sense Here
            </h2>
            <p className="mt-4 text-muted-foreground">
              Many jobs in Lodi involve residential and mixed-use areas, public-facing environments, and growing environmental considerations.
            </p>
            <p className="mt-4 text-muted-foreground">
              Electric skid steers help solve these problems by offering:
            </p>
            <ul className="mt-6 space-y-3">
              {whyElectric.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Why Not Traditional */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Why Not a Traditional Rental Yard
            </h2>
            <ul className="mt-6 space-y-3">
              {whyNotTraditional.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* DVBE Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                DVBE Participation Support
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Many California public projects require DVBE participation, often in the range of 3% to 5%.
            </p>
            <p className="mt-4 text-muted-foreground">
              Frontline EV Rentals is a DVBE-certified business that may be able to support those requirements through equipment rentals and other legitimate project services.
            </p>
            <p className="mt-4 text-muted-foreground">
              If equipment rental is not the right fit for your project, we may still be able to support DVBE participation through other services such as drone imaging or practical project support.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Services are provided based on actual project needs. We do not offer pass-through participation.
            </p>
            <Button asChild className="mt-6">
              <Link href="/dvbe-participation">Ask About DVBE Options</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              How It Works
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  1. Tell us about your job
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Let us know what you are working on and what you need.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  2. We match the right machine
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We recommend the best equipment and rental setup.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  3. Pick up or schedule delivery
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get your equipment where you need it, when you need it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
              Check Availability in Lodi Today
            </h2>
            <p className="mt-4 text-white/80">
              If you need electric skid steer rental in Lodi or San Joaquin County, we can help you get the right machine quickly.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-lime text-primary hover:bg-lime/90">
                <Link href="/quote">
                  Check Availability Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-link */}
      <section className="py-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground">
              Also serving{" "}
              <Link href="/electric-skid-steer-salinas" className="font-medium text-primary hover:underline">
                Salinas and Monterey County
              </Link>
            </p>
            <p className="mt-2 text-muted-foreground">
              <Link href="/zero-emission-equipment-california" className="font-medium text-primary hover:underline">
                Zero Emission Equipment Rental in California
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
