import Link from "next/link";
import { Instagram, Linkedin, Github, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const productLinks = [
  { label: "Jasa Website", href: "/layanan#web-development" },
  { label: "Kelas Coding", href: "/kelas" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tentang Kami", href: "/tentang" },
];

const resourceLinks = [
  { label: "Kontak", href: "/kontak" },
  { label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
  { label: "Email Support", href: `mailto:${SITE_CONFIG.email}` },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-40" />

      <div className="container relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigasi
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Layanan
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Kontak
              </h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arlay. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink href={SITE_CONFIG.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={SITE_CONFIG.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={SITE_CONFIG.social.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={SITE_CONFIG.social.youtube} label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </a>
  );
}
