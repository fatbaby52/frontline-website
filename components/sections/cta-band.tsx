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
    <section className="bg-primary py-16 text-on-dark lg:py-20">
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-on-dark lg:text-4xl">
            {headline}
          </h2>
          {subhead && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-on-dark/75">{subhead}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] bg-lime px-8 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:bg-accent-hover"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[2px] border border-on-dark/30 px-8 text-[0.9375rem] font-medium text-on-dark transition-colors duration-200 hover:border-on-dark/60 hover:bg-white/5"
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
