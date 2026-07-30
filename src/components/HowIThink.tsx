import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import PhilosophyIllustration, {
  type PhilosophyIllustrationVariant,
} from "@/components/illustrations/PhilosophyIllustration";

const principles: { title: string; body: string; illustration: PhilosophyIllustrationVariant }[] = [
  {
    title: "Reframe before you optimise.",
    body: "JOS wasn't underperforming because the funnel was broken — it was the wrong product. The data said buyers wanted the job outcome, not the training, well before the framing caught up. Reframing it as Placement Guarantee Courses is what took monthly sales from ₹30–40 lakh to ₹1–2 crore.",
    illustration: "reframe",
  },
  {
    title: "Front-load the research you think you don't have time for.",
    body: "Investor time pressure pushed against a research-first path, and roughly a year was lost getting to the right offering. Two months of interviews up front would have landed a placement-specific product in the first iteration.",
    illustration: "research",
  },
  {
    title: "Filter the wrong users in, or the product dies.",
    body: "I pushed for intent filtering at PGC admission and was overruled. An audience that enrolled for the guarantee alone — expecting outcomes without effort — degraded quality until the product was shut down. I'd rather cut graduates from 400–500 to 200–250 on purpose, which I later did with competency guardrails, than grow a number that's quietly killing the brand.",
    illustration: "filter",
  },
];

const HowIThink = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-indigo-text tracking-wide uppercase">
            Product Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            How I Think
          </h2>
        </motion.div>

        <div className="space-y-10">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="grid md:grid-cols-[1fr_auto] gap-6 items-center max-w-4xl"
            >
              <div className="max-w-[68ch]">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  &ldquo;{principle.title}&rdquo;
                </h3>
                <p className="text-muted-foreground leading-relaxed">{principle.body}</p>
              </div>
              <PhilosophyIllustration
                variant={principle.illustration}
                className="hidden md:block w-56 h-auto shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
