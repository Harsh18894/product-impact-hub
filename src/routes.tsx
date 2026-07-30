import type { RouteRecord } from "vite-react-ssg";

import Layout from "./Layout";
import Index from "./pages/Index";
import CaseStudiesIndex from "./pages/CaseStudiesIndex";
import CaseStudy from "./pages/CaseStudy";
import WritingIndex from "./pages/WritingIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { caseStudies } from "./lib/caseStudies";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      { path: "case-studies", Component: CaseStudiesIndex, entry: "src/pages/CaseStudiesIndex.tsx" },
      {
        path: "case-studies/:slug",
        Component: CaseStudy,
        entry: "src/pages/CaseStudy.tsx",
        getStaticPaths: () => caseStudies.map((study) => `case-studies/${study.slug}`),
      },
      { path: "writing", Component: WritingIndex, entry: "src/pages/WritingIndex.tsx" },
      { path: "blog/:slug", Component: BlogPost, entry: "src/pages/BlogPost.tsx" },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
