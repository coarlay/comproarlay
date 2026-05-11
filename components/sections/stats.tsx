"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group text-center"
              >
                <div className="text-3xl font-bold tracking-tight text-gradient md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
