import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "../components/SiteShell";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadPopup from "../components/LeadPopup";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Intvar Suite — AI Marketing & Management Software for Rajasthan Businesses",
  description: "One AI system to capture leads, run WhatsApp follow-ups, manage bookings, and automate your business — built for clinics and shops in Alwar, Jaipur & across Rajasthan.",
  metadataBase: new URL("https://intvarautomation.online"),
  openGraph: {
    title: "Intvar Automation | AI Web & Android Development",
    description: "AI Marketing & Management Software built for Rajasthan Businesses.",
    url: "https://intvarautomation.online",
    siteName: "Intvar Automation",
    type: "website",
    images: [
      {
        url: "/images/og-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Intvar Automation OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intvar Automation | Web, Android, AI & Custom Software",
    description: "AI Marketing & Management Software built for clinics and shops in Alwar, Jaipur & across Rajasthan.",
    site: "@IntvarAutomate",
  },
};

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = generateLocalBusinessSchema({
    name: "Intvar Automation",
    image: "/images/og-placeholder.jpg",
    description: "AI Marketing, Web Development & Automation Software",
    areaServed: ["Rajasthan", "Alwar", "Bhiwadi", "Jaipur"],
    url: "https://intvarautomation.online",
    telephone: "+91-7372908326",
    priceRange: "₹21,000–₹40,000",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://instagram.com/intvar.automate"
    ]
  });

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <SiteShell>
          <Navbar />
          <LeadPopup />
          {children}
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
