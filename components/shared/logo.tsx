import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Arlay homepage"
    >
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand glow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M4 20L12 4L20 20M7 14H17"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-primary/20 blur-xl transition-all group-hover:bg-primary/40" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Arlay
        </span>
      )}
    </Link>
  );
}
