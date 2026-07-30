import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              The Person Behind the Work
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-[68ch]">
              <p>
                I'm a product manager who's spent years in rooms where the data is messy,
                the constraints are real, and someone has to make the call anyway.
                I've worked across early-stage startups and scaled platforms - and the problems
                that interest me most are the ones where there's no clean answer.
              </p>
              <p>
                I believe good product thinking is mostly about intellectual honesty:
                asking the right questions, being willing to say no when the numbers don't support it,
                and not confusing activity with progress. That's the same standard I bring
                when I work with other teams.
              </p>
              <p>
                Most of that thinking has been shaped at Internshala, where I've spent six years
                taking product lines through PMF, growth, decline, and rebuild.
              </p>
              <p>
                When I'm not in that mode, I'm probably reading about decision-making,
                exploring new cities, or trying to get better at something I'm bad at
                (currently: cooking and pickleball).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-6 md:mx-8"
          >
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src="/website-image-new.webp"
                alt="About me"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo/10 rounded-lg -z-10" />

            {/* Annotation layer — small tags framing the portrait */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -top-4 -left-5 -rotate-3 rounded-full bg-teal-light text-teal-text text-xs font-medium px-3 py-1 shadow-sm"
            >
              Product
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute top-10 -right-6 rotate-2 rounded-full bg-indigo-light text-indigo-text text-xs font-medium px-3 py-1 shadow-sm"
            >
              Growth
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="absolute -bottom-3 left-10 rotate-2 rounded-full bg-teal-light text-teal-text text-xs font-medium px-3 py-1 shadow-sm"
            >
              Data
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute bottom-14 -right-5 -rotate-2 rounded-full bg-indigo-light text-indigo-text text-xs font-medium px-3 py-1 shadow-sm"
            >
              AI
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute -top-6 right-8 rounded-lg bg-card border border-border shadow-sm px-3 py-2"
            >
              <div className="text-lg font-bold font-heading text-indigo leading-none">6+</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">yrs in product</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
