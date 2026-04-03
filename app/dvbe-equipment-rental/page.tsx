import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Building2,
  Users,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data/certifications";
import { equipment } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DVBE Equipment Rental California | Certified Electric Equipment",
  description:
    "DVBE-certified electric equipment rental in California. Support your DVBE participation goals with zero emission skid steer rentals. CA Certification ID #2048632.",
  keywords: [
    "DVBE equipment rental California",
    "DVBE certified rental company",
    "public works equipment rental DVBE",
    "DVBE electric equipment",
    "California DVBE contractor",
  ],
  alternates: {
    canonical: "https://frontline.rentals/dvbe-equipment-rental",
  },
  openGraph: {
    title: "DVBE-Certified Electric Equipment Rental | California",
    description:
      "Support your DVBE participation goals. Zero emission electric skid steers from a certified DVBE business.",
    url: "https://frontline.rentals/dvbe-equipment-rental",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Frontline EV Rentals",
  description:
    "DVBE-certified electric equipment rental company serving California. Zero emission skid steers for public works and government contractors.",
  url: "https://frontline.rentals/dvbe-equipment-rental",
  telephone: "(209) 470-6385",
  email: "alex@frontline.rentals",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Disabled Veteran Business Enterprise (DVBE)",
      recognizedBy: {
        "@type": "Organization",
        name: "State of California",
      },
    },
  ],
  priceRange: "$450-$525/day",
};

const howItWorks = [
  {
    step: "1",
    title: "Include Frontline in Your Bid",
    description:
      "List Frontline EV Rentals as your equipment rental subcontractor. Our DVBE status counts toward your participation requirements.",
  },
  {
    step: "2",
    title: "We Provide Documentation",
    description:
      "Request certification letters, COI requirements, W-9, and subcontractor information. We respond quickly to support your bid deadlines.",
  },
  {
    step: "3",
    title: "Rent the Equipment You Need",
    description:
      "When you win the job, rent electric skid steers from Salinas or Lodi. Your rental costs count toward DVBE participation.",
  },
];

const whoWeHelp = [
  {
    icon: Building2,
    title: "General Contractors",
    description:
      "Meet DVBE participation goals on state and local projects. Our equipment rental costs count toward your requirements.",
  },
  {
    icon: Users,
    title: "Prime Contractors",
    description:
      "Include Frontline as a certified subcontractor in your bids. We handle documentation and compliance paperwork.",
  },
  {
    icon: Zap,
    title: "Utility Contractors",
    description:
      "Electric equipment that meets PG&E and utility compliance standards while supporting DVBE participation goals.",
  },
];

export default function DVBEEquipmentRentalPage() {
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
              <ShieldCheck className="h-4 w-4" />
              CA Certification ID #2048632
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DVBE-Certified Electric Equipment Rental in California
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Support your DVBE participation goals with zero emission electric skid steer rentals. Documentation provided for bids and compliance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                Request Documentation
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Equipment ready now. Documentation provided quickly for bids and compliance.
            </p>
          </div>
        </Container>
      </section>

      {/* Equipment Ready Now */}
      <section className="border-b border-lime/30 bg-lime/10 py-8">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lime">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Real Equipment, Ready Now
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Frontline EV Rentals owns and operates electric skid steers from our yards in Salinas and Lodi. When you win your bid, the equipment is in fleet, charged, tested, and ready for pickup or delivery.
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

      {/* What is DVBE */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              What is DVBE Certification?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              DVBE stands for Disabled Veteran Business Enterprise. California state agencies and many local governments require contractors to include DVBE participation in their bids for public projects.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals is a certified DVBE. When you rent equipment from us, your rental costs can count toward DVBE participation requirements on qualifying projects.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Important:</span> DVBE requirements vary by project and agency. We provide documentation to support your compliance efforts, but contractors should verify specific requirements with the contracting agency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Our Certifications
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* California Certs */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    California Certifications
                  </h3>
                </div>
                <ul className="space-y-3">
                  {certifications.california.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-foreground">{cert.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <p className="font-mono text-sm text-muted-foreground">
                    CA Certification ID:{" "}
                    <span className="font-semibold text-foreground">#2048632</span>
                  </p>
                </div>
              </div>

              {/* Federal Certs */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Federal Certifications
                  </h3>
                </div>
                <ul className="space-y-3">
                  {certifications.federal.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-foreground">{cert.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <p className="font-mono text-sm text-muted-foreground">
                    CAGE Code:{" "}
                    <span className="font-semibold text-foreground">17WA3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How DVBE Participation Works
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Help */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Who Uses Our DVBE Equipment Rentals
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {whoWeHelp.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Equipment Available */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Equipment Available
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
              Zero emission electric skid steers available from Salinas and Lodi
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {equipment.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-xl border border-border bg-card p-6"
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

      {/* Documentation */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex items-center justify-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Documentation We Provide
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                "DVBE certification letter",
                "Certificate of insurance template requirements",
                "W-9 on request",
                "Subcontractor information sheet",
                "Bid support documentation",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Need documentation for a bid? Contact us and we will respond quickly.
            </p>
          </div>
        </Container>
      </section>

      {/* Other DVBE Services */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              When Equipment Rental Is Not the Right Fit
            </h2>
            <p className="mt-4 text-muted-foreground">
              If your project does not need electric equipment, Frontline may still be able to support DVBE participation through other legitimate project services, including drone imaging and practical project support.
            </p>
            <Button asChild className="mt-6">
              <Link href="/dvbe-participation">Learn About DVBE Participation Options</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Contact for DVBE Documentation
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quick response for bid support and documentation requests.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center justify-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/for-contractors">Contractor Information</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Need DVBE Documentation for Your Bid?"
        subhead="We provide certification letters and compliance paperwork. Contact us for quick turnaround."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
