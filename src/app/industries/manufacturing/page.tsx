import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Manufacturing ERP in Alwar | Factory Automation Software",
  description: "Custom manufacturing ERP for factories in Alwar and Bhiwadi. Streamline production planning, raw material tracking, and dispatch.",
  alternates: {
    canonical: "/industries/manufacturing"
  }
};

export default function ManufacturingIndustryPage() {
  const schemaDescription = "Manufacturing ERP and Factory Automation Software for industrial plants in Alwar, Bhiwadi, and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Manufacturing ERP" 
        description={schemaDescription}
        areaServed={["Alwar", "Bhiwadi", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Manufacturing", item: "https://intvarautomation.online/industries/manufacturing" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="INDUSTRIAL & MANUFACTURING"
        title="Manufacturing ERP Alwar"
        subtitle="Replace messy spreadsheets and disconnected WhatsApp groups with a unified system. We build custom ERP software for factories in Alwar and Bhiwadi to track raw materials, monitor production lines, and streamline dispatch."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Blindspots of Legacy Systems</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              In the industrial hubs of Alwar and Bhiwadi, managing a factory floor with legacy software or fragmented Excel sheets is a recipe for disaster. When your inventory system doesn't talk to your production line, raw material shortages sneak up on you, halting manufacturing and delaying critical client shipments. Furthermore, trying to track machine downtime, labor shifts, and daily production targets through manual paperwork creates massive blindspots. By the time management realizes there is an operational bottleneck, the money is already lost.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Custom Manufacturing ERP</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We build custom Manufacturing ERP systems designed specifically around how your factory actually operates, rather than forcing you to adapt to rigid, bloated software like SAP. Our platforms provide a real-time command center for your entire operation. From the moment raw materials enter the gate, to the exact hour a finished batch is dispatched, everything is tracked automatically. With mobile-friendly dashboards for floor managers and automated daily reporting for owners, you gain absolute visibility and control over your production efficiency.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it be customized for our specific production line?</h3>
                <p className="opacity-70">Yes, 100%. We understand that a plastics manufacturer operates very differently from a food processing plant. We don't sell 'one-size-fits-all' software. We map your specific workflows, QA processes, and supply chains, and build the software modules precisely around your operational reality.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">How do you handle cloud security for sensitive data?</h3>
                <p className="opacity-70">We take data security extremely seriously. We use enterprise-grade cloud architecture (like AWS or Google Cloud) with bank-level encryption. We can also deploy the ERP on your own local, on-premise servers if your company policies require data to remain physically inside the factory.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to optimize your factory floor?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Workflow Automation</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
