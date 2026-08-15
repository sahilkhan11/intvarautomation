import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { DEMOS } from "@/content/demos";

export const metadata: Metadata = {
  title: "Demos & Showcases | Intvar Automation",
  description: "Explore 30+ examples of business systems, ERPs, and automation platforms we can build and customize for your business.",
  alternates: {
    canonical: "/demos"
  }
};

export default function DemosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <PageHero
        variant="dark"
        eyebrow="DIGITAL SHOWROOM"
        title="Explore What We Can Build."
        subtitle="These are examples of the business systems we can create. Every solution can be customized according to your unique workflow."
      />

      <Section variant="dark" className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {DEMOS.map((demo, index) => {
              const imageIndex = (index % 4) + 1;
              return (
              <div 
                key={demo.id}
                className="group relative flex flex-col bg-white/[0.03] border border-white/[0.05] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
              >
                {/* 3D App Preview Window */}
                <div className="aspect-[16/10] bg-black/40 border-b border-white/[0.05] flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  
                  <Image
                    src={`/demos/demo${imageIndex}.jpg`}
                    alt={`${demo.name} Preview`}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40">
                      {demo.industry}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                      {demo.name}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm mt-2">
                      {demo.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {demo.categories.map(cat => (
                      <span key={cat} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 mt-2 border-t border-white/[0.05]">
                    <Link 
                      href={`/contact?demo=${demo.id}`}
                      className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-white group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {/* Using dynamic personalized CTA text as requested */}
                      See {demo.name.replace("System", "").replace("Software", "").trim()} in Action 
                      <span className="text-white/50">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

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
