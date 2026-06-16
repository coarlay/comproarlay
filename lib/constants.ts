export const SITE_CONFIG = {
  name: "Arlay",
  description:
    "Arlay adalah mitra digital Anda untuk jasa pembuatan website profesional yang dirancang untuk membantu bisnis Anda tumbuh di era digital.",
  url: "https://www.arlay.my.id",
  tagline: "Bangun Digital Bersama Arlay",
  whatsapp: "6281234567890",
  email: "halo@arlay.id",
  phone: "+62 812-3456-7890",
  address: "Jl. Sudirman Kav. 21, Jakarta Selatan",
  social: {
    instagram: "https://instagram.com/arlay.id",
    linkedin: "https://linkedin.com/company/arlay",
    github: "https://github.com/coarlay",
    youtube: "https://youtube.com/@arlay",
  },
};

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const STATS = [
  { value: "120+", label: "Proyek Selesai" },
  { value: "98%", label: "Klien Puas" },
  { value: "4.9/5", label: "Rating Klien" },
  { value: "50+", label: "Partner Bisnis" },
];

export const SERVICES = [
  {
    id: "web-development",
    title: "Jasa Pembuatan Website",
    short: "Website modern, cepat, dan SEO-friendly",
    description:
      "Dari company profile hingga aplikasi web skala enterprise. Kami bangun solusi digital yang sesuai kebutuhan bisnis Anda.",
    icon: "Code2",
    features: [
      "Company Profile & Landing Page",
      "E-Commerce & Marketplace",
      "Dashboard & Web App",
      "Integrasi Payment Gateway",
      "SEO & Performance Optimization",
      "Maintenance & Support",
    ],
    startPrice: "Rp 3.500.000",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    short: "Tingkatkan visibilitas & konversi online Anda",
    description:
      "Strategi digital marketing terpadu untuk meningkatkan traffic, leads, dan penjualan. Dari SEO hingga social media management.",
    icon: "TrendingUp",
    features: [
      "SEO On-Page & Off-Page",
      "Google Ads & Meta Ads",
      "Social Media Management",
      "Content Marketing Strategy",
      "Analytics & Reporting Bulanan",
      "Conversion Rate Optimization",
    ],
    startPrice: "Rp 2.000.000",
  },
  {
    id: "konsultasi-karya-ilmiah",
    title: "Konsultasi & Editing Karya Ilmiah",
    short: "Bimbingan dan editing skripsi, jurnal, & makalah",
    description:
      "Bantu perbaiki struktur, bahasa, dan format sitasi karya ilmiahmu — skripsi, jurnal, makalah, dan laporan. Bukan membuatkan, melainkan membimbing dan mengedit.",
    icon: "FileText",
    features: [
      "Review struktur & alur penulisan (BAB I–V)",
      "Perbaikan tata bahasa & ejaan (PUEBI)",
      "Pengecekan logika argumen & koherensi",
      "Format sitasi APA / IEEE / Chicago",
      "Saran perbaikan abstrak & kesimpulan",
      "Konsultasi via WhatsApp / Google Meet",
    ],
    startPrice: "Rp 150.000",
  },
  {
    id: "project-arduino-iot-ai",
    title: "Project Arduino / IoT / AI",
    short: "Prototipe hardware & kecerdasan buatan siap pakai",
    description:
      "Wujudkan ide teknismu jadi kenyataan — dari prototipe Arduino hingga sistem IoT dan AI siap pakai. Cocok untuk skripsi, PKM, lomba, maupun kebutuhan bisnis.",
    icon: "Cpu",
    features: [
      "Arduino & mikrokontroler (ESP32, Raspberry Pi)",
      "Dashboard IoT realtime",
      "Integrasi AI & Machine Learning",
      "Cocok untuk skripsi, PKM, & bisnis",
      "Konsultasi & pendampingan presentasi",
      "Dokumentasi teknis lengkap",
    ],
    startPrice: "Rp 500.000",
  },
];

