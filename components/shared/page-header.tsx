"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/shared/animated-background";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
      <AnimatedBackground />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
