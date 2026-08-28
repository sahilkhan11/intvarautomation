import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Gym Management Software in Alwar | Fitness Center Software",
  description: "Automate your gym or fitness center in Alwar. Manage memberships, track payments, and send automated WhatsApp reminders to your members.",
  alternates: {
    canonical: "/industries/gyms"
  }
};

export default function GymsIndustryPage() {
  const schemaDescription = "Gym Management Software and Fitness Center Automation for gyms and clubs in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Gym Management Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Gyms", item: "https://intvarautomation.online/industries/gyms" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="FITNESS & GYMS"
        title="Gym Management Software Alwar"
        subtitle="Stop chasing members for pending payments. We build automated Gym Management Software for fitness centers in Alwar to effortlessly track memberships, manage trainers, and automate WhatsApp payment reminders."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Headache of Expired Memberships</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Managing a growing gym or fitness center in Alwar comes with administrative headaches that pull you away from the gym floor. Tracking exactly whose membership expires this week on a spreadsheet or a notebook is tedious and prone to human error. When members slip through the cracks, you lose revenue. Worse, manually calling or messaging people to remind them about pending payments creates an awkward relationship between your staff and your clients.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Gym Automation System</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Our Gym Management System entirely automates your front desk. The dashboard tracks every single member's profile, attendance, and subscription tier. Instead of manually checking ledgers, the software automatically triggers polite, personalized WhatsApp reminders to members 3 days before their plan expires. It also tracks personal training (PT) sessions, supplement inventory, and trainer payroll, allowing you to run a highly professional, profitable fitness center with zero administrative stress.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it send automated renewal reminders?</h3>
                <p className="opacity-70">Yes. The core feature of our software is WhatsApp automation. The system automatically sends payment links, renewal reminders, diet charts, and festival greetings directly to your members' WhatsApp numbers without any manual effort.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Does it integrate with biometric access systems?</h3>
                <p className="opacity-70">Absolutely. We can integrate the software with standard fingerprint or facial recognition biometric devices. When a member with an expired plan scans their finger, the turnstile stays locked and the front desk is immediately alerted.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to upgrade your gym?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">WhatsApp Automation</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
