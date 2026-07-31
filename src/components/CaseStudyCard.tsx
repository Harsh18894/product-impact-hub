import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import CaseStudyIllustration from "@/components/illustrations/CaseStudyIllustration";
import type { CaseStudy } from "@/lib/caseStudies";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group grid gap-6 rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--card-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[1fr_280px] md:p-6"
      style={{ "--card-accent": study.theme.colors[0] } as React.CSSProperties}
    >
      <div className="flex min-h-[220px] flex-col">
        <span
          className="text-xs font-medium tracking-wide uppercase"
          style={{ color: study.theme.colors[0] }}
        >
          {study.category}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
          {study.title}
        </h3>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          {study.preview}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded bg-secondary px-3 py-1 text-sm font-medium text-foreground"
            >
              {metric}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-muted-foreground transition-transform group-hover:translate-x-0.5">
          Read more
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div
        className="flex min-h-[190px] items-center justify-center overflow-hidden rounded-md p-5 md:min-h-full"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${study.theme.colors[0]} 12%, transparent), color-mix(in srgb, ${study.theme.colors[1]} 6%, transparent))`,
        }}
      >
        <CaseStudyIllustration
          variant={study.theme.illustration}
          colors={study.theme.colors}
          className="h-full max-h-[190px] w-full transition-transform duration-500 group-hover:scale-[1.03] md:max-h-[220px]"
        />
      </div>
    </Link>
  );
};

export default CaseStudyCard;