import TextReveal from "./TextReveal";
import HeroAnimations from "./HeroAnimations";
import HeroCanvasWrapper from "./HeroCanvasWrapper";

import Link from "next/link";

export default function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col justify-center overflow-hidden px-4 md:px-8 lg:px-12 pt-32 pb-8">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvasWrapper />
      </div>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between pointer-events-none">
        
        {/* Top Row */}
        <div className="flex justify-between items-start pt-8 pointer-events-auto">
        </div>

        {/* Center Row */}
        <div className="flex flex-col w-full mt-auto mb-auto justify-center pt-12 pointer-events-auto items-center text-center">
          
          <div className="mb-4 inline-block px-5 py-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-md">
             <span className="text-xs md:text-sm font-semibold tracking-wider text-foreground/90 uppercase">
               Custom Websites, Software & Automation in Rajasthan
             </span>
          </div>

          <TextReveal 
            as="div"
            splitBy="words"
            triggerOnLoad={true}
            delay={0.2}
            className="text-[4.8vw] md:text-[3vw] font-bold font-heading uppercase leading-[0.85] tracking-tighter"
          >
            {children || <h1 className="sr-only">One system to find, follow up, and keep every customer.</h1>}
          </TextReveal>
          
          <HeroAnimations />

          {/* Quick Hero CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 z-20">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-foreground text-background font-bold uppercase tracking-wider text-xs md:text-sm hover:scale-105 transition-transform shadow-lg"
            >
              Get Free Local Audit
            </Link>
            <Link
              href="https://wa.me/917372908326?text=Hi%20Sahil,%20I%20want%20to%20know%20more%20about%20Intvar%20software%20and%20automation"
              target="_blank"
              className="px-8 py-3.5 rounded-full border border-foreground/30 bg-background/60 backdrop-blur-sm hover:bg-foreground/10 font-bold uppercase tracking-wider text-xs md:text-sm transition-all"
            >
              WhatsApp +91 7372908326
            </Link>
          </div>

          {/* Horizontal Rule */}
          <div className="w-full h-[1px] bg-foreground/20 my-6 md:my-8 hidden" />
          
          {/* GSAP Scroll-Triggered Marquee */}
          {/* <HeroMarquee /> */}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pb-4 pointer-events-auto">
        </div>

      </div>
    </section>
  );
}
