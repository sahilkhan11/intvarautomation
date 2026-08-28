"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

type TextRevealProps = {
  children?: React.ReactNode;
  text?: string;
  as?: React.ElementType;
  className?: string;
  triggerOnLoad?: boolean;
  splitBy?: "lines" | "words" | "chars";
  delay?: number;
};

export default function TextReveal({
  children,
  text,
  as: Component = "h2",
  className = "",
  triggerOnLoad = false,
  splitBy = "lines",
  delay = 0,
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
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

    // Ensure elements have a display property that allows transform
    gsap.set(elements, { display: 'inline-block' });
    
    // For words/chars, to clip properly, we might need overflow hidden on their lines.
    // If lines, we want overflow hidden on the line itself? 
    // Actually, just fromTo is often enough for opacity/transform.
    
    // Create the animation using fromTo to avoid React strict mode issues with initial state
    gsap.fromTo(elements, 
      {
        yPercent: 120,
        opacity: 0,
        rotateX: 45,
        transformOrigin: "0% 50% -50",
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: "expo.out",
        delay: triggerOnLoad ? delay : 0,
        scrollTrigger: triggerOnLoad
          ? undefined
          : {
              trigger: currentRef,
              start: "top 90%", // trigger when element top hits 90% of viewport
              toggleActions: "play none none none",
            },
      }
    );

    return () => {
      if (splitText) {
        splitText.revert();
      }
    };
  }, { dependencies: [splitBy, triggerOnLoad, delay], scope: textRef });

  return (
    <Component ref={textRef} className={className}>
      {text || children}
    </Component>
  );
}
