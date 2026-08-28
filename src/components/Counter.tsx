"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
};

export default function Counter({ end, suffix = "", duration = 2, label }: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated, end, duration, suffix]);

  const startAnimation = () => {
    const el = countRef.current;
    if (!el) return;

    let startTime: number | null = null;
    const isDecimal = !Number.isInteger(end) || (end === 5 && suffix === ".0");

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * end;

      const displayVal = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);
      el.innerText = displayVal + (isDecimal ? "" : suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.innerText = (isDecimal ? end.toFixed(1) : end) + suffix;
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-2 border-l-2 border-foreground/10 pl-6">
      <span ref={countRef} className="text-5xl md:text-7xl font-bold font-heading tracking-tighter">
        0{suffix}
      </span>
      <span className="text-sm uppercase tracking-widest opacity-60 font-medium max-w-[150px]">
        {label}
      </span>
    </div>
  );
}
