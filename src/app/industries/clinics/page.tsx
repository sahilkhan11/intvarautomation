import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Clinic Management Software in Alwar | Patient Management",
  description: "Automate your clinic in Alwar with our custom patient management software. Handle WhatsApp appointments, patient records, and billing in one system.",
  alternates: {
    canonical: "/industries/clinics"
  }
};

export default function ClinicsIndustryPage() {
  const schemaDescription = "Custom Clinic Management Software and Patient Management Automation for clinics and doctors in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Clinic Management Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Clinics", item: "https://intvarautomation.online/industries/clinics" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="HEALTHCARE & CLINICS"
        title="Clinic Management Software Alwar"
        subtitle="Eliminate crowded waiting rooms and lost patient records. We build custom Clinic Management Software for doctors in Alwar to automate WhatsApp appointments, manage digital prescriptions, and streamline billing."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Chaos of Manual Patient Scheduling</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              A crowded waiting room might look like good business, but it usually means a poorly managed schedule. When receptionists rely on phone calls and physical diaries to book appointments, double-booking and long patient wait times are inevitable. Doctors are forced to waste valuable time hunting down lost paper records or decoding handwritten notes from previous visits. This friction not only limits the number of patients you can see in a day, but it also creates a stressful, disorganized environment for your staff and your patients.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Patient Management Solution</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Our Patient Management System digitizes your entire clinic. We set up an automated WhatsApp booking system so patients can book and confirm their own slots instantly, drastically reducing no-shows and front-desk phone calls. During the consultation, doctors have instant access to the patient’s complete digital medical history (EHR) on a tablet or PC. You can generate digital prescriptions with a single click, automatically route billing to the reception, and send the patient a digital copy on their WhatsApp.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can patients book appointments via WhatsApp?</h3>
                <p className="opacity-70">Yes! We build automated WhatsApp chatbots specifically for clinics. Patients can message your clinic's number, view available doctor slots, book an appointment, and receive automated reminders 2 hours before their visit—all without your receptionist lifting a finger.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Is patient data secure?</h3>
                <p className="opacity-70">Data security and patient privacy are our top priorities. All medical records, prescriptions, and billing data are heavily encrypted and stored on secure cloud servers. Only authorized clinic staff can access sensitive patient information.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to modernize your clinic?</h2>
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
