import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  ScanLine,
  ClipboardList,
  CalendarCheck,
  Search,
  Leaf,
  Map,
  Plane,
  ShieldCheck,
  Check,
  Zap,
  Clock,
  Target,
  DollarSign,
  Building2,
  Landmark,
  TreePine,
  Home,
  Sun,
  Wheat,
  Droplets,
  Flame,
  BadgeCheck,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "Aerial Documentation & Inspection Services | Drone LiDAR | Frontline EV Rentals",
  description:
    "Professional drone-based aerial services for construction, infrastructure, and environmental projects. FAA Part 107 certified. LiDAR mapping, site documentation, inspections. Serving all of California.",
};

const services = [
  {
    icon: Camera,
    title: "Site Documentation",
    description:
      "High-resolution aerial photography and 4K video for project records, progress tracking, and stakeholder reporting. Capture your entire site from perspectives impossible to achieve from the ground.",
  },
  {
    icon: ScanLine,
    title: "LiDAR Mapping & 3D Modeling",
    description:
      "Drone-mounted LiDAR captures millions of precise data points to generate accurate 3D topographical models, digital elevation maps, and detailed terrain analysis. Ideal for grading verification, volumetric calculations, cut/fill analysis, and engineering-grade site surveys. LiDAR penetrates vegetation canopy to map ground surfaces that traditional photogrammetry cannot capture.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Construction Surveys",
    description:
      "Aerial mapping and imagery to support project planning, bid preparation, and baseline documentation before ground is broken.",
  },
  {
    icon: CalendarCheck,
    title: "Progress Monitoring",
    description:
      "Scheduled flyovers to document construction phases, track progress against timelines, and create visual records for project management and client updates.",
  },
  {
    icon: Search,
    title: "Inspection Services",
    description:
      "Safe aerial inspection of rooftops, structures, and hard-to-reach areas without scaffolding, lifts, or putting personnel at height.",
  },
  {
    icon: Leaf,
    title: "Environmental & Compliance Documentation",
    description:
      "Aerial documentation for SWPPP inspections, BMP verification, erosion control monitoring, and environmental compliance reporting.",
  },
  {
    icon: Map,
    title: "Orthomosaic Mapping",
    description:
      "Stitched aerial imagery creating accurate, measurable overhead maps of your site for planning, measurement, and documentation purposes.",
  },
];

const whyAerial = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Inspect roofs, structures, and remote areas without putting workers at height or in hazardous locations.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description:
      "Capture in minutes what would take hours on foot. Reduce site visits while improving documentation quality.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description:
      "Timestamped, GPS-tagged imagery and LiDAR data provide defensible documentation for compliance, disputes, and project records.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Eliminate scaffolding, lift rentals, and multi-person inspection crews for routine documentation needs.",
  },
];

const certifications = [
  "FAA Part 107 Remote Pilot Certificate",
  "California Qualified Applicator License (QAL)",
  "Liability insurance for commercial drone operations",
  "Compliant with FAA airspace regulations and local requirements",
  "LAANC authorization for controlled airspace operations as needed",
];

const industries = [
  { icon: Building2, name: "Construction", description: "General contractors and construction managers" },
  { icon: Landmark, name: "Government", description: "Government agencies and public works departments" },
  { icon: TreePine, name: "Environmental", description: "Environmental consultants and compliance firms" },
  { icon: Home, name: "Property Management", description: "Property managers and facility owners" },
  { icon: Sun, name: "Renewable Energy", description: "Solar and renewable energy installations" },
  { icon: Wheat, name: "Agriculture", description: "Agriculture and land management" },
  { icon: Droplets, name: "Water Districts", description: "Water districts and flood control agencies" },
  { icon: Flame, name: "Fire & Vegetation", description: "CAL FIRE and vegetation management contractors" },
];

export default function DroneLidarPage() {
  return (
    <>
      <Hero
        headline="Aerial Documentation & Inspection Services"
        subhead="Professional drone-based aerial services for construction, infrastructure, and environmental projects throughout California. FAA Part 107 certified."
        primaryCta={{ label: "Get a Quote", href: "/quote" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Services */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Services
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Our FAA Part 107 certified pilot delivers precise documentation when and where you need it.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-6 rounded-xl border-2 border-dashed border-accent/40 bg-accent/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                      Aerial Herbicide Application
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      Coming Soon
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    We are expanding into drone-based herbicide application
                    services for vegetation management, invasive species control,
                    and right-of-way maintenance. Our pilot holds a California
                    Qualified Applicator License (QAL) with prior aerial
                    application experience. Contact us to discuss future project
                    needs or to be notified when this service becomes available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Aerial Documentation */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Why Aerial Documentation?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {whyAerial.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Certification & Compliance */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex items-center gap-3">
              <BadgeCheck className="h-7 w-7 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                Certification & Compliance
              </h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="bg-bg-alt py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Industries Served
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <industry.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Zap className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
              Service Area
            </h2>
            <p className="mt-4 text-muted-foreground">
              Based in Salinas with statewide coverage. Local service throughout
              Monterey, San Benito, Santa Cruz, and San Joaquin counties. Travel
              available for projects throughout California.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Get Started"
        subhead="Contact us to discuss your project requirements and receive a quote for aerial documentation services."
        ctaLabel="Get a Quote"
        ctaHref="/quote"
      />
    </>
  );
}
