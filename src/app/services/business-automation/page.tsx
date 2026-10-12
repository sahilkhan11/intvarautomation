import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Business Process & Workflow Automation Agency | Intvar",
  description: "Intvar Automation engineers seamless business workflows. We connect your CRM, WhatsApp API, and custom software to eliminate manual data entry and scale operations.",
  alternates: {
    canonical: "https://intvarautomation.online/services/business-automation"
  }
};

export default function BusinessAutomationPage() {
  const schemaDescription = "Enterprise workflow automation, API integration, and automated lead capture systems to scale business operations securely.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Business Process Automation" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/business-automation"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Business Automation", item: "https://intvarautomation.online/services/business-automation" }
        ]}
      />
      <HowToSchema 
        name="How we automate your business processes"
        description="Our technical approach to auditing, designing, and deploying enterprise automation workflows."
        steps={[
          { name: "Systems Audit", text: "We analyze your current operations to identify data silos, manual entry tasks, and integration gaps." },
          { name: "API & Webhook Engineering", text: "We build custom scripts and API bridges connecting your CRM, marketing platforms, and internal databases." },
          { name: "Deployment & Fallback Testing", text: "We implement the automated sequences with rigorous error handling and fallback mechanisms to ensure 100% uptime." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="WORKFLOW ENGINEERING"
        title="Business Process & Workflow Automation"
        subtitle="Stop bleeding money on manual data entry. We engineer robust automation pipelines that connect your disconnected software, allowing you to scale operations without hiring more staff."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            Manual Work is Destroying Your Margins.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              If your team is spending hours every week manually saving numbers, sending repetitive WhatsApp follow-ups, or copy-pasting lead data from Facebook into an Excel sheet, your business is structurally incapable of scaling. Manual workflows inevitably lead to human error, delayed responses, and lost customers. In today's hyper-competitive market, if you don't engage an inbound lead within 5 minutes, they have already moved on to your competitor.
            </p>
            <p>
              At Intvar Automation, we replace tedious manual labor with sophisticated software engineering. Using tools like custom APIs, secure webhooks, and the WhatsApp Cloud API, we force the software you already use to talk to each other automatically. When a lead fills out a form, they instantly receive a personalized WhatsApp message, their data syncs perfectly to your CRM, and your sales team is notified—all in real-time, with zero human intervention.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">Automation Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Services Covered</h3>
            <p className="opacity-70 max-w-md">We architect resilient, self-healing automation pipelines designed to run 24/7 in the background of your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "CRM & ERP Integration",
              "WhatsApp API Sequences",
              "Lead Capture Automation",
              "Custom Webhook Engineering",
              "Payment & Invoice Triggers",
              "Data Sync (Zapier/Make/n8n)"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Automation Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Pipelines Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lali Super Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Process Automation • Retail</span>
                <h4 className="text-3xl font-bold mb-4">Lali Super Automated Procurement</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  The client managed thousands of SKUs, relying on manual phone calls to coordinate with suppliers. This caused a 30% overhead in order processing times and frequent stockouts.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We engineered an automated pipeline connected to their POS database. When stock hits a reorder threshold, a webhook triggers a WhatsApp API script that automatically messages the supplier to confirm quantities and ETAs. This eliminated 15 hours of manual follow-ups per week.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            {/* Modulus Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Workflow Automation • Education</span>
                <h4 className="text-3xl font-bold mb-4">Modulus Fee Collection Pipeline</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  The institution struggled with delayed fee collections, relying on administration staff to manually cross-reference payment registers and send WhatsApp reminders one by one.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We built a secure cron-job automation that checks the central database daily. If an account is overdue, the system generates a dynamic payment link and automatically dispatches it via SMS and WhatsApp. This automation decreased fee collection delays by 60%.
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
              <h3 className="font-bold text-xl mb-4">Can you connect tools that don't have native Zapier integrations?</h3>
              <p className="opacity-70 leading-relaxed">
                Yes. While we leverage platforms like n8n, Make, or Zapier when appropriate, our core competency is custom software engineering. We can build custom API bridges and webhooks to connect obscure, legacy, or highly-secure proprietary software that out-of-the-box tools cannot handle.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">What happens if a third-party API goes down and breaks the automation?</h3>
              <p className="opacity-70 leading-relaxed">
                We engineer our pipelines with "self-healing" and fallback protocols. If a service like WhatsApp or Facebook goes offline, our system queues the data locally and automatically retries the operation when the connection is restored, ensuring zero data loss. We also set up instant Slack/Email alerts for critical failures.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Is our customer data secure during these automated transfers?</h3>
              <p className="opacity-70 leading-relaxed">
                Security is paramount. All automated data transfers occur over encrypted HTTPS connections. We never store your sensitive customer data on intermediate third-party servers unless explicitly required and approved by your compliance team.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to automate your workflows?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Request an Automation Audit
            </Link>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/whatsapp-automation" className="underline hover:opacity-100">WhatsApp APIs</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Chatbots</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
