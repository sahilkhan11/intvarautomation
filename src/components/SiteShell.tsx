"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const SoundContext = createContext({
  soundEnabled: false,
  toggleSound: () => {},
});

export function useSound() {
  return useContext(SoundContext);
}

import { MotionConfig } from "framer-motion";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Optional: Respect prefers-reduced-motion for lenis/gsap if needed, 
    // but MotionConfig handles framer-motion which is heavily used.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      // We can disable smooth scroll if reduced motion is preferred
      duration: prefersReducedMotion ? 0 : 1.2,
      smoothWheel: !prefersReducedMotion,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const toggleSound = () => setSoundEnabled((p) => !p);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </SoundContext.Provider>
  );
}
