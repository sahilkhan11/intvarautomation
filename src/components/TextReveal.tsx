"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type TextRevealProps = {
  text: string;
  as?: React.ElementType;
  className?: string;
  triggerOnLoad?: boolean;
  splitBy?: "lines" | "words" | "chars";
  delay?: number;
};

export default function TextReveal({
  text,
  as: Component = "h2",
  className = "",
  triggerOnLoad = false,
  splitBy = "lines",
  delay = 0,
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    const currentRef = textRef.current;

    // Split the text into lines, words, or characters
    const splitText = new SplitType(currentRef, {
      types: splitBy,
      tagName: 'span'
    });
    const elements = 
      splitBy === "words" ? splitText.words : 
      splitBy === "lines" ? splitText.lines : 
      splitText.chars;
    
    if (!elements || elements.length === 0) return;

    // Set initial state
    gsap.set(elements, {
      yPercent: 100,
      opacity: 0,
    });

    // Create the animation
    gsap.to(elements, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.08,
      ease: "power4.out",
      delay: triggerOnLoad ? delay : 0,
      scrollTrigger: triggerOnLoad
        ? undefined
        : {
            trigger: currentRef,
            start: "top 85%", // trigger when element top hits 85% of viewport
            toggleActions: "play none none none",
          },
    });

    return () => {
      if (splitText) {
        splitText.revert();
      }
    };
  }, { dependencies: [splitBy, triggerOnLoad, delay], scope: textRef });

  return (
    <Component ref={textRef} className={className}>
      {text}
    </Component>
  );
}
