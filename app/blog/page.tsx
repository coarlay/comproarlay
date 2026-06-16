import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description:
    "Tips, insight, dan panduan seputar web development, digital marketing, dan teknologi dari tim Arlay.",
};

const BLOG_POSTS = [
  {
    slug: "cara-memilih-jasa-pembuatan-website",
    title: "7 Cara Memilih Jasa Pembuatan Website yang Tepat untuk Bisnis Anda",
    excerpt:
      "Memilih vendor website bukan perkara mudah. Berikut 7 kriteria penting yang harus Anda perhatikan sebelum memutuskan partner digital.",
    category: "Tips Bisnis",
    date: "2024-12-15",
    readTime: "5 menit",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "mengapa-website-penting-untuk-umkm",
    title: "Mengapa Website Penting untuk UMKM di Era Digital 2025?",
    excerpt:
      "Di era digital, 81% konsumen mencari produk secara online sebelum membeli. Tanpa website, bisnis Anda kehilangan potensi besar.",
    category: "Digital Marketing",
    date: "2024-11-28",
    readTime: "4 menit",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    slug: "nextjs-vs-wordpress-mana-yang-lebih-baik",
    title: "Next.js vs WordPress: Mana yang Lebih Cocok untuk Bisnis Anda?",
    excerpt:
      "Perbandingan lengkap antara Next.js dan WordPress dari segi performa, SEO, keamanan, dan biaya. Panduan memilih platform yang tepat.",
    category: "Teknologi",
    date: "2024-11-10",
    readTime: "7 menit",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
  },
  {
    slug: "optimasi-seo-website-bisnis",
    title: "Panduan SEO 2025: Cara Optimasi Website Bisnis agar Ranking #1 Google",
    excerpt:
      "Dari riset keyword hingga technical SEO, pelajari strategi lengkap untuk membuat website bisnis Anda mendominasi halaman pertama Google.",
    category: "SEO",
    date: "2024-10-22",
    readTime: "8 menit",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    slug: "berapa-biaya-membuat-website",
    title: "Berapa Biaya Membuat Website di 2025? Panduan Lengkap & Transparan",
    excerpt:
      "Breakdown biaya pembuatan website dari yang paling sederhana hingga enterprise. Termasuk biaya tersembunyi yang jarang dibahas.",
    category: "Tips Bisnis",
    date: "2024-10-05",
    readTime: "6 menit",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    slug: "tren-desain-website-2025",
    title: "10 Tren Desain Website 2025 yang Wajib Anda Ketahui",
    excerpt:
      "Dari glassmorphism hingga AI-powered personalization, kenali tren desain website terbaru yang bisa meningkatkan konversi bisnis Anda.",
    category: "Desain",
    date: "2024-09-18",
    readTime: "5 menit",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & Artikel"
        title="Insight & tips dari tim Arlay"
        description="Pelajari hal-hal terbaru seputar web development, digital marketing, dan cara mengembangkan bisnis Anda di era digital."
      />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge variant="default" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
                    {post.title}
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Baca selengkapnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}