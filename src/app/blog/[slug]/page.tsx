import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getDbConnection } from '@/lib/db';
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateArticleSchema } from "@/lib/seo/schema";
import { RowDataPacket } from 'mysql2/promise';
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
}

const fallbackPosts: Record<string, BlogPost> = {
  "why-local-businesses-in-rajasthan-need-custom-software": {
    id: 1,
    title: "Why Local Businesses in Rajasthan Need Custom Software Over Generic Templates",
    slug: "why-local-businesses-in-rajasthan-need-custom-software",
    excerpt: "How clinics, schools, and local businesses in Alwar and Jaipur are cutting manual work and capturing more clients with custom digital systems.",
    content: `
      <p>For years, businesses across Alwar, Bhiwadi, and Jaipur relied strictly on foot traffic, local directories, or slow WordPress sites built on bloated templates.</p>
      <p>Today, local customer behavior has changed. When a patient needs a dental appointment or a parent looks for school admissions, they start with a search on Google or message directly on WhatsApp.</p>
      <h2>The Real Cost of Slow Websites</h2>
      <p>A website that takes longer than 3 seconds to load on mobile loses more than half of its potential inquiries. By moving to modern Next.js architecture, local businesses cut load times down to under 0.8 seconds.</p>
      <h2>Automation That Directly Saves Money</h2>
      <p>Whether it is managing student fee reminders via WhatsApp without printing paper notices, or taking online restaurant orders directly without giving away 25% commissions to delivery aggregators, custom systems pay for themselves within months.</p>
    `,
    image_url: "/images/concept 1.png",
    published_at: "2026-03-15T00:00:00.000Z",
    meta_title: "Why Local Businesses in Rajasthan Need Custom Software | Intvar Automation",
    meta_description: "Discover how clinics, schools, and businesses in Alwar and Jaipur replace slow templates and manual paperwork with custom software."
  }
};

async function getBlogPost(slug: string) {
  try {
    const connection = await getDbConnection();
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM blog WHERE slug = ?', [slug]);
    await connection.end();
    if (rows && rows.length > 0) return rows[0] as unknown as BlogPost;
  } catch {
    // MySQL not reachable or table missing, use static fallback
  }
  return fallbackPosts[slug] || null;
}

export async function generateStaticParams() {
  try {
    const connection = await getDbConnection();
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT slug FROM blog');
    await connection.end();
    if (rows && rows.length > 0) {
      return rows.map((row) => ({ slug: row.slug }));
    }
  } catch {
    // MySQL not reachable, return fallback slugs
  }
  return Object.keys(fallbackPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.meta_title || `${post.title} | Intvar Suite`,
    description: post.meta_description || post.excerpt || `Read about ${post.title}`,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || `Read about ${post.title}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt || post.title,
    datePublished: new Date(post.published_at).toISOString(),
    authorName: "Intvar Automation",
    image: post.image_url || "/images/concept 1.png"
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Blog", item: "https://intvarautomation.online/blog" },
          { name: post.title, item: `https://intvarautomation.online/blog/${post.slug}` }
        ]}
      />
      <PageHero 
        variant="dark"
        eyebrow="BLOG"
        title={post.title}
        subtitle={new Date(post.published_at).toLocaleDateString()}
      />

      <Section variant="light" className="pb-32 pt-16 md:pt-24">
        <article className="max-w-[720px] mx-auto px-4 md:px-0 w-full">
          {post.image_url && (
            <div className="relative w-full aspect-video mb-12">
              <Image src={post.image_url} alt={post.title} fill className="rounded-2xl object-cover" />
            </div>
          )}
          {/* We assume the user writes HTML in the admin panel for content */}
          <div 
            className="text-lg md:text-xl text-[#0a0a0a]/80 leading-[1.8] flex flex-col gap-6 prose max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-a:text-blue-600 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </Section>
    </main>
  );
}
