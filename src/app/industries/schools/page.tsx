import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "School Management Software in Alwar | Student Management",
  description: "End-to-end school management software in Alwar. Automate admissions, fee collection, attendance, and parent communication via WhatsApp.",
  alternates: {
    canonical: "/industries/schools"
  }
};

export default function SchoolsIndustryPage() {
  const schemaDescription = "School Management Software and Student Management ERP for schools and educational institutes in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="School Management Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Schools", item: "https://intvarautomation.online/industries/schools" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="EDUCATION & SCHOOLS"
        title="School Management Software Alwar"
        subtitle="We build custom School Management ERPs for schools and coaching institutes in Alwar so you don't have to deal with lost paper registers, messy fee diaries, or frantic parent phone calls."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Burden of Paperwork & Excel Sheets</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We've seen how every admission cycle in Alwar turns school offices upside down. Your accounts team spends days calculating pending dues, writing manual paper receipts, and matching bank deposits with physical registers. Teachers waste fifteen minutes of every period taking roll calls on paper instead of teaching. When parents call asking for test marks or fee receipts, your staff ends up digging through filing cabinets. It drains your team's energy, and we know how exhausting that gets.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our School Automation System</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We built Intvar ERP so you can manage your entire school from one clean screen. Teachers mark attendance in seconds from their phone, and if a student is absent, our system sends an instant WhatsApp message to their parents right away. For fee payments, we set up automatic UPI links sent directly to parents on WhatsApp. They pay in a few clicks, you get the money in your school bank account, and the system issues an authorized receipt instantly.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can parents pay fees online through the portal?</h3>
                <p className="opacity-70">Yes, they can. We give parents a direct UPI link on WhatsApp so they don't have to stand in school queues. They pay via PhonePe or Google Pay and grab their receipt immediately.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">How does the WhatsApp integration work for schools?</h3>
                <p className="opacity-70">We connect your school database to the official WhatsApp Business API. It triggers automatic alerts for absent students, fee due dates, exam marks, and holiday notices without your staff typing each one out.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to digitize your school?</h2>
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
