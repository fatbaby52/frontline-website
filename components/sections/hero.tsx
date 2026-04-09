import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
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
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        backgroundImage ? "bg-primary" : "bg-primary",
        compact ? "py-20 lg:py-28" : "py-24 lg:py-32",
        className
      )}
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Frontline EV Rentals zero emission construction equipment fleet in California"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
        </>
      )}

      {/* Fallback: Large background logo when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/logo.png"
            alt=""
            width={1200}
            height={400}
            className="h-[90%] w-auto max-h-full opacity-[0.08] brightness-0 invert"
            aria-hidden="true"
            priority
          />
        </div>
      )}

      {/* Lime accent stripe */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 bg-lime"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={cn(
              "font-heading font-bold tracking-tight text-white",
              compact
                ? "text-4xl lg:text-5xl"
                : "text-4xl sm:text-5xl lg:text-6xl"
            )}
          >
            {headline}
          </h1>

          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-white/90",
              compact ? "text-lg" : "text-xl lg:text-2xl"
            )}
          >
            {subhead}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-lime/40"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-10 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {microcopy && (
            <p className="mt-4 text-sm text-white/80">
              {microcopy}
            </p>
          )}

          {badges && badges.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {serviceArea && (
            <p className="mt-8 text-sm text-white/70">
              {serviceArea}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
