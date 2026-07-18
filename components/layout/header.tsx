"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Container } from "./container";

const navigation = [
  { name: "Equipment", href: "/equipment" },
  { name: "DVBE Info", href: "/dvbe-equipment-rental" },
  { name: "DVBE Support", href: "/dvbe-participation" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  { name: "Central Coast", href: "/salinas-rentals", description: "Salinas, Monterey County" },
  { name: "Central Valley", href: "/lodi-rentals", description: "Lodi, Sacramento, Stockton" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  // Close locations dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menuElement = menuRef.current;
    if (!menuElement) return;

    const focusableElements = menuElement.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstElement?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  const isCurrentPage = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const isLocationActive = locations.some((loc) => isCurrentPage(loc.href));

  return (
    <header className="sticky top-0 z-50">
      {/* Utility data bar */}
      <div className="border-b-2 border-lime bg-ink text-on-dark/70">
        <Container>
          <div className="flex h-9 items-center justify-between gap-6">
            <span className="eyebrow-mono truncate text-[0.68rem] text-lime">
              DVBE CERTIFIED · CA #2048623
            </span>
            <span className="eyebrow-mono hidden truncate text-[0.68rem] md:inline">
              ZERO-EMISSION CONSTRUCTION EQUIPMENT · SALINAS + LODI, CA
            </span>
            <a
              href="tel:8312622847"
              className="eyebrow-mono whitespace-nowrap text-[0.68rem] transition-colors hover:text-lime"
            >
              CALL (831) 262-2847
            </a>
          </div>
        </Container>
      </div>

      {/* Nav */}
      <div className="border-b-[3px] border-ink bg-concrete">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Frontline EV Rentals"
              width={160}
              height={54}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            <Link
              href="/equipment"
              aria-current={isCurrentPage("/equipment") ? "page" : undefined}
              className={`eyebrow-mono relative py-1.5 text-[0.74rem] tracking-[0.12em] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100 ${
                isCurrentPage("/equipment")
                  ? "text-ink after:origin-left after:scale-x-100"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              Equipment
            </Link>

            {/* Locations Dropdown */}
            <div ref={locationsRef} className="relative">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className={`eyebrow-mono flex items-center gap-1 py-1.5 text-[0.74rem] tracking-[0.12em] transition-colors duration-200 ${
                  isLocationActive
                    ? "text-ink"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                Locations
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
              </button>

              {locationsOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 border-2 border-ink bg-paper p-2 shadow-[6px_6px_0_rgba(13,20,18,0.16)]">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className={`block px-4 py-3 transition-colors duration-200 ${
                        isCurrentPage(location.href)
                          ? "bg-teal-light text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className="font-heading font-semibold uppercase tracking-wide">{location.name}</span>
                      <span className="block text-xs text-muted-foreground">{location.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isCurrentPage(item.href) ? "page" : undefined}
                className={`eyebrow-mono relative py-1.5 text-[0.74rem] tracking-[0.12em] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100 ${
                  isCurrentPage(item.href)
                    ? "text-ink after:origin-left after:scale-x-100"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:8312622847"
              className="eyebrow-mono flex items-center gap-2 text-[0.72rem] text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              (831) 262-2847
            </a>
            <Link
              href="/quote"
              className="inline-flex h-11 items-center justify-center border-2 border-ink bg-lime px-6 text-xs font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_var(--primary)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-concrete text-ink lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal={mobileMenuOpen}
          aria-label="Mobile navigation"
          aria-hidden={!mobileMenuOpen}
          className={`grid border-t-2 border-ink lg:hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 py-4">
              <Link
                href="/equipment"
                aria-current={isCurrentPage("/equipment") ? "page" : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`px-4 py-3 font-heading text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  isCurrentPage("/equipment")
                    ? "bg-teal-light text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipment
              </Link>

              {/* Location links in mobile */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Locations
                </span>
              </div>
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  aria-current={isCurrentPage(location.href) ? "page" : undefined}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`px-4 py-3 font-heading text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    isCurrentPage(location.href)
                      ? "bg-teal-light text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {location.name}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({location.description})
                  </span>
                </Link>
              ))}

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isCurrentPage(item.href) ? "page" : undefined}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`px-4 py-3 font-heading text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    isCurrentPage(item.href)
                      ? "bg-teal-light text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pb-4">
              <a
                href="tel:8312622847"
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="flex items-center justify-center gap-2 border-2 border-ink py-3 text-base font-bold uppercase tracking-wide text-ink"
              >
                <Phone className="h-5 w-5" />
                (831) 262-2847
              </a>
              <Link
                href="/quote"
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="flex items-center justify-center border-2 border-ink bg-lime py-4 text-base font-bold uppercase tracking-wide text-ink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </header>
  );
}
