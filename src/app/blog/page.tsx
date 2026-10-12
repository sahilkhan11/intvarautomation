import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from 'next/link';
import Image from 'next/image';
import { getDbConnection } from '@/lib/db';
import { RowDataPacket } from 'mysql2/promise';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Intvar Suite",
  description: "Thoughts, ideas, and stories from the Intvar team.",
};

const fallbackBlogPosts = [
  {
    id: 1,
    title: "Why Local Businesses in Rajasthan Need Custom Software Over Generic Templates",
    slug: "why-local-businesses-in-rajasthan-need-custom-software",
    excerpt: "How clinics, schools, and local businesses in Alwar and Jaipur are cutting manual work and capturing more clients with custom digital systems.",
    image_url: "/images/concept 1.png",
    published_at: "2026-03-15T00:00:00.000Z"
  }
];

async function getBlogPosts() {
  try {
    const connection = await getDbConnection();
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM blog ORDER BY published_at DESC');
    await connection.end();
    if (rows && rows.length > 0) return rows;
  } catch {
    // MySQL not reachable or table missing, return fallback posts
  }
  return fallbackBlogPosts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <PageHero 
        variant="light"
        eyebrow="INSIGHTS"
        title="Blog"
        subtitle="Thoughts, ideas, and stories from the INTVAR team."
      />

      <Section variant="light" className="pb-32 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {posts.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center border border-[#0a0a0a]/10 rounded-[2rem] p-4 md:p-8 hover:border-[#0a0a0a]/30 transition-colors bg-white/50 backdrop-blur-sm"
            >
              {/* Image Section */}
              {item.image_url && (
                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#0a0a0a]/5 shrink-0">
                  <Image 
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="w-full flex flex-col gap-6 p-4 md:p-0">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#0a0a0a]/20 rounded-full text-[#0a0a0a]/60">
                    {new Date(item.published_at).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-[#0a0a0a]">{item.title}</h2>
                  <p className="text-lg opacity-70 leading-relaxed font-medium text-[#0a0a0a]">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-4">
                  <Link href={`/blog/${item.slug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-[#0a0a0a] group-btn">
                    <span className="underline underline-offset-4">Read Full Story</span>
                    <span className="group-btn-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="text-center py-20 opacity-50 font-medium text-lg">No blog posts found. Check back soon.</div>
          )}
        </div>
      </Section>
    </main>
  );
}
