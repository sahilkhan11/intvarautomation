import Link from "next/link";
import dynamic from "next/dynamic";
import TextReveal from "./TextReveal";
import HeroMarquee from "./HeroMarquee";

const DynamicHeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background/50 animate-pulse" />
});

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-background flex flex-col justify-center overflow-hidden px-4 md:px-8 lg:px-12 pt-24 pb-8">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <DynamicHeroCanvas />
      </div>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between pointer-events-none">
        
        {/* Top Row */}
        <div className="flex justify-between items-start pt-8 pointer-events-auto">
          <div className="flex flex-col text-xs md:text-sm uppercase tracking-widest opacity-60 font-medium gap-1">
            <span>AI MARKETING & MANAGEMENT</span>
            <span>SOFTWARE</span>
          </div>
          <div className="flex flex-col text-right items-end max-w-sm md:max-w-md">
            <p className="text-sm md:text-base opacity-80 mb-2">Intvar Suite runs your leads, WhatsApp replies, bookings, and follow-ups automatically — so your business grows even on the days you don&apos;t have time to chase it.</p>
            <Link href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity group flex items-center gap-2 py-2">
              <span className="underline underline-offset-4">More about us</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Center Row */}
        <div className="flex flex-col w-full mt-auto mb-auto justify-center pt-12 pointer-events-auto">
          <TextReveal 
            as="h1"
            text="One system to find, follow up, and keep every customer."
            splitBy="words"
            triggerOnLoad={true}
            delay={0.2}
            className="text-[8vw] md:text-[5vw] font-bold font-heading uppercase leading-[0.85] tracking-tighter"
          />
          
          {/* Horizontal Rule */}
          <div className="w-full h-[1px] bg-foreground/20 my-6 md:my-8" />
          
          {/* GSAP Scroll-Triggered Marquee */}
          <HeroMarquee />
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pb-4 pointer-events-auto">
          <div className="flex flex-col text-xs md:text-sm uppercase tracking-widest opacity-60 gap-1 hidden sm:flex">
            <span>Based in Rajasthan, India</span>
            <span>Working Global</span>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 flex flex-col items-center gap-2 opacity-50 hidden sm:flex">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-bounce" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest opacity-80 ml-auto sm:ml-0">
            <span>From idea to outcome</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
