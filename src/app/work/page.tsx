"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/work";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card, 
            { y: 50, scale: 0.95, opacity: 0 },
            { 
              y: 0, 
              scale: 1,
              opacity: 1, 
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <PageHero 
        variant="light"
        eyebrow="SELECTED WORK"
        title="Projects"
        subtitle="Real outcomes for businesses that wanted more than just another basic website."
      />

      <Section variant="light" className="pb-32 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center border border-[#0a0a0a]/10 rounded-[2rem] p-4 md:p-8 hover:border-[#0a0a0a]/30 transition-colors bg-white/50 backdrop-blur-sm"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#0a0a0a]/5">
                <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 p-4 md:p-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#0a0a0a]/20 rounded-full text-[#0a0a0a]/60">
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#0a0a0a]/20 rounded-full text-[#0a0a0a]/60">
                    {project.year}
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-[#0a0a0a]">{project.title}</h2>
                  <p className="text-lg opacity-70 leading-relaxed font-medium text-[#0a0a0a]">
                    {project.oneLiner}
                  </p>
                </div>

                <div className="mt-4">
                  <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-[#0a0a0a] group-btn">
                    <span className="underline underline-offset-4">Explore project</span>
                    <span className="group-btn-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
