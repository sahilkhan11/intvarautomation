"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import Section from "./Section";

export default function DesignExplorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !stripRef.current || !scrollWrapperRef.current) return;

    const stripWidth = stripRef.current!.scrollWidth;
    
    // 3D straighten + horizontal scroll scrub
    const tween = gsap.fromTo(stripRef.current, 
      {
        x: window.innerWidth * 0.1, 
        rotateX: 30,
        rotateY: -15,
        rotateZ: 5,
        scale: 0.8,
      },
      {
        x: -(stripWidth - window.innerWidth + window.innerWidth * 0.1),
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: scrollWrapperRef.current,
          start: "top top",
          end: () => `+=${stripWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );

    return () => {
      tween.kill();
    };
  }, { scope: containerRef });

  return (
    <Section variant="light" className="border-t border-foreground/10 relative overflow-hidden" ref={containerRef}>
      <div ref={scrollWrapperRef} className="h-screen w-full flex flex-col justify-center py-24 relative">
        
        {/* Heading */}
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 px-4 md:px-8 lg:px-12 z-10 absolute top-24 left-0 right-0 pointer-events-none">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60">Design in Motion</span>
          <TextReveal 
            as="h2"
            text="Explorations"
            splitBy="chars"
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-heading uppercase tracking-tighter"
          />
        </div>
        
        {/* The 3D Strip */}
        <div className="w-full flex-1 flex items-center relative z-0 mt-32" style={{ perspective: "1200px" }}>
          <div ref={stripRef} className="flex gap-8 px-[10vw]" style={{ transformStyle: "preserve-3d" }}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[400px] aspect-[3/4] shrink-0 bg-background/5 rounded-3xl overflow-hidden relative border border-foreground/10 shadow-2xl"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                 <Image 
                   src={`/images/concept ${i}.png`} 
                   alt={`Concept ${i}`} 
                   fill
                   className="object-cover z-0"
                 />
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
