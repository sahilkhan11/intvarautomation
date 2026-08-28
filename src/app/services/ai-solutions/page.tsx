import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "AI Development Company Alwar | Chatbots & AI Agents",
  description: "AI development company in Alwar. We build intelligent chatbots, AI agents, and custom AI solutions to scale your operations without hiring more staff.",
  alternates: {
    canonical: "/services/ai-solutions"
  }
};

export default function AiSolutionsPage() {
  const schemaDescription = "AI development services including custom AI agents, chatbots, and operational AI systems for businesses in Alwar and Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="AI Solutions" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" },
          { name: "AI Solutions", item: "https://intvarautomation.online/services/ai-solutions" }
        ]}
      />
      <HowToSchema 
        name="How we implement AI in your business"
        description="Our step-by-step process for deploying AI agents and chatbots"
        steps={[
          { name: "Process Analysis", text: "We identify the most repetitive tasks in your business that can be outsourced to an AI." },
          { name: "AI Model Tuning & Integration", text: "We configure Large Language Models (like OpenAI) specifically on your business data so it knows your products inside out." },
          { name: "Deployment & Monitoring", text: "We deploy the AI to your WhatsApp or website and monitor conversations to ensure 100% accuracy." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="AI SOLUTIONS"
        title="AI Development Company Alwar"
        subtitle="We build intelligent chatbots, AI agents, and custom AI solutions to scale your operations without hiring more staff. Stop losing leads after 5 PM."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Inefficiency Trap</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Most businesses lose up to 40% of their leads simply because a customer messaged them after business hours or during a busy weekend. Hiring a 24/7 customer support team is incredibly expensive. And traditional "press 1 for sales, press 2 for support" chatbots frustrate customers so much that they leave to find a competitor who will actually answer their specific questions.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Approach</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              We deploy custom AI Agents that act as your best-performing employee, available 24/7. These aren't rigid chatbots; they are powered by advanced AI models that understand context, speak natural languages (including Hinglish), and are trained exclusively on your business's data. They can answer complex queries, qualify leads, and directly book appointments into your calendar while you sleep.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">How We Work</h2>
            <ol className="list-decimal list-inside opacity-70 leading-relaxed text-lg">
              <li><strong>Knowledge Base Construction:</strong> You provide us with your brochures, pricing lists, and FAQs. We convert this into a secure database that the AI will use to answer questions accurately.</li>
              <li><strong>Agent Development:</strong> We build the AI persona, set the "guardrails" so it never discusses competitor products, and connect it to your WhatsApp Business API or website.</li>
              <li><strong>Testing & Refinement:</strong> We run hundreds of simulated conversations to ensure the AI responds perfectly before letting it talk to your real customers.</li>
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can AI handle customer support in Hindi or local dialects?</h3>
                <p className="opacity-70">Yes. We can configure the AI to understand and respond in Hindi, English, or a natural mix of both (Hinglish), ensuring your local customers feel completely comfortable interacting with it.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Will the AI agent hallucinate or give wrong answers?</h3>
                <p className="opacity-70">No. We implement strict guardrails and prompt engineering techniques. The AI is restricted to only answering questions based on the specific documents you provide us. If it doesn't know the answer, it is programmed to politely take the user's details and seamlessly hand the chat over to a human staff member.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to adopt AI?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Explore our other services:</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Software Development</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Industries we optimize with AI:</span>
              <Link href="/industries/real-estate" className="underline hover:opacity-100">Real Estate</Link>
              <span>|</span>
              <Link href="/industries/clinics" className="underline hover:opacity-100">Clinics</Link>
              <span>|</span>
              <Link href="/industries/manufacturing" className="underline hover:opacity-100">Manufacturing</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
