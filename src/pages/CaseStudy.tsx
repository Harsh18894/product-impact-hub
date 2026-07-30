import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CaseStudyIllustration from "@/components/illustrations/CaseStudyIllustration";
import { caseStudies, caseStudyBySlug } from "@/lib/caseStudies";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyBySlug.get(slug) : undefined;

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  const index = caseStudies.findIndex((s) => s.slug === study.slug);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const sections: { heading: string; body: string | string[]; ordered?: boolean }[] = [
    { heading: "Context", body: study.context },
    { heading: "Problem", body: study.problem },
    { heading: "Why This Was Hard", body: study.whyHard },
    { heading: "My Approach", body: study.whatIDid, ordered: true },
    { heading: "The Solution", body: study.solution },
    { heading: "Impact", body: study.impact },
    { heading: "What I'd Do Differently", body: study.learnings },
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${study.title} | Harsh Deep Singh`}
        description={study.preview}
        path={`/case-studies/${study.slug}`}
        image={`/og/${study.slug}.png`}
      />
      <article className="section-padding">
        <div className="container-narrow">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to case studies
          </Link>

          <div className="mt-8 grid md:grid-cols-[1fr_240px] gap-8 items-stretch">
            <div>
              <span
                className="block text-sm font-medium tracking-wide uppercase"
                style={{ color: study.theme.colors[0] }}
              >
                {study.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 max-w-3xl text-balance">
                {study.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl">{study.preview}</p>

              <div className="flex flex-wrap gap-3 mt-8">
                {study.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="text-sm font-medium text-foreground bg-secondary px-4 py-2 rounded-md"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block overflow-hidden rounded-lg min-h-[220px]">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${study.theme.colors[0]} 12%, transparent), color-mix(in srgb, ${study.theme.colors[1]} 6%, transparent))`,
                }}
              />
              <CaseStudyIllustration
                variant={study.theme.illustration}
                colors={study.theme.colors}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="mt-12 space-y-10 max-w-[68ch]">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  {section.heading}
                </h2>
                {typeof section.body === "string" ? (
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                ) : section.ordered ? (
                  <ol className="space-y-2">
                    {section.body.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-xs font-medium text-indigo-text mt-1">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-2">
                    {section.body.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border grid sm:grid-cols-2 gap-4">
            <Link
              to={`/case-studies/${prev.slug}`}
              className="group p-5 border border-border rounded-lg hover:border-indigo/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Previous</span>
              <div className="mt-1 flex items-center gap-2 font-medium text-foreground">
                <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
                {prev.title}
              </div>
            </Link>
            <Link
              to={`/case-studies/${next.slug}`}
              className="group p-5 border border-border rounded-lg hover:border-indigo/50 transition-colors sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Next</span>
              <div className="mt-1 flex items-center gap-2 font-medium text-foreground sm:justify-end">
                {next.title}
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-indigo text-indigo-foreground rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-medium">Have a similar problem you're working through?</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-indigo-foreground text-indigo px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default CaseStudy;
