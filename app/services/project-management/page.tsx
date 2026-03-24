import type { Metadata } from "next";
import { Truck, Check, Users, ClipboardList, Wrench } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Project Support Services | Frontline EV Rentals",
  description:
    "Equipment guidance and project coordination for California contractors. We help you choose the right electric equipment for your project.",
};

const services = [
  {
    icon: Wrench,
    title: "Equipment Selection",
    description:
      "Not sure which machine fits your project? We help you choose the right equipment based on your site conditions and requirements.",
  },
  {
    icon: ClipboardList,
    title: "Project Coordination",
    description:
      "We coordinate delivery schedules, charging logistics, and equipment swaps to keep your project running smoothly.",
  },
  {
    icon: Users,
    title: "Operator Orientation",
    description:
      "Every rental includes on-site or yard orientation so your team is confident and productive from day one.",
  },
];

export default function ProjectManagementPage() {
  return (
    <>
      <Hero
        headline="Project Support"
        subhead="Equipment guidance and project coordination for your team"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Truck className="mx-auto mb-4 h-8 w-8 text-primary" />
              <p className="text-lg text-muted-foreground">
                We do more than drop off equipment. Our project support ensures
                you have the right machine, on time, with a team that knows how
                to use it.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-heading text-2xl font-bold text-foreground lg:text-3xl">
              What&apos;s Included with Every Rental
            </h2>
            <div className="space-y-3 text-left">
              {[
                "Equipment selection guidance",
                "Operator orientation at pickup or delivery",
                "Equipment manuals and safety documentation",
                "Charging instructions specific to your site",
                "Phone support during rental period",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Need Help Planning Your Project?"
        subhead="We're here to help you choose the right equipment."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
