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
                If you're a founder or product leader dealing with a prioritisation problem,
                a roadmap that's grown too political, or a team that's shipping without a
                clear north star - that's exactly the kind of problem I enjoy untangling.
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
