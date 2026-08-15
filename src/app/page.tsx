import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import Counter from "@/components/Counter";
import SelectedWorks from "@/components/SelectedWorks";
import Services from "@/components/Services";
import DesignExplorations from "@/components/DesignExplorations";
import Testimonials from "@/components/Testimonials";
import { generateVideoSchema } from "@/lib/seo/schema";
import AutomationEstimator from "@/components/AutomationEstimator";
import LazyVideo from "@/components/LazyVideo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVideoSchema({
            name: "Intvar Automation WhatsApp Lead Capture Demo",
            description: "Demo video showing how our AI system instantly engages missed calls and qualifies local leads 24/7 on autopilot.",
            thumbnailUrl: "/images/poster-placeholder.jpg",
            uploadDate: "2026-01-01T00:00:00Z",
            contentUrl: "https://intvarautomation.online/videos/A_sleek_dark_mode_abstract_D.mp4"
          }))
        }}
      />
      <Hero />
      
      {/* Phase 4: About Strip (Light) */}
      <Section variant="light" className="py-24 md:py-32 relative">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-4">
          <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Most agencies sell you tools. We give you a system.</h2>
          
          <div className="mt-8 mb-2">
            <AutomationEstimator />
          </div>
        </div>

        {/* Step 23: Supporting bottom-left lines */}
        <div className="absolute bottom-8 left-4 md:left-8 lg:left-12 flex flex-col text-xs md:text-sm uppercase tracking-widest opacity-50 font-medium">
          <span>Systems over one-off scripts.</span>
          <span>Honest numbers over inflated claims.</span>
        </div>
      </Section>

      {/* Phase 5: Key Facts / Stats (Light) */}
      <Section variant="light" className="pt-12 pb-24 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col gap-4 max-w-xs">
            <TextReveal 
              as="h2"
              text="Key Facts"
              splitBy="words"
              className="text-4xl md:text-5xl font-bold uppercase tracking-tighter"
            />
            <p className="text-sm opacity-60 font-medium leading-relaxed">
              We let the numbers speak for our dedication to delivering high-impact solutions for our partners.
            </p>
          </div>

          {/* Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 flex-1 justify-end">
            <Counter end={4} suffix="" label="Businesses running Intvar" />
            <Counter end={29} suffix="" label="Automations shipped" />
            <Counter end={5} suffix=".0" label="Rating (4 reviews)" />
            <Counter end={2026} suffix="" label="Founded" />
          </div>
        </div>
      </Section>

      {/* Phase 5 part 2: Media Card & Awards */}
      <Section variant="light" className="pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Step 27: Short Video/Photo Card */}
          <div className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative bg-[#0a0a0a] border border-[#0a0a0a]/10 flex items-center justify-center">
            <LazyVideo 
              src="/videos/A_sleek_dark_mode_abstract_D.mp4" 
              poster="/images/poster-placeholder.jpg"
              ariaLabel="Demo of Automated WhatsApp Lead Capture Sequence"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 text-center flex flex-col items-center gap-6 p-8 max-w-3xl">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-xl">Live Demo</span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-md">Automated WhatsApp Lead Capture Sequence</h3>
              <p className="text-lg md:text-xl text-white/80 max-w-xl font-medium drop-shadow-sm">See how our AI system instantly engages missed calls and qualifies your local leads 24/7, completely on autopilot.</p>
            </div>
          </div>
          
          {/* Step 26: Awards / Press Marquee */}
          <div className="flex flex-col gap-8 items-center border-t border-foreground/10 pt-16">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Trusted By Businesses In</h2>
            <Marquee speed="fast" direction="right" gap="gap-24" className="opacity-50">
              {["Healthcare & Clinics", "Real Estate", "Retail Stores", "Manufacturing", "E-Commerce", "Professional Services"].map((award) => (
                <span key={award} className="text-2xl md:text-3xl font-heading uppercase font-bold whitespace-nowrap">
                  {award}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Step 28: Tools We Use */}
          <div className="flex flex-col gap-8 items-center border-t border-foreground/10 pt-16">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Tools We Build With</h2>
            <Marquee speed="normal" direction="left" gap="gap-24" className="opacity-50">
              {["n8n", "WhatsApp API", "Android Studio", "Next.js", "Node.js", "Python", "Three.js"].map((tool) => (
                <span key={tool} className="text-2xl md:text-3xl font-heading uppercase font-bold">
                  {tool}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </Section>

      {/* Phase 6: Selected Works */}
      <SelectedWorks />

      {/* Phase 7: Services */}
      <Services />

      {/* Phase 8: Design Explorations */}
      <DesignExplorations />

      {/* Phase 9: Testimonials */}
      <Testimonials />



    </main>
  );
}
