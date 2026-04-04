// Company contact information - single source of truth
export const COMPANY = {
  name: "Frontline EV Rentals",
  phone: "(209) 470-6385",
  phoneHref: "tel:2094706385",
  smsHref: "sms:2094706385",
  email: "alex@frontline.rentals",
  emailHref: "mailto:alex@frontline.rentals",
  certificationId: "#2048632",
  cageCode: "17WA3",
  locations: {
    salinas: {
      name: "Salinas",
      region: "Central Coast",
    },
    lodi: {
      name: "Lodi",
      region: "Central Valley",
    },
  },
} as const;

// Icon size scale for consistency
export const ICON_SIZES = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
  "2xl": "h-8 w-8",
} as const;

export type IconSize = keyof typeof ICON_SIZES;
