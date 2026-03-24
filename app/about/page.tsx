import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle,
  MapPin,
  Zap,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { certifications } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title: "About Frontline EV Rentals | DVBE Certified Electric Equipment",
  description:
    "Frontline EV Rentals provides zero-emission construction equipment for California contractors. DVBE certified. Veteran owned.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="About Frontline EV Rentals"
        subhead="Zero-emission equipment solutions for California contractors"
        compact
      />

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Frontline EV Rentals provides zero-emission construction equipment
              solutions for California contractors. We make it easy to go
              electric on the job site - with equipment that delivers full power,
              all-day runtime, and the quiet operation that opens up work in
              noise-sensitive and emission-restricted areas.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              As a DVBE-certified company, we help general contractors meet
              state participation goals while delivering real value on the job
              site. Our electric skid steers are not a compromise - they are a
              better way to work.
            </p>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Certifications
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                  California
                </h3>
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
                    Certification ID:{" "}
                    <span className="font-semibold text-foreground">
                      #2048632
                    </span>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                  Federal
                </h3>
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

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Service Area
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We serve all of California from our two equipment yards.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Salinas</p>
                  <p className="text-sm text-muted-foreground">
                    Central Coast - Bay Area, Monterey, Santa Cruz
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Lodi</p>
                  <p className="text-sm text-muted-foreground">
                    Central Valley - Sacramento, Stockton, Fresno
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Free pickup from either yard. Delivery available statewide at
              pass-through cost.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Ready to Work Together?"
        subhead="Get a quote or contact us for DVBE documentation."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
              />
    </>
  );
}
