import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  preview: string;
  metrics: string[];
  context: string;
  problem: string;
  whyHard: string;
  whatIDid: string[];
  solution: string;
  impact: string[];
  learnings: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Improving User Activation in a Large-Scale Platform",
    category: "Growth & Activation",
    preview:
      "Redesigned the onboarding experience to increase activation rates by identifying friction points and implementing targeted interventions.",
    metrics: ["32% → 58% activation", "40% faster time-to-value", "12 weeks"],
    context:
      "A B2B SaaS platform with 50k+ users was experiencing significant drop-off during the first 7 days. Only 32% of new signups became active users.",
    problem:
      "Users were signing up but not reaching the 'aha moment' that would drive retention. The existing onboarding was generic and didn't address different user segments.",
    whyHard:
      "Multiple stakeholders had different opinions on what 'activation' meant. Limited engineering resources meant we couldn't rebuild from scratch. Data was fragmented across systems.",
    whatIDid: [
      "Defined a clear activation metric tied to 30-day retention",
      "Mapped the user journey and identified 3 key drop-off points",
      "Ran user interviews to understand blockers",
      "Prioritized interventions by impact/effort",
      "Designed and shipped a segmented onboarding flow",
    ],
    solution:
      "Implemented a role-based onboarding experience with contextual guidance, reduced steps from 8 to 4, and added progress indicators.",
    impact: [
      "Increased activation from 32% to 58%",
      "Reduced time-to-first-value by 40%",
      "Improved 30-day retention by 22%",
    ],
    learnings: [
      "Defining the metric upfront aligned the entire team",
      "User interviews revealed blockers that data alone didn't show",
      "Small, targeted changes outperformed the 'big redesign' approach",
    ],
  },
  {
    id: 2,
    title: "Driving Retention Through Behavioral Nudges",
    category: "Retention & Engagement",
    preview:
      "Built a notification system that increased weekly active users by 28% through personalized, behavior-triggered communications.",
    metrics: ["28% WAU increase", "3x engagement rate", "8 weeks"],
    context:
      "A consumer app with strong acquisition was losing users after the first month. The notification system was generic and had low engagement.",
    problem:
      "Users were churning after initial excitement wore off. Push notification open rates were below 2%, and email engagement was declining.",
    whyHard:
      "Balance between engagement and user annoyance was delicate. No existing infrastructure for behavior-based triggers. Privacy concerns around tracking.",
    whatIDid: [
      "Analyzed user cohorts to identify retention patterns",
      "Identified 5 key behaviors that predicted long-term retention",
      "Designed a trigger-based notification system",
      "A/B tested messaging, timing, and frequency",
      "Built feedback loops for continuous optimization",
    ],
    solution:
      "Launched a smart notification system with personalized triggers based on user behavior patterns, with easy opt-out controls.",
    impact: [
      "Weekly active users increased by 28%",
      "Push notification engagement 3x higher",
      "Churn reduced by 15% in target cohort",
    ],
    learnings: [
      "Timing matters more than content for notifications",
      "Giving users control increased trust and engagement",
      "Start small, measure, then scale what works",
    ],
  },
  {
    id: 3,
    title: "Building a Metrics-Driven Workflow for Operations",
    category: "Operations & Efficiency",
    preview:
      "Created an internal tool that reduced manual operations work by 60% and improved data accuracy across the organization.",
    metrics: ["60% time saved", "95% accuracy", "16 weeks"],
    context:
      "Operations team was spending 20+ hours weekly on manual data entry and reconciliation. Errors were causing downstream issues.",
    problem:
      "Manual processes were unscalable and error-prone. Multiple spreadsheets with no single source of truth. Team was burning out.",
    whyHard:
      "Legacy systems couldn't be replaced quickly. Ops team was skeptical of 'yet another tool'. Needed to work alongside existing workflows.",
    whatIDid: [
      "Shadowed ops team to understand pain points",
      "Mapped all data flows and identified automation opportunities",
      "Designed MVP focused on highest-impact workflow",
      "Built iteratively with continuous ops team feedback",
      "Created dashboards for visibility and accountability",
    ],
    solution:
      "Shipped an internal tool that automated data sync, provided real-time dashboards, and integrated with existing systems.",
    impact: [
      "Reduced manual work by 60%",
      "Improved data accuracy to 95%",
      "Freed team to focus on strategic work",
    ],
    learnings: [
      "Building with users, not for them, drives adoption",
      "Internal tools deserve the same product rigor as external",
      "Quick wins build trust for bigger changes",
    ],
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <section ref={ref} id="case-studies" className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
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
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="group cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-medium text-accent tracking-wide uppercase">
                        {study.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 max-w-2xl">
                        {study.preview}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                        Read more
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-10 px-4"
          onClick={() => setSelectedStudy(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-xs font-medium text-accent tracking-wide uppercase">
                    {selectedStudy.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    {selectedStudy.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 hover:bg-secondary rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Context
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.context}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Why This Was Hard
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.whyHard}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    What I Did
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.whatIDid.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-xs font-medium text-accent mt-0.5">
                          {i + 1}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Solution
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.impact.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Learnings
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.learnings.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CaseStudies;
