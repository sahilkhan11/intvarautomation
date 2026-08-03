"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function WireframeObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(() => {
    // Continuous rotation on the mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }

    // Mouse parallax effect on the group
    if (groupRef.current) {
      const targetX = (pointer.y * Math.PI) / 4;
      const targetY = (pointer.x * Math.PI) / 4;
      
      // Smooth interpolation for parallax
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial 
          color="#f5f5f5" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger for horizontal text marquee
    const ctx = gsap.context(() => {
      if (scrollTextRef.current) {
        gsap.to(scrollTextRef.current, {
          xPercent: -30, // move left as we scroll down
          ease: "none",
          scrollTrigger: {
            trigger: scrollTextRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // smooth scrubbing
          }
        });
      }
    }, scrollTextRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen bg-background flex flex-col justify-center overflow-hidden px-4 md:px-8 lg:px-12 pt-24 pb-8">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <WireframeObject />
        </Canvas>
      </div>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between pointer-events-none">
        
        {/* Top Row (Step 16) */}
        <div className="flex justify-between items-start pt-8 pointer-events-auto">
          <div className="flex flex-col text-xs md:text-sm uppercase tracking-widest opacity-60 font-medium gap-1">
            <span>AI MARKETING & MANAGEMENT</span>
            <span>SOFTWARE</span>
          </div>
          <div className="flex flex-col text-right items-end max-w-sm md:max-w-md">
            <p className="text-sm md:text-base opacity-80 mb-2">Intvar Suite runs your leads, WhatsApp replies, bookings, and follow-ups automatically — so your business grows even on the days you don&apos;t have time to chase it.</p>
            <Link href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity group flex items-center gap-2">
              <span className="underline underline-offset-4">More about us</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Center Row (Steps 17 & 18) */}
        <div className="flex flex-col w-full mt-auto mb-auto justify-center pt-12">
          <TextReveal 
            as="h1"
            text="One system to find, follow up, and keep every customer."
            splitBy="words"
            triggerOnLoad={true}
            delay={0.2}
            className="text-[8vw] md:text-[5vw] font-bold font-heading uppercase leading-[0.85] tracking-tighter"
          />
          
          {/* Horizontal Rule */}
          <div className="w-full h-[1px] bg-foreground/20 my-6 md:my-8" />
          
          {/* GSAP Scroll-Triggered Marquee */}
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
        </div>

        {/* Bottom Row (Steps 19 & 20) */}
        <div className="flex justify-between items-end pb-4 pointer-events-auto">
          <div className="flex flex-col text-xs md:text-sm uppercase tracking-widest opacity-60 gap-1 hidden sm:flex">
            <span>Based in NY</span>
            <span>Working Global</span>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 flex flex-col items-center gap-2 opacity-50 hidden sm:flex">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            {/* Animated line using CSS instead of GSAP for simplicity here */}
            <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-bounce" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest opacity-80 ml-auto sm:ml-0">
            <span>From idea to outcome</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
