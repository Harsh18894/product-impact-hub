import type { BlogPost as LocalBlogPost } from "./blogs";

export interface SanityPortableTextSpan {
  _key: string;
  _type: "span";
  marks?: string[];
  text?: string;
}

export interface SanityPortableTextMarkDef {
  _key: string;
  _type: string;
  href?: string;
  blank?: boolean;
  [key: string]: unknown;
}

export interface SanityPortableTextBlock {
  _key: string;
  _type: string;
  style?: string;
  listItem?: "bullet" | "number" | string;
  level?: number;
  children?: SanityPortableTextSpan[];
  markDefs?: SanityPortableTextMarkDef[];
  language?: string;
  code?: string;
  filename?: string;
  url?: string;
  alt?: string;
  caption?: string;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl?: string;
  thumbnailClassName: string;
  excerpt: string;
  body: SanityPortableTextBlock[];
}

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? "oghsj01f";
const dataset = import.meta.env.VITE_SANITY_DATASET ?? "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? "2026-05-15";
const baseUrl = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`;

const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "category": coalesce(category, "Writing"),
  "imageUrl": image.asset->url,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "alt": coalesce(alt, asset->altText, "")
    }
  }
`;

const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {${postFields}}`;
const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {${postFields}}`;

const formatDate = (value?: string) => {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(value));
};

export const getPlainTextFromBody = (body: SanityPortableTextBlock[] = []) =>
  body
    .flatMap((block) => block.children?.map((child) => child.text ?? "") ?? [])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const getExcerpt = (body: SanityPortableTextBlock[] = []) => {
  const text = getPlainTextFromBody(body);

  if (!text) {
    return "Read the latest notes on product strategy, execution, and impact.";
  }

  return text.length > 160 ? `${text.slice(0, 157).trim()}...` : text;
};

const getReadTime = (body: SanityPortableTextBlock[] = []) => {
  const wordCount = getPlainTextFromBody(body).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));

  return `${minutes} min read`;
};

const getThumbnailClassName = (index = 0) => {
  const gradients = [
    "bg-[linear-gradient(135deg,hsl(35_92%_50%)_0%,hsl(18_92%_62%)_45%,hsl(0_0%_10%)_100%)]",
    "bg-[linear-gradient(135deg,hsl(0_0%_10%)_0%,hsl(0_0%_24%)_40%,hsl(35_92%_50%)_100%)]",
    "bg-[linear-gradient(135deg,hsl(197_79%_45%)_0%,hsl(210_40%_14%)_55%,hsl(35_92%_50%)_100%)]",
  ];

  return gradients[index % gradients.length];
};

const normalizePost = (post: SanityBlogPost, index = 0): SanityBlogPost => ({
  ...post,
  category: post.category ?? "Writing",
  readTime: getReadTime(post.body),
  publishedAt: formatDate(post.publishedAt),
  thumbnailClassName: getThumbnailClassName(index),
  excerpt: getExcerpt(post.body),
  body: post.body ?? [],
});

const runQuery = async <T>(query: string, params: Record<string, unknown> = {}) => {
  const url = new URL(baseUrl);
  url.searchParams.set("query", query);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Sanity request failed with ${response.status}`);
  }

  const payload = await response.json();
  return payload.result as T;
};

export const fetchBlogPosts = async () => {
  const posts = await runQuery<SanityBlogPost[]>(postsQuery);
  return posts.map(normalizePost);
};

export const fetchBlogPostBySlug = async (slug: string) => {
  const post = await runQuery<SanityBlogPost | null>(postBySlugQuery, { slug });
  return post ? normalizePost(post) : null;
};

export type BlogListPost = SanityBlogPost | LocalBlogPost;
export type BlogDetailPost = SanityBlogPost | LocalBlogPost;

export const isSanityBlogPost = (
  post: BlogDetailPost | null | undefined,
): post is SanityBlogPost => Boolean(post && "body" in post);
