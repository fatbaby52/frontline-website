import Link from "next/link";
import Image from "next/image";
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
  Phone,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rental Salinas and Lodi California | Ready Now | Frontline EV Rentals",
  description:
    "Electric skid steer rental in Salinas and Lodi, California. Zero emission equipment ready now. DVBE certified for public works and utility contractors. Charged, tested, available today.",
  keywords: [
    "electric skid steer rental Salinas",
    "electric skid steer rental Lodi",
    "zero emission equipment rental California",
    "DVBE equipment rental California",
    "electric equipment for public works",
    "electric equipment for utility jobs",
    "Monterey County electric equipment rental",
  ],
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
        "Electric skid steer rentals for California contractors. Zero emissions, low noise equipment for compliance-driven jobs. DVBE certified. Equipment ready now from Salinas and Lodi.",
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
        "Electric skid steer with enclosed cab. 1,200 lb capacity. Zero emissions, full-day battery life. Ready now.",
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
        "Cabless electric skid steer with open operator station. 1,200 lb capacity. Zero emissions, full-day battery life. Ready now.",
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

const whyFrontline = [
  "Electric-focused fleet, not a side category",
  "Zero-emission equipment ready for compliance-driven jobs",
  "DVBE-certified business",
  "Practical service from Salinas and Lodi",
  "Better fit for utility, public works, and urban job sites",
  "Straightforward help choosing the right machine",
];

const commonRentalNeeds = [
  "Tight-access work",
  "Low-noise job sites",
  "Emissions-sensitive locations",
  "Utility and public works support",
  "Vegetation management and site cleanup",
  "Indoor or enclosed-space applications",
];

const builtForRealJobs = [
  "Utility and vegetation management work",
  "Public works projects",
  "Urban and low-noise job sites",
  "School, campus, and hospital environments",
  "Jobs with emissions restrictions",
  "Contractors looking for cleaner equipment options",
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
        badges={["Ready Now", "DVBE Certified", "Zero-Emission Equipment"]}
        serviceArea="Serving Salinas, Monterey County, Lodi, and surrounding California markets."
        backgroundImage="/images/fleet-hero.png"
        microcopy={`Available now. Call ${COMPANY.phone} or message us to check current fleet availability.`}
      />

      {/* Ready Now Strip */}
      <section className="border-b border-lime/30 bg-lime/10 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  Charged, Tested, and Ready to Work
                </p>
                <p className="text-sm text-muted-foreground">
                  Our electric skid steers are in fleet, ready now, and available for pickup or delivery from Salinas and Lodi.
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/quote">Check Availability</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Need a Machine Today? */}
      <section className="bg-primary py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                  Need a Machine Today?
                </h2>
                <p className="mt-3 text-white/80">
                  If you need an electric skid steer quickly, contact us now to check availability. Our fleet is charged, tested, and ready for work.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Real machines in fleet",
                    "Pickup or delivery options",
                    "Fast response on availability",
                    "Salinas and Lodi service points",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90">
                      <Check className="h-4 w-4 text-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" className="bg-lime text-primary hover:bg-lime/90">
                  <a href={COMPANY.phoneHref}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/quote">Check Availability</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
              Electric skid steers in fleet and ready for pickup or delivery
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
                      alt={`${item.name} electric skid steer available for rent in Salinas and Lodi California`}
                      className="h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
                      Ready Now
                    </span>
                  </div>
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
                  <p className="mt-4 text-xs text-muted-foreground">
                    Free pickup from Salinas or Lodi. Delivery available statewide.
                  </p>
                  <div className="mt-4 flex gap-3">
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
          <p className="mt-8 text-center text-muted-foreground">
            Call or message for current availability: <a href={COMPANY.phoneHref} className="font-semibold text-primary hover:underline">{COMPANY.phone}</a>
          </p>
        </Container>
      </section>

      {/* Real Fleet, Ready Now */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/fleet-hero.png"
                  alt="Frontline EV Rentals electric skid steer fleet available in Salinas and Lodi, California"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                  Real Fleet. Ready Now.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Frontline EV Rentals is not brokering equipment or taking inquiries for future inventory. Our electric skid steers are in fleet, on hand, and ready for real jobs.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Charged and tested",
                    "Available now",
                    "Based in Salinas and Lodi",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/quote">Check Availability</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={COMPANY.phoneHref}>
                      <Phone className="h-5 w-5" />
                      {COMPANY.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Rental Needs */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Common Rental Needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Electric skid steers are a practical fit for these job types
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {commonRentalNeeds.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{need}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Built for Real Jobs */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Built for Real Jobs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Our fleet is ready for practical field use, including:
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {builtForRealJobs.map((job) => (
                <div
                  key={job}
                  className="flex items-center gap-3 rounded-lg bg-teal-light p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{job}</span>
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

      {/* Why Frontline Instead of a Generic Rental Yard? */}
      <section className="bg-primary py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Why Frontline Instead of a Generic Rental Yard?
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyFrontline.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white/10 p-4 text-left"
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
              Serving Salinas, Monterey County, Lodi, and Surrounding California Markets
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals provides electric skid steer rentals and zero-emission equipment access from Salinas and Lodi. We work with contractors, utilities, public works vendors, and other California customers who need quiet, electric equipment.
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
                "Monterey County",
                "San Joaquin County",
                "Santa Cruz",
                "San Jose",
                "Bay Area",
                "Sacramento",
                "Stockton",
                "Fresno",
                "Northern California",
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
      <section className="bg-primary py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Need Electric Equipment for Your Next Job?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Tell us what job you are working on and we will help you find the right machine and rental setup.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" className="bg-lime text-primary hover:bg-lime/90">
                <Link href="/quote">
                  Check Availability
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Call {COMPANY.phone}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Our fleet is in service and ready now from Salinas and Lodi. Fast response on availability questions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
