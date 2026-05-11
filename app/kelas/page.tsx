import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Sparkles,
  Check,
  BookOpen,
  Award,
  Video,
  MessagesSquare,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { COURSES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kelas Coding Online",
  description:
    "Daftar kelas coding Arlay dengan kurikulum terstruktur, mentor berpengalaman, dan proyek nyata. Dari pemula hingga siap kerja.",
};

const benefits = [
  {
    icon: Video,
    title: "Live Class + Rekaman",
    description:
      "Belajar live bersama mentor, plus akses rekaman selamanya untuk mengulang materi.",
  },
  {
    icon: MessagesSquare,
    title: "Mentor 1-on-1",
    description:
      "Sesi personal dengan mentor untuk review kode dan konsultasi karir.",
  },
  {
    icon: BookOpen,
    title: "Kurikulum Aplikatif",
    description:
      "Dirancang bersama industri. Fokus pada skill yang dibutuhkan di dunia kerja nyata.",
  },
  {
    icon: Award,
    title: "Sertifikat & Portfolio",
    description:
      "Sertifikat resmi ber-QR code plus 3-5 proyek portfolio siap pamerkan ke rekruter.",
  },
];

export default function KelasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kelas Coding"
        title="Skill coding yang benar-benar terpakai"
        description="Pilih kelas sesuai level dan tujuan Anda. Belajar bareng mentor industri, bangun portfolio, siap naik level karir."
      />

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card/60 p-5"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 text-sm font-semibold">{b.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default">Semua Kelas</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pilih jalur belajar Anda
            </h2>
            <p className="mt-3 text-muted-foreground">
              Setiap kelas dirancang dengan outcome jelas dan project portfolio
              di akhir.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl",
                  course.popular
                    ? "border-primary/50 shadow-xl shadow-primary/10"
                    : "border-border hover:border-primary/40 hover:shadow-primary/10"
                )}
              >
                {course.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-gradient-brand px-12 py-1 text-xs font-semibold text-white shadow-lg">
                    POPULAR
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Badge variant="glass">{course.level}</Badge>
                  <Badge variant="default">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {course.tag}
                  </Badge>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {course.students}+
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Kurikulum
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {course.curriculum.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-xs text-foreground/80"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-end border-t border-border pt-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      {course.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Link href="/kontak" className="mt-4">
                    <Button
                      className="w-full"
                      variant={course.popular ? "default" : "outline"}
                    >
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
