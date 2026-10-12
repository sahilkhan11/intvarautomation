import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Software & Web Development Company in Bhiwadi | Intvar",
  description: "Need robust custom software for your manufacturing or B2B business? Intvar Automation is a top software and web development company serving the Bhiwadi industrial cluster.",
  alternates: {
    canonical: "https://intvarautomation.online/services/software-development-bhiwadi"
  }
};

export default function SoftwareDevelopmentBhiwadi() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceSchema 
        serviceName="Software & Web Development Bhiwadi"
        description="Custom B2B portals, automation software, and robust web applications for Bhiwadi's manufacturing and industrial sectors."
        url="https://intvarautomation.online/services/software-development-bhiwadi"
        areaServed={["Bhiwadi"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Software Development Bhiwadi", item: "https://intvarautomation.online/services/software-development-bhiwadi" }
        ]} 
      />

      <PageHero 
        eyebrow="Bhiwadi Industrial Zone"
        title="Software & Web Development Company in Bhiwadi"
        subtitle="Custom B2B portals, automation software, and robust web applications engineered for the manufacturing and industrial sectors."
        variant="dark"
      />

      {/* Value Section */}
      <Section variant="light" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
            Industrial-grade software for industrial-grade businesses.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Bhiwadi is the industrial engine of Rajasthan. If you are running a manufacturing plant, a wholesale distribution network, or a B2B enterprise, you don't need a basic "brochure" website. You need digital infrastructure that can handle supply chains, process bulk orders, and automate your back-office operations.
            </p>
            <p>
              At Intvar Automation, we engineer heavy-duty software solutions. Located just down the highway in Alwar, we act as the premium technical partner for businesses in the Bhiwadi industrial cluster. We build everything from inventory tracking Android apps to massive B2B e-commerce portals.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">What We Deliver</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Engineered for Operations</h3>
            <p className="opacity-70 max-w-md">We do not do generic templates. We build specialized architecture designed around complex business workflows and data security.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Industrial & Manufacturing Web Portals",
              "B2B E-Commerce & Wholesale Platforms",
              "Custom Software & Business Automation",
              "Corporate Website Designing",
              "Inventory & Delivery Management Apps",
              "API Integrations (ERP, CRM, Payments)"
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
          <div className="mb-16">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Local Footprint</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Systems We Have Shipped</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ram Solar */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Energy & Infrastructure</span>
                <h4 className="text-2xl font-bold mb-4">Ram Solar</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A comprehensive web platform offering renewable energy solutions. Engineered to generate leads from large-scale corporate clients and help users calculate energy ROI.
                </p>
              </div>
            </div>

            {/* Shoptec */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Supply Chain & E-Commerce</span>
                <h4 className="text-2xl font-bold mb-4">Shoptec Multi-Vendor</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A heavy-duty multi-vendor platform with a companion Android partner app. It demonstrates our ability to handle complex inventory tracking and vendor onboarding simultaneously.
                </p>
              </div>
            </div>

            {/* CA Mukhtyar */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Finance & Corporate Services</span>
                <h4 className="text-2xl font-bold mb-4">CA Mukhtyar</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A highly professional corporate website designed to securely process client information and offer structured financial, accounting, and taxation service portfolios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Block (Inferred high-intent local queries) */}
      <Section variant="dark" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tight text-center">
            Common Questions From Bhiwadi Clients
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Do you provide software development for manufacturing units in Bhiwadi?</h4>
              <p className="opacity-70 leading-relaxed">
                Yes, we do. Standard websites don't work for manufacturing. We build custom web portals and Android applications that can integrate with your existing workflows to handle supply chain tracking, employee management, and vendor onboarding.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Can you build a B2B e-commerce website for my wholesale business?</h4>
              <p className="opacity-70 leading-relaxed">
                Absolutely. We have extensive experience engineering e-commerce platforms (like the Shoptec architecture) that feature custom B2B pricing tiers, bulk order processing, and highly secure payment gateways.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Are you a local website designing company in Bhiwadi?</h4>
              <p className="opacity-70 leading-relaxed">
                Our core operations are based right next door in Alwar. This makes us the closest premium software engineering team to the Bhiwadi industrial cluster. We can easily meet face-to-face to discuss your complex requirements without the hassle of hiring a distant agency.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Internal Links Block */}
      <Section variant="light" className="py-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap gap-6 items-center justify-center text-sm font-medium">
          <span className="opacity-50 uppercase tracking-widest mr-4">Navigation:</span>
          <Link href="/services/software-development-alwar" className="hover:underline underline-offset-4">Software Dev in Alwar</Link>
          <span className="opacity-30">•</span>
          <Link href="/services/software-app-development-jaipur" className="hover:underline underline-offset-4">Software Dev in Jaipur</Link>
          <span className="opacity-30">•</span>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact Us Today</Link>
        </div>
      </Section>

    </main>
  );
}
