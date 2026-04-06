import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Phone,
  MapPin,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zero Emission Equipment Rental California | Electric Skid Steers",
  description:
    "Zero emission equipment rental in California. Electric skid steers for contractors, public works, and utility projects. DVBE-certified. Delivery available.",
  keywords: [
    "zero emission equipment rental California",
    "electric skid steer rental California",
    "zero emission construction equipment",
    "electric equipment rental CA",
    "DVBE equipment rental California",
  ],
  alternates: {
    canonical: "https://frontline.rentals/zero-emission-equipment-california",
  },
  openGraph: {
    title: "Zero Emission Equipment Rental California | Frontline EV Rentals",
    description:
      "Zero emission equipment rental in California. Electric skid steers for contractors, public works, and utility projects.",
    url: "https://frontline.rentals/zero-emission-equipment-california",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zero Emission Equipment Rental in California",
  description:
    "Electric skid steer rentals for contractors, public works, and utility projects throughout California. DVBE-certified business.",
  provider: {
    "@type": "LocalBusiness",
    name: "Frontline EV Rentals",
    telephone: "(831) 262-2847",
    email: "alex@frontline.rentals",
  },
  areaServed: {
    "@type": "State",
    name: "California",
  },
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

const modernJobSites = [
  "Urban environments",
  "Public-facing job sites",
  "Utility and infrastructure projects",
  "Areas with emissions or noise restrictions",
  "Projects with environmental or regulatory considerations",
];

const whereUseful = [
  "Utility and PG&E-related work",
  "Public works and municipal projects",
  "School and campus construction",
  "Hospital and healthcare environments",
  "Residential and mixed-use developments",
  "Indoor or enclosed work areas",
  "Jobs with strict noise or emissions limits",
];

const whyMovingToElectric = [
  "Zero tailpipe emissions",
  "Lower noise levels",
  "Better fit for restricted job sites",
  "Reduced impact in public-facing environments",
  "A practical option for compliance-driven projects",
];

const serviceAreas = [
  "Salinas and Monterey County",
  "Lodi and San Joaquin County",
  "Surrounding regions based on project needs",
];

export default function ZeroEmissionEquipmentCaliforniaPage() {
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
              <Zap className="h-4 w-4" />
              California Statewide
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Zero Emission Equipment Rental in California
            </h1>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium text-foreground">
              Looking for zero emission equipment rental in California?
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals provides electric skid steers and related equipment for contractors, public works projects, and utility jobs across California.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus specifically on electric equipment that can be used in environments where diesel equipment creates noise, emissions, or compliance challenges.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/quote">
                  Check Availability
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

      {/* Electric Equipment for Modern Job Sites */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Electric Equipment for Modern Job Sites
            </h2>
            <p className="mt-4 text-muted-foreground">
              Across California, more projects are requiring or encouraging the use of low-emission or zero-emission equipment.
            </p>
            <p className="mt-4 text-muted-foreground">
              Electric skid steers provide a practical solution for contractors working in:
            </p>
            <ul className="mt-6 space-y-3">
              {modernJobSites.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Where Zero Emission Equipment Is Most Useful */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Where Zero Emission Equipment Is Most Useful
            </h2>
            <p className="mt-4 text-muted-foreground">
              Electric equipment is often a strong fit for:
            </p>
            <ul className="mt-6 space-y-3">
              {whereUseful.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              If diesel equipment is restricted, impractical, or creates unnecessary complications, electric equipment is often the better option.
            </p>
          </div>
        </Container>
      </section>

      {/* Available Electric Equipment */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Available Electric Equipment
            </h2>
            <p className="mt-4 text-muted-foreground">
              Frontline EV Rentals provides electric skid steers that are built for real job site use.
            </p>

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
              </div>

              {/* CBL 1000 */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  CBL 1000
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Compact and maneuverable, ideal for tighter access work.
                </p>
                <p className="mt-4 text-lg font-semibold text-primary">
                  Starting at $450 per day
                </p>
              </div>
            </div>

            <Button asChild className="mt-8">
              <Link href="/quote">Check Availability</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Contractors Are Moving Toward Electric */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Why Contractors Are Moving Toward Electric Equipment
            </h2>
            <p className="mt-4 text-muted-foreground">
              Electric equipment is becoming more common for practical reasons, not just environmental ones.
            </p>
            <ul className="mt-6 space-y-3">
              {whyMovingToElectric.map((item) => (
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
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                DVBE-Certified Equipment Rental
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Frontline EV Rentals is a DVBE-certified business that can support participation requirements on California public projects, depending on project needs. We do this through real project services, including equipment rentals and, where appropriate, other legitimate support services.
            </p>
            <p className="mt-4 text-muted-foreground">
              Many state-funded projects include DVBE participation goals, often in the range of 3% to 5%.
            </p>
            <p className="mt-4 text-muted-foreground">
              For contractors looking for a DVBE-certified vendor, Frontline can be a practical partner when zero-emission equipment or related support services fit the job.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Services are provided based on actual project needs. We do not offer pass-through participation.
            </p>
            <Button asChild className="mt-6">
              <Link href="/dvbe-participation">Ask About DVBE Support</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Service Areas
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Frontline EV Rentals operates from Salinas and Lodi and serves contractors throughout California.
            </p>
            <p className="mt-4 text-muted-foreground">
              Common service areas include:
            </p>
            <ul className="mt-6 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              Contact us to confirm availability and delivery options for your location.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="outline">
                <Link href="/electric-skid-steer-salinas">
                  Salinas Area
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/electric-skid-steer-lodi">
                  Lodi Area
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
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
                  1. Tell us about your project
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Share your job details and equipment needs.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  2. We recommend the right equipment
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We help match your job with the right machine and rental setup.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  3. Schedule pickup or delivery
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get your equipment where you need it, when you need it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Contractor Resources */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h3 className="text-center font-heading text-lg font-bold text-foreground">
              Related Contractor Resources
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/dvbe-equipment-rental" className="text-sm text-primary hover:underline">DVBE Equipment Rental</Link>
              <Link href="/dvbe-participation" className="text-sm text-primary hover:underline">DVBE Participation Support</Link>
              <Link href="/for-contractors" className="text-sm text-primary hover:underline">Contractor Information</Link>
              <Link href="/utility-public-works" className="text-sm text-primary hover:underline">Utility & Public Works</Link>
              <Link href="/electric-skid-steer-salinas" className="text-sm text-primary hover:underline">Salinas Rentals</Link>
              <Link href="/electric-skid-steer-lodi" className="text-sm text-primary hover:underline">Lodi Rentals</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
              Check Availability
            </h2>
            <p className="mt-4 text-white/80">
              If you are looking for zero emission equipment rental in California, we can help you find the right solution for your project.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-lime text-primary hover:bg-lime/90">
                <Link href="/quote">
                  Check Availability
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">Contact for Bid Help</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
