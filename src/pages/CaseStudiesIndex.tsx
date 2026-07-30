import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import SEO from "@/components/SEO";
import { caseStudies } from "@/lib/caseStudies";

const CaseStudiesIndex = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Case Studies | Harsh Deep Singh"
        description="Real product problems I've solved at Internshala, the thinking behind the decisions, and the outcomes achieved — PMF, growth funnels, retention, and monetization."
        path="/case-studies"
        image="/og/case-studies.png"
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
              Selected Work
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Case Studies
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Real problems I've solved, the thinking behind decisions, and the outcomes achieved.
            </p>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudiesIndex;
