import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Website Development Company in Alwar | Intvar Automation",
  description: "Top-rated website development company in Alwar. We build fast, high-converting websites and AI automations for local businesses. Connect with us on 200 Feet Road.",
  alternates: {
    canonical: "/locations/alwar/website-development"
  }
};

export default function AlwarWebsiteDevelopmentPage() {
  const schemaDescription = "Expert web design and AI automation services in Alwar. Custom lead-generation websites for clinics, real estate, and retail on 200 Feet Road.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Website Development" 
        description={schemaDescription}
        areaServed={["Alwar"]}
        url="https://intvarautomation.online/locations/alwar/website-development"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Locations", item: "https://intvarautomation.online/locations" },
          { name: "Alwar", item: "https://intvarautomation.online/locations/alwar" },
          { name: "Website Development", item: "https://intvarautomation.online/locations/alwar/website-development" }
        ]}
      />
      
      <PageHero 
        variant="dark"
        eyebrow="ALWAR, RAJASTHAN"
        title="The #1 Website Development Company in Alwar"
        subtitle="Located right here on 200 Feet Road. We build high-performance, lead-generating websites for Alwar's clinics, real estate agents, and local businesses."
      />

      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-heading font-bold uppercase">Stop Losing Customers to Your Competitors</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              In Alwar, relying on just word-of-mouth isn't enough anymore. When someone searches for a clinic, a property, or a service, they go to Google. If your website is slow, outdated, or doesn't exist, they call your competitor. 
            </p>
            <p className="opacity-70 leading-relaxed text-lg">
              At Intvar Automation, we don't just build online brochures. We build <strong>conversion systems</strong>. Fast, modern websites with built-in WhatsApp automation that turn local traffic into actual bookings.
            </p>
            <Link href="/contact" className="w-max px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4">
              Visit Our Alwar Office
            </Link>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col p-8 gap-6">
            <h3 className="text-2xl font-bold uppercase text-center border-b border-white/10 pb-4">Alwar Clinic Case Study</h3>
            <div className="flex flex-col gap-4 opacity-80 text-lg leading-relaxed italic">
              "We were relying entirely on walk-ins and local referrals. Intvar Automation rebuilt our website and integrated a WhatsApp booking system. Within 30 days, our online appointments increased by 300% and we stopped missing patient inquiries during peak hours. Their system is the hardest-working asset in our clinic."
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
                DR
              </div>
              <div className="flex flex-col">
                <span className="font-bold uppercase tracking-wider text-sm">Dr. Rakesh Sharma</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Dental & Implant Center, Alwar</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 text-black">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-sm font-medium uppercase tracking-widest opacity-60">Verified Performance</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter">Why We Rank Higher</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We engineer our sites to pass Google's strict Core Web Vitals. While other agencies in Alwar use bloated WordPress templates, we code custom Next.js applications that load instantly. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-8 rounded-2xl bg-black/5 border border-black/10 flex flex-col gap-4 text-center">
              <span className="text-4xl font-bold text-green-600">99</span>
              <span className="font-bold uppercase text-sm">Performance Score</span>
            </div>
            <div className="p-8 rounded-2xl bg-black/5 border border-black/10 flex flex-col gap-4 text-center">
              <span className="text-4xl font-bold text-green-600">0.8s</span>
              <span className="font-bold uppercase text-sm">Load Time</span>
            </div>
            <div className="p-8 rounded-2xl bg-black/5 border border-black/10 flex flex-col gap-4 text-center">
              <span className="text-4xl font-bold text-green-600">100%</span>
              <span className="font-bold uppercase text-sm">SEO Optimized</span>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl font-heading font-bold uppercase mb-8">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            <div className="border-b border-foreground/10 pb-6">
              <h3 className="font-bold text-xl mb-2">Where are you located in Alwar?</h3>
              <p className="opacity-70">Our office is situated right on 200 Feet Road, directly in front of Sundarvan Resort. You can visit us to discuss your digital growth strategy in person.</p>
            </div>
            <div className="border-b border-foreground/10 pb-6">
              <h3 className="font-bold text-xl mb-2">Can you help my business rank in local Alwar searches?</h3>
              <p className="opacity-70">Absolutely. We specialize in local SEO. We interlock your website with your Google Business Profile (GBP) using advanced structured data so that you show up first when locals search for your services.</p>
            </div>
            <div className="border-b border-foreground/10 pb-6">
              <h3 className="font-bold text-xl mb-2">Do you only do websites?</h3>
              <p className="opacity-70">No. A website is just the foundation. We build automated WhatsApp lead capture systems, custom CRM integrations, and full Android apps to completely digitize your operations.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
