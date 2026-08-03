import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/work";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Intvar Suite`,
    description: project.oneLiner,
    openGraph: {
      title: project.title,
      description: project.oneLiner,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <PageHero 
        variant="dark"
        eyebrow={project.tags.join(" / ")}
        title={project.title}
      />

      <Section variant="dark" className="pt-8 pb-32">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          {/* Large Header Image */}
          <div className="w-full aspect-video md:aspect-[21/9] relative rounded-3xl overflow-hidden bg-white/5 border border-foreground/10">
            <Image 
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Case Study Content Placeholder blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-8">
            {/* Sidebar Meta */}
            <div className="md:col-span-1 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Client</span>
                <span className="text-lg font-medium">{project.title}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Year</span>
                <span className="text-lg font-medium">{project.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Services</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-foreground/20 rounded-full text-foreground/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">The Problem</h2>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  {project.oneLiner} Currently, this is a placeholder block. Detailed problem statement highlighting the exact bottlenecks, manual inefficiencies, or revenue gaps the client was facing before implementing Intvar&apos;s AI solutions.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Our Approach</h2>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  Detailed breakdown of the strategy, tools, and automation workflows deployed to solve the problem. Explains the step-by-step implementation of AI agents, system integrations, and custom logic.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">The Result</h2>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  Measurable impact metrics showing the success of the project. Details on hours saved, revenue increased, leads captured, and overall business transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-16 border-t border-foreground/10 mt-8">
            <Link href="/work" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              <span>←</span>
              <span className="underline underline-offset-4">Back to all work</span>
            </Link>
          </div>

        </div>
      </Section>
    </main>
  );
}
