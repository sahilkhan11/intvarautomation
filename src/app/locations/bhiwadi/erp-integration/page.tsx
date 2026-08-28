import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Manufacturing ERP Integration in Bhiwadi | Intvar Automation",
  description: "Custom ERP integrations and software solutions for manufacturing plants and industrial units in Bhiwadi. Track inventory, supply chains, and scale operations.",
  alternates: {
    canonical: "/locations/bhiwadi/erp-integration"
  }
};

export default function BhiwadiERPIntegrationPage() {
  const schemaDescription = "Custom manufacturing ERP systems, supply chain APIs, and legacy software integration for factories in Bhiwadi, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="ERP Integration & Custom Software" 
        description={schemaDescription}
        areaServed={["Bhiwadi"]}
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
        eyebrow="BHIWADI, RAJASTHAN"
        title="Custom ERP & Manufacturing Software in Bhiwadi"
        subtitle="Bridge the gap between your factory floor and the back office. We build custom digital dashboards and API integrations for industrial units."
      />

      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Modernizing Bhiwadi's Industrial Core</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Bhiwadi is a powerhouse of manufacturing, but many factories are still operating on disjointed legacy software, Excel sheets, and paper trails. This leads to lost inventory, delayed shipments, and massive inefficiencies.
            </p>
            <p className="opacity-70 leading-relaxed text-lg">
              We specialize in custom software development that integrates with your existing ERPs (like Tally or SAP) to create modern, real-time dashboards accessible from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase">Inventory & Logistics</h3>
              <p className="opacity-70">Custom mobile apps for warehouse staff to scan and track inventory in real-time, instantly syncing with your central database.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase">Legacy API Integration</h3>
              <p className="opacity-70">We build middleware that connects your outdated on-premise software to modern cloud dashboards, ensuring you never lose historical data.</p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Digitize Your Factory Floor</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4">
              Request a Technical Audit
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
