import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, TrendingUp, BarChart3, Cog, Lightbulb } from "lucide-react";

const areas = [
  {
    icon: Rocket,
    title: "Scaling Marketplace Products",
    description: "Growing two-sided platforms with balanced supply and demand",
  },
  {
    icon: TrendingUp,
    title: "Activation & Retention",
    description: "Improving user onboarding and reducing churn through behavioral insights",
  },
  {
    icon: BarChart3,
    title: "Metrics-Driven Growth",
    description: "Building data culture and defining metrics that actually matter",
  },
  {
    icon: Cog,
    title: "Product + Ops Systems",
    description: "Designing scalable workflows for complex operational challenges",
  },
  {
    icon: Lightbulb,
    title: "0→1 Products",
    description: "Navigating ambiguity in early-stage product development",
  },
];

const WhatICanHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-wide uppercase">
            Areas of Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            What I Can Help With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <area.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatICanHelp;
