import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const decisions = [
  {
    decision: "Killed features early when data showed low impact",
    context: "Prevented >3 months of engineering spend by prioritizing evidence over sunk cost",
  },
  {
    decision: "Chose speed over perfection and owned the trade-offs",
    context: "Shipped MVP in 2 weeks and iterated based on real user feedback",
  },
  {
    decision: "Pushed back on roadmap decisions to protect core metrics",
    context: "Said no to a high-visibility feature when data showed it would hurt retention",
  },
  {
    decision: "Prioritized operational scale before shipping new features",
    context: "Reduced operational costs ~40% before scaling acquisition",
  },
];

const HardDecisions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Real Trade-offs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Hard Product Decisions I've Made
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Product management isn't about always saying yes. It's about making hard calls and standing behind them.
          </p>
        </motion.div>

        <div className="space-y-4">
          {decisions.map((item, index) => (
            <motion.div
              key={item.decision}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-foreground font-medium mb-1">
                    {item.decision}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardDecisions;
