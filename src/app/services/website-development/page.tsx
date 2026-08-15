import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Website Development Company in Alwar & Rajasthan",
  description: "High-performance, lead-generating websites tailored for SMBs and clinics in Alwar. We build sites that rank and convert.",
  alternates: {
    canonical: "/services/website-development"
  }
};

export default function WebsiteDevelopmentPage() {
  const schemaDescription = "Custom web development, design, and lead-generation websites for clinics, real estate, and SMBs in Alwar, Jaipur, and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Web Development" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Website Development", item: "https://intvarautomation.online/services/website-development" }
        ]}
      />
      <HowToSchema 
        name="How we build your website"
        description="Our step-by-step website development process"
        steps={[
          { name: "Strategy & Planning", text: "[COPY: ...]" },
          { name: "Design & Development", text: "[COPY: ...]" },
          { name: "Launch & SEO", text: "[COPY: ...]" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="WEB DEVELOPMENT"
        title="Website Development Company in Alwar"
        subtitle="[COPY: ...]"
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Problem with Most Websites</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              [COPY: ...]
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Approach</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              [COPY: ...]
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">How We Work</h2>
            <ol className="list-decimal list-inside opacity-70 leading-relaxed text-lg">
              <li>[COPY: ...]</li>
              <li>[COPY: ...]</li>
              <li>[COPY: ...]</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">How long does it take to launch a website for my business?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Will my website rank on Google in Alwar?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to upgrade your digital presence?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Explore our other services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Software Development</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Industries we serve:</span>
              <Link href="/industries/hotels" className="underline hover:opacity-100">Hotels</Link>
              <span>|</span>
              <Link href="/industries/restaurants" className="underline hover:opacity-100">Restaurants</Link>
              <span>|</span>
              <Link href="/industries/real-estate" className="underline hover:opacity-100">Real Estate</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
