import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badges?: string[];
  className?: string;
  compact?: boolean;
  backgroundImage?: string;
  serviceArea?: string;
  microcopy?: string;
}

export function Hero({
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  badges,
  className,
  compact = false,
  backgroundImage,
  serviceArea,
  microcopy,
}: HeroProps) {
  // Full color-blocked split hero (homepage) when a background image is provided.
  if (backgroundImage) {
    return (
      <section
        className={cn(
          "relative overflow-hidden border-b-[3px] border-ink bg-concrete",
          className
        )}
      >
        {/* Color blocks */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 grid grid-cols-1 lg:grid-cols-[57%_43%]"
        >
          <div className="hidden bg-concrete lg:block" />
          <div className="relative hidden bg-gradient-to-br from-primary to-teal-dark lg:block" />
        </div>

        {/* Hard lime vertical seam */}
        <div
          aria-hidden="true"
          className="sh-seam absolute bottom-0 left-[57%] top-0 z-30 hidden w-1.5 -translate-x-1/2 bg-lime shadow-[0_0_26px_rgba(197,232,31,0.4)] lg:block"
        />

        {/* Fleet photo, teal right block */}
        <div className="sh-photo pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[42vh] overflow-hidden lg:inset-y-0 lg:left-[57%] lg:right-0 lg:h-auto">
          <Image
            src={backgroundImage}
            alt="Frontline EV Rentals zero emission construction equipment fleet in California"
            fill
            className="object-cover object-center [filter:brightness(0.52)_saturate(1.05)]"
            priority
            quality={85}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-primary/55 to-ink/75"
          />
        </div>

        {/* Content */}
        <Container className="relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-[57%_43%]">
            <div className="max-w-2xl py-14 pr-0 lg:py-24 lg:pr-12">
              <p className="sh-anim sh-a1 mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                <span className="inline-block h-0.5 w-7 bg-lime" aria-hidden="true" />
                Electric Construction Equipment · DVBE Certified CA #2048623
              </p>

              <h1 className="sh-anim sh-a2 font-heading text-[2.6rem] font-semibold uppercase leading-[0.94] tracking-[0.008em] text-ink sm:text-6xl lg:text-[5.2rem]">
                {headline}
              </h1>

              <p className="sh-anim sh-a3 mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
                {subhead}
              </p>

              <div className="sh-anim sh-a4 mt-8 flex flex-wrap items-center gap-5">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex h-[52px] items-center justify-center gap-2.5 border-2 border-ink bg-lime px-7 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_var(--primary)]"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                )}
                <a
                  href={COMPANY.phoneHref}
                  className="group flex flex-col gap-0.5"
                >
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Call the yard
                  </span>
                  <span className="font-heading text-xl font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-primary">
                    {COMPANY.phone}
                  </span>
                </a>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex h-[52px] items-center justify-center border-2 border-ink px-7 text-sm font-bold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-on-dark"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>

              {microcopy && (
                <p className="sh-anim sh-a4 mt-5 text-sm text-muted-foreground">
                  {microcopy}
                </p>
              )}

              {badges && badges.length > 0 && (
                <div className="sh-anim sh-a5 mt-9 flex flex-wrap gap-2.5">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 border border-border bg-primary/[0.06] px-3.5 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-primary"
                    >
                      <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {serviceArea && (
                <p className="sh-anim sh-a5 mt-6 max-w-md text-sm text-muted-foreground">
                  {serviceArea}
                </p>
              )}
            </div>

            {/* Spacer for photo column on desktop */}
            <div aria-hidden="true" className="hidden lg:block" />
          </div>
        </Container>
      </section>
    );
  }

  // Calmer interior / compact hero: concrete band, ink rules, mono eyebrow.
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-[3px] border-ink bg-concrete",
        compact ? "py-16 lg:py-20" : "py-20 lg:py-28",
        className
      )}
    >
      {/* Subtle teal grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(ellipse_70%_60%_at_20%_30%,rgba(255,255,255,0.6)_0%,transparent_60%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="inline-block h-0.5 w-7 bg-lime" aria-hidden="true" />
            Zero-Emission Equipment
          </p>
          <h1 className="font-heading text-4xl font-semibold uppercase leading-[0.96] tracking-[0.008em] text-ink sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            {subhead}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex h-[52px] items-center justify-center gap-2.5 border-2 border-ink bg-lime px-8 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_var(--primary)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-[52px] items-center justify-center border-2 border-ink px-8 text-sm font-bold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-on-dark"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {microcopy && (
            <p className="mt-4 text-sm text-muted-foreground">{microcopy}</p>
          )}

          {badges && badges.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 border border-border bg-primary/[0.06] px-3.5 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-primary"
                >
                  <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          )}

          {serviceArea && (
            <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">
              {serviceArea}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
