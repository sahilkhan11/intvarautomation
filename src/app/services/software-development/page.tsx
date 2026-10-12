import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Custom Software, ERP & CRM Development Company | Intvar",
  description: "Intvar Automation engineers custom software, bespoke ERPs, and secure CRM systems. Stop forcing your business into off-the-shelf software limitations.",
  alternates: {
    canonical: "https://intvarautomation.online/services/software-development"
  }
};

export default function SoftwareDevelopmentPage() {
  const schemaDescription = "Custom Software Engineering, Enterprise ERP systems, and bespoke CRM development tailored to specific business operations.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Custom Software & ERP Development" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/software-development"
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
        description="Our step-by-step enterprise software development and ERP implementation process."
        steps={[
          { name: "System Audit & Scoping", text: "We analyze your operational bottlenecks and design a software solution to eliminate them without unnecessary feature bloat." },
          { name: "Agile Development", text: "We build the software in modules and give you access to test them iteratively, ensuring perfect alignment with your business processes." },
          { name: "Data Migration & Launch", text: "We securely migrate your legacy data, deploy the new system, and provide comprehensive staff training." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="ENTERPRISE ENGINEERING"
        title="Custom Software, ERP & CRM Development"
        subtitle="We engineer bespoke software solutions that fit your business like a glove. Stop wrestling with disjointed Excel sheets and rigid, off-the-shelf software limitations."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            The Problem with Off-the-Shelf Software.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              When operations scale, businesses inevitably outgrow their fragile web of spreadsheets and legacy tools. The common mistake is purchasing expensive, off-the-shelf ERP or CRM software. The result? You end up paying massive licensing fees for 100 features you don't need, while the 3 core features your unique business actually requires are missing entirely. Your staff refuses to adopt the complicated new system, and you revert back to using Excel.
            </p>
            <p>
              At Intvar Automation, we solve the "Build vs. Buy" dilemma by engineering bespoke software from the ground up. Whether you need a centralized warehouse inventory system, a specialized educational ERP, or a custom sales dashboard, we build technology that adapts to your processes—not the other way around. Our software is designed to be so intuitive that a new employee can master it in 15 minutes without a manual.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">Engineering Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Services Covered</h3>
            <p className="opacity-70 max-w-md">We architect secure, scalable systems designed to handle massive data loads and automate complex multi-department workflows.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Bespoke ERP Systems",
              "Custom CRM Development",
              "Inventory & Supply Chain Systems",
              "Legacy System Modernization",
              "Custom API Integrations",
              "SaaS Product Development"
            ].map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                <span className="text-white opacity-40 font-mono mt-1">0{i + 1}</span>
                <span className="font-bold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Proof Section - Real Projects */}
      <Section variant="light" className="py-20 md:py-28 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Software Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Systems Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lali Super Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Custom Software • Retail</span>
                <h4 className="text-3xl font-bold mb-4">Lali Super Inventory System</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Managing thousands of SKUs across multiple locations using disjointed Excel sheets led to massive overhead, supplier miscommunications, and frequent stockouts.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We engineered a centralized inventory management system integrated directly into their POS. Paired with automated supplier coordination algorithms, the bespoke software reduced manual order processing times by 30% and virtually eliminated out-of-stock scenarios.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            {/* Modulus Smart School Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Custom ERP • Education</span>
                <h4 className="text-3xl font-bold mb-4">Modulus Smart School ERP</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  The institution relied on paper-based attendance, manual fee collection, and fragmented parent communication, causing massive administrative headaches.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We built a comprehensive, secure ERP from scratch. Features included automated fee reminders, RFID digital attendance tracking, and dedicated parent dashboards. The system reduced administrative paperwork by 90% and dramatically accelerated fee collections.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Can you integrate the new software with our existing accounting tools?</h3>
              <p className="opacity-70 leading-relaxed">
                Yes. We build robust, custom APIs that allow our software to securely handshake with your existing infrastructure—including Tally, Zoho, SAP, or QuickBooks. This ensures your financial data is perfectly synced across all departments without manual double-entry.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Is the software hosted locally or on the cloud?</h3>
              <p className="opacity-70 leading-relaxed">
                We highly recommend cloud deployment (via AWS, Google Cloud, or domestic Indian servers) for maximum security, automated backups, and 24/7 accessibility from any device. However, if your industry requires strict on-premise local servers for compliance, we are fully equipped to deploy locally.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Who owns the intellectual property and code?</h3>
              <p className="opacity-70 leading-relaxed">
                You do. Unlike SaaS platforms where you rent access to software forever, our custom software development model ensures that upon completion and final payment, your business retains full ownership of the intellectual property and source code.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to scale your operations?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Request a Systems Audit
            </Link>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Related Services:</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Integration</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Web App Development</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
