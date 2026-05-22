import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "@/lib/blogs";
import { fetchBlogPosts, isSanityBlogPost, type BlogListPost } from "@/lib/sanity";

const ReadMyBlog = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<BlogListPost[]>(blogPosts);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    setScrollProgress(maxScroll > 0 ? scrollContainer.scrollLeft / maxScroll : 0);
  }, []);

  const scrollBlogs = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    scrollContainer.scrollBy({
      left: direction === "right" ? 344 : -344,
      behavior: "smooth",
    });
  };

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

  useEffect(() => {
    updateScrollProgress();
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [posts.length, updateScrollProgress]);

  return (
    <section ref={ref} id="blog" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-accent tracking-wide uppercase">
            Writing
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Read my blog
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Notes on product thinking, trade-offs, growth, and execution.
          </p>
        </motion.div>

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollProgress}
          className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max items-stretch gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="w-[280px] shrink-0 md:w-[320px]"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  state={{ fromBlogSection: true }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
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
                      <div
                        className={`h-44 w-full origin-center transition-transform duration-500 group-hover:scale-110 ${post.thumbnailClassName}`}
                      />
                    )}
                  </div>

                  <div className="flex h-full flex-col space-y-4 p-5">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>

                    </div>

                    <div className="flex items-center justify-end pt-2 text-sm font-medium text-foreground">
                      <span className="inline-flex items-center gap-1 text-accent">
                        Read article
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {posts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-3 flex items-center justify-center gap-8"
            aria-label="Blog scroll controls"
          >
            <button
              type="button"
              onClick={() => scrollBlogs("left")}
              className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:cursor-default disabled:opacity-35"
              disabled={scrollProgress <= 0.02}
              aria-label="Scroll blogs left"
            >
              <ChevronLeft className="h-10 w-10 stroke-[1.75]" />
            </button>

            <span
              className="relative h-2 w-44 overflow-hidden rounded-full bg-secondary"
              aria-hidden="true"
            >
              <span
                className="absolute left-0 top-0 h-full w-14 rounded-full bg-accent transition-transform duration-200"
                style={{
                  transform: `translateX(${scrollProgress * 7.5}rem)`,
                }}
              />
            </span>

            <button
              type="button"
              onClick={() => scrollBlogs("right")}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-accent disabled:cursor-default disabled:opacity-35"
              disabled={scrollProgress >= 0.98}
              aria-label="Scroll blogs right"
            >
              <ChevronRight className="h-10 w-10 stroke-[1.75]" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReadMyBlog;
