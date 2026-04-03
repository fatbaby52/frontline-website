import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

interface CtaBandProps {
  headline: string;
  subhead?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CtaBand({
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: CtaBandProps) {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {headline}
          </h2>
          {subhead && (
            <p className="mt-4 text-lg text-white/80">{subhead}</p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href={ctaHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover hover:shadow-xl"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-10 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
