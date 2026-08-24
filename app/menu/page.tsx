import { siteConfig } from "@/lib/site-config";
import { popularRolls, menuCategories } from "@/lib/menu-data";
import OrderButtons from "@/components/OrderButtons";

export const metadata = {
  title: `Menu — ${siteConfig.name}`,
};

export default function Menu() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-indigo">
            The full menu
          </p>
          <h1 className="font-display text-4xl uppercase text-ink sm:text-5xl">
            Rolls, nigiri & more
          </h1>
        </div>
        <OrderButtons variant="large" />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[200px_1fr]">
        {/* sticky sidebar nav */}
        <nav className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 text-sm md:sticky md:top-24 md:mx-0 md:flex-col md:gap-1 md:self-start md:overflow-visible md:px-0 md:pb-0">
          <a href="#popular" className="whitespace-nowrap border-l-2 border-coral py-1.5 pl-3 text-coral md:whitespace-normal">
            Popular Rolls
          </a>
          {menuCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="whitespace-nowrap border-l-2 border-transparent py-1.5 pl-3 text-ink/60 transition-colors hover:border-indigo/40 hover:text-indigo md:whitespace-normal"
            >
              {c.title}
            </a>
          ))}
        </nav>

        {/* content */}
        <div>
          <div id="popular" className="scroll-mt-24">
            <h2 className="font-display text-3xl uppercase text-coral">Popular Rolls</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {popularRolls.map((item) => (
                <div key={item.name} className="rounded-lg border border-coral/25 bg-coral/5 p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg uppercase text-ink">{item.name}</h3>
                    <span className="whitespace-nowrap text-coral">{item.price}</span>
                  </div>
                  {item.desc && <p className="mt-2 text-sm text-ink/60">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>

          {menuCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24 pt-16">
              <h2 className="font-display text-3xl uppercase text-ink">{cat.title}</h2>
              {cat.note && <p className="mt-2 max-w-2xl text-sm text-ink/50">{cat.note}</p>}
              <div className="mt-6 divide-y divide-indigo/10 border-t border-indigo/10">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                    <div>
                      <span className="text-ink">{item.name}</span>
                      {item.desc && <p className="mt-1 max-w-xl text-sm text-ink/50">{item.desc}</p>}
                    </div>
                    <span className="whitespace-nowrap text-coral">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-16 max-w-2xl text-xs text-ink/40">
            Menu items may contain shellfish, soy, egg, and sesame. Please let
            us know of any allergy before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
