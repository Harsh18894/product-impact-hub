import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const CASE_STUDY_SLUGS = [
  "career-launchpad",
  "placement-guarantee-courses",
  "growth-funnel-overhaul",
  "rebuilding-the-learning-experience",
  "competency-guardrails",
];

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    // Only prerender the homepage and case studies (fully static, locally-owned
    // data). Blog/writing stay client-rendered since they're Sanity-backed and
    // can change post-deploy without a rebuild.
    includedRoutes: () => [
      "/",
      "/case-studies",
      ...CASE_STUDY_SLUGS.map((slug) => `/case-studies/${slug}`),
    ],
  },
}));
