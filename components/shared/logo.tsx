import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Tinggi logo dalam pixel. Lebarnya auto mengikuti aspect ratio 680:220. */
  height?: number;
  priority?: boolean;
}

export function Logo({ className, height = 36, priority = false }: LogoProps) {
  // aspect ratio dari viewBox SVG: 680 / 220
  const width = Math.round((height * 680) / 220);

  return (
    <Link
      href="/"
      aria-label="Arlay — kembali ke beranda"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-85",
        className
      )}
    >
      <Image
        src="/arlaylogo.png"
        alt="Arlay"
        width={width}
        height={height}
        priority={priority}
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
