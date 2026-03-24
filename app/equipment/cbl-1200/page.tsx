import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Mountain,
  TreePine,
  TrendingUp,
  Shovel,
  Gauge,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingDisplay } from "@/components/equipment/pricing-display";
import { SpecTable } from "@/components/equipment/spec-table";
import { ImageGallery } from "@/components/equipment/image-gallery";
import { CtaBand } from "@/components/sections/cta-band";
import { getEquipmentBySlug } from "@/lib/data/equipment";

const machine = getEquipmentBySlug("cbl-1200")!;

const applicationIcons = [Mountain, TreePine, TrendingUp, Shovel, Gauge];

export const metadata: Metadata = {
  title: `${machine.name} - Electric Skid Steer Rental | Frontline EV Rentals`,
  description: `Rent the ${machine.name} - ${machine.tagline}. $${machine.dailyRate}/day. DVBE certified. Free pickup Salinas & Lodi.`,
};

export default function CBL1200Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
                {machine.type}
              </Badge>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {machine.name}
              </h1>
              <p className="mt-3 text-lg text-white/70">{machine.tagline}</p>
              <div className="mt-6">
                <PricingDisplay
                  dailyRate={machine.dailyRate}
                  size="lg"
                  className="[&_span]:text-white [&_span.text-muted-foreground]:text-white/60 [&_span.text-primary]:text-accent"
                />
                <p className="mt-1 text-sm text-white/50">
                  Weekly and monthly rates available
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
                  <a href="tel:2094706385">Call (209) 470-6385</a>
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
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
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
            {machine.brochureUrl && (
              <a
                href={machine.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">
                    Product Brochure
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Full specification sheet &amp; features
                  </p>
                </div>
                <Download className="ml-auto h-5 w-5 shrink-0 text-muted-foreground" />
              </a>
            )}
            {machine.manufacturerUrl && (
              <a
                href={machine.manufacturerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">
                    Manufacturer Page
                  </p>
                  <p className="text-sm text-muted-foreground">
                    First Green Industries official specs
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
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
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
            <div className="space-y-4 rounded-xl border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="font-semibold text-foreground">Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  ${machine.dailyRate}/day. Weekly and monthly rates available on
                  request. All rates include standard bucket or forks.
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
