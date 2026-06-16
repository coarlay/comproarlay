import type { Metadata } from "next";
import { Target, Compass, Heart, Lightbulb, Rocket, Users2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TEAM, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang Arlay",
  description:
    "Kenali visi, misi, dan tim di balik Arlay. Sebuah studio digital yang percaya teknologi harus ramah, berdampak, dan membantu bisnis bertumbuh.",
};

const values = [
  {
    icon: Heart,
    title: "Empati",
    description:
      "Kami mulai dari memahami. Bukan dari teknologi, tapi dari manusia dan masalahnya.",
  },
  {
    icon: Lightbulb,
    title: "Kreativitas",
    description:
      "Setiap brief unik. Kami tidak memaksakan template, tapi merancang solusi yang tepat guna.",
  },
  {
    icon: Rocket,
    title: "Eksekusi",
    description:
      "Ide tanpa eksekusi hanyalah mimpi. Kami fokus pada delivery yang rapi dan tepat waktu.",
  },
  {
    icon: Users2,
    title: "Kolaborasi",
    description:
      "Klien adalah partner. Keberhasilan mereka adalah kemenangan kami.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Awal Perjalanan",
    description:
      "Arlay dimulai dari 2 founder dan 3 laptop. Misi pertama: bantu UMKM go digital dengan harga terjangkau.",
  },
  {
    year: "2022",
    title: "Ekspansi Layanan",
    description:
      "Melihat tingginya kebutuhan digitalisasi, kami memperluas layanan ke e-commerce dan aplikasi web custom untuk berbagai industri.",
  },
  {
    year: "2023",
    title: "100+ Proyek Selesai",
    description:
      "Melayani klien dari berbagai skala industri, dari UMKM hingga perusahaan dengan kebutuhan digital yang kompleks.",
  },
  {
    year: "2024",
    title: "Skala & Impact",
    description:
      "Memperluas layanan ke tingkat enterprise dan dipercaya menangani proyek digital berskala besar di berbagai industri.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Membangun digital Indonesia, satu proyek dalam satu waktu"
        description="Arlay lahir dari keyakinan bahwa teknologi hebat seharusnya accessible dan setiap bisnis berhak hadir online dengan percaya diri."
      />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                  Visi Kami
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Menjadi partner digital terdepan di Indonesia yang membangun
                  produk berkualitas dan mendorong pertumbuhan bisnis di era
                  digital.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                  Misi Kami
                </h2>
                <ul className="mt-3 space-y-2.5 text-muted-foreground leading-relaxed">
                  <li>
                    → Menghadirkan solusi digital berkualitas tinggi dengan
                    harga yang adil.
                  </li>
                  <li>
                    → Mengutamakan kualitas, kecepatan, dan transparansi di
                    setiap proyek yang kami kerjakan.
                  </li>
                  <li>
                    → Menjadi partner jangka panjang yang tumbuh bersama klien
                    kami.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default">Nilai Kami</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Empat prinsip yang kami pegang
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card/60 p-6 transition-all hover:border-primary/40 hover:bg-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
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
            <Badge variant="default">Perjalanan</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tonggak perjalanan Arlay
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="relative space-y-6 border-l border-border pl-8">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[37px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand glow-sm ring-4 ring-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40 hover:bg-card">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">
                        {item.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default">Tim Kami</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Orang-orang di balik Arlay
            </h2>
            <p className="mt-3 text-muted-foreground">
              Perpaduan engineer dan designer yang passionate membangun produk
              digital terbaik untuk bisnis Indonesia.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-brand opacity-30" />
                <div className="relative mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand text-2xl font-bold text-white ring-4 ring-background">
                  {member.avatar}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
