import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";

import CareerNodeIcon, { type CareerNodeVariant } from "@/components/illustrations/CareerNodeIcon";
import { education, timelineFraming, timelineRoles } from "@/lib/careerTimeline";

// Chronological narrative order (oldest → newest → forward-looking),
// distinct from the data file's reverse-chronological array.
const stages: {
  variant: CareerNodeVariant;
  kind: "education" | "role" | "future";
}[] = [
    { variant: "education", kind: "education" },
    { variant: "builder", kind: "role" },
    { variant: "educator", kind: "role" },
    { variant: "product", kind: "role" },
    { variant: "future-ai", kind: "future" },
  ];

const rolesByRecency = [...timelineRoles].reverse(); // oldest → newest: Innovator, Educator, Senior PM

const CareerTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="career" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Where This Was Built
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">{timelineFraming}</p>
        </motion.div>

        <div className="relative pl-12">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          {stages.map((stage, index) => {
            const role = stage.kind === "role" ? rolesByRecency[["builder", "educator", "product"].indexOf(stage.variant)] : null;

            return (
              <motion.div
                key={stage.variant}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * (index + 1) }}
                className="relative mb-6 last:mb-0"
              >
                <span
                  className={`absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-card border ${stage.kind === "future" ? "border-dashed border-indigo/50" : "border-border"
                    }`}
                >
                  <CareerNodeIcon variant={stage.variant} className="w-4 h-4" />
                </span>

                {stage.kind === "education" && (
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-semibold text-foreground">
                        {education.degree} · {education.school}
                      </h3>
                      <span className="text-sm text-muted-foreground shrink-0">{education.years}</span>
                    </div>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{education.description}</p>
                  </div>
                )}

                {stage.kind === "role" && role && (
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-semibold text-foreground">
                        {role.title} · {role.org}
                      </h3>
                      <span className="text-sm text-muted-foreground shrink-0">
                        {role.start} - {role.end}
                      </span>
                    </div>
                    {(role.subtitle || role.location) && (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {[role.subtitle, role.location].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {role.progression && (
                      <p className="text-sm font-medium text-teal-text mt-2">{role.progression}</p>
                    )}
                    <p className="text-muted-foreground mt-2 leading-relaxed">{role.description}</p>
                  </div>
                )}

                {stage.kind === "future" && (
                  <div className="p-6 bg-indigo-light/60 border border-dashed border-indigo/40 rounded-lg">
                    <h3 className="font-semibold text-indigo-text">Future - AI Product Management</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Where this is headed: applying the same PMF-to-scale discipline to AI-native products.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 pl-12"
        >
          <a
            href="/harsh-deep-singh-resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <FileText className="w-4 h-4" />
            Download resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerTimeline;
