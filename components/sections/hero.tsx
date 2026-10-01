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
  "group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] bg-primary px-7 text-[0.9375rem] font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary-light";
const secondaryCtaClass =
  "inline-flex h-[52px] items-center justify-center rounded-[2px] border border-foreground/25 px-7 text-[0.9375rem] font-medium text-foreground transition-colors duration-200 hover:border-foreground/50 hover:bg-foreground/[0.04]";

function Badges({ badges, className }: { badges: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground", className)}>
      {badges.map((badge) => (
        <li key={badge} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-dark" aria-hidden="true" />
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
  // Split hero (homepage): viewport-scale heading beside a circular fleet photo.
  if (backgroundImage) {
    const sentences = headline.split(/(?<=\.)\s+/);
    const lead = sentences.slice(0, -1).join(" ");
    const closer = sentences[sentences.length - 1];

    return (
      <section
        className={cn(
          "relative flex flex-col overflow-hidden border-b border-border bg-concrete [background-image:radial-gradient(ellipse_at_22%_12%,rgba(251,250,245,0.95)_0%,transparent_55%)] lg:min-h-[calc(100dvh-6.5rem)]",
          className
        )}
      >
        <Container className="flex flex-1 flex-col">
          <div className="grid flex-1 grid-cols-1 gap-10 pb-10 pt-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-12 lg:pt-14">
            <div className="flex flex-col justify-center">
              <p className="sh-anim sh-a1 eyebrow mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
                Electric construction equipment · DVBE certified, CA #2048623
              </p>

              <h1 className="sh-anim sh-a2 hero-heading font-heading font-semibold text-foreground">
                {lead && <>{lead} </>}
                <span className={lead ? "hero-underline text-primary" : undefined}>{closer}</span>
              </h1>

              <p className="sh-anim sh-a3 mt-7 max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
                {subhead}
              </p>

              <div className="sh-anim sh-a4 mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
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

            {/* Fleet photo: a circle sized to the copy block, with a lime arc
                and a slow-turning badge. */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="sh-photo relative aspect-square w-full max-w-[min(20rem,78vw)] lg:max-w-[min(30rem,56vh)]">
                <span
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full border border-primary/15 lg:-inset-4"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="absolute -inset-3 -rotate-[38deg] lg:-inset-4"
                  fill="none"
                >
                  <circle
                    className="hero-arc"
                    cx="50"
                    cy="50"
                    r="49.25"
                    pathLength="100"
                    stroke="var(--lime)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={backgroundImage}
                    alt="Frontline EV Rentals zero emission construction equipment fleet in California"
                    fill
                    sizes="(max-width: 1024px) 78vw, 30rem"
                    className="hero-photo-img object-cover object-center"
                    priority
                    quality={85}
                  />
                </div>

                {/* Turning badge */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-1 -left-3 h-24 w-24 rounded-full bg-primary text-primary-foreground shadow-[0_10px_28px_-12px_rgba(7,42,47,0.6)] lg:-left-6 lg:bottom-2 lg:h-32 lg:w-32"
                >
                  <svg viewBox="0 0 120 120" className="hero-badge-spin h-full w-full">
                    <defs>
                      <path id="hero-badge-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                    </defs>
                    <text fill="currentColor" fontSize="10.5" fontWeight="500" letterSpacing="0.6">
                      <textPath href="#hero-badge-path" textLength="270">
                        Ready now · Zero emission · DVBE certified ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-lime" />
                </div>
              </div>
            </div>
          </div>

          {(badges?.length || serviceArea) && (
            <div className="sh-anim sh-a5 flex flex-col gap-3 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
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

  // Interior / compact hero: quiet concrete band.
  return (
    <section
      className={cn(
        "border-b border-border bg-concrete",
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
