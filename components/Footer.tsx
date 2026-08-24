import { siteConfig } from "@/lib/site-config";
import OrderButtons from "@/components/OrderButtons";

export default function Footer() {
  return (
    <footer className="bg-indigodark">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl uppercase text-paper">{siteConfig.fullName}</p>
            <p className="mt-2 max-w-xs text-sm text-paper/70">{siteConfig.tagline}</p>
            <div className="mt-4">
              <OrderButtons />
            </div>
          </div>
          <div className="text-sm text-paper/80">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <div className="text-sm text-paper/80">
            <p className="mb-2 text-white/90">Hours</p>
            {siteConfig.hours.map((h) => (
              <p key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span className="text-right">{h.time}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="my-8 h-px bg-paper/15" />
        <p className="text-xs text-paper/50">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
