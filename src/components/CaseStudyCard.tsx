import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import CaseStudyIllustration from "@/components/illustrations/CaseStudyIllustration";
import type { CaseStudy } from "@/lib/caseStudies";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group flex flex-col md:flex-row overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-[color:var(--card-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ "--card-accent": study.theme.colors[0] } as React.CSSProperties}
    >
      <div className="flex-1 p-6 md:p-8">
        <span
          className="text-xs font-medium tracking-wide uppercase"
          style={{ color: study.theme.colors[0] }}
        >
          {study.category}
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2">
          {study.title}
        </h3>
        <p className="text-muted-foreground mt-3 max-w-2xl">{study.preview}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {study.metrics.map((metric) => (
            <span
              key={metric}
              className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded"
            >
              {metric}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:translate-x-0.5 transition-transform">
          Read more
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      <div className="relative w-full md:w-[260px] min-h-[180px] shrink-0 overflow-hidden">
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
    </Link>
  );
};

export default CaseStudyCard;
