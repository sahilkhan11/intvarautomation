import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import Counter from "@/components/Counter";
import SelectedWorks from "@/components/SelectedWorks";
import Services from "@/components/Services";
import DesignExplorations from "@/components/DesignExplorations";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* Phase 4: About Strip (Light) */}
      <Section variant="light" className="py-24 md:py-32 relative">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-12">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60">Most agencies sell you tools. We give you a system.</span>
          
          <TextReveal 
            as="p"
            text="Most SMBs end up with five different tools that don't talk to each other — a chatbot here, a spreadsheet there, a missed-call log nobody checks. Intvar Suite puts your leads, WhatsApp, bookings, and follow-ups in one place, so nothing falls through."
            splitBy="lines"
            className="text-3xl md:text-5xl font-medium leading-snug tracking-tight"
          />
          
          <div className="mt-4">
            <a href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity group flex items-center gap-2 max-w-max">
              <span className="underline underline-offset-4">Talk to a consultant</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
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
          <div className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative bg-foreground/5 border border-foreground/10">
            <video 
              src="/videos/A_sleek_dark_mode_abstract_D.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Step 26: Awards / Press Marquee */}
          <div className="flex flex-col gap-8 items-center border-t border-foreground/10 pt-16">
            <span className="text-sm font-medium uppercase tracking-widest opacity-60">Featured In</span>
            <Marquee speed="fast" direction="right" gap="gap-24" className="opacity-50">
              {["Awwwards", "CSS Design Awards", "FWA", "The Webby Awards", "Site of the Day"].map((award) => (
                <span key={award} className="text-2xl md:text-3xl font-heading uppercase font-bold">
                  {award}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Step 28: Tools We Use */}
          <div className="flex flex-col gap-8 items-center border-t border-foreground/10 pt-16">
            <span className="text-sm font-medium uppercase tracking-widest opacity-60">Tools We Build With</span>
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
