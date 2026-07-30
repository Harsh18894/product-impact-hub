import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricsSnapshot from "@/components/MetricsSnapshot";
import CaseStudies from "@/components/CaseStudies";
import CareerTimeline from "@/components/CareerTimeline";
import HowIThink from "@/components/HowIThink";
import ReadMyBlog from "@/components/ReadMyBlog";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Harsh Deep Singh — Product Manager | PMF, Growth & Monetization"
        description="Product Manager. I took a failing high-ticket edtech offering to 1,000+ payments a month by finding what the data was already saying. Case studies on PMF, funnel conversion, and retention."
        path="/"
        image="/og/home.png"
        type="profile"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Harsh Deep Singh",
          jobTitle: "Senior Product Manager",
          url: "https://product-impact-hub-sage.vercel.app/",
          sameAs: ["https://www.linkedin.com/in/harsh-d-singh/"],
        }}
      />
      <Navigation />
      <Hero />
      <MetricsSnapshot />
      <CaseStudies />
      <CareerTimeline />
      <HowIThink />
      <ReadMyBlog />
      <About />
      <WorkWithMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
