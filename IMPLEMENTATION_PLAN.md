# Implementation Plan

Step-by-step plan for transforming the current 4-page prototype into the full
site described in SPEC.md. Organized into phases so each phase produces a
working site.

---

## Phase 1: Foundation — Shared Layout & Data Model

**Goal:** Extract shared Nav and Footer into layout components, expand the
data model in `config.ts`, and populate with real data from the old website.

### 1.1 Extract Nav component → `app/components/Nav.tsx`
- Pull nav out of every page into a shared component
- Update nav links to new routes: Home, Events, About, Community, Gallery,
  Support Us, Press
- Add mobile hamburger menu
- Highlight current page

### 1.2 Extract Footer component → `app/components/Footer.tsx`
- Pull footer out of every page into a shared component
- Add newsletter signup CTA with pitch text
- Add address: 115 W. Seventh Street, Charlotte, NC 28202
- Add social media links (conditional on URLs being set)
- Add 501(c)(3) / EIN 47-3338048 disclosure
- Add nav links mirroring main nav

### 1.3 Use Nav and Footer in `layout.tsx`
- Move Nav and Footer into the root layout so all pages get them
  automatically
- Remove duplicate nav/footer code from all existing page files

### 1.4 Expand data model in `config.ts`
- Update `siteConfig` with new fields (address, venueName, ein, donateUrl,
  seasonTagline)
- Update `contactEmail` to `contact@7thstreetconcerts.org`
- Replace `Concert` type with `Event` type (add slug, eventType, performers,
  programNotes, doorsTime, videoUrl, spotifyUrl, outreachEvent, isFree)
- Add `Performer`, `PressItem`, `SponsorshipTier`, `GalleryItem` types
- Add `pressItems`, `sponsorshipTiers` data arrays
- Populate with real data extracted from old_website/ captures

### 1.5 Populate real event data
- Add 2025-26 season concerts from old website:
  - Luz de Navidad (Dec 6, 2025)
  - Freedom in the Air (Jan 24, 2026)
  - Scenes From a Paris Cafe (March 1, 2026)
  - The Trout Who Found the River (April 12 & 14, 2026)
- Add past 2024 season concerts as past events
- Add known outreach events
- Add press items from old website

---

## Phase 2: Core Pages — Events, About, Homepage

**Goal:** Rebuild the three most important pages with full content.

### 2.1 Rename `/concerts` → `/events`
- Rename directory and update all internal links
- Rebuild events page with season narrative at top
- Show upcoming events with performer headshots (placeholder if needed)
- Show past events (muted) below
- Each event links to `/events/[slug]`

### 2.2 Build individual event page template → `/events/[slug]`
- Create dynamic route `app/events/[slug]/page.tsx`
- Implement full template: title, date/time/venue, ticket button (top +
  bottom), format details, program description, performer bios with photos,
  program notes, outreach companion mention, reception note, video embed
- Handle three event types (concert, outreach, special) with appropriate
  variations
- Populate at least one event fully as a reference (Scenes From a Paris Cafe)

### 2.3 Rebuild About page
- Mission statement first
- Kristin's story (Mt. Sinai origin, Juilliard/USC/CalArts, what drives her)
- Concert experience section (happy hour → concert → reception format)
- History (founded 2013, pandemic, reimagined)
- Venue info (St. Peter's, address, parking)
- Accessibility info placeholder
- Pull real content from old_website/ text captures

### 2.4 Rebuild Homepage
- Hero with season theme tagline + primary CTA to events
- Next event spotlight with ticket button
- Community impact snapshot (outreach photos or placeholder + text about
  the free community performance mission)
- Featured testimonial/press quote
- Newsletter signup with pitch text

---

## Phase 3: New Pages

**Goal:** Add the pages that don't exist yet.

### 3.1 Community page → `/community`
- Outreach mission statement
- List of past outreach events with descriptions
- Impact section (venues served, number of performances)
- Get involved section (volunteer, bring a group, suggest a venue)

### 3.2 Gallery page → `/gallery`
- Filterable tabs: Current Season | Past Seasons | Community Outreach
- Photo grid with captions and credits
- Embedded press quotes among photos
- Placeholder structure (real photos to be added by Kristin)

### 3.3 Support page → `/support`
- Individual giving section with donate button and impact framing
- Corporate sponsorship tiers (Program $100, Reception $500, Outreach
  $1,000, Concert $1,500) with benefits listed
- Custom sponsorship mention
- Partner logo display area
- Contact CTA for sponsorship inquiries

### 3.4 Press page → `/press`
- Each item: publication name, headline, date, pull quote, link
- Known outlets: Spectrum News, Cultural Voice NC, WDAV, QCLife, Art on My
  Sleeve, ShareCharlotte
- Grouped by year

### 3.5 Thank You page → `/thank-you`
- Warm thank-you message
- Newsletter signup CTA
- Social follow prompt
- Link to upcoming events

---

## Phase 4: Polish & Content

**Goal:** Refine design, fill in remaining content, verify everything works.

### 4.1 Design polish
- Review all pages on mobile and desktop
- Ensure consistent spacing, typography, and color usage
- Verify all interactive elements (links, buttons) work correctly
- Check that placeholder content is clearly marked for Kristin to replace

### 4.2 Remove old `/contact` page
- Contact info is now in the footer on every page
- Social links are in the footer
- Mailing list signup is embedded throughout
- Redirect or remove the route

### 4.3 Final verification
- `npm run dev` runs without errors
- `npm run build` succeeds
- All nav links work
- All pages look good on mobile
- Footer appears consistently on all pages
- Acceptance checklist in SPEC.md is satisfied
