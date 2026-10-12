import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Software & Website Development Company in Alwar | Intvar",
  description: "Looking for a top software company in Alwar? Intvar Automation provides expert website designing, e-commerce development, and custom application development.",
  alternates: {
    canonical: "https://intvarautomation.online/services/software-development-alwar"
  }
};

export default function SoftwareDevelopmentAlwar() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceSchema 
        serviceName="Software & Website Development Alwar"
        description="Custom software, e-commerce platforms, and website designing services for businesses located in Alwar, Rajasthan."
        url="https://intvarautomation.online/services/software-development-alwar"
        areaServed={["Alwar"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Software Development Alwar", item: "https://intvarautomation.online/services/software-development-alwar" }
        ]} 
      />

      <PageHero 
        eyebrow="Alwar Headquarters"
        title="Software & Website Development Company in Alwar"
        subtitle="We build high-performance e-commerce websites and custom software systems for local businesses."
        variant="dark"
      />

      {/* Value Section */}
      <Section variant="light" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
            Digital infrastructure that actually drives revenue.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Your business deserves more than a generic, slow-loading template. As a leading software company in Alwar, we do not just build brochures; we build digital systems designed to capture leads, process sales, and automate your daily operations.
            </p>
            <p>
              Operating right here on 200 Feet Road, we sit down with local clinic owners, retailers, and educational institutes to understand exactly what is holding their growth back. Whether it requires complex application development or a completely custom website redesign, we deliver solutions that are engineered for speed, security, and search visibility.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">What We Deliver</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Complete Web Architecture</h3>
            <p className="opacity-70 max-w-md">From a local retail storefront to a massive educational portal, our engineering covers the full spectrum of web technologies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Custom Application Development",
              "Professional Website Designing",
              "E-Commerce Website Development",
              "Search Engine Optimization (SEO)",
              "Healthcare & Clinic Portals",
              "Educational Trust Management"
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
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Alwar Businesses We Power</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Modulus Academy */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Education Sector</span>
                <h4 className="text-2xl font-bold mb-4">Modulus Academy</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  We handle the ongoing management, technical updates, and advanced SEO strategy for Alwar's leading IIT/JEE & NEET coaching institute, ensuring their digital presence remains unmatched.
                </p>
              </div>
            </div>

            {/* Alwar Furniture */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Retail & E-Commerce</span>
                <h4 className="text-2xl font-bold mb-4">AlwarFurniture.in</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A custom-built online furniture catalog tailored for the local market, featuring advanced product previews and streamlined custom order forms that drive direct retail conversions.
                </p>
              </div>
            </div>

            {/* Lali Super */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Food & Delivery</span>
                <h4 className="text-2xl font-bold mb-4">LaliSuper.in</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  We engineered a robust local grocery delivery platform for this business, complete with real-time inventory tracking and delivery route optimization mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Block (Seeded from Search Console Queries) */}
      <Section variant="dark" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tight text-center">
            Common Questions From Alwar Clients
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Are you a local software company in Alwar?</h4>
              <p className="opacity-70 leading-relaxed">
                Yes, our core operations are based right here in Alwar on 200 Feet Road. Being a local software company allows us to meet with you face-to-face, understand the nuances of your customer base, and deliver hands-on application development without timezone delays.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Do you handle complex e-commerce website development in Alwar?</h4>
              <p className="opacity-70 leading-relaxed">
                Absolutely. We build robust digital storefronts designed specifically for retail. From furniture stores like AlwarFurniture.in to local delivery platforms like LaliSuper.in, our e-commerce website development focuses on fast load speeds, secure payment gateways, and easy inventory management.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Why choose you over a freelance website designing company in Alwar?</h4>
              <p className="opacity-70 leading-relaxed">
                A freelancer will often install a pre-made theme and walk away. We are an engineering team. We write custom code to ensure your site is incredibly fast, highly secure, and optimized for search engines. We provide long-term technical support to ensure your website actually generates leads.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Internal Links Block */}
      <Section variant="light" className="py-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap gap-6 items-center justify-center text-sm font-medium">
          <span className="opacity-50 uppercase tracking-widest mr-4">Navigation:</span>
          <Link href="/services/mobile-app-development-rajasthan" className="hover:underline underline-offset-4">Mobile App Development</Link>
          <span className="opacity-30">•</span>
          <Link href="/services/android-app-development-jodhpur" className="hover:underline underline-offset-4">Android Apps (Jodhpur)</Link>
          <span className="opacity-30">•</span>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact Our Alwar Office</Link>
        </div>
      </Section>

    </main>
  );
}
