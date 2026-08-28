import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "WhatsApp Automation Agency | Intvar Automation",
  description: "Enterprise WhatsApp Cloud API integration. Automate lead capture, customer support, and appointment bookings 24/7.",
  alternates: {
    canonical: "/services/whatsapp-automation"
  }
};

export default function WhatsAppAutomationPillarPage() {
  const schemaDescription = "WhatsApp Business API integration, AI chatbot development, and automated customer support systems.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="WhatsApp Automation" 
        description={schemaDescription}
        areaServed={["Rajasthan", "Alwar", "Jaipur", "India"]}
        url="https://intvarautomation.online/services/whatsapp-automation"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "WhatsApp Automation", item: "https://intvarautomation.online/services/whatsapp-automation" }
        ]}
      />
      
      <PageHero 
        variant="dark"
        eyebrow="WHATSAPP API"
        title="WhatsApp Automation & AI Chatbots"
        subtitle="Turn your WhatsApp into an automated sales and support engine. We integrate the official WhatsApp Cloud API to handle thousands of conversations instantly."
      />

      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The App Your Customers Actually Use</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Nobody wants to download another app or fill out a clunky web form. 90% of your customers prefer communicating via WhatsApp. If you aren't automating your WhatsApp channel, you are ignoring your biggest asset.
            </p>
            <p className="opacity-70 leading-relaxed text-lg">
              Using the official Meta Cloud API, we build intelligent systems that can process orders, book appointments, and answer FAQs 24 hours a day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase">Lead Qualification</h3>
              <p className="opacity-70">When a lead clicks your ad, they land in WhatsApp. Our AI instantly asks qualifying questions and pushes the data to your CRM.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase">Automated Support</h3>
              <p className="opacity-70">Reduce your support costs by 80%. Our AI reads PDF manuals and past tickets to instantly resolve common customer issues.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 md:col-span-2 text-center items-center">
               <h3 className="text-xl font-bold uppercase">Industry Solutions</h3>
               <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <Link href="/industries/real-estate" className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors">Real Estate</Link>
                  <Link href="/industries/clinics" className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors">Healthcare & Clinics</Link>
                  <Link href="/industries/retail" className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors">Retail & E-commerce</Link>
                  <Link href="/industries/manufacturing" className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors">Manufacturing</Link>
               </div>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Test our AI on WhatsApp</h2>
            <p className="opacity-70 max-w-lg">Click the button below to message our demo bot and see how fast and accurate an automated system can be.</p>
            <Link href="https://wa.me/917372908326" className="px-8 py-4 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4 flex items-center gap-2">
              Message Us on WhatsApp
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
