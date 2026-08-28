import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Hotel Management Software in Alwar | Booking Software",
  description: "Complete hotel management software for Alwar. Manage room bookings, inventory, and automated guest communication seamlessly.",
  alternates: {
    canonical: "/industries/hotels"
  }
};

export default function HotelsIndustryPage() {
  const schemaDescription = "Hotel Management Software and Booking Automation for hotels, resorts, and lodges in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Hotel Management Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Hotels", item: "https://intvarautomation.online/industries/hotels" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="HOSPITALITY & HOTELS"
        title="Hotel Management Software Alwar"
        subtitle="Prevent double bookings and streamline your front desk operations. We build custom Hotel Management and Booking Software for hotels and resorts in Alwar, unifying your reservations, housekeeping, and billing into one clean dashboard."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Risk of Double Bookings</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Managing a hotel in Alwar using a mix of physical ledgers, scattered Excel sheets, and separate online portals is exhausting for your staff and risky for your business. When an online booking comes in but your front desk hasn't updated the master ledger, you risk the nightmare scenario of double-booking a room. Furthermore, manually calculating checkout bills, tracking room service, and coordinating with housekeeping delays checkouts and ruins the guest experience just as they are leaving.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Hotel Management Solution</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Our Hotel Management Software serves as the central nervous system for your property. The moment a guest books a room—whether through your website, a phone call, or a travel portal—your digital inventory is instantly updated across the board. The system automatically handles check-ins, tracks restaurant KOTs directly to the room bill, and alerts housekeeping the second a guest checks out. We remove the administrative chaos so you can focus entirely on delivering exceptional hospitality.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it sync with MakeMyTrip and Agoda?</h3>
                <p className="opacity-70">Yes. We can integrate a Channel Manager that automatically synchronizes your room availability across major OTAs like MakeMyTrip, Agoda, Goibibo, and Booking.com in real-time, completely eliminating the risk of double bookings.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Does it handle restaurant billing within the hotel?</h3>
                <p className="opacity-70">Absolutely. The software includes a fully integrated Point of Sale (POS) system for your in-house restaurant, cafe, or bar. Any food or beverage ordered by a guest can be instantly routed to their master room bill for a seamless, single-payment checkout.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to automate your hotel?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Hotel Website Development</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
