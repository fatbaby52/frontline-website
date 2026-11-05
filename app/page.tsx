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
  Users,
  Briefcase,
  HardHat,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SearchBar } from "@/components/sections/search-bar";
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

const h2Class = "font-heading text-3xl font-bold text-foreground lg:text-4xl";

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
        subhead="Electric skid steers and excavators for construction equipment rentals across California. Fully charged. No diesel, no fumes, no noise."
        primaryCta={{ label: "Check Availability", href: "/quote" }}
        badges={["Ready Now", "DVBE Certified", "Fuel Included"]}
        serviceArea="Serving Salinas, Monterey County, Lodi, and surrounding California markets."
        backgroundImage="/images/PXL_20260403_233921526.MP.jpg"
        microcopy={`Available now. Call ${COMPANY.phone} or message us to check current fleet availability.`}
      />

      {/* AI Search Assistant */}
      <SearchBar />

      {/* Ready Now + DVBE authority line */}
      <section className="pb-14">
        <Container>
          <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-heading text-xl font-semibold text-foreground">
                  Charged, Tested, and Ready to Work
                </p>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Our electric skid steers are in fleet, ready now, and available for pickup or delivery from Salinas and Lodi.
                </p>
              </div>
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/quote">Check Availability</Link>
              </Button>
            </div>
            <p className="mt-6 flex items-start gap-2.5 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Frontline works with contractors and project teams as a DVBE-certified partner, providing electric equipment and other real project services for California public work.
            </p>
          </div>
        </Container>
      </section>

      {/* Need a Machine Today? + How to Rent Quickly */}
      <section className="border-y border-border bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className={h2Class}>Need a Machine Today?</h2>
              <p className="mt-4 text-muted-foreground">
                If you need an electric skid steer quickly, contact us now to check availability. Our fleet is charged, tested, and ready for work.
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-foreground sm:grid-cols-2">
                {[
                  "Real machines in fleet",
                  "Pickup or delivery options",
                  "Fast response on availability",
                  "Salinas and Lodi service points",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-16">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                How to Rent Quickly
              </h3>
              <p className="mt-3 text-muted-foreground">
                Tell us your job location, the dates you need the machine, and whether you want cab or cabless.
              </p>
              <p className="mt-2 text-muted-foreground">
                We will confirm availability and get you a quote right away.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
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
                <Link
                  href="/quote"
                  className="px-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Request Quote Online
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Contractors Choose Frontline */}
      <section className="py-20 lg:py-24">
        <Container>
          <p className="eyebrow section-rule">The advantage</p>
          <h2 className={`mt-3 max-w-2xl ${h2Class}`}>
            Why Contractors Choose Frontline
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="border-t border-border pt-6">
                <prop.icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost Comparison */}
      <section className="border-y border-border bg-concrete-2 py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow section-rule">True cost of ownership</p>
              <h2 className={`mt-3 ${h2Class}`}>
                Your Real Rental Cost Is Lower Than You Think
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                A diesel skid steer burns about two gallons an hour. Over an eight-hour day at California prices, that is roughly $90 to $100 in fuel, every working day, on top of the rate. Most yards also expect it back full.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your Frontline machine shows up fully charged, so day one runs on us. After that, recharge overnight from a standard outlet for about $25 to $35 a day, and return it at any charge. No refueling, no top-off.
              </p>
            </div>

            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Diesel Side */}
                <div className="border border-border bg-paper p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Diesel Rental</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">Conventional</p>
                  <dl className="mt-5 text-sm">
                    <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                      <dt className="text-muted-foreground">Fuel per working day</dt>
                      <dd className="font-medium text-foreground">$90–$100</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                      <dt className="text-muted-foreground">Return full?</dt>
                      <dd className="font-medium text-foreground">Usually required</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-t border-border pt-4">
                      <dt className="text-foreground">Over a 5-day week</dt>
                      <dd className="font-heading text-2xl font-semibold text-foreground">$450–$500</dd>
                    </div>
                  </dl>
                </div>

                {/* Frontline Side */}
                <div className="border border-primary/40 bg-paper p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary">Frontline Electric</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">Zero-Emission</p>
                  <dl className="mt-5 text-sm">
                    <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                      <dt className="text-muted-foreground">Day one, delivered full</dt>
                      <dd className="font-medium text-foreground">$0</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                      <dt className="text-muted-foreground">Recharge per added day</dt>
                      <dd className="font-medium text-foreground">$25–$35</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-t border-border pt-4">
                      <dt className="text-foreground">Over a 5-day week</dt>
                      <dd className="font-heading text-2xl font-semibold text-primary">$100–$140</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <p className="mt-8 leading-relaxed text-muted-foreground">
                Delivered full and returned however you like. Over a 5-day week your machine runs on about $100 to $140 of electricity, against $450 to $500 of diesel.
              </p>
              <p className="mt-3 font-heading text-2xl font-semibold text-foreground">
                That&apos;s roughly $310 to $400 back in your pocket, every week.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Available Equipment */}
      <section className="py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">In fleet</p>
            <h2 className={`mt-3 ${h2Class}`}>Available Equipment</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Electric skid steers in fleet and ready for pickup or delivery
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {equipment.map((item) => (
                <article
                  key={item.slug}
                  className="fleet-sheet group flex flex-col bg-paper"
                >
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-white pt-10">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={`${item.name} electric skid steer available for rent in Salinas and Lodi California`}
                        className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                    <div className="absolute inset-x-0 top-0 flex justify-between border-b-2 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-on-dark">
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                        Ready Now
                      </span>
                      <span className="text-on-dark/80">
                        {item.unitsAvailable} Available
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 lg:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-lime-dark">{item.type}</p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.tagline}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      {item.bestFor}
                    </p>
                    <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border pt-5">
                      <span className="text-xs text-muted-foreground">For a limited time:</span>
                      <span className="font-heading text-3xl font-semibold leading-none text-foreground">{item.monthlyRate}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span>${item.dailyRate}/day</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span className="text-foreground">Fuel Included</span>
                    </p>
                    <ul className="mt-5 border-t border-border">
                      {item.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 border-b border-border py-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs text-muted-foreground">
                      Free pickup from Salinas or Lodi. Delivery available statewide.
                    </p>
                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
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
          </div>
        </Container>
      </section>

      <section aria-labelledby="ag-rebates-heading" className="border-y border-ink bg-lime-soft py-10 lg:py-12">
        <Container>
          <p className="eyebrow">For agricultural customers</p>
          <h2 id="ag-rebates-heading" className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Explore 3CE agricultural electrification rebates
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Eligible Central Coast Community Energy (3CE) agricultural customers may qualify for rebates on eligible all-electric agricultural equipment. For qualifying leased equipment, 3CE lists 50% of a one-year lease term, capped at $15,000, with one lease rebate per customer for the life of the program.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Confirm your customer, equipment, agricultural-use, and lease eligibility directly with 3CE before committing. Short-term rentals are not confirmed eligible. Awards require 3CE approval and available funding; a rebate is not guaranteed.
          </p>
          <a
            href="https://3cenergy.org/rebates/ag-electrification-program-2/"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-foreground underline underline-offset-4 hover:text-lime-dark"
          >
            Check current 3CE eligibility and program terms
          </a>
        </Container>
      </section>

      {/* Real Fleet, Ready Now */}
      <section className="bg-teal-dark text-on-dark">
        <div className="grid items-stretch lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src="/images/fleet-hero.png"
              alt="Frontline EV Rentals electric skid steer fleet available in Salinas and Lodi, California"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
            <p className="text-[0.8125rem] font-medium text-on-dark/70">
              On Hand · Not Brokered
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-on-dark lg:text-4xl">
              Real Fleet. Ready Now.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-on-dark/75">
              Frontline EV Rentals is not brokering equipment or taking inquiries for future inventory. Our electric skid steers are in fleet, on hand, and ready for real jobs.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-on-dark">
              {[
                "Charged and tested",
                "Available now",
                "Based in Salinas and Lodi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="lime">
                <Link href="/quote">Check Availability</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:border-on-dark/60 hover:bg-white/5">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">The yard</p>
            <h2 className={`mt-3 ${h2Class}`}>Our Fleet Up Close</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Real equipment, real photos. See the FirstGreen Elise 1200 electric skid steers in our fleet.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="relative aspect-[4/3] overflow-hidden bg-concrete-2"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Photos taken at our Salinas location. Equipment available for pickup or delivery throughout California.
            </p>
          </div>
        </Container>
      </section>

      {/* Common Rental Needs + Built for Real Jobs */}
      <section className="border-y border-border bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground lg:text-3xl">
                Common Rental Needs
              </h2>
              <p className="mt-3 text-muted-foreground">
                Electric skid steers are a practical fit for these job types
              </p>
              <ul className="mt-6 border-t border-border text-sm text-foreground">
                {commonRentalNeeds.map((need) => (
                  <li key={need} className="flex items-center gap-3 border-b border-border py-3.5">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {need}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground lg:text-3xl">
                Built for Real Jobs
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our fleet is ready for practical field use, including:
              </p>
              <ul className="mt-6 border-t border-border text-sm text-foreground">
                {builtForRealJobs.map((job) => (
                  <li key={job} className="flex items-center gap-3 border-b border-border py-3.5">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Work With */}
      <section className="py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">Customers</p>
            <h2 className={`mt-3 ${h2Class}`}>Who We Work With</h2>
            <ul className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {whoWeHelp.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-foreground">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Why Frontline Instead of a Generic Rental Yard? */}
      <section className="border-y border-border bg-concrete-2 py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">The difference</p>
            <h2 className={`mt-3 max-w-2xl ${h2Class}`}>
              Why Frontline Instead of a Generic Rental Yard?
            </h2>
            <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {whyFrontline.map((item, index) => (
                <li key={item} className="border-t border-foreground/15 pt-5">
                  <span className="font-heading text-sm font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-heading text-xl font-medium leading-snug text-foreground">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">Process</p>
            <h2 className={`mt-3 ${h2Class}`}>How It Works</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3">
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
                <li key={item.step} className="border-t border-border pt-5">
                  <span className="font-heading text-sm font-medium text-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="border-y border-border bg-paper py-20 lg:py-24">
        <Container>
          <div>
            <p className="eyebrow section-rule">Coverage</p>
            <h2 className={`mt-3 ${h2Class}`}>Where We Serve</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Free pickup from Salinas or Lodi. Delivery available throughout California.
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Primary Service Points */}
              <div>
                <h3 className="font-sans text-sm font-medium tracking-normal text-muted-foreground">
                  Primary Service Points
                </h3>
                <div className="mt-4 border-t border-border">
                  {[
                    { city: "Salinas", region: "Central Coast / Monterey County", href: "/salinas-rentals" },
                    { city: "Lodi", region: "Central Valley / San Joaquin County", href: "/lodi-rentals" },
                  ].map((location) => (
                    <Link
                      key={location.city}
                      href={location.href}
                      className="group flex items-center gap-4 border-b border-border py-4 transition-colors duration-200"
                    >
                      <MapPin className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                      <div className="flex-1">
                        <p className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
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
              <div>
                <h3 className="font-sans text-sm font-medium tracking-normal text-muted-foreground">
                  Common Delivery Regions
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
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
                      className="border border-border px-3 py-1.5 text-sm text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/electric-skid-steer-salinas" className="text-primary underline-offset-4 hover:underline">
                Electric Skid Steer Rental Salinas
              </Link>
              <Link href="/electric-skid-steer-lodi" className="text-primary underline-offset-4 hover:underline">
                Electric Skid Steer Rental Lodi
              </Link>
              <Link href="/zero-emission-equipment-california" className="text-primary underline-offset-4 hover:underline">
                Zero Emission Equipment California
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* DVBE Certified */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                CA Certification #2048623
              </p>
              <h2 className={`mt-3 ${h2Class}`}>
                DVBE Certified Equipment Rental
              </h2>
              <p className="mt-5 text-muted-foreground">
                Frontline EV Rentals is a DVBE-certified business. Equipment rental costs can count toward your DVBE participation goal on California public projects.
              </p>
              <Button asChild variant="outline" className="mt-7">
                <Link href="/dvbe-participation">
                  DVBE Information
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <ul className="border-t border-border text-sm text-foreground">
                {[
                  "Equipment rental for public works and utility projects",
                  "Documentation and certification letters on request",
                  "Legitimate participation tied to real project scope",
                  "Fast response for bid support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border py-3.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Frontline does not provide pass-through participation. Services are based on actual project needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-concrete-2 py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="eyebrow section-rule">Answers</p>
              <h2 className={`mt-3 ${h2Class}`}>Common Questions</h2>
            </div>
            <div className="border-t border-foreground/15">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b border-foreground/15 py-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Contractor Resources */}
      <section className="py-12">
        <Container>
          <div>
            <h3 className="font-sans text-sm font-medium tracking-normal text-muted-foreground">
              Related Contractor Resources
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/dvbe-equipment-rental" className="text-primary underline-offset-4 hover:underline">DVBE Equipment Rental</Link>
              <Link href="/dvbe-participation" className="text-primary underline-offset-4 hover:underline">DVBE Participation Support</Link>
              <Link href="/for-contractors" className="text-primary underline-offset-4 hover:underline">Contractor Information</Link>
              <Link href="/zero-emission-equipment-california" className="text-primary underline-offset-4 hover:underline">Zero Emission Equipment CA</Link>
              <Link href="/utility-public-works" className="text-primary underline-offset-4 hover:underline">Utility & Public Works</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 text-on-dark lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-semibold text-on-dark lg:text-5xl">
              Ready to Rent?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-on-dark/75">
              Tell us your job location and dates. We will confirm availability and get you a quote.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="lime">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:border-on-dark/60 hover:bg-white/5">
                <a href={COMPANY.smsHref}>
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-on-dark/30 text-on-dark hover:border-on-dark/60 hover:bg-white/5">
                <Link href="/quote">
                  Request Quote
                </Link>
              </Button>
            </div>
            <p className="mt-7 text-sm text-on-dark/65">
              Equipment ready now from Salinas and Lodi. Fast response on availability.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
