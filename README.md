# Grow My Therapy — Dr. Maya Reynolds, PsyD

A Next.js (App Router) + TypeScript + Tailwind CSS homepage built for the
Front-End Developer Internship assignment: **clone → redesign → extend.**

- **Phase 1:** Structure/layout reproduced from the original
  [Conejo Valley Family Counseling homepage](https://www.conejovalleycounseling.com/home)
  (section order, grids, hero composition, image-pair layout, tag list,
  specialty-grid pattern, closing CTA band, footer shape).
- **Phase 2:** Fully redesigned/re-branded for the fictional therapist
  **Dr. Maya Reynolds, PsyD** — new palette, typography, imagery, and copy,
  all sourced only from her supplied profile (see `src/data/site.ts`).
- **Phase 3:** A brand-new **"Our Office"** section (`src/components/sections/OurOffice.tsx`)
  that does not exist in the original template.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

Both `npm run lint` and `npm run build` currently pass with **zero errors and
zero warnings**.

---

## 2. Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata/SEO, header/footer shell
    page.tsx           # assembles all homepage sections + JSON-LD
    globals.css         # theme tokens (CSS variables), fonts, base styles
  components/
    layout/
      Header.tsx        # sticky nav + mobile menu
      Footer.tsx
    sections/            # one component per homepage section
      Hero.tsx
      IntroBelief.tsx
      WhoIHelp.tsx
      FocusAreas.tsx
      HowIWork.tsx       # merged About + Approach (see note below)
      Services.tsx
      OurOffice.tsx      # ← required new custom section
      FAQ.tsx
      FinalCta.tsx
    ui/                  # reusable primitives
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      Accordion.tsx
      Reveal.tsx         # IntersectionObserver-based scroll-reveal wrapper
  data/
    site.ts              # single source of truth for all copy/content
public/
  assets/images/          # Maya's portrait + real office photos
  manifest.json
```

All homepage copy lives in **`src/data/site.ts`** — nothing is hardcoded
inside components. This was intentional so the "single source of truth"
requirement from the assignment is enforced structurally, not just by
convention.

**Note on `HowIWork.tsx`:** the original reference homepage has exactly one
narrative "How We Work" section (photo + text) in this position — not two
separate blocks. So Maya's bio and her therapeutic approach are combined
into a single continuous section here, rather than two stacked sections,
to keep the section rhythm faithful to the original. It still exposes two
in-page anchors, `#about` and `#approach`, so both nav items resolve to a
meaningful spot inside that one section.

---

## 3. Design system

CSS variables are defined once in `src/app/globals.css` and mapped into
Tailwind v4 via `@theme inline`, so every color is a token:

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#F7F4EE` | page background |
| `--color-surface` | `#EEF1EA` | alternating light sections |
| `--color-primary` / `-dark` | `#314A43` / `#24352F` | headings, dark bands, buttons |
| `--color-secondary` | `#D8DED5` | footer text, dividers |
| `--color-accent` / `-dark` | `#B97961` / `#A3634C` | CTAs, kickers, highlights |
| `--color-ink` / `-soft` | `#26332F` / `#5B6B62` | body copy |

Typography: **Fraunces** (editorial serif, self-hosted via `@fontsource`)
for headings, **Inter** (self-hosted) for body/UI. Fonts are bundled
locally rather than pulled from Google Fonts at build time, so the build
has no external font-fetching dependency.

---

## 4. Images you should replace

The photos currently in `public/assets/images/` are the real assets you
provided (Maya's portrait + two office photos). If you get additional or
higher-resolution shots later, just replace these files **in place** (same
filenames) and everything updates automatically — no code changes needed:

| File | Used in |
|---|---|
| `maya-portrait.png` | Hero, About section |
| `office-1.jpg` | Hero accent image, Who I Help, Our Office |
| `office-2.jpg` | Intro banner, Our Office |

If you add a **third** office photo, it's easy to slot into the
`ourOffice.images` array in `src/data/site.ts` and extend the composition
in `OurOffice.tsx`.

---

## 5. A note on the CTA / contact flow

The provided profile intentionally does not include a phone number, email
address, or booking link, and the assignment instructions are explicit
about not inventing those. So the CTA is labeled **"Visit the Office"**
everywhere it appears (header, hero, mobile nav) rather than something
that implies a booking flow that doesn't exist — the label matches exactly
what it does. It scrolls to an in-page **Contact** section that shows the
real office address and a **"Get Directions"** button that opens Google
Maps with that exact address — a real, working link rather than a
placeholder. If a real phone/email/booking system becomes available, swap
`ctaLabel` in `src/data/site.ts` for something like "Schedule a Session"
and add a `tel:`, `mailto:`, or scheduling-tool link in
`src/components/sections/FinalCta.tsx`.

---

## 6. Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

**Option B — Git + Vercel dashboard**

1. Push this project to a GitHub repo (see below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Deploy.

---

## 7. Pushing to GitHub

```bash
git init
git add .
git commit -m "Grow My Therapy — Dr. Maya Reynolds homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 8. Manual QA checklist before submitting

- [ ] View at ~375px, ~390px, 768px, 1280px, 1440px — no horizontal scroll,
      no clipped text, mobile nav opens/closes/scroll-locks correctly.
- [ ] Click every nav link and the "Visit the Office" CTA in
      header, hero, and closing band — confirm smooth scroll to the right
      section.
- [ ] Click "Get Directions to the Office" and confirm it opens Google
      Maps at the correct address.
- [ ] Open/close a few FAQ items.
- [ ] Check the browser console for warnings/errors on load and on resize.
- [ ] Confirm all three images (portrait, office-1, office-2) load with no
      broken-image icon.
- [ ] Re-read `src/data/site.ts` once more against the original profile to
      confirm nothing was invented.
- [ ] Record the 5-minute walkthrough video (Part 4 of the assignment —
      not something I can produce for you, but the site is ready to
      screen-record).

---

## 9. What's deliberately *not* included

- No booking/contact form (would require a backend or a fabricated email —
  out of scope and against the "don't invent info" instruction).
- No additional routes/pages beyond the homepage, per the assignment's
  explicit instruction to keep the homepage as the main deliverable.
- No pricing, insurance, or "years of experience" claims — none were in
  the source profile.
