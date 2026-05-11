export const SITE_CONFIG = {
  name: "Arlay",
  description:
    "Arlay adalah mitra digital Anda untuk jasa pembuatan website profesional dan kelas coding online yang dirancang untuk mencetak talenta teknologi masa depan.",
  url: "https://arlay.id",
  tagline: "Bangun Digital, Cetak Talenta",
  whatsapp: "6281234567890",
  email: "halo@arlay.id",
  phone: "+62 812-3456-7890",
  address: "Jl. Sudirman Kav. 21, Jakarta Selatan",
  social: {
    instagram: "https://instagram.com/arlay.id",
    linkedin: "https://linkedin.com/company/arlay",
    github: "https://github.com/arlay",
    youtube: "https://youtube.com/@arlay",
  },
};

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kelas Coding", href: "/kelas" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const STATS = [
  { value: "120+", label: "Proyek Selesai" },
  { value: "850+", label: "Siswa Aktif" },
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
    id: "coding-class",
    title: "Kelas Coding Online",
    short: "Belajar ngoding dari basic sampai production-ready",
    description:
      "Kurikulum terstruktur, mentor berpengalaman, proyek nyata. Cocok untuk pemula hingga profesional yang ingin upskill.",
    icon: "GraduationCap",
    features: [
      "Live Class + Rekaman Video",
      "Mentor 1-on-1",
      "Sertifikat Resmi",
      "Akses Komunitas Alumni",
      "Project Portfolio",
      "Garansi Ulang Kelas",
    ],
    startPrice: "Rp 299.000",
  },
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

