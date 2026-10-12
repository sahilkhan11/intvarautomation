import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import HowToSchema from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title: "Custom AI Agent & Chatbot Development Company | Intvar",
  description: "Automate customer support and lead generation with custom AI agents. Intvar Automation builds intelligent WhatsApp chatbots and AI solutions for modern businesses.",
  alternates: {
    canonical: "https://intvarautomation.online/services/ai-solutions"
  }
};

export default function AiSolutionsPage() {
  const schemaDescription = "Custom AI agent development, intelligent WhatsApp chatbots, and operational machine learning solutions to automate customer support and business processes.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="AI Agent & Chatbot Development" 
        description={schemaDescription}
        areaServed={["India", "Global"]}
        url="https://intvarautomation.online/services/ai-solutions"
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
        description="Our step-by-step process for deploying intelligent AI agents and machine learning models."
        steps={[
          { name: "Process Analysis", text: "We identify the most repetitive tasks in your business that can be outsourced to an AI." },
          { name: "AI Model Tuning & Integration", text: "We configure Large Language Models (like OpenAI) specifically on your business data so it knows your products inside out." },
          { name: "Deployment & Monitoring", text: "We deploy the AI to your WhatsApp or website and monitor conversations to ensure 100% accuracy." }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="ENTERPRISE AI SOLUTIONS"
        title="Custom AI Agent & Chatbot Development"
        subtitle="We build intelligent chatbots, autonomous AI agents, and custom machine learning models to scale your operations without hiring more staff."
      />

      {/* Value Section */}
      <Section variant="light" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            Stop Losing Leads to the Inefficiency Trap.
          </h2>
          <div className="text-lg md:text-xl font-medium opacity-80 space-y-6 leading-relaxed">
            <p>
              Most businesses lose up to 40% of their inbound leads simply because a customer messaged them after business hours or during a busy weekend. Hiring a 24/7 customer support team is incredibly expensive, and traditional "press 1 for sales, press 2 for support" chatbots frustrate customers so much that they leave to find a competitor who will actually answer their specific questions.
            </p>
            <p>
              At Intvar Automation, we deploy custom AI Agents that act as your best-performing employee, available 24/7. These aren't rigid chatbots; they are powered by advanced AI models that understand context, speak natural languages, and are trained exclusively on your business's proprietary data. They answer complex queries, qualify leads, and directly book appointments into your calendar while you sleep.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Covered Block */}
      <Section variant="dark" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-8">AI Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Services Covered</h3>
            <p className="opacity-70 max-w-md">We engineer AI systems that integrate directly into your existing software stack, from WhatsApp to your custom ERP.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Autonomous AI Agents",
              "WhatsApp Cloud API Chatbots",
              "LLM Fine-Tuning & Prompt Engineering",
              "Machine Learning Fraud Detection",
              "Automated Customer Support Systems",
              "AI-Powered Lead Qualification"
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
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-70 mb-4">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">AI Systems Engineered by Intvar</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ML Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">Machine Learning • Finance</span>
                <h4 className="text-3xl font-bold mb-4">Fraud Detection ML</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  A regional fintech firm was experiencing a 15% false-positive rate on transaction blocks using a rules-based system.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  We deployed a custom machine learning model trained on historical data. The new API microservice scores every transaction in real-time (&lt;50ms latency), dropping false-positive blocks to under 2% and catching a coordinated fraud ring in its first week.
                </p>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            {/* NLP/Bot Project */}
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">AI Automation • Retail</span>
                <h4 className="text-3xl font-bold mb-4">Lali Super Retail Bot</h4>
                <p className="opacity-80 leading-relaxed mb-6">
                  Managing thousands of SKUs and supplier coordination manually led to frequent stockouts and massive overhead.
                </p>
                <p className="opacity-80 leading-relaxed mb-8">
                  Alongside a centralized inventory dashboard, we built a WhatsApp-based AI bot that automatically messages suppliers when stock hits reorder levels. It handles conversational confirmations for quantities and delivery ETAs entirely without human intervention, reducing stockouts by 85%.
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

      {/* FAQ Block */}
      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Will the AI agent hallucinate or give wrong answers to my customers?</h3>
              <p className="opacity-70 leading-relaxed">
                No. We implement strict guardrails and advanced prompt engineering techniques. The AI is restricted to only answering questions based on the specific knowledge base (documents, FAQs, pricing) you provide us. If it encounters a scenario it cannot resolve, it is programmed to politely take the user's details and seamlessly hand the chat over to a human staff member.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Can the AI handle customer support in Hindi or local dialects?</h3>
              <p className="opacity-70 leading-relaxed">
                Absolutely. We configure our language models to understand and respond in multiple languages, including Hindi, English, or a natural conversational mix (Hinglish). This ensures your local customer base feels completely comfortable interacting with your brand.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">How does the AI integrate with our existing software?</h3>
              <p className="opacity-70 leading-relaxed">
                Our AI solutions are not standalone silos. We build custom API bridges that allow the AI to read and write data to your existing CRM, inventory management system, or booking calendar. For example, if a customer asks for a product via WhatsApp, the AI can check your live database to confirm availability before replying.
              </p>
            </div>
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-20 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to deploy AI in your business?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Free Consultation
            </Link>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium opacity-60">
              <span className="uppercase tracking-widest mr-2">Related Services:</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software Development</Link>
              <span>|</span>
              <Link href="/services/whatsapp-automation" className="underline hover:opacity-100">WhatsApp Automation</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
