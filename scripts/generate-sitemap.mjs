// postbuild step: writes dist/sitemap.xml with every static route plus
// whatever blog posts are live in Sanity at build time.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const SITE_URL = "https://product-impact-hub-sage.vercel.app";

const CASE_STUDY_SLUGS = [
  "career-launchpad",
  "placement-guarantee-courses",
  "growth-funnel-overhaul",
  "rebuilding-the-learning-experience",
  "competency-guardrails",
];

const LOCAL_BLOG_SLUGS = [
  "finding-signal-in-noisy-product-metrics",
  "building-roadmaps-with-real-tradeoffs",
  "when-user-feedback-conflicts-with-data",
  "designing-mvps-that-teams-can-actually-ship",
  "retention-work-before-growth-spend",
  "making-decisions-with-incomplete-information",
];

const projectId = process.env.VITE_SANITY_PROJECT_ID ?? "oghsj01f";
const dataset = process.env.VITE_SANITY_DATASET ?? "production";
const apiVersion = process.env.VITE_SANITY_API_VERSION ?? "2026-05-15";

async function fetchSanitySlugs() {
  try {
    const query = encodeURIComponent(
      `*[_type == "post" && defined(slug.current)].slug.current`,
    );
    const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
    const response = await fetch(url);
    if (!response.ok) return [];
    const payload = await response.json();
    return Array.isArray(payload.result) ? payload.result : [];
  } catch {
    return [];
  }
}

async function main() {
  const sanitySlugs = await fetchSanitySlugs();
  const blogSlugs = Array.from(new Set([...LOCAL_BLOG_SLUGS, ...sanitySlugs]));

  const staticRoutes = ["/", "/case-studies", "/writing"];
  const caseStudyRoutes = CASE_STUDY_SLUGS.map((slug) => `/case-studies/${slug}`);
  const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

  const allRoutes = [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];

  const urlEntries = allRoutes
    .map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  await writeFile(path.join(distDir, "sitemap.xml"), xml, "utf-8");
  console.log(`Wrote sitemap.xml with ${allRoutes.length} routes`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
