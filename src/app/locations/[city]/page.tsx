import { locations } from "@/content/locations";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

type Props = {
  params: { city: string };
};

// Generate metadata dynamically for GEO optimization
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((loc) => loc.slug === params.city);
  
  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://intvarautomation.online/locations/${location.slug}`,
    }
  };
}

// Pre-render these static paths for faster loading and better SEO
export function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export default function LocationPage({ params }: Props) {
  const location = locations.find((loc) => loc.slug === params.city);

  if (!location) {
    notFound();
  }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Web & Android Development",
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
      {/* Inject specific Service schema for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Locations", item: "https://intvarautomation.online/locations" },
          { name: location.city, item: `https://intvarautomation.online/locations/${location.slug}` }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow={`SERVING ${location.city.toUpperCase()}`}
        title={location.heroHeadline}
        subtitle={location.heroSubheadline}
      />

      <Section variant="light" className="py-24 md:py-32">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Local AI & Web Expertise</h2>
          
          <TextReveal 
            as="p"
            text={location.geoContext}
            splitBy="lines"
            className="text-3xl md:text-5xl font-medium leading-snug tracking-tight"
          />
          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Link href="/services" className="px-8 py-4 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors font-medium text-center">
              Explore Our Services
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-medium text-center">
              Get a Free Local SEO Audit
            </Link>
          </div>
        </div>
      </Section>

      <Section variant="dark" className="py-24">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
            Why {location.city} Businesses Choose Us
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mb-12">
            We don&apos;t just build websites. We engineer automated lead-generation machines. Whether you need a custom Android app, an AI chatbot, or a business dashboard, we deliver measurable ROI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
              <p className="opacity-70">Automate your WhatsApp follow-ups, CRM lead capture, and appointment bookings.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="opacity-70">High-performance, SEO-optimized landing pages and corporate websites.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-bold mb-4">Android Apps</h3>
              <p className="opacity-70">Custom mobile applications for internal management or direct-to-consumer sales.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
