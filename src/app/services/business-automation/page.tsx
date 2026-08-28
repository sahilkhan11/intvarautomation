import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Business Automation Alwar | WhatsApp & Lead Workflows",
  description: "Stop doing manual follow-ups. Our business automation services for Alwar SMBs include WhatsApp API, lead capture, and workflow automation.",
  alternates: {
    canonical: "/services/business-automation"
  }
};

export default function BusinessAutomationPage() {
  const schemaDescription = "Business automation, WhatsApp API integration, and lead capture workflows for local businesses in Alwar and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Business Automation" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Business Automation", item: "https://intvarautomation.online/services/business-automation" }
        ]}
      />
      <HowToSchema 
        name="How we automate your business"
        description="Our step-by-step business and workflow automation process"
        steps={[
          { name: "Workflow Audit", text: "We analyze your current operations to identify bottlenecks, manual data entry, and dropped leads." },
          { name: "Automation Engineering", text: "We build integrations connecting your CRM, WhatsApp, and Google Sheets so data moves instantly without human effort." },
          { name: "Go-Live & Optimization", text: "We deploy the systems, train your team, and monitor the automated sequences to ensure maximum reliability." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="AUTOMATION"
        title="Business Automation Alwar"
        subtitle="Stop doing manual follow-ups. We automate WhatsApp replies, CRM data entry, and lead capturing for businesses across Rajasthan so you can focus on closing deals, not copy-pasting numbers."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Cost of Manual Work</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              If your front desk or sales team is spending hours every week manually saving numbers, sending WhatsApp follow-ups, and copy-pasting lead data into Excel, you are bleeding money. Manual workflows lead to human error, delayed responses, and lost customers. In today's market, if you don't respond to a lead within 5 minutes, they have already messaged your competitor.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Approach</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We replace tedious manual tasks with software. Using tools like n8n, WhatsApp Cloud API, and custom webhooks, we connect the software you already use so they talk to each other automatically. When a lead fills out a form on your website, they instantly receive a personalized WhatsApp message, their data goes straight into your CRM, and your sales team gets a notification—all in real-time, with zero human intervention.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">How We Work</h2>
            <ol className="list-decimal list-inside opacity-70 leading-relaxed text-lg">
              <li><strong>Process Mapping:</strong> We map out your entire customer journey from the first touchpoint to the final sale, identifying exactly where automation can replace manual work.</li>
              <li><strong>Systems Integration:</strong> We connect your Facebook Ads, Website Forms, Google Sheets, CRM, and WhatsApp Business API using robust automation pipelines.</li>
              <li><strong>Testing & Launch:</strong> We run edge-case scenarios to ensure the automation fires correctly 100% of the time, then push it live to immediately handle your inbound traffic.</li>
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can you automate my WhatsApp replies and bookings?</h3>
                <p className="opacity-70">Yes. We specialize in WhatsApp Business API integrations. We can set up systems that instantly reply to incoming queries, send automated appointment reminders, and follow up with leads based on their specific responses.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">What happens if the automation breaks?</h3>
                <p className="opacity-70">We build robust error-handling into all our workflows. If an API goes down or an integration fails, the system automatically alerts us (and you) so it can be fixed immediately, and we set up fallback mechanisms so no data is ever permanently lost.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to automate your follow-ups?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Explore our other services:</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Solutions</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Website Development</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Industries we automate:</span>
              <Link href="/industries/clinics" className="underline hover:opacity-100">Clinics</Link>
              <span>|</span>
              <Link href="/industries/real-estate" className="underline hover:opacity-100">Real Estate</Link>
              <span>|</span>
              <Link href="/industries/retail" className="underline hover:opacity-100">Retail</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
