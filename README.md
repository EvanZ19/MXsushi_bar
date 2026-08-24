# MX Sushi Bar

A Next.js 14 (App Router) + TypeScript + Tailwind site for MX Sushi Bar in
Parkdale Mall, Beaumont, TX. UI-only — no accounts, no backend, no payment
handling. This is a separate project from the Sweet Basil site — nothing
here overwrites or depends on it.

Pages: Home, Menu (full menu), About, Contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## How ordering works

Same pattern as Sweet Basil:

- **Delivery** — "Order Now" → Delivery opens MX Sushi Bar's existing
  DoorDash store page in a new tab.
- **Pickup** — "Order Now" → Pickup opens a `tel:` link with
  (409) 223-1303 pre-filled.

Both links live in `lib/site-config.ts` under `order.deliveryUrl` and
`order.pickupTel`.

## Where to customize

- **`lib/site-config.ts`** — name, address, phone, hours, order links.
- **`lib/menu-data.ts`** — the entire menu (Popular Rolls + every
  category: Appetizers, Cooked Rolls, Raw Rolls, Nigiri, Sashimi,
  Teriyaki Combos, Kid's Meal, Bento, Sides). The Menu page renders
  automatically from this file.
- **`app/page.tsx`** — home page copy and which 4 rolls are featured.
- **`app/about/page.tsx`** — the restaurant's story (currently
  placeholder — swap in the real founding story).
- **`app/contact/page.tsx`** — live Google Maps embed built from the
  address (no API key required).
- **Colors & fonts** — `tailwind.config.ts` (indigo/coral/paper/cream
  palette — deliberately different from the Sweet Basil site) and
  `app/layout.tsx` (Big Shoulders Display for bold headlines, Inter for
  body text).

## Photos

Save these filenames into `public/` to fill in the photo spots:

- `hero.png` — split-screen hero, right half (portrait/square works well here)
- `counter.png` — large atmosphere photo
- `rolls.png`, `sashimi.png` — the two smaller stacked atmosphere photos
- `dragon-roll.png` — the large featured Bento Grid tile
- `black-dragon-roll.png`, `rainbow-roll.png`, `spicy-tuna-roll.png`,
  `california-crunchy-roll.png` — the four smaller Bento Grid tiles

Any file you don't have yet just shows a broken-image icon until added —
nothing else breaks.

## Deploying

This site is a **fully static export** — no server, no database, no login,
so it can be hosted anywhere that serves static files, completely free,
with commercial use explicitly allowed:

- **Netlify** (recommended, closest workflow to Vercel): push to GitHub,
  import the repo at [netlify.com](https://netlify.com), leave build
  settings as default (`npm run build`, publish directory `out`), deploy.
- **Cloudflare Pages**: same idea — connect the GitHub repo, build
  command `npm run build`, output directory `out`.

Both are genuinely free for commercial/business use, unlike Vercel's free
Hobby tier which is personal-use only (Vercel Pro, $20/month, is the
compliant paid option if you'd rather stay on Vercel).

To build and preview the static export locally:

```bash
npm run build
npx serve out
```
