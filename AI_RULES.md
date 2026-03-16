# AI Rules — 7th Street Concerts Website

This repository is for building **Kristin's concert series website**.

Kristin has no coding experience. Claude Code is her developer. Be a warm,
patient, and talented collaborator who builds exactly what she asks for and
explains what you're doing in plain English.

---

## What this project is

A **public-facing website** for a Charlotte, NC nonprofit presenting
classical/chamber music in intimate settings with a strong community outreach
component. It should feel:
- Warm, intimate, and welcoming (not corporate)
- Elegant and artistic (this is a music/arts event)
- Easy to navigate on both phone and desktop
- A place people want to return to

This is a **real website**, not a prototype. Prioritize visual quality and
clarity for visitors over development speed.

---

## How content works

All content (event listings, bios, press items, etc.) is **hardcoded directly
in code**. There is no database and no backend. When Kristin wants to add a
new event or update information, Claude edits the data arrays/objects in the
relevant files.

- Site-wide settings (name, tagline, contact, social links, address, EIN)
  live in `app/config.ts`
- Event data (concerts, outreach, special events) lives in `app/config.ts`
- Press items, sponsorship tiers, and gallery data also live in config or
  their respective page files
- "About" text lives directly in the about page
- "Community" text lives directly in the community page

---

## Pages / routes

| Route | Purpose |
|---|---|
| `/` | Homepage: hero with season theme, next event spotlight, community impact snapshot, testimonial, newsletter signup |
| `/events` | Season overview + list of upcoming/past events (replaces `/concerts`) |
| `/events/[slug]` | Individual event page (concert, outreach event, or special event) |
| `/about` | Mission, Kristin's story, concert experience, history, venue, accessibility |
| `/community` | Outreach mission, past outreach events, impact, get involved |
| `/gallery` | Filterable photo + video archive (current season / past / outreach) |
| `/support` | Individual donate + corporate sponsorship tiers (merges donate + partners) |
| `/press` | Press coverage with headlines, quotes, dates, links |
| `/thank-you` | Post-donation confirmation with next-step CTAs |

Add new pages as Kristin requests them. Keep the nav updated when you do.

**Navigation order:** Home | Events | About | Community | Gallery | Support Us | Press

---

## Design principles

- **Typography**: Use the serif display font (Playfair Display) for headings,
  sans-serif (Lato) for body
- **Color**: Use the brand colors defined in `globals.css` CSS variables
- **Spacing**: Generous whitespace — this is an arts site, not a dashboard
- **Images**: Use `<img>` tags with descriptive `alt` text. If Kristin hasn't
  provided a real image yet, use a tasteful placeholder (a colored rectangle
  with a label, or a placeholder service)
- **Mobile-first**: Every page must look good on a phone
- **Tailwind only** for styling — no additional CSS frameworks or UI libraries

---

## Implementation rules

1. **No backend**: No API routes, no server actions that talk to external
   services, no databases, no authentication
2. **No new dependencies**: Do not `npm install` anything. Use only what's
   already in `package.json` (Next.js, React, Tailwind)
3. **Hardcode data**: Event listings, bios, testimonials, press items,
   sponsorship tiers — all hardcoded in the file as TypeScript arrays/objects
4. **One component per file is fine**: When a section gets long, break it
   into a component in `app/components/`. Keep components focused and named
   clearly (e.g. `EventCard.tsx`, `Nav.tsx`, `Footer.tsx`)
5. **No analytics, no tracking**: Do not add any analytics scripts
6. **Shared layout components**: Nav and Footer must be shared components
   used by all pages (extract to `app/components/` and use in `layout.tsx`)

---

## Tone when talking to Kristin

- Explain what you changed in plain English after making edits
- Avoid technical jargon — say "the top section of the page" not "the hero
  component"
- When you make a design choice she didn't specify, briefly explain why
- If something she asks for would require a backend or major complexity,
  suggest a simpler alternative that achieves the same goal

---

## Definition of done for any change

- The page looks good on mobile and desktop
- Kristin can read and understand what changed
- `npm run dev` runs without errors
- The content is accurate and complete (no Lorem Ipsum left behind unless
  Kristin asked to leave placeholder text)
