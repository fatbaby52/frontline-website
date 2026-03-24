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
  showBadges?: boolean;
  showLogo?: boolean;
  className?: string;
  compact?: boolean;
}

export function Hero({
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  showBadges = false,
  showLogo = false,
  className,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary",
        compact ? "py-20 lg:py-28" : "py-28 lg:py-40",
        className
      )}
    >
      {/* Large background logo */}
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

      {/* Lime accent stripe */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 bg-lime"
        aria-hidden="true"
      />

      {/* Diagonal lime accent */}
      <div
        className="absolute -right-20 top-20 h-40 w-[500px] rotate-[-20deg] bg-lime opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {showLogo && (
            <div className="mb-10">
              <Image
                src="/images/logo.png"
                alt="Frontline EV Rentals"
                width={280}
                height={96}
                className="mx-auto h-16 w-auto brightness-0 invert sm:h-20 lg:h-24"
                priority
              />
            </div>
          )}

          <h1
            className={cn(
              "font-heading font-bold tracking-tight text-white",
              compact
                ? "text-4xl lg:text-5xl"
                : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            )}
          >
            {headline}
          </h1>

          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-white/80",
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

          {showBadges && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {["DVBE Certified", "Small Business", "Veteran Owned"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
