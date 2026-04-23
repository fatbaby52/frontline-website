import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  MapPin,
  Zap,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title: "About Frontline EV Rentals | Zero Emission Equipment Rental California",
  description:
    "Frontline EV Rentals provides zero emission construction equipment rentals for California contractors. DVBE certified. Serving Salinas, Lodi, and statewide.",
  alternates: {
    canonical: "https://frontline.rentals/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Frontline EV Rentals
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Electric equipment rentals for California contractors
            </p>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Electric Equipment for Compliance-Driven Jobs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals provides zero emission construction equipment for California contractors. We serve jobs where diesel is a problem: utility work, public projects, urban sites, and locations with noise or emissions restrictions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our equipment delivers full power and all-day runtime. Electric construction equipment is not a compromise. It opens up work in places where diesel cannot go.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Understand */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Wrench className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              We Understand the Field
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We know contractors need equipment that works, not sales pitches. Our focus is practical: machines that show up charged, run all day, and fit the job you are bidding.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Jobs where emissions matter",
                "Sites with noise restrictions",
                "Public works procurement requirements",
                "DVBE participation goals",
                "Utility and PG&E compliance",
                "Indoor and enclosed-space work",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Certifications
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                  California
                </h3>
                <ul className="space-y-3">
                  {certifications.california.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-sm text-foreground">{cert.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <p className="font-mono text-sm text-muted-foreground">
                    Certification ID:{" "}
                    <span className="font-semibold text-foreground">#2048623</span>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                  Federal
                </h3>
                <ul className="space-y-3">
                  {certifications.federal.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-sm text-foreground">{cert.name}</span>
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

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/dvbe-equipment-rental">DVBE Information</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Serving California
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Equipment available from our yards in Salinas and Lodi. Free pickup or delivery throughout the state.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Salinas</p>
                  <p className="text-sm text-muted-foreground">Central Coast</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Lodi</p>
                  <p className="text-sm text-muted-foreground">Central Valley</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Bay Area",
                "Sacramento",
                "Monterey County",
                "San Joaquin County",
                "Fresno",
                "Stockton",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Need Electric Equipment?"
        subhead="Tell us about your job. We will help you find the right machine."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
