import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Alwar",
  description: "Bespoke software, ERP, and CRM solutions for businesses in Alwar, Jaipur & Rajasthan. Scale operations without the bloat.",
  alternates: {
    canonical: "/services/software-development"
  }
};

export default function SoftwareDevelopmentPage() {
  const schemaDescription = "Custom Software Development, ERP, and CRM solutions for businesses in Alwar, Jaipur, and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Software Development" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Software Development", item: "https://intvarautomation.online/services/software-development" }
        ]}
      />
      <HowToSchema 
        name="How we build your custom software"
        description="Our step-by-step software development and ERP implementation process"
        steps={[
          { name: "Requirements & Scoping", text: "We sit down with your team to understand exactly where your current systems are failing." },
          { name: "Architecture & Development", text: "We build a secure, scalable software architecture using modern frameworks." },
          { name: "Deployment & Training", text: "We migrate your data safely, deploy the system, and physically train your staff to use it." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="SOFTWARE DEVELOPMENT"
        title="Custom Software Development Alwar"
        subtitle="Bespoke software, ERP, and CRM solutions for businesses in Alwar, Jaipur & Rajasthan. Stop wrestling with dozens of messy Excel sheets and scale your operations without the bloat."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Problem with Off-the-Shelf Software</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Most businesses in Rajasthan run their entire operations on a fragile web of WhatsApp messages, messy Excel sheets, and paper registers. When they finally decide to upgrade, they buy expensive, off-the-shelf ERP software. The problem? You end up paying for 100 features you don't need, while the 3 features you actually need are missing. Your staff refuses to use it because it's too complicated, and you're back to using Excel.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Approach</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We build custom software that fits your exact business process like a glove. Whether you need an inventory management system for your warehouse, a student portal for your school, or a centralized dashboard to track your sales team across Rajasthan, we build it from the ground up. Our software is designed to be so intuitive that a new employee can learn it in 15 minutes without a manual.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">How We Work</h2>
            <ol className="list-decimal list-inside opacity-70 leading-relaxed text-lg">
              <li><strong>System Audit:</strong> We don't write code until we fully understand your business operations. We identify the bottlenecks and design a software solution to eliminate them.</li>
              <li><strong>Agile Development:</strong> We build the software in modules and give you access to test them as they are finished, ensuring the final product is exactly what you need.</li>
              <li><strong>Data Migration & Launch:</strong> We securely transfer your old data (from Excel or legacy systems) into the new software and train your team on-site.</li>
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can you integrate with our existing accounting software?</h3>
                <p className="opacity-70">Yes. We build custom APIs that allow our software to securely talk to your existing accounting tools like Tally, Zoho, or QuickBooks, ensuring your financial data is always perfectly synced.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Is the software hosted locally or on the cloud?</h3>
                <p className="opacity-70">We highly recommend cloud hosting (AWS, Google Cloud, or local Indian servers) for maximum security, uptime, and accessibility from any device. However, if your business requires an on-premise local server for compliance reasons, we can deploy it locally.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to streamline your operations?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Explore our other services:</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Website Development</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Industries we build for:</span>
              <Link href="/industries/manufacturing" className="underline hover:opacity-100">Manufacturing</Link>
              <span>|</span>
              <Link href="/industries/schools" className="underline hover:opacity-100">Schools</Link>
              <span>|</span>
              <Link href="/industries/clinics" className="underline hover:opacity-100">Clinics</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
