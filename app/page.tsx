import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyUs } from "@/components/sections/why-us";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CoursesPreview } from "@/components/sections/courses-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <PortfolioPreview />
      <CoursesPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
