import { locations } from "@/content/locations";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const servicesData: Record<string, { title: string, schemaServiceType: string, keyword: string, description: string, benefit1: string, benefit2: string, benefit3: string }> = {
  "website-development": {
    title: "Website Development",
    schemaServiceType: "Web Development",
    keyword: "website development",
    description: "High-performance, lead-generating websites.",
    benefit1: "Custom coded in Next.js and React for sub-second load times.",
    benefit2: "Integrated local SEO schema to outrank competitors.",
    benefit3: "Designed explicitly for conversion and lead capture."
  },
  "android-app-development": {
    title: "Android App Development",
    schemaServiceType: "Mobile Application Development",
    keyword: "Android app development",
    description: "Custom native and cross-platform Android applications.",
    benefit1: "Crash-free architecture mapped to your exact business needs.",
    benefit2: "Offline-first capabilities for field teams and delivery fleets.",
    benefit3: "Full lifecycle management including Play Store deployment."
  },
  "business-automation": {
    title: "Business Automation",
    schemaServiceType: "Automation Services",
    keyword: "business automation",
    description: "WhatsApp API integrations and workflow automation.",
    benefit1: "Zero manual data entry from lead capture to CRM.",
    benefit2: "Instant 24/7 WhatsApp responses to incoming queries.",
    benefit3: "Seamless integration between Facebook Ads, Google Sheets, and CRM."
  },
  "software-development": {
    title: "Software Development",
    schemaServiceType: "Software Development",
    keyword: "custom software development",
    description: "Bespoke software and ERP solutions without the bloat.",
    benefit1: "Built exactly for your workflows, replacing messy Excel sheets.",
    benefit2: "Secure, scalable cloud-hosted architecture.",
    benefit3: "Modules designed for intuitive use with zero training required."
  },
  "ai-solutions": {
    title: "AI Solutions",
    schemaServiceType: "AI Development",
    keyword: "AI development and chatbots",
    description: "Intelligent AI agents tailored to your business data.",
    benefit1: "24/7 customer support handling inquiries in Hinglish.",
    benefit2: "Custom models trained strictly on your business documents.",
    benefit3: "Automated appointment booking and lead qualification."
  }
};

type Props = {
  params: { city: string, service: string };
};

// Generate metadata dynamically for GEO + Service optimization
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((loc) => loc.slug === params.city);
  const service = servicesData[params.service];
  
  if (!location || !service) {
    return { title: "Page Not Found" };
  }

  // E.g., "Top Website Development Company in Alwar | Intvar Automation"
  const metaTitle = `Top ${service.title} Company in ${location.city} | Intvar Automation`;
  const metaDescription = `Looking for expert ${service.keyword} in ${location.city}? Intvar Automation provides ${service.description.toLowerCase()} tailored for ${location.city} businesses.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://intvarautomation.online/locations/${location.slug}/${params.service}`,
    }
  };
}

// Pre-render these static paths for faster loading and better SEO
export function generateStaticParams() {
  const params: { city: string, service: string }[] = [];
  
  locations.forEach((loc) => {
    Object.keys(servicesData).forEach((serviceSlug) => {
      params.push({ city: loc.slug, service: serviceSlug });
    });
  });

  return params;
}

export default function LocationServicePage({ params }: Props) {
  const location = locations.find((loc) => loc.slug === params.city);
  const service = servicesData[params.service];

  if (!location || !service) {
    notFound();
  }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.schemaServiceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Intvar Automation",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.city,
        "addressRegion": location.state,
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": location.city
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Inject specific Service schema for GEO + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Locations", item: "https://intvarautomation.online/locations" },
          { name: location.city, item: `https://intvarautomation.online/locations/${location.slug}` },
          { name: service.title, item: `https://intvarautomation.online/locations/${location.slug}/${params.service}` }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow={`${service.title.toUpperCase()} IN ${location.city.toUpperCase()}`}
        title={`${service.title} Company in ${location.city}`}
        subtitle={`We provide high-performance ${service.keyword} for businesses and clinics across ${location.city}.`}
      />

      <Section variant="light" className="py-24 md:py-32">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Local {service.title} Expertise</h2>
          
          <p className="text-2xl md:text-4xl font-medium leading-snug tracking-tight">
            If your business in {location.city} is looking to scale, you need reliable tech. We deliver {service.description.toLowerCase()} We don't just hand over a product; we engineer a system designed to generate ROI for your specific operations in {location.city}.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Link href={`/services/${params.service}`} className="px-8 py-4 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors font-medium text-center">
              View Service Details
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-medium text-center">
              Get a Free Quote in {location.city}
            </Link>
          </div>
        </div>
      </Section>

      <Section variant="dark" className="py-24">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
            Why {location.city} Businesses Choose Us for {service.title}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mb-12">
            We understand the local market dynamics of {location.city} and tailor our {service.keyword} to meet exact operational demands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">01. Strategy</h3>
              <p className="opacity-70">{service.benefit1}</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">02. Execution</h3>
              <p className="opacity-70">{service.benefit2}</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">03. Support</h3>
              <p className="opacity-70">{service.benefit3}</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
