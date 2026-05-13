import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "@/lib/blogs";

const ReadMyBlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            A few placeholder essays on product thinking, trade-offs, growth,
            and execution. You can replace the content later with your actual
            posts.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max items-stretch gap-6">
            {blogPosts.map((post, index) => (
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
                    <div
                      className={`h-44 w-full origin-center transition-transform duration-500 group-hover:scale-110 ${post.thumbnailClassName}`}
                    />
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
                      <p className="mt-3 overflow-hidden text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                        {post.excerpt}
                      </p>
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
      </div>
    </section>
  );
};

export default ReadMyBlog;
