"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PortfolioClient() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PORTFOLIO.map((p) => p.category)));
    return ["Semua", ...unique];
  }, []);

  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? PORTFOLIO
        : PORTFOLIO.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              active === cat
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "border-border bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute right-4 top-4">
                  <Badge variant="glass">{project.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {project.client} · {project.year}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
