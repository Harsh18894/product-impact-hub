import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowIThink = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const philosophy = [
    "Outcomes over output",
    "Users and business, not one vs the other",
    "Speed with accountability",
  ];

  const approach = [
    "Clarify the real problem",
    "Identify the metric that matters",
    "Understand constraints",
    "Ship the smallest meaningful solution",
    "Measure, iterate, or kill",
  ];

  const knownFor = [
    "Navigating ambiguity",
    "Aligning cross-functional teams",
    "Making data-backed decisions",
  ];

  return (
    <section ref={ref} className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-wide uppercase">
            Product Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            How I Think
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Product Philosophy
            </h3>
            <ul className="space-y-3">
              {philosophy.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">
              How I Approach Problems
            </h3>
            <ol className="space-y-3">
              {approach.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-xs font-medium text-accent mt-0.5 shrink-0 w-4">
                    {index + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">
              What I'm Known For
            </h3>
            <ul className="space-y-3">
              {knownFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
