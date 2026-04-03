import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data/certifications";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Contractors | DVBE Certified Electric Equipment Rental",
  description:
    "DVBE certified electric equipment rental for California contractors. Support your participation goals with Frontline EV Rentals. CA ID #2048632.",
  alternates: {
    canonical: "https://frontline.rentals/for-contractors",
  },
};

const howItWorks = [
  {
    step: "1",
    title: "Include Frontline in Your Bid",
    description: "List Frontline EV Rentals as your equipment rental subcontractor.",
  },
  {
    step: "2",
    title: "We Provide Documentation",
    description: "Certification letters and compliance paperwork on request.",
  },
  {
    step: "3",
    title: "Rent Equipment",
    description: "Apply rental costs toward your DVBE participation goal.",
  },
];

const documents = [
  "DVBE certification letter",
  "Certificate of insurance template requirements",
  "W-9 on request",
  "Subcontractor information sheet",
];

export default function ForContractorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-primary">
              <ShieldCheck className="h-4 w-4" />
              DVBE Certified
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              For Contractors
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              DVBE certified electric equipment rental to support your public works bids and procurement requirements.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/dvbe-equipment-rental"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                DVBE Information
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Certification Details */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* California Certs */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    California Certifications
                  </h2>
                </div>
                <ul className="space-y-3">
                  {certifications.california.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-sm text-foreground">
                        {cert.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <p className="font-mono text-sm text-muted-foreground">
                    CA Certification ID:{" "}
                    <span className="font-semibold text-foreground">
                      #2048632
                    </span>
                  </p>
                </div>
              </div>

              {/* Federal Certs */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Federal Certifications
                  </h2>
                </div>
                <ul className="space-y-3">
                  {certifications.federal.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-sm text-foreground">
                        {cert.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <p className="font-mono text-sm text-muted-foreground">
                    CAGE Code:{" "}
                    <span className="font-semibold text-foreground">
                      17WA3
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
              How It Works
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Documentation Available
              </h2>
            </div>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Contact for Documentation
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
                <Link href="/dvbe-equipment-rental">DVBE Details</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Need Equipment for a Public Works Project?"
        subhead="We provide documentation and support for your bids."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