export const COURSES = [
  {
    id: "fullstack-web",
    title: "Fullstack Web Development",
    level: "Intermediate",
    duration: "12 minggu",
    price: "Rp 2.499.000",
    originalPrice: "Rp 3.499.000",
    students: 320,
    rating: 4.9,
    popular: true,
    description:
      "Kuasai React, Next.js, Node.js, dan database dari nol hingga siap kerja. Bangun 5 proyek portfolio nyata.",
    curriculum: [
      "HTML, CSS & JavaScript Fundamentals",
      "React & Next.js App Router",
      "Backend dengan Node.js & Express",
      "Database: PostgreSQL & MongoDB",
      "Authentication & Deployment",
      "Final Project: Build Your SaaS",
    ],
    tag: "Most Popular",
  },
  {
    id: "frontend-react",
    title: "Frontend Mastery with React",
    level: "Beginner",
    duration: "8 minggu",
    price: "Rp 1.499.000",
    originalPrice: "Rp 1.999.000",
    students: 280,
    rating: 4.8,
    popular: false,
    description:
      "Jadi frontend developer handal. Pelajari React, state management, styling modern, hingga testing.",
    curriculum: [
      "JavaScript Modern (ES6+)",
      "React Hooks & Context API",
      "Tailwind CSS & Component Library",
      "State Management (Zustand/Redux)",
      "API Integration & React Query",
      "Testing dengan Jest & RTL",
    ],
    tag: "Beginner Friendly",
  },
  {
    id: "backend-nodejs",
    title: "Backend Engineering Node.js",
    level: "Advanced",
    duration: "10 minggu",
    price: "Rp 1.999.000",
    originalPrice: "Rp 2.799.000",
    students: 180,
    rating: 4.9,
    popular: false,
    description:
      "Bangun API production-grade dengan Node.js, TypeScript, dan arsitektur yang scalable.",
    curriculum: [
      "TypeScript & Clean Architecture",
      "Express & Fastify Framework",
      "PostgreSQL & Prisma ORM",
      "Authentication (JWT, OAuth)",
      "Caching, Queue & Microservices",
      "Deployment dengan Docker & AWS",
    ],
    tag: "Advanced Track",
  },
  {
    id: "mobile-reactnative",
    title: "Mobile App dengan React Native",
    level: "Intermediate",
    duration: "10 minggu",
    price: "Rp 1.799.000",
    originalPrice: "Rp 2.499.000",
    students: 145,
    rating: 4.7,
    popular: false,
    description:
      "Bangun aplikasi mobile cross-platform untuk iOS & Android dengan React Native & Expo.",
    curriculum: [
      "React Native Fundamentals",
      "Navigation & Routing",
      "Native APIs & Expo",
      "State Management Mobile",
      "Push Notification & Offline",
      "Publish ke App Store & Play Store",
    ],
    tag: "Hot",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design for Developer",
    level: "Beginner",
    duration: "6 minggu",
    price: "Rp 899.000",
    originalPrice: "Rp 1.299.000",
    students: 210,
    rating: 4.8,
    popular: false,
    description:
      "Pelajari prinsip desain, Figma, design system, dan cara kolaborasi dengan designer profesional.",
    curriculum: [
      "Design Principles & Psychology",
      "Figma dari Nol hingga Mahir",
      "Wireframing & Prototyping",
      "Design System & Tokens",
      "User Research & Testing",
      "Handoff ke Developer",
    ],
    tag: "New",
  },
  {
    id: "devops-fundamentals",
    title: "DevOps & Cloud Fundamentals",
    level: "Intermediate",
    duration: "8 minggu",
    price: "Rp 1.699.000",
    originalPrice: "Rp 2.299.000",
    students: 95,
    rating: 4.9,
    popular: false,
    description:
      "Kuasai Docker, CI/CD, Kubernetes, dan deploy ke AWS/GCP. Skill wajib untuk developer modern.",
    curriculum: [
      "Linux & Shell Scripting",
      "Docker & Docker Compose",
      "CI/CD dengan GitHub Actions",
      "Kubernetes Fundamentals",
      "AWS & GCP Essentials",
      "Monitoring & Observability",
    ],
    tag: "Pro",
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
  },
  {
    name: "Anindya Putri",
    role: "Alumni Fullstack Web",
    content:
      "Setelah 3 bulan di Arlay, saya diterima sebagai junior developer di startup fintech. Mentornya sabar dan kurikulumnya sangat aplikatif.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Bima Pradana",
    role: "CTO, Logistik Cepat",
    content:
      "Arlay mengerjakan dashboard operasional kami dari 0. Hasilnya rapi, cepat, dan dokumentasinya lengkap. Tim terbaik yang pernah kami ajak kerja sama.",
    rating: 5,
    avatar: "BP",
  },
  {
    name: "Citra Wulandari",
    role: "Alumni Frontend React",
    content:
      "Dari yang tadinya cuma bisa HTML, sekarang saya freelance bikin landing page dengan rate internasional. Worth every rupiah!",
    rating: 5,
    avatar: "CW",
  },
  {
    name: "Dimas Aditya",
    role: "Owner, Batik Cendana",
    content:
      "Proses dari brief sampai launch cuma 5 minggu. Desainnya modern, admin panelnya mudah dipakai ibu saya yang bukan orang IT.",
    rating: 5,
    avatar: "DA",
  },
  {
    name: "Elvina Hartono",
    role: "Alumni UI/UX Design",
    content:
      "Instrukturnya designer aktif di industri, jadi materinya selalu update. Portofolio yang saya bangun di sini langsung dapat klien pertama.",
    rating: 5,
    avatar: "EH",
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
    role: "Co-Founder & Head of Education",
    bio: "Former tech educator di bootcamp ternama. Passionate mencetak 500+ developer siap kerja setiap tahun.",
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
    q: "Berapa lama proses pembuatan website?",
    a: "Tergantung kompleksitas. Company profile biasanya 2-3 minggu, e-commerce 4-6 minggu, dan aplikasi web custom 6-12 minggu. Kami selalu berikan timeline detail di awal proyek.",
  },
  {
    q: "Apakah ada garansi setelah website selesai?",
    a: "Ya, kami berikan garansi bug fix selama 3 bulan dan maintenance gratis 1 bulan pasca launch. Setelah itu tersedia paket maintenance bulanan sesuai kebutuhan.",
  },
  {
    q: "Kelas coding cocok untuk yang belum pernah ngoding?",
    a: "Sangat cocok. Kami punya track khusus untuk pemula dengan pendekatan step-by-step. Banyak alumni kami yang mulai dari nol dan sekarang bekerja sebagai developer.",
  },
  {
    q: "Apakah dapat sertifikat setelah selesai kelas?",
    a: "Ya, setiap alumni mendapat sertifikat resmi dari Arlay yang bisa dicantumkan di CV dan LinkedIn. Sertifikat diverifikasi dengan QR code.",
  },
  {
    q: "Bisakah cicil pembayaran?",
    a: "Bisa. Kami menyediakan opsi cicilan 0% hingga 12 bulan untuk kelas coding dan proyek di atas Rp 10 juta.",
  },
];
