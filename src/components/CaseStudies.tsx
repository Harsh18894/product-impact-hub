import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="case-studies" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Case Studies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Real problems I've solved, the thinking behind decisions, and the
            outcomes achieved.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
