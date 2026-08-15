import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
/* eslint-disable @typescript-eslint/no-explicit-any */

const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-heading font-bold mt-12 mb-6 text-[#0a0a0a]" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-heading font-bold mt-10 mb-5 text-[#0a0a0a]" {...props} />,
  h3: (props: any) => <h3 className="text-2xl md:text-3xl font-heading font-bold mt-8 mb-4 text-[#0a0a0a]" {...props} />,
  p: (props: any) => <p className="text-lg md:text-xl text-[#0a0a0a]/80 leading-[1.8] mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-lg md:text-xl text-[#0a0a0a]/80 leading-[1.8]" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 text-lg md:text-xl text-[#0a0a0a]/80 leading-[1.8]" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="underline underline-offset-4 hover:opacity-70 transition-opacity text-[#0a0a0a] font-medium" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-[#0a0a0a]/20 pl-6 italic my-8 text-[#0a0a0a]/70" {...props} />,
  strong: (props: any) => <strong className="font-bold text-[#0a0a0a]" {...props} />,
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateArticleSchema } from "@/lib/seo/schema";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.meta.title} | Intvar Suite`,
    description: post.meta.excerpt || `Read about ${post.meta.title}`,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt || `Read about ${post.meta.title}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    authorName: "Sahil / Intvar Automation",
    image: "/images/blog-placeholder.jpg"
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
          { name: meta.title, item: `https://intvarautomation.online/blog/${post.meta.slug}` }
        ]}
      />
      <PageHero 
        variant="dark"
        eyebrow={meta.tags.join(" / ")}
        title={meta.title}
        subtitle={meta.date}
      />

      <Section variant="light" className="pb-32 pt-16 md:pt-24">
        <article className="max-w-[720px] mx-auto px-4 md:px-0 w-full">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </Section>
    </main>
  );
}
