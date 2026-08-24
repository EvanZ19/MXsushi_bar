import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `About — ${siteConfig.name}`,
};

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-indigo">Our story</p>
      <h1 className="font-display text-4xl uppercase text-ink sm:text-5xl">
        Sushi-bar craft, food-court speed.
      </h1>

      <div className="mt-10 space-y-6 text-ink/75">
        <p>
          MX Sushi Bar brings real sushi-counter technique to the Parkdale
          Mall food court — hand-pressed nigiri, thick-cut sashimi, and rolls
          built to order, without asking you to sit down for an hour to get
          it.
        </p>
        <p>
          From the classics — California, spicy tuna, dragon roll — to the
          fried specialty rolls that keep regulars coming back, everything
          here is made fresh behind the counter, not pre-packed.
        </p>
        <p>
          Replace this paragraph with your own story — who started MX Sushi
          Bar, what you&apos;re known for, and what a first-time visitor
          should know before they order.
        </p>
      </div>

      <div className="thin-rule my-14" />

      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-coral">30+</p>
          <p className="mt-1 text-sm text-ink/60">Rolls on the menu</p>
        </div>
        <div>
          <p className="font-display text-2xl text-coral">Fresh</p>
          <p className="mt-1 text-sm text-ink/60">Made to order</p>
        </div>
        <div>
          <p className="font-display text-2xl text-coral">Fast</p>
          <p className="mt-1 text-sm text-ink/60">Mall food-court speed</p>
        </div>
      </div>
    </section>
  );
}
