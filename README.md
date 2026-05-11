# Arlay — Company Profile

Website company profile modern untuk **Arlay**, perusahaan jasa pembuatan website dan kelas coding online.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + tailwindcss-animate
- **Framer Motion** untuk animasi
- **Shadcn/ui** style components (Button, Card, Badge, Input, Textarea, Label)
- **Lucide React** untuk ikon

## Struktur Halaman

- `/` — Landing page (hero, stats, layanan, why-us, portfolio, kelas, testimoni, CTA)
- `/layanan` — Detail layanan jasa web & kelas coding + FAQ
- `/portfolio` — Galeri proyek dengan filter kategori
- `/kelas` — Daftar kelas coding dengan kurikulum lengkap
- `/tentang` — Visi, misi, values, timeline, tim
- `/kontak` — Form kontak + channel komunikasi

## Desain

- **Dark mode** sebagai default
- **Color palette**: violet/ungu (#7C3AED) sebagai aksen + putih
- **Font**: Inter (via next/font)
- **Glassmorphism** pada beberapa section
- **Smooth scroll** & fade-in on scroll
- **Hover effects** di setiap card interaktif
- **Responsive mobile-first**

## Fitur Tambahan

- ✅ SEO meta tags lengkap (OpenGraph, Twitter Card)
- ✅ Sitemap.xml otomatis
- ✅ Robots.txt
- ✅ WhatsApp floating button
- ✅ Smooth page transitions
- ✅ Halaman 404 custom

## Menjalankan Project

```bash
# install dependencies
npm install

# development
npm run dev

# production build
npm run build
npm run start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
arlay/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles + tokens
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots
│   ├── layanan/
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── portfolio-client.tsx
│   ├── kelas/
│   ├── tentang/
│   └── kontak/
│       ├── page.tsx
│       └── contact-form.tsx
├── components/
│   ├── ui/                     # Shadcn-style primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── shared/                 # Komponen bersama
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── logo.tsx
│   │   ├── whatsapp-button.tsx
│   │   ├── page-header.tsx
│   │   ├── section-heading.tsx
│   │   └── animated-background.tsx
│   └── sections/               # Section landing page
│       ├── hero.tsx
│       ├── stats.tsx
│       ├── services-preview.tsx
│       ├── why-us.tsx
│       ├── portfolio-preview.tsx
│       ├── courses-preview.tsx
│       ├── testimonials.tsx
│       └── cta-banner.tsx
├── lib/
│   ├── utils.ts                # cn() helper
│   └── constants.ts            # Data placeholder semua section
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Kustomisasi

Semua data konten (stats, services, portfolio, courses, testimonials, team, FAQ) disentralisasi di `lib/constants.ts`. Untuk mengubah konten, cukup edit file tersebut tanpa perlu memodifikasi komponen.

Info brand dasar (nama, kontak, social) juga ada di `SITE_CONFIG` pada file yang sama.
