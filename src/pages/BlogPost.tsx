import { ArrowLeft } from "lucide-react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { blogPostBySlug } from "@/lib/blogs";

type BlogPostLocationState = {
  fromBlogSection?: boolean;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as BlogPostLocationState | null;

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = blogPostBySlug.get(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const handleBackClick = () => {
    if (locationState?.fromBlogSection && window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/#blog");
  };

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
            <div className={`h-64 w-full md:h-80 ${post.thumbnailClassName}`} />

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
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
