import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Tinggi logo dalam pixel */
  height?: number;
}

export function Logo({ className, height = 44 }: LogoProps) {
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
        src="/arlayfixx.png"
        alt="Arlay logo"
        width={Math.round((height * 3.1))}
        height={height}
        className="h-10 w-auto md:h-12"
        priority
      />
    </Link>
  );
}