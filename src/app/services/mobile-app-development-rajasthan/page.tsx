import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Custom Mobile App Development in Rajasthan | Intvar",
  description: "Looking for an Android and eCommerce app development company in Rajasthan? Intvar Automation builds custom mobile apps for businesses across Alwar, Jodhpur, and Jaipur.",
  alternates: {
    canonical: "https://intvarautomation.online/services/mobile-app-development-rajasthan"
  }
};

export default function MobileAppDevelopmentRajasthan() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceSchema 
        serviceName="Mobile Application Development"
        description="Custom Android application and eCommerce app development for businesses across Rajasthan."
        url="https://intvarautomation.online/services/mobile-app-development-rajasthan"
        areaServed={["Rajasthan", "Jodhpur", "Alwar", "Jaipur", "Bhiwadi"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Mobile App Development Rajasthan", item: "https://intvarautomation.online/services/mobile-app-development-rajasthan" }
        ]} 
      />

      <PageHero 
        eyebrow="Mobile Application Development"
        title="Custom Mobile App & Android Development Company in Rajasthan"
        subtitle="You don't just need a mobile app; you need a system that brings your customers closer and drives sales."
        variant="dark"
      />

      {/* Value Section */}
      <Section variant="light" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
            Built natively to run smoothly.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              When your customers pull out their phones, they expect speed, reliability, and ease of use. Whether you are running a retail store in Jaipur or managing operations in Alwar, a slow, clunky app just won't cut it. 
            </p>
            <p>
              We build lightning-fast Android applications and eCommerce platforms specifically designed for businesses across Rajasthan. We don't rely on cheap templates. Every line of code is written to ensure your app handles heavy traffic, works seamlessly on all devices, and actually grows your bottom line.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">What We Cover</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Complete App Development Ecosystems</h3>
            <p className="opacity-70 max-w-md">From initial prototyping to final deployment on the Google Play Store, we handle the entire engineering process.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Custom Android App Development",
              "eCommerce & Retail Mobile Stores",
              "Service & Appointment Booking Apps",
              "Real Estate Property Portals",
              "Mobile UI/UX Design & Prototyping",
              "API & Backend Integration"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Track Record</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Proven Projects We've Shipped</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shoptec */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Retail & E-Commerce</span>
                <h4 className="text-2xl font-bold mb-4">Shoptec Partner App</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A robust Android application built for Shoptec partners. It allows store owners to manage their e-commerce operations, track real-time inventory, and process orders efficiently on the go.
                </p>
              </div>
            </div>

            {/* Gym Levelling */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Health & Fitness</span>
                <h4 className="text-2xl font-bold mb-4">Gym Levelling</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A comprehensive fitness management app designed to help local gym owners handle daily memberships, schedule tracking, and backend operations without needing a computer.
                </p>
              </div>
            </div>

            {/* Sahi Jagah */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Real Estate</span>
                <h4 className="text-2xl font-bold mb-4">Sahi Jagah</h4>
                <p className="opacity-80 text-sm leading-relaxed mb-8">
                  A feature-rich real estate and property search mobile application engineered to help local users find their ideal properties through an intuitive, map-driven interface.
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
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">How to choose a mobile app development company in Rajasthan?</h4>
              <p className="opacity-70 leading-relaxed">
                You want a team that actually understands local business operations. We don't just write code; we map out your customer journey. From Jodhpur to Alwar, we sit down with business owners to ensure the app we build actually solves their bottleneck—whether that is booking management or inventory tracking.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Do you provide ecommerce app development in Rajasthan?</h4>
              <p className="opacity-70 leading-relaxed">
                Yes, absolutely. We specialize in building custom eCommerce apps that tie directly into your existing inventory systems. Our Shoptec Partner App is a prime example of a robust retail tool that keeps owners connected to their stores 24/7.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Are your mobile app programmers based in Jodhpur or Alwar?</h4>
              <p className="opacity-70 leading-relaxed">
                Our core engineering team operates directly out of Alwar and Jaipur, but our digital footprint covers the entire state. We actively serve businesses looking for android application development in Jodhpur, Bhiwadi, and beyond. We are always just a phone call or a WhatsApp message away.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Internal Links Block */}
      <Section variant="light" className="py-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap gap-6 items-center justify-center text-sm font-medium">
          <span className="opacity-50 uppercase tracking-widest mr-4">Explore More:</span>
          <Link href="/services/website-development" className="hover:underline underline-offset-4">Software & Website Development</Link>
          <span className="opacity-30">•</span>
          <Link href="/services/business-automation" className="hover:underline underline-offset-4">Business Automation</Link>
          <span className="opacity-30">•</span>
          <Link href="/contact" className="hover:underline underline-offset-4">Hire App Developers in Alwar</Link>
        </div>
      </Section>

    </main>
  );
}
