import { ArrowLeft } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { blogPostBySlug } from "@/lib/blogs";
import {
  fetchBlogPostBySlug,
  isSanityBlogPost,
  type BlogDetailPost,
  type SanityPortableTextBlock,
} from "@/lib/sanity";

type BlogPostLocationState = {
  fromBlogSection?: boolean;
};

const linkMarkTypes = new Set(["link", "externalLink", "internalLink"]);

const textWithLineBreaks = (text = "") =>
  text.split("\n").flatMap((line, index) => [
    index > 0 ? <br key={`br-${index}`} /> : null,
    line,
  ]);

const renderMarkedText = (
  content: ReactNode,
  mark: string,
  block: SanityPortableTextBlock,
  childKey: string,
) => {
  if (mark === "strong") {
    return (
      <strong key={`${childKey}-${mark}`} className="font-semibold text-foreground">
        {content}
      </strong>
    );
  }

  if (mark === "em") {
    return <em key={`${childKey}-${mark}`}>{content}</em>;
  }

  if (mark === "underline") {
    return (
      <span key={`${childKey}-${mark}`} className="underline underline-offset-4">
        {content}
      </span>
    );
  }

  if (mark === "strike-through" || mark === "strike") {
    return <s key={`${childKey}-${mark}`}>{content}</s>;
  }

  if (mark === "code") {
    return (
      <code
        key={`${childKey}-${mark}`}
        className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
      >
        {content}
      </code>
    );
  }

  const markDef = block.markDefs?.find((definition) => definition._key === mark);

  if (markDef && linkMarkTypes.has(markDef._type) && markDef.href) {
    const opensNewTab = markDef.blank ?? markDef.href.startsWith("http");

    return (
      <a
        key={`${childKey}-${mark}`}
        href={markDef.href}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noreferrer" : undefined}
        className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
      >
        {content}
      </a>
    );
  }

  return <span key={`${childKey}-${mark}`}>{content}</span>;
};

const renderPortableTextChildren = (block: SanityPortableTextBlock) =>
  block.children?.map((child) => {
    const marks = child.marks ?? [];
    return marks.reduce<ReactNode>(
      (content, mark) => renderMarkedText(content, mark, block, child._key),
      <span key={`${child._key}-text`}>{textWithLineBreaks(child.text)}</span>,
    );
  }) ?? null;

