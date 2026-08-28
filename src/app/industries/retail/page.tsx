import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Retail Billing Software in Alwar | Inventory Management",
  description: "Fast retail billing and inventory management software for stores in Alwar. Prevent stockouts and speed up checkout counters.",
  alternates: {
    canonical: "/industries/retail"
  }
};

export default function RetailIndustryPage() {
  const schemaDescription = "Retail Billing Software, POS, and Inventory Management Systems for stores, supermarkets, and distributors in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Retail Billing Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Retail", item: "https://intvarautomation.online/industries/retail" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="RETAIL & SUPERMARKETS"
        title="Retail Billing Software Alwar"
        subtitle="Speed up your checkout counter and stop guessing what's in stock. We build blazing-fast retail billing and inventory management software that keeps Alwar's supermarkets and retail stores running efficiently."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Problem with Slow Checkouts</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Every extra second a customer waits at your checkout counter is a moment of frustration. Slow billing systems lead to abandoned purchases, unhappy shoppers, and stressed cashiers. Worse, when your inventory isn't synced in real-time, you end up dealing with unexpected stockouts of your best-selling items while over-ordering products that just sit on the shelves gathering dust. Running a retail business in Alwar requires speed and accuracy, not manual counting and endless ledgers.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our High-Speed Retail POS</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We developed our Retail POS and inventory system with one goal: zero friction. The interface is clean, intuitive, and extremely fast, meaning your staff can start billing customers with almost no training. Meanwhile, the software automatically tracks every item sold, sending you instant low-stock alerts and generating daily profit reports directly to your phone. It's the ultimate upgrade from traditional, clunky billing machines—giving you complete control over your store's operations from anywhere.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it handle thousands of SKUs smoothly?</h3>
                <p className="opacity-70">Absolutely. We custom-build our software architecture to handle massive product catalogs. Whether you have 500 or 50,000 SKUs, the system searches, scans, and bills instantly without freezing or lagging during peak festival rushes.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Does it support barcode scanners and thermal printers?</h3>
                <p className="opacity-70">Yes! Our software is completely plug-and-play with all standard retail hardware. It integrates seamlessly with handheld barcode scanners, receipt thermal printers, cash drawers, and digital weighing scales.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to scale your retail store?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
