import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Truck,
  Camera,
  ClipboardList,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Users,
  FileText,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DVBE Participation Support in California | Frontline EV Rentals",
  description:
    "Frontline EV Rentals is a DVBE-certified business that supports California projects through electric equipment rentals, drone imaging, and practical project support services.",
  keywords: [
    "DVBE participation California",
    "DVBE certified services",
    "DVBE equipment rental",
    "California public project DVBE",
    "DVBE subcontractor California",
  ],
  alternates: {
    canonical: "https://frontline.rentals/dvbe-participation",
  },
  openGraph: {
    title: "DVBE Participation Support in California | Frontline EV Rentals",
    description:
      "DVBE-certified support for California public projects through equipment rentals, drone imaging, and project support services.",
    url: "https://frontline.rentals/dvbe-participation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DVBE Participation Support",
  description:
    "DVBE-certified business providing equipment rentals, drone imaging, and project support services for California public projects.",
  provider: {
    "@type": "LocalBusiness",
    name: "Frontline EV Rentals",
    telephone: "(831) 262-2847",
    email: "alex@frontline.rentals",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Disabled Veteran Business Enterprise (DVBE)",
      recognizedBy: {
        "@type": "Organization",
        name: "State of California",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "California",
  },
};

const services = [
  {
    icon: Truck,
    title: "Equipment Rentals",
    description:
      "Frontline provides electric equipment rentals that may align with project needs where zero-emission equipment is useful or preferred. Our fleet includes electric skid steers available from Salinas and Lodi, with delivery available statewide.",
  },
  {
    icon: Camera,
    title: "Drone and Site Imaging",
    description:
      "Frontline can provide aerial imagery and video to support documentation, reporting, progress visibility, and project presentation. This service is useful for projects that need visual records, stakeholder updates, or site surveys.",
  },
  {
    icon: ClipboardList,
    title: "Project Support",
    description:
      "Frontline may provide practical, field-oriented support services where appropriate. This includes tasks that help keep work organized and moving, tailored to actual project needs.",
  },
];

const whoThisHelps = [
  {
    icon: Building2,
    text: "General contractors on California public projects",
  },
  {
    icon: Users,
    text: "Subcontractors looking for legitimate DVBE participation partners",
  },
  {
    icon: FileText,
    text: "Teams working on state-funded contracts",
  },
  {
    icon: Briefcase,
    text: "Buyers or project teams looking for practical DVBE-certified services",
  },
];

export default function DVBEParticipationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div
          className="absolute -right-20 top-20 h-40 w-[500px] rotate-[-20deg] bg-lime opacity-20 blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime" aria-hidden="true" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-primary">
              <ShieldCheck className="h-4 w-4" />
              CA Certification ID #2048623
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DVBE-Certified Support for California Projects
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
              Support your DVBE participation requirements through real project services, including equipment rentals, drone imaging, and practical project support.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-lime px-10 text-lg font-bold text-primary shadow-lg shadow-lime/30 transition-all duration-200 hover:bg-accent-hover"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Opening Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-muted-foreground">
              Many California public projects require DVBE participation, often in the range of 3% to 5%.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Frontline EV Rentals is a DVBE-certified business that can support California projects through real, project-related services, including electric equipment rentals, drone and site imaging, and practical support work.
            </p>
          </div>
        </Container>
      </section>

      {/* A Practical DVBE Partner */}
      <section className="bg-muted py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              A Practical DVBE Partner for California Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              Frontline is not just a certified business on paper. We work with contractors and project teams to provide real, usable project services that can support DVBE participation requirements when there is a legitimate fit.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Equipment rental tied to project operations",
                "Drone imaging and documentation support",
                "Practical field-oriented support services",
                "Fast response for bid-stage conversations and documentation requests",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How We Help */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              How We Help
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* When Rentals Are Not the Right Fit */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              When Rentals Are Not the Right Fit
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Not every project needs an electric skid steer. In some cases, the better fit may be drone imaging or another legitimate support service that still helps meet project needs while also supporting DVBE participation goals.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with contractors to understand their actual project requirements and identify services that make sense for the work being done.
            </p>
          </div>
        </Container>
      </section>

      {/* Who This May Help */}
      <section className="bg-teal-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Who This May Help
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {whoThisHelps.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Important Notice */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Services Based on Actual Project Needs
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Frontline does not provide pass-through participation. All services are provided based on actual project needs, and we work only on projects where our services are a legitimate fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Equipment First */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Equipment Rentals Remain Our Core Focus
            </h2>
            <p className="mx-auto max-w-2xl text-center text-muted-foreground">
              Frontline EV Rentals is first and foremost an electric equipment rental company. Our fleet of zero-emission skid steers is available from Salinas and Lodi, with delivery statewide.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Electric Skid Steers
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Zero emissions for compliance-driven jobs",
                    "Low noise for urban and sensitive sites",
                    "Available now from Salinas and Lodi",
                    "Delivery available statewide",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/equipment">View Equipment</Link>
                </Button>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  DVBE Certification Details
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>California DVBE Certified</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>CA Certification ID: #2048623</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>CAGE Code: 17WA3</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>Documentation provided for bids</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href="/dvbe-equipment-rental">DVBE Rental Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How Contractors Typically Use Frontline */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              How Contractors Typically Use Frontline
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most contractors do not need a generic certification partner. They need a DVBE-certified vendor that can perform real work tied to the project.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Listing Frontline as an equipment rental subcontractor",
                "Using Frontline for drone imaging or project documentation",
                "Engaging Frontline for practical support work where appropriate",
                "Building DVBE participation around legitimate scope, not paperwork alone",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              We work with contractors to identify services that make practical sense for the project, then support the bid process with the documentation needed to include Frontline properly.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Tell Us About Your Project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and your DVBE participation needs, and we will help determine whether there is a practical way to work together.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Bid Documentation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quote">Ask About DVBE Support</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {COMPANY.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Contractor Resources */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h3 className="text-center font-heading text-lg font-bold text-foreground">
              Related Contractor Resources
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/dvbe-equipment-rental" className="text-sm text-primary hover:underline">DVBE Equipment Rental</Link>
              <Link href="/for-contractors" className="text-sm text-primary hover:underline">Contractor Information</Link>
              <Link href="/zero-emission-equipment-california" className="text-sm text-primary hover:underline">Zero Emission Equipment CA</Link>
              <Link href="/utility-public-works" className="text-sm text-primary hover:underline">Utility & Public Works</Link>
              <Link href="/salinas-rentals" className="text-sm text-primary hover:underline">Salinas Rentals</Link>
              <Link href="/lodi-rentals" className="text-sm text-primary hover:underline">Lodi Rentals</Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Ready to Discuss Your Project?"
        subhead="Contact us to explore how Frontline can support your DVBE participation needs through real project services."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        secondaryCtaLabel="View Equipment"
        secondaryCtaHref="/equipment"
      />
    </>
  );
}