const renderPortableTextBlock = (block: SanityPortableTextBlock, key = block._key) => {
  if (block._type === "image" && block.url) {
    return (
      <figure key={key} className="my-10 space-y-3">
        <img
          src={block.url}
          alt={block.alt ?? ""}
          className="h-auto w-full rounded-lg bg-secondary object-contain"
        />
        {block.caption ? (
          <figcaption className="text-sm leading-6 text-muted-foreground">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block._type === "code" || block.style === "code") {
    const code = block.code ?? block.children?.map((child) => child.text ?? "").join("") ?? "";

    return (
      <pre
        key={key}
        className="overflow-x-auto rounded-lg border border-border bg-secondary p-4 text-sm leading-7 text-foreground"
      >
        <code>{code}</code>
      </pre>
    );
  }

  const children = renderPortableTextChildren(block);

  if (block.style === "h2") {
    return (
      <h2 key={key} className="pt-5 text-2xl font-semibold leading-tight text-foreground">
        {children}
      </h2>
    );
  }

  if (block.style === "h3") {
    return (
      <h3 key={key} className="pt-3 text-xl font-semibold leading-tight text-foreground">
        {children}
      </h3>
    );
  }

  if (block.style === "h1") {
    return (
      <h1 key={key} className="pt-5 text-3xl font-bold leading-tight text-foreground">
        {children}
      </h1>
    );
  }

  if (block.style === "h4") {
    return (
      <h4 key={key} className="pt-2 text-lg font-semibold leading-tight text-foreground">
        {children}
      </h4>
    );
  }

  if (block.style === "h5") {
    return (
      <h5 key={key} className="pt-1 text-base font-semibold leading-tight text-foreground">
        {children}
      </h5>
    );
  }

  if (block.style === "h6") {
    return (
      <h6 key={key} className="pt-1 text-sm font-semibold uppercase leading-tight tracking-normal text-foreground">
        {children}
      </h6>
    );
  }

  if (block.style === "blockquote") {
    return (
      <blockquote
        key={key}
        className="border-l-4 border-accent pl-5 text-lg font-medium italic leading-8 text-foreground"
      >
        {children}
      </blockquote>
    );
  }

  return <p key={key}>{children}</p>;
};

const renderPortableText = (blocks: SanityPortableTextBlock[]) => {
  const renderedBlocks: ReactNode[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];

    if (!block.listItem) {
      renderedBlocks.push(renderPortableTextBlock(block));
      continue;
    }

    const listBlocks: SanityPortableTextBlock[] = [];
    const listItem = block.listItem;
    const level = block.level ?? 1;

    while (
      blocks[index]?.listItem === listItem &&
      (blocks[index]?.level ?? 1) === level
    ) {
      listBlocks.push(blocks[index]);
      index += 1;
    }

    index -= 1;

    const ListTag = listItem === "number" ? "ol" : "ul";
    const listClassName =
      listItem === "number"
        ? "list-decimal space-y-2 pl-6"
        : "list-disc space-y-2 pl-6";

    renderedBlocks.push(
      <ListTag key={`${block._key}-list`} className={listClassName}>
        {listBlocks.map((listBlock) => (
          <li key={listBlock._key} className={level > 1 ? "ml-5" : undefined}>
            {renderPortableTextChildren(listBlock)}
          </li>
        ))}
      </ListTag>,
    );
  }

  return renderedBlocks;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as BlogPostLocationState | null;
  const [post, setPost] = useState<BlogDetailPost | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "not-found">("loading");

  useEffect(() => {
    let isMounted = true;

    if (!slug) {
      setStatus("not-found");
      return () => {
        isMounted = false;
      };
    }

    const localPost = blogPostBySlug.get(slug);

    setStatus("loading");

    fetchBlogPostBySlug(slug)
      .then((sanityPost) => {
        if (!isMounted) {
          return;
        }

        const nextPost = sanityPost ?? localPost ?? null;
        setPost(nextPost);
        setStatus(nextPost ? "ready" : "not-found");
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }

        setPost(localPost ?? null);
        setStatus(localPost ? "ready" : "not-found");
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleBackClick = () => {
    if (locationState?.fromBlogSection && window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/#blog");
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-background">
        <section className="section-padding">
          <div className="container-narrow">
            <div className="h-4 w-20 rounded bg-secondary" />
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="space-y-5 px-6 py-8 md:px-10 md:py-12">
                <div className="h-12 max-w-2xl rounded bg-secondary" />
                <div className="h-64 w-full rounded-lg bg-secondary md:h-80" />
                <div className="h-3 w-64 rounded bg-secondary" />
                <div className="h-20 max-w-3xl rounded bg-secondary" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  if (status === "not-found" || !post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-narrow">
          <button
            type="button"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <article className="px-6 py-8 md:px-10 md:py-12">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
                {post.title}
              </h1>

              <div className="mt-8 overflow-hidden rounded-lg bg-secondary">
                {isSanityBlogPost(post) && post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-auto w-full object-contain"
                  />
                ) : (
                  <div className={`h-64 w-full md:h-80 ${post.thumbnailClassName}`} />
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{post.readTime}</span>
              </div>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {post.excerpt}
              </p>

              {isSanityBlogPost(post) ? (
                <div className="mt-12 space-y-5 text-base leading-8 text-muted-foreground">
                  {renderPortableText(post.body)}
                </div>
              ) : (
                <div className="mt-12 space-y-10">
                  {post.content.map((section) => (
                    <section key={section.heading} className="space-y-4">
                      <h2 className="text-2xl font-semibold text-foreground">
                        {section.heading}
                      </h2>
                      <div className="space-y-4 text-base leading-8 text-muted-foreground">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
