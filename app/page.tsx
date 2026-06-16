import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyUs } from "@/components/sections/why-us";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <PortfolioPreview />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
