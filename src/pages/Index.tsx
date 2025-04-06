
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>MindEase - Your Mental Health & Wellness Platform</title>
        <meta name="description" content="MindEase offers professional mental health support through video consultations, AI chatbot assistance, and personalized wellness planning." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamPreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
