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
          { name: "Strategy & Architecture", text: "We analyze your target audience and map out user journeys that drive conversions." },
          { name: "Design & Development", text: "Custom UI/UX design built on modern, lightning-fast frameworks without clunky builders." },
          { name: "Launch & Local SEO", text: "We deploy the site and index it with localized schema markup so you dominate local search." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="WEB DEVELOPMENT"
        title="Website Development Company in Alwar"
        subtitle="We build high-performance, lead-generating websites for businesses in Rajasthan. No bloated WordPress themes—just fast, custom code that ranks and converts."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Problem with Most Websites</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Most local businesses in Rajasthan settle for slow, template-based websites that look identical to their competitors and fail to generate actual leads. A website shouldn't just be an online brochure—it should be your hardest-working sales rep. If your site takes more than 3 seconds to load or doesn't have a clear path to capture contact details, you are losing money to the business next door.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Approach</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We don't use dragging-and-dropping site builders. We code from scratch using Next.js and React—the same tech stack used by companies like Netflix and Nike. This guarantees a sub-second load time, giving you a massive advantage in Google rankings. We integrate WhatsApp buttons, automated contact forms, and local SEO schema directly into the code so your phone actually rings.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">How We Work</h2>
            <ol className="list-decimal list-inside opacity-70 leading-relaxed text-lg">
              <li><strong>Discovery:</strong> We sit down with you to understand your exact customer profile and what action you want them to take (e.g., booking an appointment, requesting a quote).</li>
              <li><strong>Prototyping:</strong> We create a functional mockup so you can see exactly how the site will look and feel before we write a single line of code.</li>
              <li><strong>Development & Handover:</strong> We build the site, connect your CRM/WhatsApp, optimize for Google, and train you on how to manage your incoming leads.</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">How long does it take to launch a website for my business?</h3>
                <p className="opacity-70">A standard 5-page business website takes us about 2 to 3 weeks from kickoff to launch. Custom portals or e-commerce setups take slightly longer, but we will give you a strict timeline before we begin.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Will my website rank on Google in Alwar?</h3>
                <p className="opacity-70">Yes. We build sites specifically structured for local SEO. We include proper H1 tags, meta descriptions, and localized JSON-LD schema (e.g., tagging you as a &quot;LocalBusiness in Alwar&quot;) which explicitly tells Google to show your site to local searchers.</p>
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
