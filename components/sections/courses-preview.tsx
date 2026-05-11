"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CoursesPreview() {
  const featured = COURSES.slice(0, 3);

  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-30" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Kelas Unggulan"
          title="Belajar coding, langsung siap kerja"
          description="Kurikulum terstruktur, mentor berpengalaman, dan proyek nyata. Investasi terbaik untuk karir digital Anda."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  {course.students}+ siswa
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </span>
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
                <Link href="/kelas" className="mt-4">
                  <Button
                    className="w-full"
                    variant={course.popular ? "default" : "outline"}
                  >
                    Daftar Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/kelas">
            <Button variant="ghost" className="group">
              Lihat semua kelas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
