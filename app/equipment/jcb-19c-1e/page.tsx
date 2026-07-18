import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Building2,
  Home,
  Hospital,
  Moon,
  Wind,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingDisplay } from "@/components/equipment/pricing-display";
import { SpecTable } from "@/components/equipment/spec-table";
import { ImageGallery } from "@/components/equipment/image-gallery";
import { CtaBand } from "@/components/sections/cta-band";
import { getEquipmentBySlug } from "@/lib/data/equipment";

const machine = getEquipmentBySlug("jcb-19c-1e")!;

const applicationIcons = [Building2, Home, Hospital, Moon, Wind];

export const metadata: Metadata = {
  title: "JCB 19C-1E Electric Mini Excavator Rental California",
  description: `Rent the JCB 19C-1E electric mini excavator in California. Zero emissions, 67% quieter than diesel. $${machine.dailyRate}/day or ${machine.weeklyRate}/week. DVBE certified. Free pickup Salinas & Lodi.`,
  keywords: [
    "JCB 19C-1E rental",
    "electric mini excavator rental California",
    "electric excavator rental",
    "zero emission excavator rental",
    "mini excavator rental Salinas",
    "mini excavator rental Lodi",
    "DVBE excavator rental",
  ],
  alternates: {
    canonical: "https://frontline.rentals/equipment/jcb-19c-1e",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://frontline.rentals/equipment/jcb-19c-1e#product",
      name: "JCB 19C-1E Electric Mini Excavator",
      description:
        "Zero emission 2-ton class electric mini excavator for rent in California. Full-day battery runtime, 67% quieter than diesel. Free pickup from Salinas or Lodi, delivery statewide.",
      brand: { "@type": "Brand", name: "JCB" },
      image: "https://frontline.rentals/images/jcb-19c-1e.jpg",
      url: "https://frontline.rentals/equipment/jcb-19c-1e",
      offers: {
        "@type": "Offer",
        price: "450",
        priceCurrency: "USD",
        unitText: "DAY",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "LocalBusiness",
          "@id": "https://frontline.rentals/#business",
          name: "Frontline EV Rentals",
          telephone: "(831) 262-2847",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://frontline.rentals" },
        { "@type": "ListItem", position: 2, name: "Equipment", item: "https://frontline.rentals/equipment" },
        { "@type": "ListItem", position: 3, name: "JCB 19C-1E Electric Mini Excavator", item: "https://frontline.rentals/equipment/jcb-19c-1e" },
      ],
    },
  ],
};

export default function Jcb19c1ePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
                {machine.type}
              </Badge>
              <h1 className="font-heading text-3xl font-bold uppercase tracking-[0.01em] text-white sm:text-4xl lg:text-5xl">
                {machine.name} Electric Mini Excavator
              </h1>
              <p className="mt-3 text-lg text-white/70">{machine.tagline}</p>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <PricingDisplay
                    dailyRate={machine.dailyRate}
                    size="lg"
                    className="[&_span]:text-white [&_span.text-muted-foreground]:text-white/60 [&_span.text-primary]:text-accent"
                  />
                  <span className="bg-lime px-3 py-1 text-sm font-bold text-primary">
                    Fuel Included
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/50">
                  {machine.weeklyRate ? `Weekly rate: ${machine.weeklyRate}. ` : ""}Monthly rates available
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent-hover"
                >
                  <Link href="/quote">Get a Quote for This Equipment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="tel:8312622847">Call (831) 262-2847</a>
                </Button>
              </div>
            </div>
            <ImageGallery
              images={machine.galleryImages || []}
              fallbackSrc={machine.image}
              fallbackAlt={machine.name}
            />
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Key Highlights
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machine.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 border border-border bg-card p-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Specifications
          </h2>
          <div className="mx-auto max-w-2xl">
            <SpecTable specifications={machine.specifications} />
          </div>
        </Container>
      </section>

      {/* Downloads & Resources */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Downloads & Resources
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machine.manufacturerUrl && (
              <a
                href={machine.manufacturerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">
                    Manufacturer Page
                  </p>
                  <p className="text-sm text-muted-foreground">
                    JCB official specs
                  </p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground" />
              </a>
            )}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {machine.included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Optional Add-ons
              </h2>
              <ul className="space-y-3">
                {machine.optional.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ideal Applications */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Ideal Applications
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machine.idealFor.map((use, index) => {
              const Icon = applicationIcons[index % applicationIcons.length];
              return (
                <div
                  key={use}
                  className="flex items-center gap-3 border border-border bg-card p-4"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {use}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Rental Info */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Rental Information
            </h2>
            <div className="space-y-4 border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="font-semibold text-foreground">Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  ${machine.dailyRate}/day{machine.weeklyRate ? ` or ${machine.weeklyRate}/week` : ""}. Monthly
                  rates available on request. All rates include a standard
                  bucket.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Insurance</h3>
                <p className="text-sm text-muted-foreground">
                  Proof of general liability and inland marine coverage
                  required. Certificate of insurance must name Frontline EV
                  Rentals as additional insured.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Pickup & Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Free pickup from our Salinas or Lodi yards. Delivery available
                  statewide at pass-through cost.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline={`Ready to Rent the ${machine.name}?`}
        subhead="Get a quote in minutes. Same-week availability."
        ctaLabel="Request a Quote"
        ctaHref="/quote"
      />
    </>
  );
}
