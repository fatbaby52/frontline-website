import { Zap, VolumeX, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/container";

const valueProps = [
  {
    icon: Zap,
    title: "Zero Emissions",
    text: "Work indoors, near schools, hospitals. Meet AQMD requirements with clean electric power.",
    color: "bg-lime text-primary",
  },
  {
    icon: VolumeX,
    title: "Whisper Quiet",
    text: "Night shifts without noise complaints. Perfect for residential areas and sensitive sites.",
    color: "bg-primary text-white",
  },
  {
    icon: BadgeCheck,
    title: "DVBE Certified",
    text: "Help primes meet state DVBE goals. Full documentation and certification letters provided.",
    color: "bg-teal-light text-primary",
  },
];

export function ValueProps() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: prop.color.includes("lime") ? "#BFDE00" : prop.color.includes("teal-light") ? "#E0F4F4" : "#0A5555" }}
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${prop.color.includes("lime") ? "bg-primary/10" : prop.color.includes("primary") ? "bg-white/20" : "bg-primary/10"}`}>
                  <prop.icon
                    className={`h-7 w-7 ${prop.color.includes("lime") ? "text-primary" : prop.color.includes("primary") ? "text-white" : "text-primary"}`}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={`font-heading text-xl font-bold ${prop.color.includes("primary text-white") ? "text-white" : "text-primary"}`}>
                  {prop.title}
                </h3>
                <p className={`mt-3 leading-relaxed ${prop.color.includes("primary text-white") ? "text-white/80" : "text-primary/70"}`}>
                  {prop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
