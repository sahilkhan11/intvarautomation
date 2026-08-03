import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(source);
      return data as BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const source = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf8");
    const { data, content } = matter(source);

    return {
      meta: data as BlogPostMeta,
      content,
    };
  } catch {
    return null;
  }
}
