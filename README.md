# Grow My Therapy — Front-End Internship Assignment

A Next.js redesign of a real therapist homepage, cloned for layout and section
rhythm, then completely re-themed, re-copywritten, and re-imaged around a
fictional therapist persona: **Dr. Maya Reynolds, PsyD**.

---

## Project Overview

This project fulfills the Grow My Therapy internship practical assignment:

1. **Clone** the homepage layout, section order, and structural rhythm of
   [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
2. **Redesign** the visual identity, copy, and imagery around Dr. Maya
   Reynolds' profile — a licensed clinical psychologist in Santa Monica, CA.
3. **Add one new section**, "Our Office," that didn't exist in the original
   template.

The goal throughout was to make both things true at once: a reviewer should
be able to recognize the original's layout DNA, *and* immediately believe
this is a real, cohesive website built for therapy specifically not a
generic redesign with her name pasted on top.

---

## Tech Stack

- **Next.js** (App Router) — React framework, static homepage
- **TypeScript** — typed components and content data
- **Tailwind CSS v4** — utility-first styling, CSS-variable-based theme
- **@fontsource/fraunces** — serif display typeface (headings)
- **@fontsource/inter** — sans-serif body typeface
- No component library, no backend, no database, no auth — intentionally
  kept simple per the assignment's scope

---

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

**Build for production:**

```bash
npm run build
npm run start
```

**Lint:**

```bash
npm run lint
```

All three commands are verified to run clean with zero errors as of the
latest commit.

---

## Project Structure

```
src/
  app/
    layout.tsx        # root layout, metadata, fonts, skip link
    page.tsx           # homepage — assembles all sections + JSON-LD
    globals.css         # theme tokens (colors, spacing, typography)
  components/
    layout/
      Header.tsx        # sticky nav, accessible mobile menu
      Footer.tsx         # address, nav, contact summary
    sections/
      Hero.tsx           # headline, subheadline, dual paired images, CTAs
      IntroBelief.tsx      # empathy/intro statement
      WhoIHelp.tsx          # 3-card grid: client personas
      FocusAreas.tsx         # pull-quote + tag list of clinical focus areas
      HowIWork.tsx            # merged About + Approach narrative section
                                (see note below)
      Services.tsx             # 3 core service cards
      OurOffice.tsx              # NEW custom section — office gallery
      FAQ.tsx                     # accessible accordion
      FinalCta.tsx                  # contact / office visit section
    ui/
      Button.tsx, Container.tsx, Reveal.tsx, SectionHeading.tsx, Accordion.tsx
  data/
    site.ts              # single source of truth for ALL homepage copy,
                            nav, CTA labels, and image references
public/
  assets/images/          # Maya's portrait + real office photographs
```

**Why content lives in `site.ts`:** every section component reads its copy,
labels, and image paths from this one file rather than hardcoding strings
inline. This keeps content and presentation separated, makes future edits
(a new CTA label, a corrected fact) a one-line change, and made it much
easier to audit the whole site for accuracy against Maya's profile.

**Note on `HowIWork.tsx`:** the original reference homepage has exactly one
narrative "How We Work" section (photo + text) in that position on the
page — not two separate blocks. So Maya's biography and her therapeutic
approach are combined into a single continuous section here, rather than
split into two stacked sections, specifically to keep the section rhythm
faithful to the original site. It still exposes two in-page anchors,
`#about` and `#approach`, so both nav items scroll to a meaningful spot
inside that one section.

---

## Design System

| Token | Value | Use |
|---|---|---|
| Background | `#F7F4EE` | Page background, warm ivory |
| Primary | `#314A43` | Deep sage — headings, primary buttons |
| Secondary | `#D8DED5` | Muted sage — soft backgrounds, blobs |
| Accent | `#B97961` | Muted terracotta — kickers, links, highlights |
| Text | `#26332F` | Body copy |
| Light | `#EEF1EA` | Card backgrounds, borders |

- **Display font:** Fraunces (serif, editorial headings)
- **Body font:** Inter (clean sans-serif)
- Generous whitespace, restrained shadows, no glassmorphism, no gradients —
  deliberately avoiding a generic "SaaS" or "medical blue" aesthetic in
  favor of something that reads as a premium, calm private practice.

---

## How the Original Homepage Was Cloned

Section-by-section mapping from the original site to this one:

| Original (Conejo Valley Counseling) | This site | Notes |
|---|---|---|
| Hero: eyebrow + headline + CTA + paired images | `Hero.tsx` | Same structure, all-new copy/images |
| "You're holding onto hope..." intro | `IntroBelief.tsx` | Same position and function |
| "Who we help" — 3 image cards | `WhoIHelp.tsx` | Same card pattern, Maya's 3 client personas |
| Quote + "Areas of expertise" tag list | `FocusAreas.tsx` | Merged into one section, same as original |
| "How we work" narrative | `HowIWork.tsx` | One merged section (see note above) |
| "Our specialties" — grid of cards | `Services.tsx` | Reduced to exactly 3, per assignment spec |
| "Schedule an appointment" CTA band | `FinalCta.tsx` | Same position, truthful CTA (see below) |
| — | `OurOffice.tsx` | **New**, required by the assignment |
| — | `FAQ.tsx` | New, permitted addition |
| Footer | `Footer.tsx` | Same structural role |

---

## Content & Copy

All homepage copy is original writing based strictly on Dr. Maya Reynolds'
supplied profile. Nothing was invented:

- No fabricated years of experience, awards, insurance info, pricing, or
  testimonials
- No invented phone number or email address (none were provided)
- Structured data (JSON-LD) correctly identifies Maya as a **Psychologist**,
  not a psychiatrist or generic "MedicalBusiness"

**Local SEO** keywords worked naturally into headings and body copy:
Santa Monica therapist, anxiety therapist Santa Monica, trauma therapy
Santa Monica, EMDR therapist Santa Monica, burnout therapist Santa Monica,
licensed clinical psychologist Santa Monica, California telehealth therapy.

---

## CTA Design Decision

The supplied profile intentionally includes no phone number, email, or
booking link. Rather than inventing a fake "Book Now" flow, every CTA
button is labeled **"Visit the Office"** — a truthful description of what
it actually does: it scrolls to the Contact section, which displays the
real office address and a **"Get Directions"** button linking to Google
Maps with that exact address.

---

## Images

| File | Used in |
|---|---|
| `maya-portrait.png` | About/HowIWork section (used once, deliberately — see below) |
| `office-1.jpg` | Hero, WhoIHelp, Our Office |
| `office-2.jpg` | IntroBelief, WhoIHelp, Our Office |

Maya's portrait appears exactly once on the page, in the About section —
not repeated in the Hero or elsewhere — so it doesn't compete with itself
for the reader's attention and stays tied specifically to "meeting Maya."

Every image includes descriptive alt text, uses `next/image` for
responsive sizing and `object-fit`, and no image was invented — all are
either Maya's supplied portrait, her actual office photos, or clearly
sourced stock/lifestyle photography chosen to match the theme.

---

## Accessibility

- Semantic HTML and correct heading hierarchy throughout
- Skip-to-content link
- Accessible mobile menu (`aria-expanded`, `aria-controls`, scroll lock)
- Accessible FAQ accordion (keyboard operable, proper ARIA state)
- Visible focus states on all interactive elements
- Sufficient color contrast between text and background
- `prefers-reduced-motion` respected for all reveal/hover animations

---

## Responsive Testing

Verified with no horizontal overflow, no overlapping content, and no
broken images at:

- 375px / 390px (mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1440px+ (large desktop)

---

## What's Intentionally Not Included

Per the assignment's scope guidance, this project deliberately excludes:

- Authentication, a database, or a CMS
- A real booking/scheduling system (none was provided in the profile)
- Multiple pages/routes beyond the homepage
- Any fabricated credentials, testimonials, or contact information