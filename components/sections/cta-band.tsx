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
    <section className="relative overflow-hidden border-t-[3px] border-lime bg-primary py-16 text-on-dark lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]"
      />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold uppercase tracking-[0.01em] text-white lg:text-5xl">
            {headline}
          </h2>
          {subhead && (
            <p className="mt-4 text-lg text-on-dark/80">{subhead}</p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="group inline-flex h-14 items-center justify-center gap-2.5 border-2 border-ink bg-lime px-9 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_rgba(13,20,18,0.35)]"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-14 items-center justify-center gap-2 border-2 border-on-dark/30 px-9 text-sm font-bold uppercase tracking-wide text-on-dark transition-all duration-200 hover:border-on-dark hover:bg-white/10"
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
