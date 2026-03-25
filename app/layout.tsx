import type { Metadata } from "next";
import { Inter, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chat/chat-widget";
import "./globals.css";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontline.rentals"),
  title: {
    default: "Electric Skid Steer Rental California | Frontline",
    template: "%s | Frontline EV Rentals",
  },
  description:
    "Rent electric skid steers in California. Zero emissions, whisper quiet. DVBE certified for government contractors. Free pickup Salinas & Lodi.",
  keywords: [
    "electric skid steer rental",
    "DVBE equipment rental",
    "California skid steer",
    "zero emission construction equipment",
    "electric construction equipment",
    "Salinas equipment rental",
    "Lodi equipment rental",
  ],
  authors: [{ name: "Frontline EV Rentals" }],
  creator: "Frontline EV Rentals",
  publisher: "Frontline EV Rentals",
  openGraph: {
    title: "Electric Skid Steer Rental | Frontline EV Rentals",
    description:
      "Rent electric skid steers in California. Zero emissions, full power. DVBE certified for government contractors.",
    url: "https://frontline.rentals",
    siteName: "Frontline EV Rentals",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontline EV Rentals - Electric Construction Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Skid Steer Rental | Frontline EV Rentals",
    description:
      "Rent electric skid steers in California. Zero emissions, full power. DVBE certified.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SjMBuuW3vklC-arT0XDj4Ec_DSLeY20WY09I_mnVGyU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
