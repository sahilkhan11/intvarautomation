import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Android App Development Company in Alwar & Rajasthan",
  description: "Native and cross-platform Android apps built for performance and growth in Alwar. Let's turn your idea into a fast, scalable app.",
  alternates: {
    canonical: "/services/android-app-development"
  }
};

export default function AndroidAppDevelopmentPage() {
  const schemaDescription = "Native and cross-platform Android App Development services for businesses and startups in Alwar, Jaipur, and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Android App Development" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Android App Development", item: "https://intvarautomation.online/services/android-app-development" }
        ]}
      />
      <HowToSchema 
        name="How we build your Android App"
        description="Our step-by-step Android app development process"
        steps={[
          { name: "UI/UX & Prototyping", text: "[COPY: ...]" },
          { name: "App Development", text: "[COPY: ...]" },
          { name: "Testing & Play Store Launch", text: "[COPY: ...]" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="APP DEVELOPMENT"
        title="Android App Development Company in Alwar"
        subtitle="[COPY: ...]"
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The App Market Challenge</h2>
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

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Do you also build for iOS?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Will you help publish the app to the Google Play Store?</h3>
                <p className="opacity-70">[COPY: ...]</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to build your app?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Explore our other services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Software Development</Link>
              <span>|</span>
              <Link href="/services/ai-solutions" className="underline hover:opacity-100">AI Solutions</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Industries we build apps for:</span>
              <Link href="/industries/retail" className="underline hover:opacity-100">Retail</Link>
              <span>|</span>
              <Link href="/industries/restaurants" className="underline hover:opacity-100">Restaurants</Link>
              <span>|</span>
              <Link href="/industries/gyms" className="underline hover:opacity-100">Gyms</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
