export interface Equipment {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  bestFor: string;
  dailyRate: number;
  weeklyRate?: string;
  monthlyRate?: string;
  unitsAvailable: number;
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
    type: "Electric Skid Steer with Cab",
    tagline: "Enclosed cab for operator comfort and all-weather work",
    bestFor: "Best for operators who need climate control and comfort on all-day jobs",
    dailyRate: 525,
    weeklyRate: "Contact for rates",
    monthlyRate: "Contact for rates",
    unitsAvailable: 2,
    image: "/images/elise-1200.jpg",
    galleryImages: [
      { src: "/images/elise-1200.jpg", alt: "FirstGreen Elise 1200 electric skid steer with enclosed cab, available for rent in Salinas and Lodi California" },
      { src: "/images/elise-1200-alt1.png", alt: "FirstGreen Elise 1200 zero-emission skid steer showing cab design" },
      { src: "/images/elise-1200-alt2.png", alt: "FirstGreen Elise 1200 electric skid steer on California job site" },
      { src: "/images/elise-1200-alt3.png", alt: "FirstGreen Elise 1200 bucket attachment detail" },
    ],
    brochureUrl: "https://drive.google.com/uc?export=download&id=1woAUSgWvOYtS-ws8OnwE9KwM56z8VNC3",
    manufacturerUrl: "https://first.green/en/elise",
    highlights: [
      "Enclosed cab with climate control",
      "1,200 lb rated operating capacity",
      "Full-day battery runtime",
      "Zero emissions, low noise",
      "Compact footprint for tight spaces",
    ],
    specifications: {
      "Rated Capacity": "1,200 lbs",
      "Power Source": "Electric / Battery",
      "Cab": "Enclosed with HVAC",
      "Runtime": "Full work day typical",
      "Charging": "Standard 120V overnight",
    },
    included: [
      "Delivered fully charged (fuel included)",
      "One heavy-duty outdoor-rated extension cord",
      "Laminated charging instruction card",
      "Return at 10% battery or above",
      "Standard bucket OR forks",
      "Operator orientation",
      "Equipment manual and safety docs",
      "Free yard pickup (Salinas or Lodi)",
    ],
    optional: [
      "Delivery (quoted based on distance)",
      "Specialty attachments (on request)",
      "Extended rental discounts",
    ],
    idealFor: [
      "All-weather job sites",
      "Utility and PG&E work",
      "Public works projects",
      "Urban construction",
      "Indoor work with ventilation",
    ],
  },
  {
    slug: "elise-1200-cbl",
    name: "FirstGreen Elise 1200 CBL",
    type: "Electric Skid Steer, Cabless",
    tagline: "Open operator station for maximum visibility",
    bestFor: "Best for operators who need visibility and maneuverability on tight-access work",
    dailyRate: 450,
    weeklyRate: "Contact for rates",
    monthlyRate: "Contact for rates",
    unitsAvailable: 2,
    image: "/images/cbl-1200.jpg",
    galleryImages: [
      { src: "/images/cbl-1200.jpg", alt: "FirstGreen Elise 1200 CBL cabless electric skid steer available for rent in California" },
      { src: "/images/skid-steer-3.jpg", alt: "FirstGreen Elise 1200 CBL electric skid steer in operation" },
    ],
    brochureUrl: "https://drive.google.com/uc?export=download&id=1_l0UDJuf2tPMXgyqjfRY3jIPTsMRVuFo",
    manufacturerUrl: "https://first.green/en/cbl",
    highlights: [
      "Open operator station, excellent visibility",
      "1,200 lb rated operating capacity",
      "Full-day battery runtime",
      "Zero emissions, low noise",
      "Lower rental cost option",
    ],
    specifications: {
      "Rated Capacity": "1,200 lbs",
      "Power Source": "Electric / Battery",
      "Cab": "Open (cabless)",
      "Runtime": "Full work day typical",
      "Charging": "Standard 120V overnight",
    },
    included: [
      "Delivered fully charged (fuel included)",
      "One heavy-duty outdoor-rated extension cord",
      "Laminated charging instruction card",
      "Return at 10% battery or above",
      "Standard bucket OR forks",
      "Operator orientation",
      "Equipment manual and safety docs",
      "Free yard pickup (Salinas or Lodi)",
    ],
    optional: [
      "Delivery (quoted based on distance)",
      "Specialty attachments (on request)",
      "Extended rental discounts",
    ],
    idealFor: [
      "Indoor construction and renovation",
      "Warehouses and distribution centers",
      "School and campus work",
      "Hospital and healthcare facilities",
      "Residential neighborhoods",
    ],
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
