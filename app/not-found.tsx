import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/shared/animated-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20">
      <AnimatedBackground />
      <div className="container relative z-10 text-center">
        <p className="text-[120px] font-bold leading-none text-gradient md:text-[180px]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button size="lg">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Link href="/kontak">
            <Button size="lg" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
