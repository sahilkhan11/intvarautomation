import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Android App Development Company in Jodhpur | Intvar",
  description: "Looking for expert mobile apps programmers in Jodhpur, Rajasthan? Intvar Automation builds high-performance custom Android applications and seamless user interfaces.",
  alternates: {
    canonical: "https://intvarautomation.online/services/android-app-development-jodhpur"
  }
};

export default function AndroidAppDevelopmentJodhpur() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceSchema 
        serviceName="Android App Development Jodhpur"
        description="Custom Android application development and mobile user interface design for businesses in Jodhpur, Rajasthan."
        url="https://intvarautomation.online/services/android-app-development-jodhpur"
        areaServed={["Jodhpur", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "Mobile App Development Rajasthan", item: "https://intvarautomation.online/services/mobile-app-development-rajasthan" },
          { name: "Android App Development Jodhpur", item: "https://intvarautomation.online/services/android-app-development-jodhpur" }
        ]} 
      />

      <PageHero 
        eyebrow="Jodhpur City"
        title="Android App Development in Jodhpur, Rajasthan"
        subtitle="We build high-performance mobile software that scales your operations and delights your customers."
        variant="dark"
      />

      {/* Value Section */}
      <Section variant="light" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
            Code That Connects with Your Customers.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              When searching for mobile apps programmers in Jodhpur, you do not just want a team that writes code—you need engineers who understand how to map out a seamless mobile user interface. If your app is confusing, your customers will uninstall it in seconds.
            </p>
            <p>
              At Intvar Automation, we focus entirely on native Android application development. We design, prototype, and build custom applications that handle real-world business bottlenecks. From complex inventory syncing to simple appointment scheduling, our systems are built to perform flawlessly across all Android devices.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">Specialized Focus</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">What We Build For Jodhpur</h3>
            <p className="opacity-70 max-w-md">We do not do generic templates. We build custom-tailored Android ecosystems designed around your specific workflow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Native Android Application Development",
              "Mobile User Interface (UI/UX) Design",
              "Custom API & Backend Architecture",
              "Business & Retail Automation Apps",
              "Legacy System Mobile Porting",
              "Play Store Deployment & Maintenance"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Android Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Applications Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shoptec */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">E-Commerce Architecture</span>
                <h4 className="text-3xl font-bold mb-4">Shoptec Partner App</h4>
                <p className="opacity-80 leading-relaxed mb-8">
                  A heavy-duty Android application engineered to help store owners manage their e-commerce operations. It handles real-time inventory adjustments, order tracking, and dynamic pricing updates natively on any Android device.
                </p>
              </div>
            </div>

            {/* Gym Levelling */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Operations & Fitness</span>
                <h4 className="text-3xl font-bold mb-4">Gym Levelling</h4>
                <p className="opacity-80 leading-relaxed mb-8">
                  We built this native Android application to completely automate gym ownership. Instead of messy spreadsheets, owners can track daily walk-ins, manage monthly memberships, and push notifications directly to their clients' phones.
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
            Jodhpur App Development FAQs
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Where can I find expert mobile apps programmers in Jodhpur Rajasthan?</h4>
              <p className="opacity-70 leading-relaxed">
                While our core engineering team operates out of Alwar and Jaipur, we act as the primary technology partner for businesses all across the state. Whether you need a local meeting or remote development updates, we build custom systems for clients throughout Jodhpur.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Do you specialize in android application development?</h4>
              <p className="opacity-70 leading-relaxed">
                Yes. Android dominates the Indian market, which is why we specialize heavily in native Android app development. We do not use cheap hybrid wrappers; we write applications that utilize the phone's native hardware for maximum speed and reliability.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Why is the mobile user interface so critical in your apps?</h4>
              <p className="opacity-70 leading-relaxed">
                A great mobile user interface is the difference between an app that gets used daily and an app that gets uninstalled. We focus heavily on UI/UX prototyping before we write a single line of code, ensuring that your customers can navigate the application effortlessly.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Internal Links Block */}
      <Section variant="light" className="py-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap gap-6 items-center justify-center text-sm font-medium">
          <span className="opacity-50 uppercase tracking-widest mr-4">Navigation:</span>
          <Link href="/services/mobile-app-development-rajasthan" className="hover:underline underline-offset-4">Mobile App Development Hub</Link>
          <span className="opacity-30">•</span>
          <Link href="/services/website-development" className="hover:underline underline-offset-4">Software & Website Development</Link>
        </div>
      </Section>

    </main>
  );
}
