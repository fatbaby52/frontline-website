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
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title: "DVBE Certified Equipment Rentals | For Contractors | Frontline EV Rentals",
  description:
    "Meet your state DVBE goals with Frontline EV Rentals. California DVBE certified electric equipment rental. ID #2048632.",
};

const howItWorks = [
  {
    step: "1",
    title: "Include Frontline in your bid",
    description: "List Frontline EV Rentals as equipment rental subcontractor",
  },
  {
    step: "2",
    title: "We provide documentation",
    description: "Certification letters and compliance paperwork on request",
  },
  {
    step: "3",
    title: "Rent equipment",
    description: "Apply rental costs toward your DVBE participation goal",
  },
  {
    step: "4",
    title: "We handle compliance",
    description: "All paperwork and reporting documentation provided",
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
      <Hero
        headline="DVBE Certified Equipment Rentals"
        subhead="Meet your state DVBE goals with Frontline EV Rentals"
        primaryCta={{ label: "Get a Quote", href: "/quote" }}
        compact
      />

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
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
              How It Works for Primes
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
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
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact for Primes */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Direct Contact for Procurement Teams
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quick response for bid support and documentation requests.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:alex@frontline.rentals"
                className="flex items-center justify-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                alex@frontline.rentals
              </a>
              <a
                href="tel:2094706385"
                className="flex items-center justify-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                (209) 470-6385
              </a>
            </div>
            <Button asChild className="mt-6">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Need DVBE Documentation for Your Bid?"
        subhead="We provide all required paperwork. Fast turnaround."
        ctaLabel="Contact Us"
        ctaHref="/contact"
              />
    </>
  );
}
