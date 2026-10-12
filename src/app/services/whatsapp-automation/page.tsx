import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Enterprise WhatsApp Automation & Cloud API Integration | Intvar",
  description: "Intvar Automation engineers custom WhatsApp Cloud API integrations. Automate lead qualification, customer support, and CRM data entry via WhatsApp.",
  alternates: {
    canonical: "https://intvarautomation.online/services/whatsapp-automation"
  }
};

export default function WhatsAppAutomationPillarPage() {
  const schemaDescription = "WhatsApp Cloud API integration, conversational AI chatbots, and automated customer support workflows for enterprise businesses.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="WhatsApp API & Automation" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/whatsapp-automation"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "WhatsApp Automation", item: "https://intvarautomation.online/services/whatsapp-automation" }
        ]}
      />
      <HowToSchema 
        name="How we integrate WhatsApp automation"
        description="Our technical approach to deploying the Meta WhatsApp Cloud API."
        steps={[
          { name: "API Provisioning", text: "We verify your business with Meta and provision the official WhatsApp Cloud API infrastructure." },
          { name: "Workflow Engineering", text: "We build custom scripts to connect incoming WhatsApp messages directly to your CRM or custom AI models." },
          { name: "Testing & Deployment", text: "We stress-test the conversational flows, ensure template approval from Meta, and launch the automated number." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="WHATSAPP CLOUD API"
        title="Enterprise WhatsApp Automation"
        subtitle="Turn WhatsApp into a 24/7 automated sales and support engine. We integrate the official Meta API to process thousands of conversations instantly."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            Stop Using WhatsApp Business on a Single Phone.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Nobody wants to download another proprietary app or fill out a clunky web form. 90% of your customers prefer communicating via WhatsApp. However, if your sales team is still operating a standard WhatsApp Business account from a single smartphone, answering messages manually, you are severely throttling your growth and ignoring your biggest asset.
            </p>
            <p>
              At Intvar Automation, we bypass the physical phone entirely. Using the official Meta WhatsApp Cloud API, we build highly intelligent, scalable systems that can process orders, qualify incoming ad leads, book appointments, and instantly answer complex FAQs 24 hours a day—pushing all data directly into your central CRM without a single human keystroke.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">API Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Services Covered</h3>
            <p className="opacity-70 max-w-md">We engineer conversational infrastructure that connects directly to your existing operational databases.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Meta Cloud API Integration",
              "AI Chatbot Training (LLMs)",
              "Automated Lead Qualification",
              "CRM & ERP Sync via Webhooks",
              "Automated Payment Links",
              "Broadcasts & Transactional Alerts"
            ].map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                <span className="text-white opacity-40 font-mono mt-1">0{i + 1}</span>
                <span className="font-bold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Proof Section - Real Projects */}
      <Section variant="light" className="py-20 md:py-28 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our API Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">WhatsApp Systems Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lali Super Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">WhatsApp API • Retail</span>
                <h4 className="text-3xl font-bold mb-4">Lali Super Automated Procurement</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Supplier coordination was being handled via manual WhatsApp messages, leading to massive delays and a 30% overhead in order processing times.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We integrated the WhatsApp Cloud API directly into their custom POS dashboard. Now, when stock hits reorder levels, the API automatically dispatches a WhatsApp message to the specific supplier to confirm quantities and ETAs without human intervention, reducing stockouts by 85%.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            {/* KisanBazaar Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">WhatsApp Alerts • Agri-Tech</span>
                <h4 className="text-3xl font-bold mb-4">KisanBazaar Notification Engine</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  End consumers needed to know exactly when local farmers harvested fresh produce in real-time, but downloading a dedicated app was a massive friction point.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We engineered a location-based WhatsApp notification system. When a farmer updates their inventory via the web dashboard, the system automatically triggers localized WhatsApp API alerts to nearby registered buyers, driving immediate direct-to-consumer sales.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Will my number get blocked by WhatsApp for spam?</h3>
              <p className="opacity-70 leading-relaxed">
                No, because we use the official Meta Cloud API, not illegal bulk-sender software. By adhering strictly to Meta's opt-in policies and using pre-approved message templates for outbound broadcasts, your number's quality rating is protected and the risk of bans is effectively eliminated.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Can the bot hand over the conversation to a human?</h3>
              <p className="opacity-70 leading-relaxed">
                Absolutely. We build logic trees and AI guardrails so that if a customer asks a complex question the bot cannot confidently answer, it immediately pauses the automation and routes the chat (along with all context) to an available human agent via your dashboard.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Do I need a new phone number?</h3>
              <p className="opacity-70 leading-relaxed">
                You can migrate an existing phone number to the WhatsApp Cloud API, provided you first delete the WhatsApp Business app from your physical device for that specific number. Once migrated to the API, the number exists purely in the cloud.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Test our AI on WhatsApp</h2>
            <p className="opacity-70 max-w-lg">Click the button below to message our demo bot and experience how fast an automated API system responds.</p>
            <Link href="https://wa.me/917372908326" className="px-8 py-4 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4 flex items-center gap-2">
              Message Demo Bot
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Explore Solutions:</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Agents</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Workflow Automation</Link>
              <span>|</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Dashboards</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
