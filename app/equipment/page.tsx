import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { equipment } from "@/lib/data/equipment";

export const metadata: Metadata = {
  title: "Electric Skid Steer Rentals | Frontline EV Rentals",
  description:
    "Rent electric skid steers in California. Zero emissions, full-day battery life. DVBE certified. Free pickup from Salinas or Lodi.",
};

export default function EquipmentPage() {
  return (
    <>
      <Hero
        headline="Our Equipment"
        subhead="Electric skid steers built for California job sites. Zero emissions, full power."
        compact
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} equipment={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Not Sure Which Machine You Need?"
        subhead="Tell us about your project and we'll recommend the right equipment."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
      />
    </>
  );
}
