"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
import Link from "next/link";
import Image from "next/image";

type PortfolioProject = {
  id: number;
  project_id: string;
  name: string;
  description: string | null;
  image: string | null;
  categories: string[] | null;
  industry: string | null;
  link: string | null;
  is_superstar: boolean;
};

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuperstars = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php?superstar=true`, { cache: 'no-store' });
        console.log("Fetch response status:", res.status);
        if (res.ok) {
          const data = await res.json();
          console.log("Fetch response data:", data);
          setProjects(data.projects || []);
        }
      } catch (error) {
        console.error("Failed to fetch superstar projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSuperstars();
  }, []);

  useGSAP(() => {
    if (loading || projects.length === 0) return;
    
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !scrollWrapperRef.current || !cardsRef.current) return;

    // 1. Initial scale/opacity reveal as they scroll into view (coming from left and right)
    const cards = Array.from(cardsRef.current.children);
    const revealTween = gsap.fromTo(cards, 
      {
        x: (index) => (index % 2 === 0 ? -150 : 150),
        scale: 0.95,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 2. Horizontal pinning scroll effect
    const getScrollAmount = () => {
      const cardsWidth = cardsRef.current?.scrollWidth || 0;
      return -(cardsWidth - window.innerWidth + window.innerWidth * 0.1); 
    };

    const tween = gsap.to(cardsRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: scrollWrapperRef.current,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`, 
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true, 
        refreshPriority: 1,
      }
    });

    // Force recalculation of subsequent scroll triggers once this component is laid out
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      revealTween.kill();
      tween.kill();
    };
  }, { dependencies: [loading, projects.length], scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f4f4f4] text-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 flex justify-between items-end">
        <TextReveal 
          as="h2"
          text="Client Success"
          splitBy="words"
          className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
        />
        <Link href="/portfolio" className="text-sm font-medium hover:opacity-70 transition-opacity group flex items-center gap-2 py-2">
          <span className="underline underline-offset-4">View all case studies</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center bg-[#f4f4f4]">
          <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full" />
        </div>
      ) : projects.length === 0 ? (
        <div className="w-full h-[80vh] flex items-center justify-center bg-[#f4f4f4] font-bold text-red-500">
          No superstar projects found.
        </div>
      ) : (
        <div ref={scrollWrapperRef} className="overflow-hidden w-full h-[80vh] flex items-center bg-[#f4f4f4]">
          <div ref={cardsRef} className="flex gap-8 px-4 md:px-8 lg:px-12 flex-nowrap h-[65vh] w-max">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 h-full bg-[#040508] text-white rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500 snap-center"
              >
                <div className="w-full h-[70%] bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src={project.image || "/images/placeholder.jpg"} 
                    alt={`${project.name} Mockup`} 
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex justify-between items-end mt-6">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-2">{project.name}</h3>
                    <p className="text-xs md:text-sm opacity-60 uppercase tracking-widest line-clamp-2">{project.description}</p>
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project details" className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <button aria-label="View project details" className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
