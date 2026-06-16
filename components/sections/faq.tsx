"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FAQ } from "@/lib/constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [...new Set(FAQ.map((f) => f.category))];

  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Temukan jawaban atas pertanyaan umum seputar layanan, harga, dan proses kerja kami."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {category}
              </h3>
              <div className="space-y-3">
                {FAQ.filter((f) => f.category === category).map((faq) => {
                  const globalIndex = FAQ.indexOf(faq);
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={globalIndex}
                      className="overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/40"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="text-sm font-medium leading-relaxed">
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="border-t border-border px-5 pb-5 pt-4">
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}