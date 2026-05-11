import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PortfolioClient } from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio Proyek Arlay",
  description:
    "Galeri proyek website dan aplikasi yang telah Arlay kerjakan untuk berbagai industri dari fintech, e-commerce, edtech hingga healthtech.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Proyek yang membanggakan kami"
        description="Berbagai industri, berbagai skala, satu komitmen: menghadirkan solusi digital yang benar-benar bermanfaat."
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <PortfolioClient />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
