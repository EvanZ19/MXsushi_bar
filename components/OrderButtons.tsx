import { siteConfig } from "@/lib/site-config";

export default function OrderButtons({
  variant = "compact",
}: {
  variant?: "compact" | "large";
}) {
  const buttonBase = variant === "large" ? "px-6 py-3 text-sm" : "px-4 py-1.5 text-sm";

  return (
    <details className="group relative">
      <summary
        className={`${buttonBase} inline-block cursor-pointer list-none rounded-full bg-coral font-medium text-white transition-transform marker:content-[''] hover:scale-[1.03]`}
      >
        Order Now
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-lg border border-indigo/20 bg-paper shadow-xl">
        <a
          href={siteConfig.order.deliveryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-indigo/10 px-5 py-4 text-sm text-ink transition-colors hover:bg-cream"
        >
          <span className="block font-medium text-indigo">Delivery</span>
          <span className="mt-0.5 block text-ink/60">Order online via DoorDash</span>
        </a>
        <a
          href={siteConfig.order.pickupTel}
          className="block px-5 py-4 text-sm text-ink transition-colors hover:bg-cream"
        >
          <span className="block font-medium text-indigo">Pickup</span>
          <span className="mt-0.5 block text-ink/60">Call {siteConfig.phone} to order</span>
        </a>
      </div>
    </details>
  );
}
