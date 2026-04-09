import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Frontline EV Rentals",
  description:
    "Contact Frontline EV Rentals for zero emission construction equipment rentals, DVBE documentation, or project support. (831) 262-2847.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Contact Us"
        subhead="Get in touch for quotes, questions, or DVBE documentation"
        compact
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">
                  Direct Contact
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:8312622847"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        (831) 262-2847
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:alex@frontline.rentals"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        alex@frontline.rentals
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Business Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday, 7am - 5pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Equipment Yards
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Salinas, CA (Central Coast)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Lodi, CA (Central Valley)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-border bg-muted/50 p-5">
                  <h3 className="font-semibold text-foreground">
                    Service Area
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We serve all of California. Free pickup from Salinas or
                    Lodi. Delivery available statewide at pass-through cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
