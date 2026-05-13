export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  thumbnailClassName: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-signal-in-noisy-product-metrics",
    title: "Finding Signal in Noisy Product Metrics",
    category: "Product Analytics",
    readTime: "6 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about separating vanity trends from the metrics that actually change product decisions.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(35_92%_50%)_0%,hsl(18_92%_62%)_45%,hsl(0_0%_10%)_100%)]",
    content: [
      {
        heading: "Why this matters",
        paragraphs: [
          "This is placeholder content for a future article. The eventual piece can talk about how product teams often overreact to short-term spikes and dips without understanding the underlying user behavior.",
          "A strong version of this article could explain how to create a small set of decision-grade metrics, how to align them with business outcomes, and how to avoid drowning stakeholders in dashboards.",
        ],
      },
      {
        heading: "What the article could cover",
        paragraphs: [
          "You might later add examples of leading versus lagging indicators, metric hierarchy design, and simple checks that help teams distinguish noise from trend.",
          "You could also include a short framework for deciding when a number is interesting enough to act on, versus when it simply deserves monitoring.",
        ],
      },
    ],
  },
  {
    slug: "building-roadmaps-with-real-tradeoffs",
    title: "Building Roadmaps With Real Trade-offs",
    category: "Strategy",
    readTime: "5 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about making roadmap choices explicit instead of pretending every priority can be delivered at once.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(0_0%_10%)_0%,hsl(0_0%_24%)_40%,hsl(35_92%_50%)_100%)]",
    content: [
      {
        heading: "The core idea",
        paragraphs: [
          "This placeholder article can eventually explain that the most useful roadmap conversations are not about listing work, but about exposing the bets a team is willing to make.",
          "It can emphasize that every roadmap implicitly says no to something, and that good product leadership makes those trade-offs visible early.",
        ],
      },
      {
        heading: "Potential angle",
        paragraphs: [
          "You may want to add a repeatable method for ranking initiatives across expected impact, confidence, cost, and timing pressure.",
          "A practical ending could include a short template for stakeholder reviews so discussions stay grounded in outcomes instead of requests.",
        ],
      },
    ],
  },
  {
    slug: "when-user-feedback-conflicts-with-data",
    title: "When User Feedback Conflicts With Data",
    category: "Research",
    readTime: "7 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about what to do when interviews tell one story and product analytics appear to say another.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(197_79%_45%)_0%,hsl(210_40%_14%)_55%,hsl(35_92%_50%)_100%)]",
    content: [
      {
        heading: "Framing the tension",
        paragraphs: [
          "This placeholder content can become an article about reconciling qualitative and quantitative signals without overvaluing either one.",
          "You could later describe why interviews capture intent and context, while analytics better capture scale and actual behavior.",
        ],
      },
      {
        heading: "What readers might learn",
        paragraphs: [
          "A strong final draft might show how to turn conflicting evidence into sharper hypotheses, follow-up research, and better instrumentation.",
          "It could also include examples of common failure modes, such as trusting a loud minority or trusting a dashboard that is missing important events.",
        ],
      },
    ],
  },
  {
    slug: "designing-mvps-that-teams-can-actually-ship",
    title: "Designing MVPs That Teams Can Actually Ship",
    category: "Execution",
    readTime: "6 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about cutting scope in a way that preserves learning, not just delivery speed.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(142_71%_45%)_0%,hsl(160_84%_24%)_45%,hsl(0_0%_10%)_100%)]",
    content: [
      {
        heading: "The problem with fake MVPs",
        paragraphs: [
          "This placeholder article can later explain that many MVPs are only smaller versions of the full idea, rather than instruments for learning.",
          "That distinction matters because shipping quickly is not helpful if the release cannot validate the core assumption behind the product bet.",
        ],
      },
      {
        heading: "Possible structure",
        paragraphs: [
          "You may want to add a section on identifying the minimum experience required to test value, usability, and willingness to return.",
          "Another useful section could show how to write success criteria before development starts so the team knows what it is trying to learn.",
        ],
      },
    ],
  },
  {
    slug: "retention-work-before-growth-spend",
    title: "Retention Work Before Growth Spend",
    category: "Growth",
    readTime: "4 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about why weak retention can make acquisition look better than the product experience really is.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(271_81%_56%)_0%,hsl(230_65%_18%)_50%,hsl(35_92%_50%)_100%)]",
    content: [
      {
        heading: "The thesis",
        paragraphs: [
          "This placeholder entry can become a short article about the cost of accelerating top-of-funnel growth before users consistently find value.",
          "It can later describe how churn masks product weaknesses and how paid acquisition sometimes delays the hard decisions teams should make earlier.",
        ],
      },
      {
        heading: "What to expand later",
        paragraphs: [
          "You could add examples of retention checkpoints, cohort reviews, and product improvements that tend to outperform extra marketing spend.",
          "A practical conclusion might help readers decide when growth investment is amplifying a strong product and when it is only amplifying leakage.",
        ],
      },
    ],
  },
  {
    slug: "making-decisions-with-incomplete-information",
    title: "Making Decisions With Incomplete Information",
    category: "Leadership",
    readTime: "8 min read",
    publishedAt: "May 2026",
    excerpt:
      "A placeholder article about deciding responsibly even when the team lacks perfect clarity, perfect data, or perfect timing.",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,hsl(12_76%_58%)_0%,hsl(352_77%_40%)_40%,hsl(0_0%_10%)_100%)]",
    content: [
      {
        heading: "The reality",
        paragraphs: [
          "This placeholder article can eventually focus on the fact that most meaningful product decisions happen under uncertainty, not after every open question is resolved.",
          "You could later describe how experienced teams define what must be known now, what can be learned later, and what risks deserve active mitigation.",
        ],
      },
      {
        heading: "A future framework",
        paragraphs: [
          "You may want to add a simple framework covering decision reversibility, confidence level, downside containment, and ownership of follow-up learning.",
          "That would make this post especially useful as a practical guide rather than only a reflection piece.",
        ],
      },
    ],
  },
];

export const blogPostBySlug = new Map(blogPosts.map((post) => [post.slug, post]));
