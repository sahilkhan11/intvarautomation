"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
};

export default function Counter({ end, suffix = "", duration = 2, label }: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!countRef.current) return;

    const el = countRef.current;
    
    const counter = { val: 0 };
    
    const animation = gsap.to(counter, {
      val: end,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        if (el) {
          el.innerText = Math.floor(counter.val).toLocaleString() + suffix;
        }
      }
    });

    return () => {
      animation.kill();
    };
  }, { dependencies: [end, suffix, duration], scope: countRef });

  return (
    <div className="flex flex-col gap-2 border-l-2 border-foreground/10 pl-6">
      <span ref={countRef} className="text-5xl md:text-7xl font-bold font-heading tracking-tighter">
        0{suffix}
      </span>
      <span className="text-sm uppercase tracking-widest opacity-60 font-medium max-w-[150px]">
        {label}
      </span>
    </div>
  );
}
