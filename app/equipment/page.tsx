import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { equipment } from "@/lib/data/equipment";

export const metadata: Metadata = {
  title: "Zero Emission Construction Equipment Rentals | Frontline EV Rentals",
  description:
    "Rent zero emission construction equipment in California. Electric skid steers and excavators. DVBE certified. Free pickup from Salinas or Lodi.",
};

export default function EquipmentPage() {
  return (
    <>
      <Hero
        headline="Our Equipment"
        subhead="Zero emission construction equipment for California job sites. Full power, all-day runtime."
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
