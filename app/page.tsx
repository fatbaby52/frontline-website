import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  MapPin,
  Check,
  Zap,
  Volume2,
  ShieldCheck,
  Truck,
  Building2,
  TreePine,
  GraduationCap,
  Hospital,
  Factory,
  Home,
  Ban,
  Leaf,
  Users,
  Briefcase,
  HardHat,
  Wrench,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rental Salinas and Lodi California | Frontline EV Rentals",
  description:
    "Rent electric skid steers in Salinas and Lodi, California. Zero emissions, low noise. DVBE certified for public works and utility contractors. Free pickup.",
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
      name: "Frontline EV Rentals",
      description:
        "Electric skid steer rentals for California contractors. Zero emissions, low noise equipment for compliance-driven jobs. DVBE certified.",
      url: "https://frontline.rentals",
      telephone: "(209) 470-6385",
      email: "alex@frontline.rentals",
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
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "DVBE Certified",
          description: "Disabled Veteran Business Enterprise - California #2048632",
        },
      ],
    },
    {
      "@type": "Product",
      name: "FirstGreen Elise 1200 Electric Skid Steer",
      description:
        "Electric skid steer with enclosed cab. 1,200 lb capacity. Zero emissions, full-day battery life.",
      brand: { "@type": "Brand", name: "FirstGreen" },
      offers: {
        "@type": "Offer",
        price: "525",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "FirstGreen Elise 1200 CBL Electric Skid Steer",
      description:
        "Cabless electric skid steer with open operator station. 1,200 lb capacity. Zero emissions, full-day battery life.",
      brand: { "@type": "Brand", name: "FirstGreen" },
      offers: {
        "@type": "Offer",
        price: "450",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const valueProps = [
  {
    icon: Zap,
    title: "Zero Emissions",
    description:
      "Ideal for compliance-driven jobs and locations where diesel is a problem.",
  },
  {
    icon: Volume2,
    title: "Low Noise",
    description:
      "Great for urban work, schools, hospitals, campuses, and sensitive job sites.",
  },
  {
    icon: ShieldCheck,
    title: "DVBE Value",
    description:
      "Supports participation goals for public contracts and procurement efforts.",
  },
  {
    icon: Truck,
    title: "Delivery and Flexibility",
    description:
      "Equipment available from Salinas and Lodi with practical rental options.",
  },
];

const useCases = [
  { icon: Zap, text: "Utility and PG&E work" },
  { icon: Building2, text: "Public works projects" },
  { icon: Factory, text: "Urban job sites" },
  { icon: GraduationCap, text: "School and campus work" },
  { icon: Hospital, text: "Hospital or low-noise environments" },
  { icon: Home, text: "Indoor or enclosed-space applications" },
  { icon: Ban, text: "Jobs with emissions restrictions" },
  { icon: Leaf, text: "Contractors pursuing cleaner fleet options" },
];

const whoWeHelp = [
  { icon: HardHat, text: "Contractors" },
  { icon: TreePine, text: "Tree care and vegetation management companies" },
  { icon: Zap, text: "Utility contractors" },
  { icon: Building2, text: "Public works vendors" },
  { icon: Briefcase, text: "Municipal buyers" },
  { icon: Users, text: "General contractors needing specialized equipment" },
  { icon: ShieldCheck, text: "Teams pursuing DVBE participation value" },
];

const whyFrontline = [
  "Electric-focused fleet",
  "Real zero-emission option",
  "DVBE-certified business",
  "Practical service from Salinas and Lodi",
  "Better fit for compliance-driven work",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="Electric Skid Steer Rentals in Salinas and Lodi"
        subhead="Zero-emission equipment for PG&E, public works, and urban jobsites. Quiet, powerful, and ready to go."
        primaryCta={{ label: "Check Availability", href: "/quote" }}
        secondaryCta={{ label: "Get a Quote", href: "/quote" }}
        badges={["Delivery Available", "DVBE Certified", "Zero-Emission Equipment"]}
        serviceArea="Serving Salinas, Monterey County, Lodi, and surrounding California markets."
        backgroundImage="/images/fleet-hero.png"
      />

      {/* Why Contractors Choose Frontline */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Contractors Choose Frontline
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Available Equipment */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Available Equipment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Electric skid steers ready for pickup or delivery
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {equipment.map((item) => (
              <div
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="aspect-[16/10] bg-muted relative">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={`${item.name} electric skid steer available for rent in California`}
                      className="h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-lime px-3 py-1 text-sm font-bold text-primary">
                      {item.unitsAvailable} Available
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-primary">{item.type}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.tagline}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${item.dailyRate}
                    </span>
                    <span className="text-muted-foreground">/day</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-success" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href="/quote">Check Availability</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/equipment/${item.slug}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/equipment">
                View All Equipment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Built for Jobs Where Diesel Is a Problem */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Built for Jobs Where Diesel Is a Problem
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase.text}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <useCase.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {useCase.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Work With */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Who We Work With
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whoWeHelp.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Rent Electric Equipment? */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Rent Electric Equipment?
            </h2>
            <div className="mt-10 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Lower Noise
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Electric skid steers operate at a fraction of the noise level of diesel machines. Work near schools, hospitals, residential areas, and other noise-sensitive locations without complaints or restrictions.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Zero Tailpipe Emissions
                </h3>
                <p className="mt-2 text-muted-foreground">
                  No exhaust means you can work indoors, in enclosed spaces, and in areas with strict air quality requirements. Electric equipment meets the toughest emissions standards.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Access More Job Sites
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Some projects require zero-emission equipment. Electric skid steers let you bid on and work jobs that exclude diesel equipment entirely.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Better Fit for Public and Utility Work
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Many utility and public works contracts prefer or require low-emission equipment. Electric skid steers help you meet those requirements without compromise on power or runtime.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Frontline Instead of a Generic Rental Yard? */}
      <section className="bg-primary py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Why Frontline Instead of a Generic Rental Yard?
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyFrontline.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white/10 p-4"
                >
                  <Check className="h-5 w-5 shrink-0 text-lime" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How It Works
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Tell Us About Your Job
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us what job you are working on and when you need equipment.
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
                  We help match the right machine and rental term for your project.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Pick Up or Schedule Delivery
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick up from Salinas or Lodi, or we can arrange delivery to your site.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Serving Salinas, Lodi, and California Job Sites
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals serves contractors and equipment renters in Salinas, Monterey County, Lodi, San Joaquin County, and surrounding California markets. Delivery available throughout the state.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              {[
                { city: "Salinas", region: "Central Coast / Monterey County" },
                { city: "Lodi", region: "Central Valley / San Joaquin County" },
              ].map((location) => (
                <div key={location.city} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-xl font-bold text-foreground">
                      {location.city}
                    </p>
                    <p className="text-muted-foreground">{location.region}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Bay Area",
                "Sacramento",
                "Fresno",
                "Los Angeles",
                "Stockton",
                "Modesto",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/salinas-rentals">
                  Salinas Rentals
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/lodi-rentals">
                  Lodi Rentals
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBand
        headline="Need Electric Equipment for Your Next Job?"
        subhead="Tell us what you need and we will help you find the right machine and rental setup."
        ctaLabel="Check Availability"
        ctaHref="/quote"
        secondaryCtaLabel="Get a Quote"
        secondaryCtaHref="/quote"
      />
    </>
  );
}
