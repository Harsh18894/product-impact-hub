import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

import ServiceIllustration, {
  type ServiceIllustrationVariant,
} from "@/components/illustrations/ServiceIllustration";

const areas: { illustration: ServiceIllustrationVariant; title: string; description: string }[] = [
  {
    illustration: "activation",
    title: "Activation & Retention",
    description: "Driving activation and retention by reducing friction and shaping user behavior at critical moments",
  },
  {
    illustration: "growth-metrics",
    title: "Metrics-Driven Growth",
    description: "Defining and operationalizing metrics that guide decisions—not just dashboards",
  },
  {
    illustration: "zero-to-one",
    title: "0→1 Products",
    description: "Taking 0→1 products from ambiguous ideas to shipped, validated solutions",
  },
];

const WorkWithMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="work-with-me" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
            Consulting
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Working Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[68ch]">
            If you're a founder or product leader dealing with a prioritisation problem,
            a roadmap that's grown too political, or a team that's shipping without a
            clear north star - that's exactly the kind of problem I enjoy untangling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="h-full min-h-[330px] p-6 bg-card border border-border rounded-lg hover:border-indigo/50 transition-all duration-300 group"
            >
              <div className="flex h-full flex-col items-center text-center">
                <div className="flex h-[120px] w-full items-center justify-center mb-5">
                  <ServiceIllustration
                    variant={area.illustration}
                    className="h-[96px] w-auto max-w-[180px] group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex flex-1 flex-col items-center justify-start">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-[30ch]">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://calendly.com/harsh1808/product-discussion"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo text-indigo-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4" />
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMe;
