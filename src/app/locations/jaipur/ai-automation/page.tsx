import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI & WhatsApp Automation Agency in Jaipur | Intvar Automation",
  description: "Custom AI automation, WhatsApp Business API workflows, and lead qualification for businesses in Jaipur. Based in Jhotwara, serving Mansarovar, Malviya Nagar, and Sitapura.",
  alternates: {
    canonical: "/locations/jaipur/ai-automation"
  }
};

export default function JaipurAIAutomationPage() {
  const schemaDescription = "Custom AI solutions, WhatsApp Business automation, and lead qualification systems for businesses and healthcare clinics in Jaipur, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="AI & WhatsApp Automation" 
        description={schemaDescription}
        areaServed={["Jaipur", "Jhotwara", "Mansarovar", "Malviya Nagar", "Sitapura"]}
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
        title="AI & WhatsApp Automation for Jaipur Businesses"
        subtitle="Stop running customer acquisition and back-office operations on manual phone calls and disorganized spreadsheets. We build intelligent WhatsApp workflows and automated lead systems that capture clients 24/7."
      />

      {/* Value Section */}
      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase">The Practical Reality of AI for Jaipur Enterprises</h2>
            <p className="opacity-80 leading-relaxed text-lg">
              Most digital marketing agencies in Jaipur sell generic chatbots that do nothing but frustrate your prospective clients. At Intvar Automation, we treat automation as a measurable commercial tool. We target your most expensive, repetitive operational tasks and replace them with reliable, automated pipelines.
            </p>
            <p className="opacity-80 leading-relaxed text-lg">
              Whether you operate a multi-speciality dental clinic in Mansarovar, a luxury showroom in Malviya Nagar, or an export business in Sitapura, our systems ensure zero missed calls, instant WhatsApp qualification, and direct CRM synchronization.
            </p>
          </div>

          {/* Services Covered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">01. Lead Qualification</span>
              <h3 className="text-xl font-bold uppercase">24/7 WhatsApp Conversational Agents</h3>
              <p className="opacity-70 leading-relaxed">
                Engage inbound inquiries instantly across Meta Ads and Google searches. Answer customer questions in natural Hindi or English and book qualified consultations straight into your schedule.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">02. Instant Follow-Up</span>
              <h3 className="text-xl font-bold uppercase">Missed Call Auto-Engage</h3>
              <p className="opacity-70 leading-relaxed">
                When a customer calls during busy clinic hours or after closing time, our system triggers an instant personalized WhatsApp greeting with service details and booking options.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">03. Document Processing</span>
              <h3 className="text-xl font-bold uppercase">Automated Invoicing & Data Extraction</h3>
              <p className="opacity-70 leading-relaxed">
                Extract details from incoming customer invoices, orders, and PDF receipts directly into your Google Sheets, Zoho, or internal accounting ledger without human re-entry.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">04. Custom Knowledge Bases</span>
              <h3 className="text-xl font-bold uppercase">Staff & Customer AI Search</h3>
              <p className="opacity-70 leading-relaxed">
                Equip your team with a private AI assistant trained strictly on your company catalogs, price lists, and technical SOPs for instant, accurate customer support answers.
              </p>
            </div>
          </div>

          {/* Proof Section */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-6 mt-6">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Client Proof • Healthcare Clinic Case Study</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase">Turning 60+ Weekly Missed Calls into Confirmed Appointments</h3>
            <p className="opacity-80 leading-relaxed text-base md:text-lg">
              A busy clinic in Jaipur regularly missed patient calls during peak procedure hours. Intvar Automation connected their reception landline to an official WhatsApp Business workflow. Every missed caller received an instant WhatsApp prompt with doctor availability and a one-click slot reservation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-3xl font-bold text-emerald-400">10 Seconds</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Average Response Time</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-emerald-400">+42%</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Monthly Booked Appointments</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-emerald-400">Zero</span>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Missed Patient Inquiries</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex flex-col gap-6 mt-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">Where can we meet in Jaipur?</h3>
                <p className="opacity-70 leading-relaxed">
                  Our regional hub is in Jhotwara, near Kanta Chauraha in Jaipur. We can arrange an in-person meeting at your clinic or office, or conduct a screen-share demo of our live automation systems.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">Do you use the official Meta WhatsApp Business API?</h3>
                <p className="opacity-70 leading-relaxed">
                  Yes, exclusively. We configure official WhatsApp Cloud API access via Meta with green-tick eligibility, so your business phone number never gets banned or flagged as spam.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2">How fast can an automation system be deployed?</h3>
                <p className="opacity-70 leading-relaxed">
                  Standard WhatsApp appointment and lead capture workflows are fully live within 3 to 5 business days, including phone number verification, template approval, and staff testing.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-12 flex flex-col gap-6 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-3xl font-bold uppercase">Start Automating Your Client Capture</h2>
            <p className="opacity-70 max-w-lg">
              Book a 15-minute consultation with Sahil to map out your high-impact automation levers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform text-sm">
                Book Consultation
              </Link>
              <Link href="https://wa.me/917372908326?text=Hi%20Sahil,%20I%20am%20in%20Jaipur%20and%20want%20to%20automate%20my%20business" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-colors text-sm">
                WhatsApp +91 7372908326
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Explore Related Services:</span>
              <Link href="/locations/jaipur" className="underline hover:opacity-100">Jaipur Hub</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Website Engineering</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Solutions</Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
