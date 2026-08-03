import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Counter from "@/components/Counter";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Intvar Suite",
  description: "Learn more about Intvar and our mission to automate businesses.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. PageHero */}
      <PageHero 
        variant="dark"
        eyebrow="ABOUT INTVAR"
        title="We build systems so you can build your business."
        subtitle="Intvar is an AI automation studio dedicated to Indian SMBs. We replace manual chaos with intelligent workflows that find leads, book appointments, and follow up—while you sleep."
      />

      {/* 2. Light Section: Who we are & 3. How we work */}
      <Section variant="light" className="py-24 md:py-32 relative">
        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          
          {/* Who We Are */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium uppercase tracking-widest opacity-60">Who We Are</span>
            <TextReveal 
              as="p"
              text="Intvar Automation is a tight-knit team of 5-6 people based in Alwar, Rajasthan. We started this studio to help local clinics, shops, and traders escape the spreadsheet chaos and missed-call logs. We don't sell bloated software or vanity metrics—we build tailored, real AI workflows that automatically manage your back-office so you can focus entirely on running your business."
              splitBy="lines"
              className="text-2xl md:text-4xl font-medium leading-snug tracking-tight"
            />
          </div>

          {/* How We Work Mini-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-foreground/10">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-heading font-bold uppercase tracking-tight">Fast setup, no bloat.</span>
              <span className="text-sm opacity-60 leading-relaxed font-medium uppercase tracking-widest">We deploy what you need. Skip the unnecessary features.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-heading font-bold uppercase tracking-tight">Built for local business.</span>
              <span className="text-sm opacity-60 leading-relaxed font-medium uppercase tracking-widest">Tailored workflows for clinics and shops in India.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-heading font-bold uppercase tracking-tight">Small team, direct access.</span>
              <span className="text-sm opacity-60 leading-relaxed font-medium uppercase tracking-widest">No support queues. You work directly with our core team.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Key Facts Counters */}
      <Section variant="light" className="pt-12 pb-24 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 max-w-xs">
            <TextReveal 
              as="h2"
              text="The Impact"
              splitBy="words"
              className="text-4xl md:text-5xl font-bold uppercase tracking-tighter"
            />
            <p className="text-sm opacity-60 font-medium leading-relaxed">
              Real results delivered for businesses taking the leap into AI automation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 flex-1 justify-end">
            <Counter end={50} suffix="+" label="Projects Launched" />
            <Counter end={1000} suffix="+" label="Cold Calls Made" />
            <Counter end={20} suffix="+" label="Hours Saved / Week" />
            <Counter end={100} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </Section>

      {/* 5. Dark CTA Band */}
      <Section variant="dark" className="py-32 overflow-hidden relative">
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col gap-12 relative z-10 items-center text-center">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60">Your Next Step</span>
          
          <TextReveal 
            as="h2"
            text="Ready to build something bold?"
            splitBy="words"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading uppercase tracking-tighter leading-[0.85] max-w-4xl"
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="group flex items-center justify-center gap-4 w-fit px-8 py-5 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-300">
              <span className="uppercase tracking-widest text-sm font-bold">Talk to a Consultant</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-heading font-bold uppercase tracking-tighter leading-none text-center whitespace-nowrap opacity-[0.03]">
            AUTOMATE
          </div>
        </div>
      </Section>
    </main>
  );
}