export const PRICING = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Cocok untuk UMKM & freelancer yang baru ingin go digital.",
    price: "Rp 3.500.000",
    period: "sekali bayar",
    highlight: false,
    features: [
      "1-5 halaman (company profile / landing page)",
      "Desain responsif mobile-first",
      "Domain .com gratis 1 tahun",
      "Hosting 1 tahun",
      "SSL & email bisnis",
      "SEO dasar (meta, sitemap, schema)",
      "Revisi desain 2x",
      "Garansi bug fix 1 bulan",
      "Waktu pengerjaan 1-2 minggu",
    ],
    cta: "Pilih Paket Starter",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Untuk bisnis yang butuh e-commerce atau fitur lebih kompleks.",
    price: "Rp 8.500.000",
    period: "sekali bayar",
    highlight: true,
    badge: "Paling Populer",
    features: [
      "Hingga 20 halaman + e-commerce",
      "Admin panel / CMS",
      "Integrasi payment gateway (Midtrans/Xendit)",
      "Integrasi ongkir (RajaOngkir/Shipper)",
      "Notifikasi email & WhatsApp",
      "SEO advanced (schema, analytics, speed optimization)",
      "Revisi desain tak terbatas (selama scope)",
      "Maintenance gratis 1 bulan",
      "Garansi bug fix 3 bulan",
      "Waktu pengerjaan 3-5 minggu",
    ],
    cta: "Pilih Paket Business",
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Untuk kebutuhan aplikasi web kompleks atau integrasi sistem.",
    price: "Hubungi Kami",
    period: "sesuai kebutuhan",
    highlight: false,
    features: [
      "Aplikasi web / dashboard / SaaS",
      "API & integrasi sistem pihak ketiga",
      "Realtime features & websockets",
      "Mobile app (React Native)",
      "Arsitektur cloud & DevOps",
      "Dedicated project manager",
      "SLA support khusus",
      "Source code & dokumentasi lengkap",
      "Garansi disesuaikan per proyek",
    ],
    cta: "Konsultasi Gratis",
  },
];

export const GUARANTEES = [
  {
    icon: "ShieldCheck",
    title: "Garansi Bug Fix",
    description:
      "Bug yang muncul setelah launch kami perbaiki gratis: 1 bulan (Starter), 3 bulan (Business), atau sesuai kesepakatan (Custom).",
  },
  {
    icon: "RefreshCw",
    title: "Revisi Desain",
    description:
      "Revisi desain sesuai paket. Paket Business mendapat revisi tak terbatas selama masih dalam scope proyek yang disepakati.",
  },
  {
    icon: "Clock",
    title: "Tepat Waktu",
    description:
      "Jika proyek terlambat dari timeline yang disepakati bukan karena keterlambatan klien, kami berikan diskon 10% dari total proyek.",
  },
  {
    icon: "FileCode",
    title: "Source Code Milik Anda",
    description:
      "Setelah pelunasan, source code 100% milik Anda. Bebas migrasi ke vendor lain tanpa biaya tambahan dari Arlay.",
  },
  {
    icon: "MessageSquare",
    title: "Response Time Support",
    description:
      "Kami balas chat dalam maksimal 4 jam kerja. Tiket darurat (bug critical) ditangani dalam 24 jam.",
  },
  {
    icon: "BadgeCheck",
    title: "Kontrak & Kuitansi Resmi",
    description:
      "Setiap proyek memiliki kontrak tertulis dengan milestone, scope, dan deliverable yang jelas. Pembayaran via transfer bank resmi.",
  },
];

export const CLIENT_LOGOS = [
  { name: "Kopi Nusantara", slug: "kopi-nusantara" },
  { name: "Logistik Cepat", slug: "logistik-cepat" },
  { name: "Batik Cendana", slug: "batik-cendana" },
  { name: "Meja Santap", slug: "meja-santap" },
  { name: "Rumah Impian", slug: "rumah-impian" },
  { name: "SehatKita", slug: "sehatkita" },
  { name: "Cerdas Academy", slug: "cerdas-academy" },
  { name: "Nusantara Finance", slug: "nusantara-finance" },
];

export const WHY_US = [
  {
    icon: "Zap",
    title: "Pengerjaan Cepat",
    description:
      "Timeline jelas dengan milestone mingguan. Website siap launch dalam hitungan minggu, bukan bulan.",
  },
  {
    icon: "ShieldCheck",
    title: "Garansi Kualitas",
    description:
      "Revisi tanpa batas sampai Anda puas, plus maintenance gratis 3 bulan pasca launch.",
  },
  {
    icon: "Users",
    title: "Tim Berpengalaman",
    description:
      "Developer dan instruktur dengan pengalaman di startup unicorn dan perusahaan multinasional.",
  },
  {
    icon: "TrendingUp",
    title: "Hasil Terukur",
    description:
      "Fokus pada konversi dan performa. Setiap proyek dilengkapi analytics dan laporan berkala.",
  },
  {
    icon: "Sparkles",
    title: "Teknologi Terkini",
    description:
      "Kami menggunakan stack modern seperti Next.js, TypeScript, dan cloud infrastructure yang scalable.",
  },
  {
    icon: "HeartHandshake",
    title: "Support Responsif",
    description:
      "Respon chat dalam hitungan menit. Kami partner jangka panjang, bukan sekadar vendor.",
  },
];

