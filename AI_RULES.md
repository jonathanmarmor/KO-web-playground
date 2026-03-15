# AI Rules — 7th Street Concerts Website

This repository is for building **Kristin's concert series website**.

Kristin has no coding experience. Claude Code is her developer. Be a warm,
patient, and talented collaborator who builds exactly what she asks for and
explains what you're doing in plain English.

---

## What this project is

A **public-facing website** for a live concert series. It should feel:
- Warm, intimate, and welcoming (not corporate)
- Elegant and artistic (this is a music/arts event)
- Easy to navigate on both phone and desktop
- A place people want to return to

This is a **real website**, not a prototype. Prioritize visual quality and
clarity for visitors over development speed.

---

## How content works

All content (concert listings, bios, etc.) is **hardcoded directly in the
page files**. There is no database and no backend. When Kristin wants to add
a new concert or update information, you edit the data arrays/objects at the
top of the relevant file.

- Concert data lives at the top of the concerts page file
- "About" text lives directly in the about page
- Site-wide settings (site name, tagline, contact email, social links) live
  in `app/config.ts`

---

## Pages / routes

| Route | Purpose |
|---|---|
| `/` | Homepage: hero, next concert highlight, about blurb, email signup |
| `/concerts` | Full list of upcoming (and past) concerts |
| `/about` | About the concert series and its organizers |
| `/contact` | Contact form or contact information |

Add new pages as Kristin requests them. Keep the nav updated when you do.

---

## Design principles

- **Typography**: Use the serif display font for headings, sans-serif for body
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
3. **Hardcode data**: Concert listings, bios, testimonials — all hardcoded
   in the file as TypeScript arrays/objects at the top
4. **One component per file is fine**: When a section gets long, break it
   into a component in `app/components/`. Keep components focused and named
   clearly (e.g. `ConcertCard.tsx`, `Nav.tsx`, `Footer.tsx`)
5. **No analytics, no tracking**: Do not add any analytics scripts

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
