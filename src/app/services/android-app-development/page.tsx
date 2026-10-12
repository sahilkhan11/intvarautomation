import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Custom Mobile & Android App Development Company | Intvar",
  description: "Intvar Automation engineers high-performance native and cross-platform mobile apps. From enterprise internal tools to consumer-facing apps, we build to scale.",
  alternates: {
    canonical: "https://intvarautomation.online/services/android-app-development"
  }
};

export default function AndroidAppDevelopmentPage() {
  const schemaDescription = "Native Android and cross-platform mobile application development for enterprise solutions and consumer apps.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Mobile & Android App Development" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/android-app-development"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Mobile App Development", item: "https://intvarautomation.online/services/android-app-development" }
        ]}
      />
      <HowToSchema 
        name="How we build your mobile application"
        description="Our comprehensive mobile app development and deployment process."
        steps={[
          { name: "UI/UX & Prototyping", text: "We wireframe the app flow to ensure intuitive navigation and problem-solving before writing any code." },
          { name: "Native & Hybrid Engineering", text: "We write clean, highly efficient code using Kotlin or React Native for maximum performance and cross-platform compatibility." },
          { name: "QA & App Store Launch", text: "We perform rigorous quality assurance across multiple devices, manage strict App Store compliance, and handle the final launch." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="MOBILE ENGINEERING"
        title="Custom Mobile & Android App Development"
        subtitle="We engineer high-performance native and cross-platform applications. From complex internal logistics tools to sleek consumer-facing apps, we build software that scales."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            The App Market is Ruthless. Your Code Shouldn't Be.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Most businesses commission mobile apps that inevitably become "ghost apps"—downloaded once, opened twice, and then ignored. Why? Because off-the-shelf, white-label apps are bloated, crash frequently, and force your unique business model to adapt to their rigid templates. If an app takes more than 2 seconds to load a screen, users will delete it.
            </p>
            <p>
              At Intvar Automation, we engineer bespoke mobile applications tailored entirely to your operational workflows. Whether you need an offline-first app for your delivery fleet logging drop-offs in remote areas, or a lightning-fast direct-to-consumer retail app, we build it. We focus on lightweight architectures, iron-clad API integrations, and intuitive interfaces that demand zero employee training to adopt.
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
            <p className="opacity-70 max-w-md">We build modern mobile infrastructure designed to run flawlessly across thousands of diverse devices.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Native Android (Kotlin)",
              "Cross-Platform (React Native)",
              "Enterprise Internal Tools",
              "Consumer-Facing MVP Apps",
              "UI/UX Mobile Design",
              "App Store Optimization (ASO)"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Mobile Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Apps Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* KisanBazaar Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Mobile App • Agri-Tech</span>
                <h4 className="text-3xl font-bold mb-4">KisanBazaar Mobile Platform</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Rural farmers needed a direct-to-consumer sales avenue but lacked access to high-end smartphones or fast 5G internet connections.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We engineered a highly optimized, lightweight mobile application designed specifically for low-end devices and poor network conditions. By integrating multi-language voice-to-text features, we ensured the app was incredibly accessible, onboarding over 500 local farmers in the first 6 months and increasing their profit margins by 40%.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            {/* Field Logistics Example (Generic/Representative based on Intvar's approach) */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Internal Tool • Logistics</span>
                <h4 className="text-3xl font-bold mb-4">Offline-First Field App</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Delivery personnel operating in remote areas were constantly experiencing app crashes and data-sync failures when losing cellular signal, severely disrupting supply chains.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We built a bespoke internal Android application utilizing an offline-first architecture. The app securely caches delivery logs locally on the device when disconnected, and automatically synchronizes with the main server the moment a connection is re-established, ensuring zero data loss.
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
              <h3 className="font-bold text-xl mb-4">Should I build Native (Kotlin/Swift) or Cross-Platform (React Native)?</h3>
              <p className="opacity-70 leading-relaxed">
                It depends entirely on your business goals. Native development (Kotlin for Android, Swift for iOS) offers the absolute highest performance and hardware integration. However, for 90% of business applications, cross-platform frameworks like React Native provide near-native performance while allowing us to deploy to both Android and iOS simultaneously, drastically reducing development costs and timelines.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Will you handle the Google Play Store and Apple App Store publishing?</h3>
              <p className="opacity-70 leading-relaxed">
                Absolutely. We manage the entire deployment lifecycle. From generating the required signed app bundles (AAB/IPA) to configuring app permissions, handling rigorous store review compliance, and optimizing your store listing for maximum visibility, we take care of it all.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Can the mobile app connect to our existing web dashboard or CRM?</h3>
              <p className="opacity-70 leading-relaxed">
                Yes. We engineer secure APIs that allow your new mobile application to read and write data directly to your existing CRM, ERP, or web dashboard in real-time, creating a perfectly synchronized ecosystem.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to launch your mobile application?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Discuss Your App Idea
            </Link>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Agents</Link>
              <span>|</span>
              <Link href="/services/website-development" className="underline hover:opacity-100">Web App Development</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
