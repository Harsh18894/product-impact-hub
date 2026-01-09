import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowIThink from "@/components/HowIThink";
import CaseStudies from "@/components/CaseStudies";
import MetricsSnapshot from "@/components/MetricsSnapshot";
import WhatICanHelp from "@/components/WhatICanHelp";
import HardDecisions from "@/components/HardDecisions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowIThink />
      <CaseStudies />
      <MetricsSnapshot />
      <WhatICanHelp />
      <HardDecisions />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
