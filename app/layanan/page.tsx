import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  GraduationCap,
  Check,
  ArrowRight,
  Layers,
  Rocket,
  PenTool,
  Settings,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SERVICES, FAQ } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layanan Arlay",
  description:
    "Jasa pembuatan website profesional dan kelas coding online. Solusi digital lengkap untuk bisnis dan karir Anda.",
};

const iconMap = {
  Code2,
  GraduationCap,
};

const workflow = [
  {
    icon: PenTool,
    title: "Discovery & Planning",
    description:
      "Kami pelajari kebutuhan, audience, dan tujuan Anda. Output: brief proyek, timeline, dan proposal.",
  },
  {
    icon: Layers,
    title: "Design & Prototyping",
    description:
      "Wireframe hingga high-fidelity design di Figma. Revisi tanpa batas sampai Anda setuju.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Coding dengan tech stack modern. Progress bisa Anda pantau via staging link setiap minggu.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Deploy ke production, training penggunaan, plus maintenance gratis selama 3 bulan.",
  },
];

export default function LayananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan Kami"
        title="Dua pilar digital untuk pertumbuhan Anda"
        description="Baik membangun produk digital untuk bisnis, maupun mencetak developer siap kerja. Arlay hadir dengan pendekatan yang terbukti."
      />

      <section className="py-12 md:py-16">
        <div className="container space-y-10">
          {SERVICES.map((service, idx) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] || Code2;
            const reversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                <div
                  className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand glow-sm">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">
                        Mulai dari
                      </span>
                      <span className="text-2xl font-bold text-foreground">
                        {service.startPrice}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/kontak">
                        <Button>
                          Konsultasi Gratis
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {service.id === "coding-class" && (
                        <Link href="/kelas">
                          <Button variant="outline">Lihat Semua Kelas</Button>
                        </Link>
                      )}
                      {service.id === "web-development" && (
                        <Link href="/portfolio">
                          <Button variant="outline">Lihat Portfolio</Button>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6 md:p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Apa yang Anda dapatkan
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/90"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default">Cara Kerja</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Proses yang transparan,
              <br />
              hasil yang terukur
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dari ide hingga launch, Anda selalu tahu posisi proyek dan apa
              yang akan terjadi selanjutnya.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    Step {i + 1}
                  </div>
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default">FAQ</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pertanyaan yang sering diajukan
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card/60 p-5 transition-colors open:border-primary/40 open:bg-card"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold text-foreground marker:hidden md:text-base">
                  <span>{item.q}</span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                    <Settings className="hidden" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
