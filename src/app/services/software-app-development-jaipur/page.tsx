import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Software & Mobile App Development Company in Jaipur | Intvar",
  description: "Looking for a trusted software and mobile app development company in Jaipur? Intvar Automation builds custom Android apps and enterprise web solutions.",
  alternates: {
    canonical: "https://intvarautomation.online/services/software-app-development-jaipur"
  }
};

export default function SoftwareAppDevelopmentJaipur() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceSchema 
        serviceName="Software & Mobile App Development Jaipur"
        description="Enterprise-grade custom software, mobile application development, and hospital management systems for businesses in Jaipur, Rajasthan."
        url="https://intvarautomation.online/services/software-app-development-jaipur"
        areaServed={["Jaipur"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Software App Development Jaipur", item: "https://intvarautomation.online/services/software-app-development-jaipur" }
        ]} 
      />

      <PageHero 
        eyebrow="Jaipur Operations"
        title="Software & Mobile App Development Company in Jaipur"
        subtitle="Enterprise-grade mobile applications and web platforms built for the Pink City's fastest-growing businesses."
        variant="dark"
      />

      {/* Value Section */}
      <Section variant="light" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
            Scalable tech for a rapidly growing city.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Jaipur is a massive, highly competitive market. Whether you are running a multi-specialty hospital, a large real estate firm, or an expanding retail chain, off-the-shelf software will eventually break under pressure. 
            </p>
            <p>
              Operating directly out of Jhotwara, Intvar Automation acts as the dedicated technical wing for businesses across Jaipur. We do not offshore your work. We sit down with you, map out your exact operational bottlenecks, and engineer custom Android applications and backend software that streamline your entire business.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">What We Deliver</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Built for Jaipur's Industries</h3>
            <p className="opacity-70 max-w-md">We specialize in developing heavy-duty platforms for sectors that demand absolute reliability and data security.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Custom Mobile App Development",
              "Enterprise Software Architecture",
              "Hospital & Clinic Management Systems",
              "Real Estate Property Portals",
              "Advanced Business Automation",
              "API & Payment Gateway Integration"
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
            {/* Sania Hospital / Healthcare */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Healthcare Systems</span>
                <h4 className="text-2xl font-bold mb-4">Sania & Jashoda Hospitals</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  Comprehensive hospital management web platforms featuring patient appointment booking, doctor scheduling, and departmental service layouts to handle high-volume clinical traffic.
                </p>
              </div>
            </div>

            {/* Sahi Jagah */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Real Estate</span>
                <h4 className="text-2xl font-bold mb-4">Sahi Jagah</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A massive real estate and property search mobile application and web portal, allowing users to find ideal properties with advanced filtering and agent management.
                </p>
              </div>
            </div>

            {/* Shoptec */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">E-Commerce & Retail</span>
                <h4 className="text-2xl font-bold mb-4">Shoptec Multi-Vendor</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A complete multi-vendor e-commerce platform and companion Android partner app, complete with inventory management and seamless payment gateway integrations.
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
            Common Questions From Jaipur Clients
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Do you have an office for software development in Jaipur?</h4>
              <p className="opacity-70 leading-relaxed">
                Yes, we actively serve clients directly from our location in Jhotwara (near Kanta Chauraha). We believe that complex software and mobile app development requires deep, in-person understanding of your business operations.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">What makes you a top mobile app development company in Jaipur?</h4>
              <p className="opacity-70 leading-relaxed">
                We do not cut corners with cheap hybrid wrappers. When we build an Android app for your business, it is built natively to ensure it is lightning fast, doesn't crash, and can handle a rapidly growing user base without lagging.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Can you build custom hospital management software?</h4>
              <p className="opacity-70 leading-relaxed">
                Absolutely. Healthcare is one of our primary sectors. We have engineered digital infrastructure for medical facilities like Sania Hospital and Jashoda Hospital, streamlining their digital presence and patient booking flows.
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
          <Link href="/services/mobile-app-development-rajasthan" className="hover:underline underline-offset-4">Mobile App Development Hub</Link>
          <span className="opacity-30">•</span>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact Our Jaipur Team</Link>
        </div>
      </Section>

    </main>
  );
}
