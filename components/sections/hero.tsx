"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/shared/animated-background";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      <AnimatedBackground />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Digital partner untuk bisnis modern Indonesia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Bangun Digital,
            <br />
            <span className="text-gradient">Cetak Talenta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Arlay membantu bisnis Anda hadir online dengan website modern, dan
            mencetak developer siap kerja lewat kelas coding yang aplikatif.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/layanan" className="w-full sm:w-auto">
              <Button size="xl" className="group w-full sm:w-auto">
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/kelas" className="w-full sm:w-auto">
              <Button
                size="xl"
                variant="glass"
                className="group w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Mulai Belajar
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#10b981]" />
              <span>Tersedia untuk proyek baru</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">★ ★ ★ ★ ★</span>
              <span>4.9/5 dari 200+ klien</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
