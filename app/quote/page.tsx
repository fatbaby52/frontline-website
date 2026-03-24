import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { QuoteWizard } from "@/components/forms/quote-wizard";

export const metadata: Metadata = {
  title: "Get a Quote | Frontline EV Rentals",
  description:
    "Request a quote for electric skid steer rentals in California. Same-week availability. DVBE certified.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-primary py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Request a Quote
            </h1>
            <p className="mt-3 text-white/70">
              Tell us about your project and we&apos;ll get back to you within 1
              business day.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <QuoteWizard />
        </Container>
      </section>
    </>
  );
}
