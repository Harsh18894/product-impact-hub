import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import WritingThumbnail from "@/components/illustrations/WritingThumbnail";
import { blogPosts } from "@/lib/blogs";
import { fetchBlogPosts, isSanityBlogPost, type BlogListPost } from "@/lib/sanity";

const ReadMyBlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const recentPosts = posts.slice(0, 3);

  return (
    <section ref={ref} id="writing" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
            Writing
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Writing
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Notes on product thinking, trade-offs, growth, and execution.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <Link
                to={`/blog/${post.slug}`}
                state={{ fromBlogSection: true }}
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

                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between pt-8 text-sm">
                    <span className="text-muted-foreground">{post.publishedAt}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-indigo-text">
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8"
        >
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadMyBlog;
