import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { COMPANY } from "@/lib/constants";

interface CtaBandProps {
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
  showPhone?: boolean;
}

export function CtaBand({
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  showPhone = true,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-lime py-20 lg:py-28">
      {/* Decorative elements */}
      <div
        className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary opacity-5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-primary lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-xl text-primary/70">{subhead}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href={ctaHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-10 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-primary-light hover:shadow-xl"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            {showPhone && (
              <a
                href={COMPANY.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-primary/30 px-6 text-lg font-semibold text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/5"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
