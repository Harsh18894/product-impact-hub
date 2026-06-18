import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  preview: string;
  metrics: string[];
  context: string;
  problem: string;
  whyHard: string;
  whatIDid: string[];
  solution: string;
  impact: string[];
  learnings: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title:
      "Finding Product-Market Fit: From Job-Oriented Specializations to Placement Guarantee Courses",
    category: "Product-Market Fit / 0-to-1 Product Discovery",
    preview:
      "Iterating a struggling high-ticket course into a placement-guaranteed product that found PMF and scaled past 1,000 payments a month.",
    metrics: ["60 → 1,000+ payments/mo", "0.01% → 0.2% enrollment", "Sales team 2 → 50"],
    context:
      "Internshala ran a portfolio of Short Term Trainings (STTs) generating ₹1-1.5 crore/month. To hit the company's ₹30 crore annual target, leadership needed a second, higher-ticket offering that paired training with a job outcome and rode the STT momentum. I owned discovery and iteration of that offering, from first launch to the version that finally scaled.",
    problem:
      "We needed a product that could grow revenue well beyond STTs, and we needed it fast, but we did not yet know what learners would pay a premium for. A prior bundled offering (Specializations) had already failed badly, so risk appetite was low even as pressure to ship stayed high.",
    whyHard:
      "A/B/C testing was operationally heavy: different funnel touchpoints needed different engineering and data teams to instrument, creating internal resistance to moving fast. We were also carrying the cost of a prior failed bet, so every new iteration was scrutinised. And investor-driven time pressure pushed directly against the slower, research-first path that would have de-risked the product.",
    whatIDid: [
      "Treated the offering as a sequence of experiments, reading data from each before reshaping the product",
      "Launched Job-Oriented Specializations (JOS): bundled STTs + live classes (BigMarker) + placement assistance, fully product-led",
      "Read the underperformance signals: enrollments were driven by placement, buyers were pre-final/final year undergrads, and the 12-month length deterred commitment",
      "Reframed around the outcome with shorter 4-6 month Specializations with Placement Guarantee in Digital Marketing, Web Dev, Data Science, HRM (highest user and job density in our DB)",
      "Diagnosed weak organic discovery and poor SEO, then repositioned the offering as Placement Guarantee Courses (PGC) to match how people actually searched",
    ],
    solution:
      "The PGC framing was the version that clicked: within two months it pulled 300 payments/month, enrollment rose to 0.2%, and organic traffic moved from 1% to 5% and kept climbing. That scalability justified building a dedicated sales engine, which grew from 2 to 50 people and pushed the product past 1,000 payments/month.",
    impact: [
      "Grew payments from 60-80/month (JOS) to over 1,000/month (PGC)",
      "Improved enrollment rate from 0.01% to 0.09% to 0.2%",
      "Grew organic traffic from 1% to 5% and rising, cutting dependence on internal redirection",
      "Established PMF strong enough to justify scaling a sales team from 2 to 50 people",
    ],
    learnings: [
      "Front-load user research: roughly a year was lost reaching a good offering. Two months of interviews and market scoping up front likely would have landed a placement-specific product in the first iteration",
      "Ship the obvious basics from day one: missing Google login, automatic resume use (~70% of users already had a resume on Internshala), and dummy discounts cost at least two months of avoidable experimentation",
      "The buyers wanted the job outcome, not the training, and the data made that clear long before the framing caught up",
    ],
  },
  {
    id: 2,
    title: "The Growth Funnel Overhaul",
    category: "Conversion Optimization / Funnel & Growth",
    preview:
      "Rebuilding the Specialization funnel end to end, from signup page to pricing to sales handoff, to turn near-zero conversion into a paying funnel.",
    metrics: ["Signup 2% → 15%", "Application 10% → 60%", "First call 1 day → 15 min"],
    context:
      "As PM-II I took full ownership of Internshala's Specialization line. The offering had real traffic but a leaky funnel: visitors landed, but very few signed up, fewer applied, and almost none paid. My job was to find and fix the friction at every stage, from the landing experience through pricing to the sales handoff.",
    problem:
      "Conversion was collapsing at each step. The signup page did not sell the outcome, the signup and application forms were long, the highest-intent traffic channels were not being prioritised, pricing was static, and once a user did sign up, sales took up to a day to reach them, by which point intent had cooled.",
    whyHard:
      "The hardest part was not the analysis, it was aligning the business and leadership team on promotional pricing. They believed discounts would do nothing because users already knew the offering, and worried that discounting would devalue it long term. Getting everyone in one room and showing that slash pricing is standard across marketplaces, and that the anchor (original) price stays intact, was what eventually unblocked it. They were skeptical at first, but slash pricing is now used at every touchpoint, arguably over-exploited.",
    whatIDid: [
      "Redesigned the signup page: moved testimonials and reviews up, added a 'highest salary offered' metric as social proof, and shortened the signup and application forms",
      "Ran an RCA on unique-page-view channels to find which sources redirected best, then concentrated effort there",
      "Added native ads and banners on key high-traffic pages to feed the funnel",
      "Ran promotional pricing experiments: flat ₹30,000 (0.05% enrollment) → slash price ₹35,000 cut to ₹30,000 (0.1%) → ₹35,999 cut to ₹29,999 with a 'save ₹6,000' callout (0.2%)",
      "Integrated LeadSquared with signups and applications so sales could act on leads almost immediately",
    ],
    solution:
      "A reworked funnel where the landing page sold the outcome, forms were short, the best channels were prioritised, and slash pricing anchored value while signalling a deal. LeadSquared closed the loop by routing fresh signups and applications straight to sales, collapsing the response window from a day to minutes.",
    impact: [
      "Signup rate improved from 2% to 15%",
      "Application rate improved from 10% to 60%",
      "Payment rate improved from 0.05% to 2%",
      "Promotional pricing alone lifted enrollment rate from 0.05% to 0.2% (4x)",
      "Unique page views grew ~50%",
      "Time-to-first-call dropped from 1 day to 15 minutes",
    ],
    learnings: [
      "I would test multiple slash-pricing and message variants together (save 10%, 'offer valid till X date', deeper discounts) rather than sequentially, then scale the most effective version",
      "Running pricing experiments in parallel would have reached the winning model faster instead of one increment at a time",
      "Pricing perception is a cross-functional sell: the analysis was easy, getting leadership aligned was the real unlock",
    ],
  },
  {
    id: 3,
    title: "Rebuilding the Learning Experience",
    category: "Product Design / Engagement & Retention",
    preview:
      "Redesigning the Placement Guarantee Course experience so learners could navigate three parallel tracks from a single, clear view.",
    metrics: ["First-module adoption 70% → 99%", "Completion 25% → 44%", "Graduation 18% → 30%"],
    context:
      "As SPM I owned the Placement Guarantee Course (PGC) learning experience. The program had grown but the experience had not kept up: learners struggled to understand where they were and what to do next, which dragged on adoption, completion, and graduation. The revamp was my idea end to end, worked solo as the PM while collaborating closely with design and engineering on execution.",
    problem:
      "PGC runs three tracks in parallel, each with its own rhythm. Learning (pre-recorded content, live sessions, assessments, projects, vivas), Placement (Internshala profile, ATS-friendly resume, video resume, aptitude training, placement sessions), and Live Sessions (part of both, but scheduled on the instructor's calendar rather than the learner's pace, across 15-20 different session types). Learners could not easily tell which track they were on, what was due, or which session was coming next, so sessions were wasted and progress stalled.",
    whyHard:
      "The hard part was making three parallel, differently-paced tracks legible in one place. Self-paced learning had to coexist with fixed-schedule live sessions, learners had to hit checkpoints so sessions were not wasted, and critical signals (upcoming deadlines, requested resubmissions, scheduled viva timelines) all had to surface at the right moment. Fitting all of that into a single view that a learner could actually understand at a glance was the core design challenge.",
    whatIDid: [
      "Designed a new dashboard as the single home for all three tracks",
      "Built a sequential learning journey so learners always knew the next step",
      "Created a new placement hub bringing profile, resume, aptitude, and placement sessions together",
      "Added marksheet and live-sessions pages so schedules and results were easy to find",
      "Built single-view progress trackers surfacing checkpoints, deadlines, resubmission requests, and viva timelines in one place",
      "Ran ideation and iteration with design and engineering while owning the product direction solo",
    ],
    solution:
      "A unified dashboard that made the three parallel tracks navigable from one screen: a sequential journey for self-paced learning, a dedicated placement hub, clear live-session scheduling across the 15-20 session types, and progress trackers that pushed the right deadline, resubmission, and viva signals to the surface so nothing fell through the cracks.",
    impact: [
      "First-module adoption rose from 70% to 99%",
      "Course completion rose from 25% to 44%",
      "Graduation rate rose from 18% to 30%",
    ],
    learnings: [
      "If AI coding and design tools had existed earlier, the design cycle could have shrunk by ~70%. Each low-fidelity wireframe iteration took 3-4 days to build and rebuild, and AI tooling would have collapsed that dramatically",
      "Design continuity matters: the design lead left and the replacement also left, which set us behind schedule. I covered as much as I could myself, but I would have insisted on a higher-motivation design partner for a project this central",
    ],
  },
  {
    id: 4,
    title: "Value Funnel Overhaul and Competency Guardrails",
    category: "Outcomes & Systems / Quality vs. Volume",
    preview:
      "Rebuilding the placement funnel from discovery to hire, then adding competency guardrails that deliberately shrank graduation to triple actual placements.",
    metrics: ["Placements 5-6 → 15-20/mo", "Applications 2-5 → 20-25/mo", "Interview clear rate 2-3/10 → 8/10"],
    context:
      "As SPM I owned the PGC placement outcome end to end. The course had a learning experience and graduates, but the thing that actually mattered, learners getting placed, was weak. I rebuilt the placement funnel across every stage (discovery, shortlisting, employer quality, interview performance) and then added competency guardrails to make sure the people reaching employers were genuinely placeable.",
    problem:
      "Two problems compounded. The placement funnel leaked at every stage: too few relevant jobs surfaced, shortlisting was low, fake employers polluted the pool, and interview performance was poor. And the program had been optimised for graduation numbers, which pushed incompetent learners into the placement funnel. Employers pushed back that PGC user quality was poor, and shortlisting rates dropped. It became clear the true outcome was placement, not graduation: even if only 10 people graduated, they had to be placeable.",
    whyHard:
      "The hard part was reversing the organisation's instinct. We had spent a long time driving graduation numbers up, so deliberately adding guardrails that would cut graduation was counterintuitive internally. The employer backlash on quality was what made the case undeniable: a smaller, stronger funnel that actually converted to jobs beat a large funnel of unplaceable graduates. Holding that line, accepting a lower graduation rate on purpose, was the real tension.",
    whatIDid: [
      "Discovery: improved job tagging with ops (structured and automated), refined PGC categories, added instant relevant-job notifications, a dedicated auto-redirect page, and an ops mechanism to post outsourced jobs",
      "Shortlisting: highlighted PGC users in the ATS, sent daily employer recommendation emails for a week, shared user performance sheets, and added AI hints and step-by-step guidance on problem statements",
      "Employer quality: identified invalid-email employers and NGOs mass-inviting users, added breaking criteria to remove NGOs, and blacklisted fake employers with ops (100+ removed)",
      "Interview performance: ran a market analysis, evaluated 50+ AI-interview solutions, and personally took 100+ interviews over 20 high-intensity days (12-14 hour days, 20-30 min each) before partnering with a startup at $0.9-1 per interview/user/month versus a $3-4 budget",
      "Competency guardrails: added mid-term vivas, doSelect coding assessments for technical programs, and mandatory AI mock interviews for communication, so only learners with real placement potential could progress",
    ],
    solution:
      "A placement funnel rebuilt stage by stage, fed only by learners who had cleared genuine competency checks. Better discovery surfaced more relevant jobs, ATS highlighting and employer emails lifted shortlisting, fake employers were purged, and an affordable AI-interview partner sharpened interview readiness. The guardrails (vivas, coding assessments, AI mock interviews) doubled as a motivation filter: only truly committed, capable learners advanced, while the rest dropped off.",
    impact: [
      "Monthly placements rose from 5-6 to 15-20",
      "Average monthly applications rose from 2-5 to 20-25",
      "Interview clear rate improved from 2-3 of 10 to 8 of 10",
      "Shortlisting/assignment submission rate improved from 10% to 20%",
      "Removed 100+ fake or invalid employers from the pool",
      "AI-interview adoption reached 40% (160 of 400 monthly graduates)",
      "Graduation rate intentionally fell from a peak of 32% to a capped ~26%, with completion rate unchanged",
    ],
    learnings: [
      "I would have focused on outcomes from the start. Once activation was fixed and learners were actually learning, competency evaluation should have been the immediate next priority rather than chasing graduation",
      "Projects and assignments should have been the original guardrails. AI interviews only came later with the AI boom, but rigorous evaluation of user competency should have been built in as soon as the learning experience existed",
    ],
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <section ref={ref} id="case-studies" className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Case Studies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Real problems I've solved, the thinking behind decisions, and the
              outcomes achieved.
            </p>
          </motion.div>

          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="group cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-medium text-accent tracking-wide uppercase">
                        {study.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 max-w-2xl">
                        {study.preview}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                        Read more
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-10 px-4"
          onClick={() => setSelectedStudy(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-xs font-medium text-accent tracking-wide uppercase">
                    {selectedStudy.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    {selectedStudy.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 hover:bg-secondary rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Context
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.context}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Why This Was Hard
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.whyHard}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    My Approach
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.whatIDid.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-xs font-medium text-accent mt-0.5">
                          {i + 1}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.impact.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    What I'd do Differently
                  </h3>
                  <ul className="space-y-2">
                    {selectedStudy.learnings.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CaseStudies;
