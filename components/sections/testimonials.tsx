"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata mereka tentang Arlay"
          description="Cerita dari klien dan alumni yang telah mempercayakan perjalanan digitalnya bersama kami."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="mt-2 flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.content}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