export const PORTFOLIO = [
  {
    id: "fintech-dashboard",
    title: "Nusantara Finance Dashboard",
    category: "Web App",
    description:
      "Platform analitik keuangan dengan visualisasi real-time dan integrasi multi-bank untuk startup fintech.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    client: "Nusantara Finance",
    year: "2024",
  },
  {
    id: "ecommerce-batik",
    title: "Batik Cendana Store",
    category: "E-Commerce",
    description:
      "Marketplace batik premium dengan fitur custom order, multi-warehouse, dan integrasi logistik lokal.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    client: "Batik Cendana",
    year: "2024",
  },
  {
    id: "edutech-lms",
    title: "Cerdas Academy LMS",
    category: "EdTech",
    description:
      "Learning management system dengan fitur live streaming, kuis interaktif, dan sertifikat otomatis.",
    tags: ["Next.js", "Prisma", "WebRTC", "AWS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    client: "Cerdas Academy",
    year: "2024",
  },
  {
    id: "restaurant-booking",
    title: "Meja Santap Reservation",
    category: "Booking System",
    description:
      "Platform reservasi resto dengan fitur table management, menu digital, dan integrasi POS.",
    tags: ["Next.js", "Supabase", "Tailwind", "Twilio"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    client: "Meja Santap Group",
    year: "2023",
  },
  {
    id: "property-portal",
    title: "Rumah Impian Portal",
    category: "Property",
    description:
      "Portal properti dengan fitur virtual tour 360°, mortgage calculator, dan agen terverifikasi.",
    tags: ["Next.js", "MongoDB", "Three.js", "Cloudinary"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    client: "Rumah Impian",
    year: "2023",
  },
  {
    id: "healthtech-app",
    title: "SehatKita Platform",
    category: "HealthTech",
    description:
      "Platform telemedicine dengan booking dokter, rekam medis digital, dan integrasi apotek online.",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    client: "SehatKita",
    year: "2024",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rafi Santoso",
    role: "Founder, Kopi Nusantara",
    content:
      "Website baru dari Arlay bikin omzet online kami naik 3x lipat dalam 2 bulan. Timnya responsif dan paham banget kebutuhan bisnis kecil.",
    rating: 5,
    avatar: "RS",
    linkedin: "",
  },
  {
    name: "Bima Pradana",
    role: "CTO, Logistik Cepat",
    content:
      "Arlay mengerjakan dashboard operasional kami dari 0. Hasilnya rapi, cepat, dan dokumentasinya lengkap. Tim terbaik yang pernah kami ajak kerja sama.",
    rating: 5,
    avatar: "BP",
    linkedin: "",
  },
  {
    name: "Dimas Aditya",
    role: "Owner, Batik Cendana",
    content:
      "Proses dari brief sampai launch cuma 5 minggu. Desainnya modern, admin panelnya mudah dipakai ibu saya yang bukan orang IT.",
    rating: 5,
    avatar: "DA",
    linkedin: "",
  },
  {
    name: "Sari Wulandari",
    role: "CEO, Rumah Impian",
    content:
      "Virtual tour 360° yang dibuat Arlay bikin calon pembeli lebih yakin. Leads kami naik 200% sejak pakai website baru.",
    rating: 5,
    avatar: "SW",
    linkedin: "",
  },
  {
    name: "Eko Prasetyo",
    role: "Head of IT, SehatKita",
    content:
      "Platform telemedicine kami butuh fitur kompleks: video call, rekam medis, dan integrasi apotek. Arlay deliver semua dengan kualitas production-ready.",
    rating: 5,
    avatar: "EP",
    linkedin: "",
  },
  {
    name: "Nina Hartanti",
    role: "Founder, Cerdas Academy",
    content:
      "LMS dari Arlay membantu kami scale dari 50 ke 500+ siswa aktif. Fitur kuis dan sertifikat otomatisnya sangat membantu efisiensi tim.",
    rating: 5,
    avatar: "NH",
    linkedin: "",
  },
];

export const TEAM = [
  {
    name: "Arga Wijaya",
    role: "Founder & Lead Developer",
    bio: "Ex-engineer di startup unicorn. 8+ tahun membangun produk digital dari 0 hingga skala jutaan user.",
    avatar: "AW",
  },
  {
    name: "Layla Pramesti",
    role: "Co-Founder & Project Manager",
    bio: "Berpengalaman memimpin puluhan proyek digital dari perencanaan hingga delivery tepat waktu.",
    avatar: "LP",
  },
  {
    name: "Rendy Saputra",
    role: "Senior Fullstack Engineer",
    bio: "Spesialis Next.js dan cloud architecture. Kontributor open source di beberapa project populer.",
    avatar: "RS",
  },
  {
    name: "Maya Kusuma",
    role: "Lead UI/UX Designer",
    bio: "Designer dengan pengalaman di fintech dan e-commerce. Percaya bahwa desain hebat dimulai dari empati.",
    avatar: "MK",
  },
];

export const FAQ = [
  {
    category: "Proses & Timeline",
    q: "Berapa lama proses pembuatan website?",
    a: "Tergantung kompleksitas. Company profile (Starter) biasanya 1-2 minggu, e-commerce (Business) 3-5 minggu, dan aplikasi web custom 6-12 minggu. Kami selalu berikan timeline detail dan milestone mingguan di awal proyek.",
  },
  {
    category: "Proses & Timeline",
    q: "Bagaimana alur kerja dari briefing sampai launch?",
    a: "5 tahap: (1) Discovery call & kontrak, (2) Pembayaran DP 50%, (3) Desain mockup & persetujuan, (4) Development dengan staging link yang bisa Anda pantau setiap minggu, (5) QA, training admin, pelunasan, dan launch.",
  },
  {
    category: "Harga & Pembayaran",
    q: "Berapa kisaran harga membuat website di Arlay?",
    a: "Paket Starter mulai Rp 3.500.000 untuk company profile, Paket Business mulai Rp 8.500.000 untuk e-commerce dengan CMS, dan Paket Custom disesuaikan dengan kebutuhan proyek. Semua harga sudah termasuk domain .com dan hosting 1 tahun.",
  },
  {
    category: "Harga & Pembayaran",
    q: "Apakah bisa cicil?",
    a: "Bisa. Skema pembayaran: 50% DP di awal, 50% sebelum launch. Untuk proyek di atas Rp 10 juta kami menyediakan cicilan 0% hingga 12 bulan.",
  },
  {
    category: "Harga & Pembayaran",
    q: "Apa saja yang tidak termasuk dalam harga?",
    a: "Biaya domain lanjutan (setelah tahun pertama, ~Rp 200rb/tahun), biaya renewal hosting (~Rp 500rb/tahun untuk Starter, ~Rp 1jt/tahun untuk Business), biaya add-on fitur di luar scope, dan biaya stok foto/aset premium (jika diperlukan).",
  },
  {
    category: "Teknis",
    q: "Teknologi apa yang Arlay gunakan?",
    a: "Stack utama kami Next.js + TypeScript, Tailwind CSS, dan Prisma/PostgreSQL. Untuk CMS kami pakai Sanity atau Strapi. Hosting di Vercel/Railway. Untuk proyek WordPress/Shopify kami juga melayani sesuai kebutuhan.",
  },
  {
    category: "Teknis",
    q: "Apakah website saya akan SEO-friendly?",
    a: "Ya. Semua paket sudah termasuk SEO dasar (meta tags, sitemap, robots.txt, schema.org, kecepatan loading, mobile-friendly). Paket Business ke atas mendapat optimasi lanjutan: Core Web Vitals, rich snippets, dan laporan ranking bulanan selama 3 bulan.",
  },
  {
    category: "Pasca Launch",
    q: "Apa yang terjadi setelah website selesai?",
    a: "Anda mendapat garansi bug fix (1-3 bulan sesuai paket), maintenance gratis 1 bulan (Business), training admin, dokumentasi, dan akses penuh ke source code. Setelahnya tersedia paket maintenance bulanan mulai Rp 500rb/bulan.",
  },
  {
    category: "Pasca Launch",
    q: "Jika saya ingin pindah vendor, bagaimana?",
    a: "Setelah pelunasan, source code 100% milik Anda. Kami akan membantu proses handover (domain transfer, hosting migration, dokumentasi) tanpa biaya tambahan. Kami ingin Anda stay karena kualitas, bukan karena terkunci.",
  },
  {
    category: "Pasca Launch",
    q: "Bagaimana jika ada bug setelah masa garansi habis?",
    a: "Tersedia paket maintenance bulanan (mulai Rp 500rb/bulan) yang mencakup bug fix, update konten minor, backup rutin, dan monitoring uptime. Untuk bug critical, tiket darurat bisa dibuka dengan biaya per-insiden.",
  },
  {
    category: "Umum",
    q: "Apakah bisa membuat website 1 halaman saja?",
    a: "Bisa. Paket Starter sangat cocok untuk landing page single-page (misalnya untuk kampanye marketing, pre-launch produk, atau portofolio pribadi).",
  },
  {
    category: "Umum",
    q: "Apakah Arlay juga melayani redesign website lama?",
    a: "Ya. Kami banyak menangani migrasi dari WordPress/Wix ke stack modern, atau redesign UI/UX dengan konten yang tetap sama. Proses mirip proyek baru tapi biasanya lebih cepat karena struktur konten sudah ada.",
  },
];
