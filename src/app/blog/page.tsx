import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import BlogGrid from "./BlogGrid";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Intvar Suite",
  description: "Thoughts, ideas, and stories from the Intvar team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <PageHero 
        variant="light"
        eyebrow="INSIGHTS"
        title="Blog"
        subtitle="Thoughts, ideas, and stories from the INTVAR team."
      />

      <Section variant="light" className="pb-32 pt-8">
        <BlogGrid posts={posts} />
      </Section>
    </main>
  );
}
