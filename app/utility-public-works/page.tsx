import Link from "next/link";
import type { Metadata } from "next";
import {
  Zap,
  Volume2,
  ShieldCheck,
  Check,
  CheckCircle,
  ArrowRight,
  Phone,
  Building2,
  TreePine,
  Factory,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Equipment for Utility and Public Works | Zero Emission Rentals",
  description:
    "Electric equipment rentals for utility, public works, and compliance-driven jobs in California. Zero emission skid steers for PG&E, municipal, and urban work.",
  keywords: [
    "zero emission equipment rental California",
    "utility equipment rental electric",
    "public works electric equipment rental",
    "PG&E compliant equipment rental",
    "quiet equipment rental urban jobsites",
  ],
  alternates: {
    canonical: "https://frontline.rentals/utility-public-works",
  },
  openGraph: {
    title: "Electric Equipment for Utility and Public Works | Frontline EV Rentals",
    description:
      "Zero emission electric skid steers for PG&E, municipal, and compliance-driven work in California.",
    url: "https://frontline.rentals/utility-public-works",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electric Equipment Rental for Utility and Public Works",
  description:
    "Zero emission electric skid steer rentals for utility contractors, public works projects, and compliance-driven jobs in California.",
  provider: {
    "@type": "LocalBusiness",
    name: "Frontline EV Rentals",
    telephone: "(209) 470-6385",
    email: "alex@frontline.rentals",
  },
  areaServed: {
    "@type": "State",
    name: "California",
  },
};

const useCases = [
  {
    icon: Zap,
    title: "Utility Corridor Work",
    description:
      "Electric equipment for PG&E, utility maintenance, and infrastructure projects. Zero tailpipe emissions in public areas.",
  },
  {
    icon: Building2,
    title: "Municipal Projects",
    description:
      "Low-noise operation for city and county work. Meet local emissions requirements and work in public-facing areas.",
  },
  {
    icon: TreePine,
    title: "Vegetation Management",
    description:
      "Quiet operation for tree care and vegetation work near homes, schools, and businesses.",
  },
  {
    icon: Factory,
    title: "Urban Job Sites",
    description:
      "Work in downtown areas, residential neighborhoods, and noise-sensitive locations without disruption.",
  },
];

const whyElectric = [
  {
    title: "Zero Tailpipe Emissions",
    description:
      "No exhaust means you can work in enclosed spaces, near air intakes, and in areas with strict air quality requirements. Electric equipment meets the toughest emissions standards.",
  },
  {
    title: "Low Noise Operation",
    description:
      "Electric skid steers operate at a fraction of the noise level of diesel machines. Work near homes, schools, hospitals, and in noise-restricted hours without complaints.",
  },
  {
    title: "Access Restricted Sites",
    description:
      "Some utility and public works jobs require zero-emission equipment. Electric skid steers let you bid on and complete work that excludes diesel.",
  },
  {
    title: "Better Fit for Public-Facing Work",
    description:
      "Clean, quiet operation in areas where the public is present. No diesel fumes, less noise, and a cleaner image for your crew.",
  },
];

const projectTypes = [
  "PG&E and utility maintenance",
  "Substation and transformer work",
  "Street and sidewalk repair",
  "Park and recreation projects",
  "School and campus construction",
  "Hospital and healthcare facility work",
  "Water and sewer infrastructure",
  "Transit and transportation projects",
  "Downtown and urban infill",
  "Residential area work",
  "Night shift operations",
  "Indoor or enclosed-space jobs",
];

export default function UtilityPublicWorksPage() {
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
              <Zap className="h-4 w-4" />
              Zero Emission Equipment
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Electric Equipment Rentals for Utility, Public Works, and Compliance-Driven Jobs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Zero emission electric skid steers for PG&E, municipal projects, and urban work. Low noise, no exhaust, and DVBE certified.
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
            <p className="mt-4 text-sm text-white/80">
              Available now from Salinas and Lodi. Call or message us to check current fleet availability.
            </p>
          </div>
        </Container>
      </section>

      {/* Ready for Compliance-Driven Jobs */}
      <section className="border-b border-lime/30 bg-lime/10 py-8">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lime">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Ready for Compliance-Driven Jobs
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Our electric skid steers are in fleet, charged, tested, and available now. Zero emission, low noise, and ready for utility, public works, and urban job sites.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild>
                  <a href={COMPANY.phoneHref}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/quote">Check Availability</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Built for Jobs Where Diesel Is a Problem
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Electric skid steers solve real problems on utility, public works, and urban job sites.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {useCases.map((item) => (
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
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Electric */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Electric Equipment for Utility Work
            </h2>
            <div className="mt-10 space-y-6">
              {whyElectric.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Project Types */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Project Types We Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Electric skid steers are the right fit for these compliance-driven and public-facing jobs
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projectTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Equipment Available
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
              Zero emission electric skid steers from Salinas and Lodi
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {equipment.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.type}</p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="h-4 w-4 text-success" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-2xl font-bold text-primary">
                    ${item.dailyRate}
                    <span className="text-base font-normal text-muted-foreground">
                      /day
                    </span>
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

      {/* DVBE + Service Area */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* DVBE */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    DVBE Certified
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Frontline EV Rentals is a California DVBE-certified business. Equipment rental costs can count toward DVBE participation goals on qualifying public works projects.
                </p>
                <p className="mt-4 font-mono text-sm text-muted-foreground">
                  CA Certification ID:{" "}
                  <span className="font-semibold text-foreground">#2048632</span>
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/dvbe-equipment-rental">DVBE Information</Link>
                </Button>
              </div>

              {/* Service Area */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Serving California
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Equipment available from our yards in Salinas and Lodi. Free pickup or delivery throughout California.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Salinas", "Lodi", "Bay Area", "Sacramento", "Central Valley"].map(
                    (area) => (
                      <span
                        key={area}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/contact">Contact for Delivery</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 lg:py-24">
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
                  Tell Us Your Project
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Describe the job, location, and any compliance requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Get the Right Machine
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We help match equipment to your project needs and timeline.
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
                  Free pickup from Salinas or Lodi, or delivery to your site.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBand
        headline="Need Electric Equipment for a Compliance-Driven Job?"
        subhead="Tell us about your project. We will help you find the right machine."
        ctaLabel="Check Availability"
        ctaHref="/quote"
        secondaryCtaLabel="Get a Quote"
        secondaryCtaHref="/quote"
      />
    </>
  );
}
