export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  questions: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    name: "Rental Basics",
    questions: [
      {
        question: "Do you provide operators?",
        answer:
          "No. Our rentals are equipment only. Your personnel operate the equipment. Basic orientation is provided at pickup or delivery at no charge.",
      },
      {
        question: "What are your rental rates?",
        answer:
          "The Elise 1200 rents for $525/day and the CBL 1200 for $450/day. Weekly and monthly rates are available - contact us for a quote. All rates include standard bucket or forks.",
      },
      {
        question: "What's included with the rental?",
        answer:
          "Every rental includes your choice of standard bucket or forks, basic operator orientation, equipment manuals and safety documentation, and free pickup from our Salinas or Lodi yards.",
      },
    ],
  },
  {
    name: "Pickup & Delivery",
    questions: [
      {
        question: "Where can I pick up equipment?",
        answer:
          "We have yards in Salinas (Central Coast) and Lodi (Central Valley). Pickup during business hours is free.",
      },
      {
        question: "Do you deliver?",
        answer:
          "Yes. Delivery is available throughout California at pass-through cost based on distance. We use trusted local hauling partners.",
      },
      {
        question: "What's your service area?",
        answer:
          "We serve all of California. Our equipment is based in Salinas and Lodi, with easy access to the Bay Area, Sacramento, Fresno, and beyond.",
      },
    ],
  },
  {
    name: "Equipment & Operation",
    questions: [
      {
        question: "How long does the battery last?",
        answer:
          "Both units provide full-day runtime under normal operating conditions. We recommend overnight charging for multi-day rentals.",
      },
      {
        question: "What power do I need for charging?",
        answer:
          "Standard industrial power connection. We provide charging guidance at pickup or delivery specific to your site.",
      },
      {
        question: "Can I use my own attachments?",
        answer:
          "Yes. Our equipment accepts standard hydraulic attachments. Contact us to verify compatibility with specific attachments before your rental.",
      },
      {
        question: "How quiet are they really?",
        answer:
          "Significantly quieter than diesel equivalents. Our electric skid steers enable work in residential areas, near hospitals and schools, and night shift operations without violating noise ordinances.",
      },
    ],
  },
  {
    name: "Insurance & Requirements",
    questions: [
      {
        question: "What insurance do I need?",
        answer:
          "Proof of general liability and inland marine (or rented equipment) coverage is required. Your certificate of insurance must name Frontline EV Rentals as additional insured.",
      },
      {
        question: "Is there a deposit?",
        answer:
          "A refundable security deposit may be required based on rental duration and total value. Deposits are returned after equipment inspection at return.",
      },
      {
        question: "What about damage?",
        answer:
          "Return equipment reasonably clean and charged. Normal wear is expected. Renter is responsible for damage beyond normal use, assessed at return inspection.",
      },
    ],
  },
  {
    name: "For Contractors",
    questions: [
      {
        question: "Are you DVBE certified?",
        answer:
          "Yes. Frontline EV Rentals is a certified Disabled Veteran Business Enterprise (DVBE) in California, as well as certified Small Business and Small Business - Public Works. Our CA Certification ID is #2048632.",
      },
      {
        question: "Can I use your rental toward DVBE goals?",
        answer:
          "Yes. Equipment rental from Frontline counts toward DVBE participation goals on state contracts. We provide all necessary documentation.",
      },
      {
        question: "What documentation do you provide?",
        answer:
          "We provide DVBE certification letters, certificates of insurance, W-9s, and subcontractor information sheets as needed for your bids and compliance.",
      },
    ],
  },
  {
    name: "Booking & Support",
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "Book as early as possible. Popular dates fill quickly, especially during peak construction season. Two weeks advance notice is recommended.",
      },
      {
        question: "Is there after-hours support?",
        answer:
          "Yes. An emergency support line is available for urgent equipment issues during your rental period. Contact information is provided at pickup.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Use our online quote form, email alex@frontline.rentals, or call (209) 470-6385. We respond within one business day.",
      },
    ],
  },
];
