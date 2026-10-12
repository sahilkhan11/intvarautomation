import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Intvar Automation",
  description: "Explore our portfolio of recent client work including websites, e-commerce stores, and software solutions.",
  alternates: {
    canonical: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <PageHero
        variant="dark"
        eyebrow="DIGITAL SHOWROOM"
        title="Our Portfolio"
        subtitle="Browse through some of the projects we have successfully delivered for our clients."
      />

      <Section variant="dark" className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          
          <PortfolioGrid />

        </div>
      </Section>

      {/* Strong Conversion Section */}
      <Section variant="light" className="py-32">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-[#0a0a0a]">
            Have a Similar Business Problem?
          </h2>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-2xl">
            We&apos;ll understand your workflow, show you the relevant solution personally, and explain how we can customize it for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#0a0a0a] text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Request a Personal Demo
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full border border-[#0a0a0a]/20 text-[#0a0a0a] font-bold uppercase tracking-widest hover:bg-[#0a0a0a]/5 transition-colors"
            >
              Contact Intvar Automation
            </Link>
          </div>
        </div>
      </Section>

    </main>
  );
}
