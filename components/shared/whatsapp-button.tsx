"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo Arlay, saya ingin konsultasi terkait layanan Anda."
  );
  const href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-shadow hover:shadow-2xl hover:shadow-[#25D366]/50 md:bottom-6 md:right-6"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
        <MessageCircle className="relative h-6 w-6 fill-white" />
      </span>
      <span className="hidden pr-1 sm:inline">Chat WhatsApp</span>
    </motion.a>
  );
}
