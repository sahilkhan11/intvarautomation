import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "../components/SiteShell";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadPopup from "../components/LeadPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Intvar Suite — AI Marketing & Management Software for Rajasthan Businesses",
  description: "One AI system to capture leads, run WhatsApp follow-ups, manage bookings, and automate your business — built for clinics and shops in Alwar, Jaipur & across Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
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
