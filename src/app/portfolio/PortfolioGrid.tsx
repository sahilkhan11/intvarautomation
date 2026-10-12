"use client";

import { useEffect, useState } from "react";
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

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/portfolio.php`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setProjects(data.projects || []);
        }
      } catch (error) {
        console.error("Failed to fetch portfolio projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((demo, index) => {
        const imageIndex = (index % 4) + 1;
        return (
          <div
            key={demo.id}
            className="group relative flex flex-col bg-white/[0.03] border border-white/[0.05] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
          >
            {/* 3D App Preview Window */}
            <div className="aspect-[16/10] bg-black/40 border-b border-white/[0.05] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

              <Image
                src={demo.image || `/demos/demo${imageIndex}.jpg`}
                alt={`${demo.name} Preview`}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-6 flex-1">
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {demo.industry || "General"}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                  {demo.name}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm mt-2">
                  {demo.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {demo.categories && demo.categories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="pt-6 mt-2 border-t border-white/[0.05]">
                {demo.link ? (
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Visit Website
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-block px-6 py-2.5 bg-white/20 text-white/50 font-semibold rounded-full cursor-not-allowed transition-colors"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
