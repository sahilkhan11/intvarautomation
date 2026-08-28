import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Development Agency in Jaipur | Workflow Automation",
  description: "Enterprise AI automation and LLM integrations for B2B companies in Jaipur. Replace manual admin, streamline operations, and scale with custom AI workflows.",
  alternates: {
    canonical: "/locations/jaipur/ai-automation"
  }
};

export default function JaipurAIAutomationPage() {
  const schemaDescription = "Custom AI solutions, workflow automation, and LLM implementations for enterprises and B2B operations in Jaipur, Jhotwara.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="AI Automation" 
        description={schemaDescription}
        areaServed={["Jaipur"]}
        url="https://intvarautomation.online/locations/jaipur/ai-automation"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Locations", item: "https://intvarautomation.online/locations" },
          { name: "Jaipur", item: "https://intvarautomation.online/locations/jaipur" },
          { name: "AI Automation", item: "https://intvarautomation.online/locations/jaipur/ai-automation" }
        ]}
      />
      
      <PageHero 
        variant="dark"
        eyebrow="JAIPUR, RAJASTHAN"
        title="AI Automation for Jaipur Enterprises"
        subtitle="Stop running your business on messy spreadsheets and manual data entry. We build custom AI workflows and LLM integrations that replace grunt work."
      />

      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Blue Ocean of AI Efficiency</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Most agencies in Jaipur are selling "AI" as a buzzword, offering basic chatbots that frustrate your customers. At Intvar Automation, we look at AI as a strict operational lever. We analyze your most expensive, time-consuming administrative workflows and replace them with precise, custom-trained LLM pipelines.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">What We Automate</h2>
            <ul className="list-disc list-inside opacity-70 leading-relaxed text-lg space-y-4">
              <li><strong>Lead Qualification:</strong> AI agents that engage inbound inquiries 24/7, ask qualifying questions, and book appointments into your calendar directly via WhatsApp.</li>
              <li><strong>Document Extraction:</strong> Automatically parse PDFs, invoices, and purchase orders into your existing CRM or database without human data entry.</li>
              <li><strong>Internal Knowledge Bases:</strong> Train secure LLMs on your company's internal documents so your staff can instantly search SOPs, policies, and technical manuals.</li>
            </ul>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to Automate Your Operations?</h2>
            <p className="opacity-70 max-w-lg">Visit our Jaipur office in Jhotwara (near Kanta Chauraha) or book a digital consultation to map out your first AI workflow.</p>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
