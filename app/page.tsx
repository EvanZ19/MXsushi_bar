import Image from "next/image";
import Link from "next/link";
import SoyDrop from "@/components/SoyDrop";
import OrderButtons from "@/components/OrderButtons";
import { siteConfig } from "@/lib/site-config";
import { popularRolls, menuCategories } from "@/lib/menu-data";

// Atmosphere photos — save files with these exact names into /public
const bigPhoto = { src: "/counter.png", label: "The counter" };
const smallPhotos = [
  { src: "/rolls.png", label: "Fresh rolls" },
  { src: "/sashimi.png", label: "Sashimi" },
];

// Pull a curated set of additional rolls for the horizontal "conveyor belt" strip
function findItem(name: string) {
  for (const cat of menuCategories) {
    const item = cat.items.find((i) => i.name === name);
    if (item) return item;
  }
  return undefined;
}
const conveyorNames = [
  "Philadelphia Roll",
  "Spicy Salmon Roll",
  "Caterpillar Roll",
  "Tiger Eyes Roll",
  "Grilled Salmon Roll",
  "Spider Roll",
  "Sunset Roll",
  "Pokebowl",
];
const conveyorItems = conveyorNames.map(findItem).filter(Boolean) as { name: string; price: string; desc?: string }[];

export default function Home() {
  const [featured, ...rest] = popularRolls;

  return (
    <>
      {/* Split-screen hero */}
      <section className="grid md:min-h-[80vh] md:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-indigo px-6 py-16 sm:px-10 md:px-16">
          {/* diagonal accent shape */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-12 bg-coral/20" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rotate-12 bg-white/5" />

          <p className="relative mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
            Beaumont, TX · Parkdale Mall
          </p>
          <h1 className="relative font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Fresh
            <br />
            cuts.
            <br />
            <span className="text-coral">Fast</span> rolls.
          </h1>
          <p className="relative mt-6 max-w-sm text-white/75">
            Hand-pressed nigiri, sashimi, and made-to-order rolls — sushi-bar
            quality without the sit-down wait.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center gap-4">
            <OrderButtons variant="large" />
            <Link
              href="/menu"
              className="rounded-full border border-white/40 px-6 py-3 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              View full menu
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-0">
          {/* Save your best photo (rolls or counter) as /public/hero.png */}
          <Image
            src="/hero.png"
            alt={`${siteConfig.fullName} sushi`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 flex h-24 w-24 items-center justify-center rounded-full border border-indigo/20 bg-paper shadow-md">
            <SoyDrop />
          </div>
        </div>
      </section>

      {/* Bento grid — popular rolls */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl uppercase text-ink sm:text-4xl">
          The Bento Grid
        </h2>
        <p className="mt-2 text-sm text-ink/50">Our most-ordered rolls, at a glance.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[170px]">
          {/* featured tile — spans 2x2, photo as background */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-lg bg-indigo">
            {featured.image && (
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Most ordered</p>
                <h3 className="mt-3 font-display text-3xl uppercase">{featured.name}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/70">{featured.desc}</p>
              </div>
              <span className="font-display text-2xl text-coral">{featured.price}</span>
            </div>
          </div>

          {rest.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg border border-indigo/15 transition-colors hover:border-coral/50"
            >
              {item.image && (
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base uppercase text-ink">{item.name}</h3>
                  <span className="whitespace-nowrap text-coral">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="thin-rule mx-auto max-w-6xl" />

      {/* Conveyor belt — horizontal scroll */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl uppercase text-ink sm:text-4xl">
                More From The Belt
              </h2>
              <p className="mt-2 text-sm text-ink/50">Swipe to browse →</p>
            </div>
            <Link href="/menu" className="hidden text-sm text-indigo hover:text-coral sm:block">
              See the full menu →
            </Link>
          </div>
        </div>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
          {conveyorItems.map((item) => (
            <div
              key={item.name}
              className="w-64 flex-shrink-0 snap-start rounded-lg border border-indigo/15 bg-paper p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-base uppercase text-ink">{item.name}</h3>
                <span className="whitespace-nowrap text-coral">{item.price}</span>
              </div>
              {item.desc && <p className="mt-2 text-xs text-ink/50">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetric atmosphere photos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl uppercase text-ink sm:text-4xl">
          Quick counter, real craft
        </h2>
        <p className="mt-2 max-w-md text-sm text-ink/60">
          Every roll is pressed to order — grab a bento between errands, or
          sit down with a sashimi plate. Either way, it&apos;s fresh.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-indigo/20 bg-paper md:col-span-2">
            <Image src={bigPhoto.src} alt={bigPhoto.label} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded bg-ink/60 px-2 py-1 text-xs text-white">
              {bigPhoto.label}
            </span>
          </div>
          <div className="grid grid-rows-2 gap-4">
            {smallPhotos.map((tile) => (
              <div key={tile.label} className="relative overflow-hidden rounded-lg border border-indigo/20 bg-paper">
                <Image src={tile.src} alt={tile.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <span className="absolute bottom-2 left-2 rounded bg-ink/60 px-2 py-0.5 text-xs text-white">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band with pattern texture */}
      <section className="relative overflow-hidden bg-indigodark py-24 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0 2px, transparent 2px 40px)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl uppercase text-white sm:text-4xl">
            Order delivery or call ahead
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/60">
            {siteConfig.address.line1}, {siteConfig.address.line2}
          </p>
          <div className="mt-8 flex justify-center">
            <OrderButtons variant="large" />
          </div>
        </div>
      </section>
    </>
  );
}
