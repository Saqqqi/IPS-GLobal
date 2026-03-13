import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import PartnerSection from "@/components/PartnerSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import WebsiteRescueSection from "@/components/WebsiteRescueSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <DescriptionSection />
      {/* <PartnerSection /> */}
      <WhoWeHelpSection />
      <CoreServicesSection />
      <WebsiteRescueSection />
      <WhyChooseSection />
      <CaseStudiesSection />
      <HowWeWorkSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}