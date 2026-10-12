import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "High-Performance Website & Web App Development | Intvar",
  description: "Intvar Automation builds blazing-fast, custom websites and web applications using Next.js and React. Move beyond slow templates and get a site engineered to convert.",
  alternates: {
    canonical: "https://intvarautomation.online/services/website-development"
  }
};

export default function WebsiteDevelopmentPage() {
  const schemaDescription = "Custom web development, high-performance web applications, and lead-generation websites built with Next.js and React.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Web & Web App Development" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/website-development"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Website Development", item: "https://intvarautomation.online/services/website-development" }
        ]}
      />
      <HowToSchema 
        name="How we build your web application"
        description="Our step-by-step custom website and web app development process."
        steps={[
          { name: "Architecture & UI/UX", text: "We map out user journeys that drive conversions and design functional mockups before writing any code." },
          { name: "Custom Development", text: "We code from scratch using modern frameworks (Next.js, React) to ensure sub-second load times and infinite scalability." },
          { name: "Deployment & Technical SEO", text: "We deploy the application on global CDNs and implement structured JSON-LD schema so search engines can read it instantly." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="WEB ENGINEERING"
        title="High-Performance Website & Web App Development"
        subtitle="We build blazing-fast, custom websites and web applications using modern React architecture. No bloated templates—just clean code engineered to scale and convert."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            Stop Settling for Slow, Template-Based Websites.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Most businesses settle for dragging-and-dropping site builders or bloated WordPress themes that look identical to their competitors. The result? A website that takes 5 seconds to load, frustrating users and tanking your Google rankings. Your website shouldn't just be an online brochure—it must act as your hardest-working digital sales representative.
            </p>
            <p>
              At Intvar Automation, we engineer web experiences from the ground up. We code entirely from scratch using Next.js and React—the exact same technology stack powering Netflix, Nike, and Notion. This guarantees sub-second load times, superior technical SEO, and the ability to seamlessly integrate advanced features like AI chatbots, live inventory, and custom CRMs directly into your site.
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
            <p className="opacity-70 max-w-md">We build modern digital infrastructure tailored exactly to your operational bottlenecks and growth targets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Custom Web Application Development",
              "Progressive Web Apps (PWAs)",
              "Next.js / React Architecture",
              "High-Conversion Landing Pages",
              "B2B Portals & Dashboards",
              "Headless E-commerce Solutions"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Web Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Web Platforms Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* KisanBazaar Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Web Dev • Agri-Tech PWA</span>
                <h4 className="text-3xl font-bold mb-4">KisanBazaar Platform</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Local farmers were struggling to reach end consumers directly, relying on middlemen who took massive commissions. They needed a lightweight platform accessible on low-end devices.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We engineered a high-performance Progressive Web App (PWA) using Next.js. We integrated a multi-language voice-to-text feature for the farmer dashboard and real-time WhatsApp notifications, leading to 500+ farmer onboards in just 6 months.
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
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Web Dev • Education Portal</span>
                <h4 className="text-3xl font-bold mb-4">Modulus Smart School</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  The institution relied on paper-based attendance and manual fee collection, causing massive administrative bottlenecks and fragmented communication.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We built a secure, centralized custom web portal featuring digital attendance tracking, automated fee reminders via SMS/WhatsApp, and a dedicated parent dashboard. The web application reduced administrative paperwork by 90% and drastically cut fee collection delays.
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
              <h3 className="font-bold text-xl mb-4">Why do you use Next.js and React instead of WordPress?</h3>
              <p className="opacity-70 leading-relaxed">
                WordPress relies heavily on third-party plugins that inherently slow down page speeds and introduce severe security vulnerabilities. By custom coding with Next.js and React, we deliver sub-second page loads, impenetrable security, and total design freedom. This directly results in higher Google rankings and better user conversion rates.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">How does page speed impact my SEO and sales?</h3>
              <p className="opacity-70 leading-relaxed">
                Google explicitly uses "Core Web Vitals" (page speed and stability) as a major ranking factor. Statistically, if your website takes longer than 3 seconds to load, over 50% of mobile users will abandon it. A blazing-fast custom web app keeps users engaged and signals to search engines that your site is high quality.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Can you integrate my CRM or a custom backend into the website?</h3>
              <p className="opacity-70 leading-relaxed">
                Yes. Because we build everything from scratch, we can easily connect your website to any external APIs—including Salesforce, custom ERPs, WhatsApp Business APIs, or payment gateways—turning your website into a fully functional operational tool.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to build your digital infrastructure?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Free Technical Audit
            </Link>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Chatbots</Link>
              <span>|</span>
              <Link href="/services/android-app-development" className="underline hover:opacity-100">Android Development</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
