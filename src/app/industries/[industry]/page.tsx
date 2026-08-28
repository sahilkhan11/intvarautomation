import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

// Define the static industry routes for our programmatic cluster
const industries = [
  { slug: "real-estate", name: "Real Estate", keyword: "WhatsApp Automation for Real Estate" },
  { slug: "clinics", name: "Healthcare & Clinics", keyword: "WhatsApp Appointment Booking for Clinics" },
  { slug: "retail", name: "Retail & E-commerce", keyword: "WhatsApp E-commerce Automation" },
  { slug: "manufacturing", name: "Manufacturing", keyword: "Industrial Supply Chain Updates on WhatsApp" }
];

export function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: { industry: string } }): Promise<Metadata> {
  const industry = industries.find(i => i.slug === params.industry);
  
  if (!industry) {
    return {
      title: "Industry Solutions | Intvar Automation"
    }
  }

  return {
    title: `${industry.keyword} | Intvar Automation`,
    description: `Automate your ${industry.name} business with custom WhatsApp Cloud API integration. Instant replies, AI bots, and operational efficiency.`,
    alternates: {
      canonical: `/industries/${industry.slug}`
    }
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const industry = industries.find(i => i.slug === params.industry) || industries[0];
  
  const schemaDescription = `Custom WhatsApp and AI automation solutions specifically designed for the ${industry.name} sector.`;
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName={`${industry.name} Automation`}
        description={schemaDescription}
        areaServed={["India", "Rajasthan"]}
        url={`https://intvarautomation.online/industries/${industry.slug}`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: industry.name, item: `https://intvarautomation.online/industries/${industry.slug}` }
        ]}
      />
      
      <PageHero 
        variant="dark"
        eyebrow="INDUSTRY SPECIFIC AI"
        title={industry.keyword}
        subtitle={`We build tailored WhatsApp AI solutions for ${industry.name} to eliminate manual tracking and engage customers instantly.`}
      />

      <Section variant="dark" className="py-24 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Why {industry.name} Needs WhatsApp Automation</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              In the fast-paced {industry.name} sector, response time is everything. If a prospect reaches out and doesn't get an answer within 5 minutes, your chances of conversion drop by 80%.
            </p>
            <p className="opacity-70 leading-relaxed text-lg">
              Our automated systems ensure 24/7 availability. Integrated directly into the Meta Cloud API, we map out your exact workflows—from initial inquiry to final booking—so the AI handles the heavy lifting while your team focuses on high-value tasks.
            </p>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Deploy AI for {industry.name}</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-4">
              Get Started
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
