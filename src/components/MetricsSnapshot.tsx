import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import MetricsBackdrop from "@/components/illustrations/MetricsBackdrop";
import { useCountUp } from "@/hooks/useCountUp";

const metrics = [
  {
    value: "40L → ₹2Cr",
    label: "monthly sales",
    sublabel: "Placement Guarantee Courses",
    href: "/case-studies/placement-guarantee-courses",
  },
  {
    value: "2% → 15%",
    label: "signup conversion",
    sublabel: "Growth Funnel Overhaul",
    href: "/case-studies/growth-funnel-overhaul",
  },
  {
    value: "25% → 44%",
    label: "course completion",
    sublabel: "Learning Experience",
    href: "/case-studies/rebuilding-the-learning-experience",
  },
  {
    value: "5",
    label: "products launched end-to-end",
    sublabel: "See all case studies",
    href: "/case-studies",
  },
];

const MetricsSnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const productsLaunched = useCountUp(5, isInView);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 md:px-12 lg:px-24 py-10 md:py-14 bg-navy text-navy-foreground"
    >
      <MetricsBackdrop />
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-medium text-navy-foreground/60 tracking-wide uppercase">
            Impact at a Glance
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
            >
              <Link
                to={metric.href}
                className="block text-center group transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <div className="text-2xl md:text-3xl font-bold font-heading text-teal-vivid">
                  {metric.value === "5" ? productsLaunched : metric.value}
                </div>
                <div className="text-sm text-navy-foreground/70 mt-1">{metric.label}</div>
                <div className="text-xs text-navy-foreground/50 mt-0.5">{metric.sublabel}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSnapshot;
