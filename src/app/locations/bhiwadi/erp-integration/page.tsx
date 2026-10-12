import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Manufacturing ERP & Software Development in Bhiwadi | Intvar Automation",
  description: "Custom ERP integrations and software solutions for manufacturing plants and industrial units in Bhiwadi, Khushkhera, and Tapukara. Track inventory, eliminate paperwork, and scale.",
  alternates: {
    canonical: "/locations/bhiwadi/erp-integration"
  }
};

export default function BhiwadiERPIntegrationPage() {
  const schemaDescription = "Custom manufacturing ERP systems, supply chain APIs, and inventory software for factories in Bhiwadi, Khushkhera, and Tapukara, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="ERP Integration & Industrial Software" 
        description={schemaDescription}
        areaServed={["Bhiwadi", "Khushkhera", "Tapukara"]}
        url="https://intvarautomation.online/locations/bhiwadi/erp-integration"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Locations", item: "https://intvarautomation.online/locations" },
          { name: "Bhiwadi", item: "https://intvarautomation.online/locations/bhiwadi" },
          { name: "ERP Integration", item: "https://intvarautomation.online/locations/bhiwadi/erp-integration" }
        ]}
      />
      
      <PageHero 
        variant="dark"
        eyebrow="BHIWADI INDUSTRIAL CORRIDOR"
        title="Custom ERP & Manufacturing Software in Bhiwadi"
        subtitle="Connect your factory floor with the back office. We build custom inventory dashboards, dispatch Android apps, and Tally/SAP middleware for manufacturing units across Bhiwadi, Khushkhera, and Tapukara."
      />

      {/* Value Section */}
      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase">Modernizing Bhiwadi's Manufacturing Core</h2>
            <p className="opacity-80 leading-relaxed text-lg">
              Bhiwadi is one of northern India's premier industrial belts, yet many units still operate on fragmented Excel files, handwritten dispatch chits, and rigid legacy software. This results in unaccounted raw material wastage, delayed dispatch schedules, and blind management decisions.
            </p>
            <p className="opacity-80 leading-relaxed text-lg">
              At Intvar Automation, we build software designed for factory realities. We build rugged, offline-capable mobile tools for warehouse supervisors and automated cloud dashboards for factory owners so you can see live production, stock levels, and dispatches from anywhere.
            </p>
          </div>

          {/* Services Covered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">01. Warehouse & Stock</span>
              <h3 className="text-xl font-bold uppercase">Barcode & Inventory Apps</h3>
              <p className="opacity-70 leading-relaxed">
                Android scanner applications that warehouse floor staff use to log inwards, batch allocations, and outward dispatches with zero typing errors.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">02. ERP Middleware</span>
              <h3 className="text-xl font-bold uppercase">Tally & Custom Database Sync</h3>
              <p className="opacity-70 leading-relaxed">
                Connect your factory accounting and production logs. Generate invoices, track pending buyer payments, and push dispatch alerts automatically on WhatsApp.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">03. Machine Uptime</span>
              <h3 className="text-xl font-bold uppercase">Maintenance & Shift Logs</h3>
              <p className="opacity-70 leading-relaxed">
                Digital logbooks for maintenance engineers to track equipment servicing schedules, part replacements, and shift downtime.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">04. Vendor Portals</span>
              <h3 className="text-xl font-bold uppercase">Supplier & Purchase Order System</h3>
              <p className="opacity-70 leading-relaxed">
                Centralized web portals where suppliers submit delivery confirmations and download verified purchase orders without endless phone calls.
              </p>
            </div>
          </div>

          {/* Proof / Case Study */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-6 mt-6">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Industrial Case Study • Khushkhera Unit</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase">Cutting Material Reconciliation from 3 Days to 15 Minutes</h3>
            <p className="opacity-80 leading-relaxed text-base md:text-lg">
              A light engineering manufacturer in Khushkhera faced persistent stock mismatches between physical storage bins and their central ledger. Intvar Automation deployed custom barcode scanning tablets on the warehouse floor connected to an instant cloud ledger.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-3xl font-bold text-emerald-400">100%</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Live Stock Accuracy</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-emerald-400">3 Days → 15 Min</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Month-End Audit Time</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-emerald-400">Zero</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Manual Register Entries</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex flex-col gap-6 mt-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">Can your software work with our existing Tally ERP?</h3>
                <p className="opacity-70 leading-relaxed">
                  Yes. We write custom API bridges and sync services that read and write directly to Tally Prime or custom databases, so your accounting team does not have to change their established habits.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">Do you provide on-site deployment in Bhiwadi and Khushkhera?</h3>
                <p className="opacity-70 leading-relaxed">
                  Yes. Intvar Automation is based nearby in Alwar on 200 Feet Road. We conduct on-site factory floor audits, train your floor managers in Hindi or English, and provide direct technical support.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">What is the cost of custom factory software?</h3>
                <p className="opacity-70 leading-relaxed">
                  Most factory modules range between Rs 40,000 and Rs 1,00,000 depending on floor complexity and user accounts. You get full code ownership with zero recurring per-user software licensing fees.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-12 flex flex-col gap-6 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-3xl font-bold uppercase">Digitize Your Factory Floor</h2>
            <p className="opacity-70 max-w-lg">
              Book a 30-minute operational audit with Sahil to identify bottlenecks and review how custom software cuts factory costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform text-sm">
                Request Factory Audit
              </Link>
              <Link href="https://wa.me/917372908326?text=Hi%20Sahil,%20I%20am%20running%20a%20factory%20in%20Bhiwadi%20and%20want%20custom%20software" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-colors text-sm">
                WhatsApp +91 7372908326
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Explore Related Hubs:</span>
              <Link href="/locations/bhiwadi" className="underline hover:opacity-100">Bhiwadi Tech Hub</Link>
              <span>|</span>
              <Link href="/locations/neemrana" className="underline hover:opacity-100">Neemrana Industrial</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">Alwar Head Office</Link>
              <span>|</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
