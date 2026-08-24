import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import OrderButtons from "@/components/OrderButtons";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* utility bar */}
      <div className="bg-coral text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-xs">
          <span>{siteConfig.phone} · Parkdale Mall Food Court</span>
          <span className="hidden sm:inline">Open daily</span>
        </div>
      </div>
      {/* main nav */}
      <div className="border-b border-indigo/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-display text-2xl uppercase tracking-wide text-indigo">
              {siteConfig.name}
            </Link>
            <nav className="hidden gap-6 text-sm sm:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-ink/70 transition-colors hover:text-coral"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {/* mobile menu — visible only below the sm breakpoint */}
            <details className="relative sm:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-indigo/20 p-2 text-indigo marker:content-['']">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="absolute left-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-indigo/20 bg-paper shadow-xl">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-3 text-sm text-ink transition-colors hover:bg-cream"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>
            <OrderButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
