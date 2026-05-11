import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Clock,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Kontak Arlay",
  description:
    "Hubungi Arlay untuk konsultasi proyek website atau pendaftaran kelas coding. Tersedia via form, WhatsApp, email, dan sosial media.",
};

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE_CONFIG.phone,
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: SITE_CONFIG.address,
    href: "https://maps.google.com/?q=Jakarta+Selatan",
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: SITE_CONFIG.social.instagram },
  { icon: Linkedin, label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
  { icon: Github, label: "GitHub", href: SITE_CONFIG.social.github },
  { icon: Youtube, label: "YouTube", href: SITE_CONFIG.social.youtube },
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Mari mulai percakapan"
        description="Punya proyek atau pertanyaan? Kami siap membantu. Pilih channel yang paling nyaman untuk Anda."
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="order-2 space-y-4 lg:order-1 lg:col-span-2">
              {contactChannels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
                      c.highlight
                        ? "border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/10"
                        : "border-border bg-card/60 hover:border-primary/40 hover:bg-card"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        c.highlight
                          ? "bg-gradient-brand text-white"
                          : "border border-primary/20 bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {c.value}
                      </div>
                    </div>
                  </a>
                );
              })}

              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold">Jam Operasional</h3>
                </div>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-foreground">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="text-foreground">Libur</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <h3 className="text-sm font-semibold">Ikuti Kami</h3>
                <div className="mt-4 flex gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Kirim Pesan
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Isi form di bawah ini dan tim kami akan menghubungi Anda
                    dalam 1 x 24 jam.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
