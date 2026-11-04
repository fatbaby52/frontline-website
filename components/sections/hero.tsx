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

const primaryCtaClass =
  "group inline-flex h-[52px] items-center justify-center gap-2.5 border-2 border-ink bg-lime px-7 text-[0.9375rem] font-bold text-ink transition-colors duration-200 hover:bg-accent-hover";
const secondaryCtaClass =
  "inline-flex h-[52px] items-center justify-center border-2 border-foreground px-7 text-[0.9375rem] font-medium text-foreground transition-colors duration-200 hover:border-foreground/50 hover:bg-foreground/[0.04]";

function Badges({ badges, className }: { badges: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.1em] text-foreground", className)}>
      {badges.map((badge) => (
        <li key={badge} className="flex items-center gap-2">
          <span className="h-2 w-2 bg-lime-dark" aria-hidden="true" />
          {badge}
        </li>
      ))}
    </ul>
  );
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
  // Homepage: strong typography and a square fleet-photo frame from the flyer.
  if (backgroundImage) {
    const sentences = headline.split(/(?<=\.)\s+/);
    const lead = sentences.slice(0, -1).join(" ");
    const closer = sentences[sentences.length - 1];

    return (
      <section
        className={cn(
          "border-b-2 border-ink bg-paper",
          className
        )}
      >
        <Container className="flex flex-1 flex-col">
          <div className="grid grid-cols-1 items-center gap-9 py-10 sm:py-12 lg:grid-cols-[1.16fr_1fr] lg:gap-12 lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="mb-6 border-l-4 border-lime pl-3 text-xs font-bold uppercase leading-relaxed tracking-[0.1em]">
                Electric construction equipment · DVBE certified, CA #2048623
              </p>

              <h1 className="hero-heading font-heading font-extrabold text-foreground">
                {lead && <>{lead} </>}
                <span className={lead ? "hero-highlight" : undefined}>{closer}</span>
              </h1>

              <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
                {subhead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                {primaryCta && (
                  <Link href={primaryCta.href} className={cn(primaryCtaClass, "hero-cta h-14 px-8")}>
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                )}
                <a href={COMPANY.phoneHref} className="group flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Or call the yard
                  </span>
                  <span className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {COMPANY.phone}
                  </span>
                </a>
              </div>
            </div>

            <div className="border-2 border-ink bg-concrete-2">
              <div className="flex items-center justify-between gap-3 bg-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-on-dark">
                <span>Electric construction equipment</span>
                <span className="h-2.5 w-2.5 shrink-0 bg-lime" aria-hidden="true" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={backgroundImage}
                  alt="Frontline EV Rentals zero emission construction equipment fleet in California"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover object-center"
                  priority
                  quality={85}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t-2 border-ink bg-lime px-4 py-3 text-xs font-bold uppercase tracking-[0.1em]">
                <span>DVBE certified</span>
                <span>CA #2048623</span>
              </div>
            </div>
          </div>

          {(badges?.length || serviceArea) && (
            <div className="flex flex-col gap-3 border-t-2 border-ink py-5 sm:flex-row sm:items-center sm:justify-between">
              {badges && badges.length > 0 && <Badges badges={badges} />}
              {serviceArea && (
                <p className="text-sm text-muted-foreground">{serviceArea}</p>
              )}
            </div>
          )}
        </Container>
      </section>
    );
  }

  // Interior pages keep the same crisp white surface and ruled edge.
  return (
    <section
      className={cn(
        "border-b-2 border-ink bg-concrete",
        compact ? "py-14 lg:py-16" : "py-16 lg:py-24",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {subhead}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className={primaryCtaClass}>
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={secondaryCtaClass}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {microcopy && (
            <p className="mt-4 text-sm text-muted-foreground">{microcopy}</p>
          )}

          {badges && badges.length > 0 && (
            <Badges badges={badges} className="mt-8 justify-center" />
          )}

          {serviceArea && (
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
              {serviceArea}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
