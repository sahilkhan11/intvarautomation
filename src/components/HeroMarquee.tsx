"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeroMarquee() {
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (scrollTextRef.current) {
      gsap.to(scrollTextRef.current, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: scrollTextRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }
  }, { scope: scrollTextRef });

  return (
    <div className="overflow-hidden w-full">
      <div ref={scrollTextRef} className="flex whitespace-nowrap text-[8vw] md:text-[6vw] font-heading font-medium uppercase leading-none opacity-80 tracking-tight gap-4 md:gap-8 min-w-max">
        <span>CAPTURE</span>
        <span className="opacity-50">+</span>
        <span>CONVERT</span>
        <span className="opacity-50">+</span>
        <span>MANAGE</span>
        <span className="opacity-50">+</span>
        <span>CAPTURE</span>
        <span className="opacity-50">+</span>
        <span>CONVERT</span>
        <span className="opacity-50">+</span>
        <span>MANAGE</span>
      </div>
    </div>
  );
}
