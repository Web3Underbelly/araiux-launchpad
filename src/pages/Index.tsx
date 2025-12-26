import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyMonctonSection } from "@/components/home/WhyMonctonSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { GuidedJourney } from "@/components/home/GuidedJourney";
import { siteConfig } from "@/data/content";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta name="twitter:description" content={siteConfig.description} />
        <link rel="canonical" href="https://araiux.ca" />
      </Helmet>
      <Layout>
        <HeroSection />
        <PillarsSection />
        <IndustriesSection />
        <WhyMonctonSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <GuidedJourney />
      </Layout>
    </>
  );
};

export default Index;
