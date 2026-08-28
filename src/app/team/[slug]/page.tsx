import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/content/team";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Intvar Suite`,
    description: `Learn more about ${member.name}, ${member.role} at Intvar Automation.`,
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col gap-16">
        
        <Link href="/team" className="text-sm font-medium hover:opacity-70 transition-opacity w-fit flex items-center gap-2">
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span className="uppercase tracking-widest">Back to Team</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative border border-foreground/10 bg-background/5">
            <Image 
              src={member.imageUrl} 
              alt={member.name} 
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter">
                {member.name}
              </h1>
              <h2 className="text-xl md:text-2xl opacity-60 font-medium uppercase tracking-widest">
                {member.role}
              </h2>
            </div>
            
            <div className="w-12 h-1 bg-foreground/20 rounded-full" />
            
            <p className="text-lg md:text-xl opacity-80 leading-relaxed font-sans">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
