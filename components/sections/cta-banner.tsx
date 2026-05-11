"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function CtaBanner() {
  const waHref = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Halo Arlay, saya ingin konsultasi proyek."
  )}`;

  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-brand p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-black/20 blur-3xl" />
            <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Siap mengubah ide
              <br />
              jadi produk nyata?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
              Konsultasi gratis tanpa komitmen. Tim Arlay siap bantu Anda
              memetakan kebutuhan dan solusi yang tepat.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/kontak" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full bg-white text-primary shadow-xl hover:bg-white/90 sm:w-auto"
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:border-white/60 sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
