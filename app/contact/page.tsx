import { siteConfig } from "@/lib/site-config";
import OrderButtons from "@/components/OrderButtons";

export const metadata = {
  title: `Contact — ${siteConfig.name}`,
};

const mapQuery = encodeURIComponent(`${siteConfig.address.line1}, ${siteConfig.address.line2}`);

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-indigo">Visit us</p>
      <h1 className="font-display text-4xl uppercase text-ink sm:text-5xl">Find us in Parkdale Mall</h1>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div>
          <div className="space-y-1 text-ink/80">
            <p className="font-display text-xl uppercase text-ink">Address</p>
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-coral hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="mt-8 space-y-1 text-ink/80">
            <p className="font-display text-xl uppercase text-ink">Reach us</p>
            <p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-coral">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div className="mt-8">
            <p className="font-display text-xl uppercase text-ink">Hours</p>
            <table className="mt-2 w-full max-w-sm text-sm text-ink/80">
              <tbody>
                {siteConfig.hours.map((h) => (
                  <tr key={h.day} className="border-b border-indigo/10">
                    <td className="py-2">{h.day}</td>
                    <td className="py-2 text-right text-ink/60">{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <p className="mb-2 font-display text-xl uppercase text-ink">Order</p>
            <OrderButtons variant="large" />
          </div>
        </div>

        <div>
          <div className="aspect-video w-full overflow-hidden rounded-md border border-indigo/20">
            <iframe
              title="Map to MX Sushi Bar"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-ink/40">
            No card needed here — delivery orders go through DoorDash, and
            pickup orders are placed by phone.
          </p>
        </div>
      </div>
    </section>
  );
}
