import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const HowIThink = lazy(() => import("@/components/HowIThink"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const MetricsSnapshot = lazy(() => import("@/components/MetricsSnapshot"));
const WhatICanHelp = lazy(() => import("@/components/WhatICanHelp"));
const HardDecisions = lazy(() => import("@/components/HardDecisions"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <HowIThink />
        <CaseStudies />
        <MetricsSnapshot />
        <WhatICanHelp />
        <HardDecisions />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
