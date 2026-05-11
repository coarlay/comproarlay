"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE_CONFIG } from "@/lib/constants";

const topics = [
  "Jasa Pembuatan Website",
  "Kelas Coding Online",
  "Konsultasi Umum",
  "Kerja Sama / Partnership",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "");

    const text = `Halo Arlay! Saya ${name} (${email}).%0A%0ATopik: ${topic}%0A%0APesan:%0A${message}`;
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
      decodeURIComponent(text)
    )}`;

    await new Promise((r) => setTimeout(r, 700));
    window.open(waUrl, "_blank");

    setLoading(false);
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            name="name"
            placeholder="Nama Anda"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="anda@email.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic">Topik</Label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary"
        >
          <option value="" disabled>
            Pilih topik yang ingin didiskusikan
          </option>
          {topics.map((t) => (
            <option key={t} value={t} className="bg-background text-foreground">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Ceritakan kebutuhan Anda secara singkat..."
          required
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? (
          "Mengirim..."
        ) : sent ? (
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center"
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Terkirim! Membuka WhatsApp...
          </motion.span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Kirim Pesan
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp kami. Balasan
        biasanya dalam kurang dari 1 jam pada hari kerja.
      </p>
    </form>
  );
}
