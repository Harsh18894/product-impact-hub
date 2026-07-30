import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WritingThumbnail from "@/components/illustrations/WritingThumbnail";
import { blogPosts } from "@/lib/blogs";
import { fetchBlogPosts, isSanityBlogPost, type BlogListPost } from "@/lib/sanity";

const WritingIndex = () => {
  const [posts, setPosts] = useState<BlogListPost[]>(blogPosts);

  useEffect(() => {
    let isMounted = true;

    fetchBlogPosts()
      .then((sanityPosts) => {
        if (isMounted && sanityPosts.length > 0) {
          setPosts(sanityPosts);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPosts(blogPosts);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Writing | Harsh Deep Singh"
        description="Notes on product thinking, trade-offs, growth, and execution."
        path="/writing"
        image="/og/home.png"
      />
      <section className="section-padding">
        <div className="container-narrow">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="mt-8 mb-12">
            <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
              Writing
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              All posts
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Notes on product thinking, trade-offs, growth, and execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="overflow-hidden">
                  {isSanityBlogPost(post) && post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="h-44 w-full origin-top object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <WritingThumbnail
                      category={post.category}
                      slug={post.slug}
                      title={post.title}
                      className="flex h-44 w-full origin-center items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>

                <div className="flex h-full flex-col space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold leading-snug text-foreground">
                      {post.title}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-sm">
                    <span className="text-muted-foreground">{post.publishedAt}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-indigo-text">
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WritingIndex;
