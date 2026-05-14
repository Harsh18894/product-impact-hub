import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
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

const renderPortableTextBlock = (block: SanityPortableTextBlock) => {
  const children =
    block.children?.map((child) => (
      <span key={child._key} className={child.marks?.includes("strong") ? "font-semibold" : undefined}>
        {child.text}
      </span>
    )) ?? null;

  if (block.style === "h2") {
    return (
      <h2 key={block._key} className="text-2xl font-semibold text-foreground">
        {children}
      </h2>
    );
  }

  if (block.style === "h3") {
    return (
      <h3 key={block._key} className="text-xl font-semibold text-foreground">
        {children}
      </h3>
    );
  }

  if (block.listItem === "bullet") {
    return (
      <li key={block._key} className="ml-5 list-disc">
        {children}
      </li>
    );
  }

  if (block.listItem === "number") {
    return (
      <li key={block._key} className="ml-5 list-decimal">
        {children}
      </li>
    );
  }

  return <p key={block._key}>{children}</p>;
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
              <div className="h-64 w-full bg-secondary md:h-80" />
              <div className="space-y-5 px-6 py-8 md:px-10 md:py-12">
                <div className="h-3 w-64 rounded bg-secondary" />
                <div className="h-12 max-w-2xl rounded bg-secondary" />
                <div className="h-24 max-w-3xl rounded bg-secondary" />
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
            {isSanityBlogPost(post) && post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt=""
                className="h-64 w-full object-cover md:h-80"
              />
            ) : (
              <div className={`h-64 w-full md:h-80 ${post.thumbnailClassName}`} />
            )}

            <article className="px-6 py-8 md:px-10 md:py-12">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{post.readTime}</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {post.excerpt}
              </p>

              {isSanityBlogPost(post) ? (
                <div className="mt-12 space-y-5 text-base leading-8 text-muted-foreground">
                  {post.body.map(renderPortableTextBlock)}
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
