"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Users,
  TrendingUp,
  Sparkles,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  Users,
  TrendingUp,
  Sparkles,
  HeartHandshake,
};

export function WhyUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Mengapa Arlay"
          title="Partner yang benar-benar memahami Anda"
          description="Kami bukan sekadar vendor. Kami partner jangka panjang yang investasinya adalah kesuksesan Anda."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/40 hover:bg-card"
              >
                <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
