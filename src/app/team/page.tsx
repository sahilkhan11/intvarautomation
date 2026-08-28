import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TextReveal from "@/components/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/content/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team | Intvar Suite",
  description: "Get to know the experts behind Intvar Automation who build scalable AI systems and software for your business.",
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHero 
        variant="dark"
        eyebrow="OUR TEAM"
        title="The minds behind the machines."
        subtitle="Meet the engineers, developers, and project managers dedicated to automating your business."
      />

      <Section variant="light" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-16">
          <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Meet the Team</h2>
            <TextReveal 
              as="h2"
              text="Our Core Team"
              splitBy="words"
              className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Link 
                key={member.id} 
                href={`/team/${member.slug}`}
                className="group flex flex-col gap-6 p-6 rounded-3xl bg-background/5 border border-foreground/10 hover:bg-background/10 transition-colors"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-heading uppercase tracking-tight">{member.name}</h3>
                  <span className="text-sm opacity-60 font-medium uppercase tracking-widest">{member.role}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
