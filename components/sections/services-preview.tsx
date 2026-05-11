"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, GraduationCap, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Code2,
  GraduationCap,
};

export function ServicesPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Layanan"
          title="Solusi Digital Lengkap"
          description="Dari membangun website untuk bisnis Anda, hingga mencetak developer siap kerja. Semua dalam satu atap."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/layanan#${service.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand glow-sm">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>

                  <h3 className="relative z-10 mt-6 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {service.description}
                  </p>

                  <ul className="relative z-10 mt-6 space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-6 flex items-baseline gap-2 border-t border-border pt-6">
                    <span className="text-xs text-muted-foreground">
                      Mulai dari
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      {service.startPrice}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
