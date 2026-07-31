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
                className="group flex h-full min-h-[430px] flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="mb-5 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-md bg-muted/30">
                  {isSanityBlogPost(post) && post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <WritingThumbnail
                      category={post.category}
                      slug={post.slug}
                      title={post.title}
                      className="flex h-full w-full items-center justify-center p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>

                  <div className="mt-auto flex items-center justify-between pt-8 text-sm">
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
