import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Real Estate CRM in Alwar | Property Management Software",
  description: "Capture and convert more property leads with our Real Estate CRM for Alwar brokers. Automate follow-ups and track site visits easily.",
  alternates: {
    canonical: "/industries/real-estate"
  }
};

export default function RealEstateIndustryPage() {
  const schemaDescription = "Real Estate CRM, Lead Management, and Property Management Software for builders and brokers in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Real Estate CRM" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Real Estate", item: "https://intvarautomation.online/industries/real-estate" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="PROPERTY & REAL ESTATE"
        title="Real Estate CRM Alwar"
        subtitle="[COPY: ...]"
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Tragedy of Leaking Leads</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              [COPY: ...]
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Automated Real Estate CRM</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              [COPY: ...]
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it capture leads directly from Facebook Ads?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Does it send automated WhatsApp brochures?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to close more deals?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">WhatsApp Automation</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Real Estate Websites</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
