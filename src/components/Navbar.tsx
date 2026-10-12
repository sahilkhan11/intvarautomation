"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { useSound, usePopup } from "./SiteShell";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { soundEnabled, toggleSound } = useSound();
  const { openPopup } = usePopup();
  const navRef = useRef<HTMLDivElement>(null);
  
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!isMenuOpen) {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
              setIsHidden(true);
            } else {
              setIsHidden(false);
            }
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80 && !isMenuOpen) {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMenuOpen]);

  // Using mix-blend-difference to automatically contrast against ANY background.
  // We style everything as white/light on dark, and the blend mode handles inverting it on light backgrounds.
  const textColor = "text-white";
  const btnBg = "bg-white";
  const btnText = "text-black";
  const borderColor = "border-white/40";
  const underlineBg = "bg-white";

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 flex items-center justify-between transition-transform duration-500 py-6 pointer-events-none mix-blend-difference ${textColor} ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2 relative z-50 group pointer-events-auto">
        <div className={`w-6 h-6 rounded-full transition-colors duration-500 ${btnBg}`} /> {/* Placeholder for Icon */}
        <span className="font-heading text-xl uppercase tracking-tight font-bold group-hover:opacity-70 transition-opacity">
          Intvar
        </span>
      </Link>

      {/* Right: Navigation & Actions */}
      <div className="flex items-center gap-6 md:gap-8 pointer-events-auto">
        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {["Services", "About", "Portfolio", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group pb-1"
            >
              <span>{item}</span>
              {/* Underline hover effect: grows left->right */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] ${underlineBg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`} />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 text-sm font-medium relative z-50">
          {/* Sound Toggle */}
          <button 
            aria-label="Toggle Sound"
            onClick={toggleSound}
            className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border hover:scale-105 transition-all duration-500 ${borderColor} ${textColor} ${soundEnabled ? "opacity-100" : "opacity-50"}`}
          >
            {soundEnabled ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            )}
          </button>

          {/* Let's Talk Button */}
          <button 
            onClick={openPopup}
            className={`hidden sm:block rounded-full px-6 py-2.5 hover:scale-105 transition-all duration-500 ${btnBg} ${btnText} font-bold`}
          >
            Let&apos;s Talk
          </button>

          {/* Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`rounded-full px-6 py-2.5 hover:scale-105 transition-all duration-500 ${btnBg} ${btnText} font-bold`}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </nav>
    <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
