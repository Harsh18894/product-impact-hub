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
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              The Person Behind the Work
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a product manager who enjoys solving hard problems where data
                is messy, constraints are real, and outcomes matter. I've worked
                across teams and domains, from early-stage environments to scaled
                platforms.
              </p>
              <p>
                I believe great products come from clear thinking, not just good
                ideas. That means asking better questions, making decisions with
                incomplete information, and being honest about what's working
                and what isn't.
              </p>
              <p>
                When I'm not shipping products, I'm probably reading about
                decision-making, exploring new cities, or trying to improve at
                something I'm bad at (currently: cooking and pickleball).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
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
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
