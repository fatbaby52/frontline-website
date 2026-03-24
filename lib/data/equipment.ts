export interface Equipment {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  dailyRate: number;
  image?: string;
  galleryImages?: { src: string; alt: string }[];
  brochureUrl?: string;
  manufacturerUrl?: string;
  highlights: string[];
  specifications: Record<string, string>;
  included: string[];
  optional: string[];
  idealFor: string[];
}

export const equipment: Equipment[] = [
  {
    slug: "elise-1200",
    name: "FirstGreen Elise 1200",
    type: "Wheeled Electric Skid Steer",
    tagline: "Compact power for tight spaces",
    dailyRate: 525,
    image: "/images/elise-1200.jpg",
    galleryImages: [
      { src: "/images/elise-1200.jpg", alt: "FirstGreen Elise 1200 - Front View" },
      { src: "/images/elise-1200-alt1.png", alt: "FirstGreen Elise 1200 - Product Cutout" },
      { src: "/images/elise-1200-alt2.png", alt: "FirstGreen Elise 1200 - On Site" },
      { src: "/images/elise-1200-alt3.png", alt: "FirstGreen Elise 1200 - Bucket Detail" },
    ],
    brochureUrl: "https://drive.google.com/uc?export=download&id=1woAUSgWvOYtS-ws8OnwE9KwM56z8VNC3",
    manufacturerUrl: "https://first.green/en/elise",
    highlights: [
      "Compact dimensions fit through standard gates",
      "Excellent 360-degree visibility from operator station",
      "Wheeled mobility for hard surfaces",
      "Full-day runtime on single charge",
      "Significantly quieter than diesel equivalents",
    ],
    specifications: {
      "Rated Capacity": "1,200 lbs",
      "Power Source": "Electric / Battery",
      Runtime: "Full work day typical",
      Charging: "Standard industrial power",
    },
    included: [
      "Standard bucket OR forks",
      "Operator orientation",
      "Equipment manual and safety docs",
      "Free yard pickup",
    ],
    optional: [
      "Delivery (pass-through cost)",
      "Specialty attachments (on request)",
      "Extended rental discounts",
    ],
    idealFor: [
      "Indoor construction and renovation",
      "Residential neighborhoods",
      "Hospital and school campuses",
      "Night shift operations",
      "AQMD-restricted areas",
    ],
  },
  {
    slug: "cbl-1200",
    name: "FirstGreen CBL 1200",
    type: "Wheeled Electric Skid Steer",
    tagline: "Compact and maneuverable for any job site",
    dailyRate: 450,
    image: "/images/cbl-1200.jpg",
    galleryImages: [
      { src: "/images/cbl-1200.jpg", alt: "FirstGreen CBL 1200 - Front View" },
      { src: "/images/skid-steer-3.jpg", alt: "FirstGreen CBL 1200 - In Action" },
    ],
    brochureUrl: "https://drive.google.com/uc?export=download&id=1_l0UDJuf2tPMXgyqjfRY3jIPTsMRVuFo",
    manufacturerUrl: "https://first.green/en/cbl",
    highlights: [
      "Lower center of gravity for stability",
      "Excellent maneuverability in tight spaces",
      "Smooth operation on varied surfaces",
      "Full-day runtime on single charge",
      "Zero emissions, minimal noise",
    ],
    specifications: {
      "Rated Capacity": "1,200 lbs",
      "Power Source": "Electric / Battery",
      Runtime: "Full work day typical",
      Charging: "Standard industrial power",
    },
    included: [
      "Standard bucket OR forks",
      "Operator orientation",
      "Equipment manual and safety docs",
      "Free yard pickup",
    ],
    optional: [
      "Delivery (pass-through cost)",
      "Specialty attachments (on request)",
      "Extended rental discounts",
    ],
    idealFor: [
      "General construction sites",
      "Landscaping projects",
      "Material handling",
      "Indoor and outdoor work",
      "Budget-conscious projects",
    ],
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
