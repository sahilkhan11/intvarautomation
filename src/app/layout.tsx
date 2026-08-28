import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
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

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-200.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/GeneralSans-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
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
        url: "/images/concept 1.png",
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
    image: "/images/concept 1.png",
    description: "AI Marketing, Web Development & Automation Software",
    areaServed: ["Rajasthan", "Alwar", "Bhiwadi", "Jaipur"],
    url: "https://intvarautomation.online",
    telephone: "+91-7372908326",
    priceRange: "₹21,000–₹40,000",
    openingHours: "Mo-Fr 09:00-18:00",
    address: [
      {
        "@type": "PostalAddress",
        "streetAddress": "200 feet road in front of sundarvan resort",
        "addressLocality": "Alwar",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Jhotwara, near kanta chauraha",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    ],
    sameAs: [
      "https://instagram.com/intvar.automate"
    ]
  });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${generalSans.variable} font-sans antialiased`}>
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
