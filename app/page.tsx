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
  Camera,
  ClipboardList,
  MessageSquare,
  HelpCircle,
  Fuel,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SearchBar } from "@/components/sections/search-bar";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zero Emission Construction Equipment Rentals California | Frontline EV Rentals",
  description:
    "Zero emission construction equipment rentals in California. Electric skid steers and excavators ready now. DVBE certified for public works and utility contractors.",
  keywords: [
    "zero emission construction equipment rental California",
    "electric skid steer rental California",
    "electric excavator rental California",
    "DVBE equipment rental California",
    "electric equipment for public works",
    "electric equipment for utility jobs",
    "zero emission equipment rental",
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
        "Zero emission construction equipment rentals for California contractors. Electric skid steers and excavators for compliance-driven jobs. DVBE certified. Equipment ready now from Salinas and Lodi.",
      url: "https://frontline.rentals",
      telephone: "(831) 262-2847",
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
          description: "Disabled Veteran Business Enterprise - California #2048623",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "California Certified Small Business",
          description: "California Department of General Services Small Business (SB) certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "SDVOSB (Self-Certified)",
          description: "Service-Disabled Veteran-Owned Small Business, self-certified on SAM.gov",
        },
      ],
    },
    {
      "@type": "Product",
      name: "FirstGreen Elise 1200 Electric Skid Steer",
      description:
        "Electric skid steer with enclosed cab. 1,200 kg capacity. Zero emissions, full-day battery life. Ready now.",
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
        "Cabless electric skid steer with open operator station. 1,200 kg capacity. Zero emissions, full-day battery life. Ready now.",
      brand: { "@type": "Brand", name: "FirstGreen" },
      offers: {
        "@type": "Offer",
        price: "450",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "JCB 19C-1E Electric Mini Excavator",
      description:
        "Zero emission mini excavator. 2-ton class, full-day battery life. 67% quieter than diesel. Ready now.",
      brand: { "@type": "Brand", name: "JCB" },
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

const faqItems = [
  {
    question: "How quickly can I get a machine?",
    answer: "If equipment is available, same-day pickup is possible from Salinas or Lodi. Delivery typically takes 1-2 days depending on location.",
  },
  {
    question: "What is included in the rental?",
    answer: "The machine arrives fully charged with a full day of runtime. We also include one heavy-duty extension cord, a laminated charging instruction card, standard bucket or forks, operator orientation, and equipment manual. Free yard pickup from Salinas or Lodi. Delivery is available for an additional fee.",
  },
  {
    question: "Do I need to charge the machine at my job site?",
    answer: "For single-day rentals, no. We deliver the machine fully charged with a full day of runtime. Use it and return it at 10% battery or above. For multi-day rentals, we include one extension cord and a charging instruction card. Plug into a standard 120V outlet and charge between shifts whenever the machine is not in use. If you have a 240V outlet available, charging is significantly faster. Contact us before your rental and we can walk you through the best charging setup for your site.",
  },
  {
    question: "How long does it take to charge?",
    answer: "Charge time depends on your power source and how much of the battery you used. A standard 120V outlet provides a steady charge, and the machine should be plugged in whenever it's not working. A 240V outlet charges significantly faster. We'll go over charging details with you at pickup or delivery so you know what to expect for your specific job.",
  },
  {
    question: "Do you deliver statewide?",
    answer: "Yes. We deliver throughout California. Delivery fees are quoted based on distance from our Salinas or Lodi locations.",
  },
  {
    question: "Can I use Frontline for DVBE participation?",
    answer: "Yes. Frontline is DVBE-certified (CA #2048623). Rental costs can count toward your DVBE participation goal on California public projects.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="Zero-emission equipment. Ready now."
        subhead="Electric skid steers and excavators for construction equipment rentals across California. They arrive fully charged. No diesel costs, no fumes, no noise. Ready to go."
        primaryCta={{ label: "Check Availability", href: "/quote" }}
        secondaryCta={{ label: "Get a Quote", href: "/quote" }}
        badges={["Ready Now", "DVBE Certified", "Fuel Included"]}
        serviceArea="Serving Salinas, Monterey County, Lodi, and surrounding California markets."
        backgroundImage="/images/fleet-hero.png"
        microcopy={`Available now. Call ${COMPANY.phone} or message us to check current fleet availability.`}
      />

      {/* AI Search Assistant */}
      <SearchBar />

      {/* Direct Contact Strip */}
      <section className="border-b-[3px] border-ink bg-lime">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-5 py-5">
            <div className="flex items-center gap-4">
              <span className="border-2 border-ink px-2.5 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
                Direct Line
              </span>
              <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-ink">
                Ready to rent?
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={COMPANY.smsHref}>
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Ready Now Strip */}
      <section className="border-b-2 border-border bg-concrete-2 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-lime">
                <CheckCircle className="h-6 w-6 text-ink" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
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

      {/* DVBE Partner Authority Line */}
      <section className="border-b-2 border-border bg-primary/[0.04] py-4">
        <Container>
          <p className="text-center font-mono text-[0.72rem] uppercase tracking-[0.06em] leading-relaxed text-muted-foreground">
            <ShieldCheck className="mr-2 inline-block h-4 w-4 text-primary" />
            Frontline works with contractors and project teams as a DVBE-certified partner, providing electric equipment and other real project services for California public work.
          </p>
        </Container>
      </section>

      {/* How to Rent Quickly */}
      <section className="border-b-2 border-border py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold uppercase tracking-[0.01em] text-foreground lg:text-4xl">
              How to Rent Quickly
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us your job location, the dates you need the machine, and whether you want cab or cabless.
            </p>
            <p className="mt-2 text-muted-foreground">
              We will confirm availability and get you a quote right away.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={COMPANY.smsHref}>
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quote">Request Quote Online</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Need a Machine Today? */}
      <section className="border-y-[3px] border-ink bg-primary py-12 text-on-dark lg:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-heading text-3xl font-semibold uppercase tracking-[0.01em] text-white lg:text-4xl">
                  Need a Machine Today?
                </h2>
                <p className="mt-3 text-on-dark/80">
                  If you need an electric skid steer quickly, contact us now to check availability. Our fleet is charged, tested, and ready for work.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Real machines in fleet",
                    "Pickup or delivery options",
                    "Fast response on availability",
                    "Salinas and Lodi service points",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-left font-mono text-xs font-bold uppercase tracking-[0.08em] text-on-dark">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center bg-lime" aria-hidden="true">
                        <Check className="h-3 w-3 text-ink" strokeWidth={3.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" variant="lime">
                  <a href={COMPANY.phoneHref}>
                    <Phone className="h-5 w-5" />
                    Call {COMPANY.phone}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:bg-white/10 hover:text-on-dark">
                  <a href={COMPANY.smsHref}>
                    <MessageSquare className="h-5 w-5" />
                    Text Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Contractors Choose Frontline */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 01 — THE ADVANTAGE
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Why Contractors Choose Frontline
            </h2>
          </div>
          <div className="grid border-l-[3px] border-t-[3px] border-ink sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="group min-h-[280px] border-b-[3px] border-r-[3px] border-ink bg-paper p-7 pb-10 transition-colors duration-250 hover:bg-lime"
              >
                <div className="font-heading text-4xl font-semibold leading-none text-ink/15 transition-colors duration-250 group-hover:text-ink">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-5 flex h-12 w-12 items-center justify-center border-2 border-ink text-primary transition-colors duration-250 group-hover:bg-paper group-hover:text-ink">
                  <prop.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide leading-tight text-ink">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground transition-colors duration-250 group-hover:text-ink">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost Comparison */}
      <section className="border-y-[3px] border-lime bg-ink py-16 text-on-dark lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
                // 02 — TRUE COST OF OWNERSHIP
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-white lg:text-5xl">
                Your Real Rental Cost Is Lower Than You Think
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="text-on-dark/70 leading-relaxed">
                A diesel skid steer burns about two gallons an hour. Over an eight-hour day at California prices, that is roughly $90 to $100 in fuel, every working day, on top of the rate. Most yards also expect it back full.
              </p>
              <p className="mt-4 text-on-dark/70 leading-relaxed">
                Your Frontline machine shows up fully charged, so day one runs on us. After that, recharge overnight from a standard outlet for about $25 to $35 a day, and return it at any charge. No refueling, no top-off.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-0">
              {/* Diesel Side */}
              <div className="border-2 border-on-dark/15 bg-ink-2 p-8">
                <div className="mb-6 flex items-center gap-4 border-b border-on-dark/15 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-on-dark/15 text-on-dark/70">
                    <Fuel className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white">Diesel Rental</h3>
                    <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-on-dark/60">Conventional</p>
                  </div>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-on-dark/70">Fuel per working day</span>
                  <span className="font-heading text-2xl font-medium text-white">$90–$100</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-on-dark/70">Return full?</span>
                  <span className="font-heading text-xl font-medium text-white">Usually required</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t-2 border-on-dark/15 pt-5">
                  <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] text-on-dark">Over a 5-day week</span>
                  <span className="font-heading text-3xl font-semibold text-white">$450–$500</span>
                </div>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center py-2 sm:px-7 sm:py-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime font-heading text-lg font-bold text-lime">
                  VS
                </span>
              </div>

              {/* Frontline Side */}
              <div className="border-2 border-lime bg-lime/[0.06] p-8">
                <div className="mb-6 flex items-center gap-4 border-b border-lime/30 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-lime text-lime">
                    <Zap className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white">Frontline Electric</h3>
                    <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-on-dark/60">Zero-Emission</p>
                  </div>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-on-dark/70">Day one, delivered full</span>
                  <span className="font-heading text-2xl font-medium text-lime">$0</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-on-dark/70">Recharge per added day</span>
                  <span className="font-heading text-2xl font-medium text-white">$25–$35</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t-2 border-lime pt-5">
                  <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] text-on-dark">Over a 5-day week</span>
                  <span className="font-heading text-3xl font-semibold text-lime">$100–$140</span>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-2xl text-center">
              <p className="text-on-dark/70 leading-relaxed">
                Delivered full and returned however you like. Over a 5-day week your machine runs on about $100 to $140 of electricity, against $450 to $500 of diesel.
              </p>
              <p className="mt-5 font-heading text-2xl font-semibold uppercase tracking-[0.01em] leading-tight text-lime lg:text-3xl">
                That&apos;s roughly $310 to $400 back in your pocket, every week.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Available Equipment */}
      <section className="border-t-2 border-border bg-concrete py-20 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 03 — IN FLEET
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Available Equipment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Electric skid steers in fleet and ready for pickup or delivery
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {equipment.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col border-[3px] border-ink bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:[box-shadow:10px_10px_0_var(--primary)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden border-b-[3px] border-ink bg-concrete-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={`${item.name} electric skid steer available for rent in Salinas and Lodi California`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-x-0 top-0 flex justify-between">
                    <span className="border-b-[3px] border-r-[3px] border-ink bg-lime px-3 py-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-ink">
                      Ready Now
                    </span>
                    <span className="border-b-[3px] border-l-[3px] border-ink bg-ink px-3 py-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-lime">
                      {item.unitsAvailable} Available
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-primary">{item.type}</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-wide leading-none text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.tagline}
                  </p>
                  <p className="mt-2.5 text-sm font-semibold text-foreground">
                    {item.bestFor}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t-2 border-border pt-5">
                    <span className="font-heading text-xl font-medium text-muted-foreground/70 line-through">
                      ${item.dailyRate}/day
                    </span>
                    <span className="bg-lime px-2.5 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.1em] text-ink">
                      Fuel Included
                    </span>
                  </div>
                  <div className="mt-3.5 flex flex-wrap items-baseline gap-2 border-2 border-ink bg-ink px-4 py-3.5">
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-lime">For a limited time:</span>
                    <span className="font-heading text-3xl font-semibold leading-none text-white">{item.slug === "elise-1200" ? "$1,200" : "$1,000"}</span>
                    <span className="font-mono text-xs text-on-dark/70">/week</span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.04em] text-muted-foreground">
                    Free pickup from Salinas or Lodi. Delivery available statewide.
                  </p>
                  <div className="mt-5 flex gap-3 pt-1">
                    <Button asChild variant="lime" className="flex-1">
                      <Link href="/quote">Check Availability</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/equipment/${item.slug}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Ready to rent? Contact us now.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={COMPANY.smsHref}>
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Real Fleet, Ready Now */}
      <section className="border-y-[3px] border-ink bg-teal-dark text-on-dark">
        <div className="grid min-h-[520px] items-stretch lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[340px] border-b-[3px] border-lime lg:border-b-0 lg:border-r-[3px]">
            <Image
              src="/images/fleet-hero.png"
              alt="Frontline EV Rentals electric skid steer fleet available in Salinas and Lodi, California"
              fill
              className="object-cover [filter:contrast(1.03)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-dark/40"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14">
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
              <span className="inline-block h-0.5 w-6 bg-lime" aria-hidden="true" />
              On Hand · Not Brokered
            </p>
            <h2 className="mt-5 font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.94] text-white lg:text-5xl">
              Real Fleet. Ready Now.
            </h2>
            <p className="mt-5 max-w-md text-on-dark/75 leading-relaxed">
              Frontline EV Rentals is not brokering equipment or taking inquiries for future inventory. Our electric skid steers are in fleet, on hand, and ready for real jobs.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Charged and tested",
                "Available now",
                "Based in Salinas and Lodi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3.5">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center bg-lime" aria-hidden="true">
                    <Check className="h-3 w-3 text-ink" strokeWidth={3.5} />
                  </span>
                  <span className="font-mono text-[0.82rem] font-bold uppercase tracking-[0.1em] text-on-dark">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Button asChild size="lg" variant="lime">
                <Link href="/quote">Check Availability</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:bg-white/10 hover:text-on-dark">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5" />
                  {COMPANY.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 04 — THE YARD
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Our Fleet Up Close
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Real equipment, real photos. See the FirstGreen Elise 1200 electric skid steers in our fleet.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/images/PXL_20260403_233921526.MP.jpg", alt: "FirstGreen Elise 1200 CBL electric skid steer side view" },
                { src: "/images/PXL_20260403_234229515.MP.jpg", alt: "Frontline fleet showing cab and cabless electric skid steers" },
                { src: "/images/PXL_20260404_200616878.MP.jpg", alt: "Operator inside FirstGreen Elise 1200 enclosed cab" },
                { src: "/images/PXL_20260404_195141829.jpg", alt: "Digital display showing battery level and operating status" },
                { src: "/images/PXL_20260404_195951934.jpg", alt: "Climate control panel with A/C in enclosed cab" },
                { src: "/images/PXL_20260404_195147749.jpg", alt: "Ergonomic joystick controls with function buttons" },
                { src: "/images/PXL_20260403_234048678.jpg", alt: "FirstGreen Elise 1200 enclosed cab model front view" },
                { src: "/images/PXL_20260403_233930808.MP.jpg", alt: "Electric skid steer rear view showing battery and controls" },
                { src: "/images/PXL_20260403_233952509.MP.jpg", alt: "FirstGreen Elise 1200 CBL front view with bucket" },
              ].map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden border-2 border-ink bg-paper"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <p className="mt-7 text-center font-mono text-[0.68rem] uppercase tracking-[0.06em] text-muted-foreground">
              Photos taken at our Salinas location. Equipment available for pickup or delivery throughout California.
            </p>
          </div>
        </Container>
      </section>

      {/* Common Rental Needs */}
      <section className="border-t-2 border-border py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 05 — FIT
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Common Rental Needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Electric skid steers are a practical fit for these job types
            </p>
            <div className="mt-12 grid border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
              {commonRentalNeeds.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3.5 border-b-2 border-r-2 border-ink bg-paper p-5 transition-colors duration-200 hover:bg-lime"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-foreground">{need}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Built for Real Jobs */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 06 — IN THE FIELD
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Built for Real Jobs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Our fleet is ready for practical field use, including:
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {builtForRealJobs.map((job) => (
                <div
                  key={job}
                  className="flex items-center gap-3.5 border-2 border-border bg-teal-light p-5"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{job}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Work With */}
      <section className="border-y-2 border-border bg-concrete-2 py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 07 — CUSTOMERS
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Who We Work With
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whoWeHelp.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3.5 border-2 border-ink bg-paper p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-ink text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Frontline Instead of a Generic Rental Yard? */}
      <section className="border-y-[3px] border-ink bg-ink py-20 text-on-dark lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
                // 08 — THE DIFFERENCE
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-white lg:text-5xl">
                Why Frontline Instead of a Generic Rental Yard?
              </h2>
            </div>
            <div className="mt-14 grid border-l-2 border-t-2 border-on-dark/15 sm:grid-cols-2 lg:grid-cols-3">
              {whyFrontline.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-[170px] items-start gap-4 border-b-2 border-r-2 border-on-dark/15 p-8 transition-colors duration-250 hover:bg-ink-2"
                >
                  <span className="pt-1 font-mono text-xs font-bold tracking-[0.14em] text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-lg font-medium uppercase leading-[1.12] tracking-[0.01em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 09 — PROCESS
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              How It Works
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Tell Us About Your Job",
                  body: "Tell us what job you are working on and when you need equipment.",
                },
                {
                  step: "2",
                  title: "Get Matched",
                  body: "We help match the right machine and rental term for your project.",
                },
                {
                  step: "3",
                  title: "Pick Up or Schedule Delivery",
                  body: "Pick up from Salinas or Lodi, or we can arrange delivery to your site.",
                },
              ].map((item) => (
                <div key={item.step} className="border-t-[3px] border-ink pt-6">
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-ink bg-ink font-heading text-2xl font-semibold text-lime">
                    {item.step}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold uppercase tracking-wide leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
              // 10 — COVERAGE
            </p>
            <h2 className="mt-4 text-center font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
              Where We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Free pickup from Salinas or Lodi. Delivery available throughout California.
            </p>

            {/* Primary Service Points */}
            <div className="mt-12">
              <h3 className="mb-6 text-center font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
                Primary Service Points
              </h3>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                {[
                  { city: "Salinas", region: "Central Coast / Monterey County", href: "/salinas-rentals" },
                  { city: "Lodi", region: "Central Valley / San Joaquin County", href: "/lodi-rentals" },
                ].map((location) => (
                  <Link
                    key={location.city}
                    href={location.href}
                    className="group flex items-center gap-4 border-2 border-ink bg-paper p-5 transition-all duration-200 hover:-translate-y-1 hover:[box-shadow:6px_6px_0_var(--primary)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-primary text-white">
                      <MapPin className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="text-left">
                      <p className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">
                        {location.city}
                      </p>
                      <p className="text-sm text-muted-foreground">{location.region}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Common Delivery Regions */}
            <div className="mt-12">
              <h3 className="mb-6 text-center font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
                Common Delivery Regions
              </h3>
              <div className="flex flex-wrap justify-center gap-2.5">
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
                    className="border border-border bg-paper px-3.5 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-[0.08em]">
              <Link href="/electric-skid-steer-salinas" className="text-primary hover:underline">
                Electric Skid Steer Rental Salinas
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/electric-skid-steer-lodi" className="text-primary hover:underline">
                Electric Skid Steer Rental Lodi
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/zero-emission-equipment-california" className="text-primary hover:underline">
                Zero Emission Equipment California
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* DVBE Certified */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="mb-5 inline-flex items-center gap-2 border-2 border-ink bg-lime px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink">
                <ShieldCheck className="h-4 w-4" />
                CA Certification #2048623
              </div>
              <h2 className="font-heading text-4xl font-semibold uppercase tracking-[0.01em] leading-[0.96] text-foreground lg:text-5xl">
                DVBE Certified Equipment Rental
              </h2>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
              Frontline EV Rentals is a DVBE-certified business. Equipment rental costs can count toward your DVBE participation goal on California public projects.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Equipment rental for public works and utility projects",
                "Documentation and certification letters on request",
                "Legitimate participation tied to real project scope",
                "Fast response for bid support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3.5 border-2 border-ink bg-paper p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-2xl border-l-[3px] border-lime bg-concrete-2 p-5">
              <p className="text-center font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.06em] text-muted-foreground">
                Frontline does not provide pass-through participation. Services are based on actual project needs.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/dvbe-participation">
                  DVBE Information
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y-2 border-border bg-concrete-2 py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                // 11 — ANSWERS
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-3xl font-semibold uppercase tracking-[0.01em] text-foreground lg:text-4xl">
                  Common Questions
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="border-l-[3px] border-ink bg-paper p-6">
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Contractor Resources */}
      <section className="py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h3 className="text-center font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Related Contractor Resources
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-[0.08em]">
              <Link href="/dvbe-equipment-rental" className="text-primary hover:underline">DVBE Equipment Rental</Link>
              <Link href="/dvbe-participation" className="text-primary hover:underline">DVBE Participation Support</Link>
              <Link href="/for-contractors" className="text-primary hover:underline">Contractor Information</Link>
              <Link href="/zero-emission-equipment-california" className="text-primary hover:underline">Zero Emission Equipment CA</Link>
              <Link href="/utility-public-works" className="text-primary hover:underline">Utility & Public Works</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t-[3px] border-lime bg-primary py-20 text-on-dark lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
              <span className="inline-block h-0.5 w-6 bg-lime" aria-hidden="true" />
              Ready When You Are
            </p>
            <h2 className="mt-5 font-heading text-5xl font-semibold uppercase tracking-[0.01em] leading-[0.94] text-white lg:text-6xl">
              Ready to Rent?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-on-dark/80">
              Tell us your job location and dates. We will confirm availability and get you a quote.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="lime">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Call {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:bg-white/10 hover:text-on-dark">
                <a href={COMPANY.smsHref}>
                  <MessageSquare className="h-5 w-5" />
                  Text Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:bg-white/10 hover:text-on-dark">
                <Link href="/quote">
                  Request Quote
                </Link>
              </Button>
            </div>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-on-dark/65">
              Equipment ready now from Salinas and Lodi. Fast response on availability.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
