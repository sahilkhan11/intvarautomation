"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
import Icon from "./Icon";
import Link from "next/link";
import { servicePillars } from "../content/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="relative bg-background text-foreground py-32 md:py-48 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Smoky / Foggy Animated Background Blob */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.03] rounded-full blur-[100px] animate-pulse pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24 md:gap-32">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60">The Suite</span>
          <TextReveal 
            as="h2"
            text="CAPTURE. CONVERT. MANAGE."
            splitBy="words"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading uppercase tracking-tighter leading-[0.85] max-w-4xl mx-auto"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicePillars.map((service, index) => (
            <Link 
              key={service.id}
              href={`/services#${service.slug}`}
              ref={(el) => { if (el) cardsRef.current[index] = el as any; }}
              className={`relative border rounded-3xl p-8 md:p-12 flex flex-col gap-12 group transition-all bg-background/50 backdrop-blur-sm ${
                service.isFlagship 
                  ? 'border-foreground/40 hover:border-foreground/60 shadow-[0_0_40px_rgba(255,255,255,0.03)]' 
                  : 'border-foreground/10 hover:border-foreground/30'
              }`}
            >
              {service.isFlagship && (
                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Flagship
                </div>
              )}
              <div className="w-16 h-16 shrink-0 rounded-full border border-foreground/20 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all text-3xl">
                {service.emoji}
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight">{service.title}</h3>
                <p className="opacity-60 leading-relaxed font-sans text-sm md:text-base">{service.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
