import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const credibilityPoints = [
    "9+ years in tech, 6+ in product",
    "Owned end-to-end product metrics",
    "Built and scaled user-facing platforms",
  ];

  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-wide grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">
            Product Manager - Monetization &amp; 0→1
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
            I find what the data was <span className="text-indigo">already telling us</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-[60ch]">
            Senior PM at Internshala. I took a high-ticket offering that had already
            failed once and iterated it into a placement-guarantee product that grew
            monthly sales from ₹30-40 lakh to ₹1-2 crore.
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
                <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
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
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-indigo text-indigo-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/#writing"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <BookOpen className="w-4 h-4" />
              Read my writing
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <img
            src="/hero-illustration.svg"
            alt="Person at a laptop; scattered data signals converge into a dashboard and resolve into user, revenue, and product outcomes"
            className="w-full h-auto"
            width={1240}
            height={848}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
