import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Frontline EV Rentals",
  description:
    "Frequently asked questions about zero emission construction equipment rentals, DVBE certification, pricing, delivery, and more.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((category) =>
    category.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        headline="Frequently Asked Questions"
        subhead="Everything you need to know about renting electric equipment from Frontline"
        compact
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {faqData.map((category) => (
              <div key={category.name} className="mb-10 last:mb-0">
                <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
                  {category.name}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.name}-${index}`}
                      className="rounded-lg border border-border bg-card px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Still Have Questions?"
        subhead="We're here to help. Reach out anytime."
        ctaLabel="Contact Us"
        ctaHref="/contact"
              />
    </>
  );
}
