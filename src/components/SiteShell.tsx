"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SoundContext = createContext({
  soundEnabled: false,
  toggleSound: () => {},
});

export function useSound() {
  return useContext(SoundContext);
}

export const PopupContext = createContext({
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function usePopup() {
  return useContext(PopupContext);
}

import { MotionConfig } from "framer-motion";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    if (lenisRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Force animations and smooth scrolling regardless of OS preference

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial layout shift from overflow fixes
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeout);
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const toggleSound = () => setSoundEnabled((p) => !p);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </PopupContext.Provider>
    </SoundContext.Provider>
  );
}
