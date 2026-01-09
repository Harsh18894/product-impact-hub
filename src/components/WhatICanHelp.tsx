import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, TrendingUp, BarChart3, Cog, Lightbulb } from "lucide-react";

const areas = [
  {
    icon: Rocket,
    title: "Scaling Marketplace Products",
    description: "Scaling two-sided platforms by aligning supply, demand, and incentives to unlock sustainable growth",
  },
  {
    icon: TrendingUp,
    title: "Activation & Retention",
    description: "Driving activation and retention by reducing friction and shaping user behavior at critical moments",
  },
  {
    icon: BarChart3,
    title: "Metrics-Driven Growth",
    description: "Defining and operationalizing metrics that guide decisions—not just dashboards",
  },
  {
    icon: Cog,
    title: "Product + Ops Systems",
    description: "Designing product and operational systems that scale without breaking under complexity",
  },
  {
    icon: Lightbulb,
    title: "0→1 Products",
    description: "Taking 0→1 products from ambiguous ideas to shipped, validated solutions",
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
          <p className="text-muted-foreground mt-4 max-w-2xl">
            I focus on product problems where clarity is missing, stakes are high, and outcomes matter.
          </p>
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
