import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  const credibilityPoints = [
    "8+ years in product & tech",
    "Owned end-to-end product metrics",
    "Built and scaled user-facing platforms",
  ];

  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">
            Senior Product Manager | Growth & Platforms
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
            Building outcome-driven products that{" "}
            <span className="text-accent">deliver measurable impact</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            I work on complex user and business problems, turning ambiguity into
            shipped products and measurable impact.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
            {credibilityPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {point}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              View Case Studies
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/13S5s41SCXeeYISutStLCtY0zg9jtRmE-/view?usp=sharing" target="_blank"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
