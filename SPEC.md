# 7th Street Concerts — Website Spec

## One-liner

A beautiful, welcoming website for a Charlotte, NC nonprofit concert series
that brings exceptional musicians and meaningful community connection to
intimate settings — where visitors can discover upcoming performances, learn
about the organization's mission, and support its work.

## About the organization

- **Name:** 7th Street Concerts
- **Type:** 501(c)(3) nonprofit charity, EIN 47-3338048
- **Location:** St. Peter's Episcopal Church, 115 W. Seventh Street (corner of
  North Tryon and 7th), Charlotte, NC 28202
- **Founded:** 2013 (as Center City Concerts), reimagined post-COVID with new
  name, mission, and artistic focus
- **Contact:** contact@7thstreetconcerts.org
- **Artistic & Executive Director:** Kristin Olson (Juilliard-trained oboist)

## Visitors (who is this for?)

- Music lovers looking for upcoming concerts to attend
- Past attendees returning to see what's next
- New visitors discovering the series for the first time
- Potential donors and sponsors evaluating the organization
- Press, artists, or partners wanting to learn more
- Grant reviewers looking for community impact evidence

## Three programming types

The site must present three distinct types of programming:

1. **Ticketed main stage concerts** — the core product (St. Peter's Episcopal
   Church; doors, happy hour, 75-min no-intermission concert, post-concert
   artist reception)
2. **Free community outreach** — hospital, shelter, school, assisted living
   performances (Carolinas Medical Center, Roof Above, Mercy Hospital,
   Brookdale East, Wingate University, Charlotte Prep)
3. **Special participatory events** — hackathons, Charlotte SHOUT! open-air
   performances, artist conversation evenings

This is why the nav uses **"Events"** rather than "Concerts" — the label must
encompass all three types.

---

## Pages

### `/` — Homepage

- **Hero:** Series name, tagline with season theme (e.g. "travels to Persia,
  from Latin America to American roots"), primary CTA button to events
- **Next event spotlight:** Feature the single soonest upcoming event
  prominently with ticket button
- **Community impact snapshot:** Outreach photos with brief text about the
  free community performance mission
- **Testimonial/press quote:** A rotating or featured pull quote (e.g. Google
  Review, QCLife, Cultural Voice NC)
- **Newsletter signup:** Inline form or CTA with pitch: "Be the first to know
  about concerts, artist announcements, and ticket presales."
- **Footer:** (shared across all pages — see Footer section below)

### `/events` — Events (replaces `/concerts`)

- **Season overview:** Season tagline/narrative at top (editorial voice, not
  dry listing)
- **Upcoming events list:** All upcoming events sorted soonest first — each
  shows date, time, title, brief description, performer headshot(s) if
  available, ticket/RSVP button. Each links to its individual event page.
- **Past events** below (muted/collapsed), linking to individual pages where
  they exist

### `/events/[slug]` — Individual Event Page

Template based on the best existing pages (use "Scenes From a Paris Cafe" as
the model). Every event page should have:

- **Title + date/time/venue** at top
- **Ticket button** (prominent, at top AND bottom of page)
- **Concert format details:** Doors time, happy hour, concert start, reception
- **Evocative program description** — editorial, not a dry listing
- **Performer bios with photos** — headshot, 2-3 sentences, notable credentials
- **Program notes or repertoire preview** (where available)
- **Companion outreach event mention** (if applicable — e.g. "In conjunction
  with this concert, 7th Street will perform at...")
- **Post-concert reception note**
- **Video/recording embed** (if a recording exists for past events — YouTube,
  Vimeo embed, or Spotify link)

For **video landing pages** (shareable on-brand URLs for performance videos):
keep the full-page video as the hero, but add below it: concert title/date,
short paragraph about the performance, newsletter signup CTA, and link to the
next upcoming event.

For **special participatory events** (hackathons, SHOUT! events): use the
same template structure but adapt — free admission note instead of ticket
button, schedule/agenda if applicable, collaborator bios instead of performer
bios.

### `/about` — About

Structured in this order:

1. **Mission statement** — lead with it
2. **Kristin's story** — the Mt. Sinai origin story (started free hospital
   concerts as a thank-you after recovering from a lung injury), Juilliard/
   USC/CalArts credentials, what drives her
3. **The concert experience** — what makes 7th Street different: happy hour,
   75-min no-intermission intimate concert, post-concert artist reception,
   free parking. This differentiates 7th Street from traditional classical
   concerts.
4. **History** — founded 2013 as Center City Concerts, went quiet during
   pandemic, reimagined with new name and mission
5. **Venue info** — St. Peter's Episcopal Church description, address, parking
6. **Accessibility information** — ADA accessibility at venue, accessible
   parking, any accommodations available (placeholder until Kristin provides
   details)

Note: Board member list is intentionally omitted from the main page. If
Kristin wants it, it can be a collapsible section with brief bios (not just
names).

### `/community` — Community

This is the outreach mission page — critical for donors and grant applications.

- **Outreach mission statement** — for every ticketed concert, 7th Street
  performs free in underserved communities
- **Past outreach events** — venue photos and descriptions (hospitals,
  shelters, schools, assisted living facilities, universities)
- **Impact section** — number of outreach performances, venues served, any
  stats or quotes from participants/staff
- **Get involved** — volunteer, bring a group, suggest an outreach venue,
  host a post-concert reception

### `/gallery` — Gallery

- **Filterable/tabbed photo + video archive:**
  - Current Season
  - Past Seasons
  - Community Outreach
- **Consistent captions** — who, where, when
- **Photo credits** — standardized
- **Embedded press quotes** among photos (these work well as social proof)
- **Performance videos** — embedded from YouTube/Vimeo where available

### `/support` — Support Us (merges Donate + Partners)

Two subsections on one page:

**Individual Giving:**
- Donate button (external processor)
- Impact framing: "Your donation supports free outreach performances at
  hospitals, shelters, and schools"
- Suggested giving levels or amounts (if Kristin provides)
- Recurring giving option mention

**Corporate Sponsorship:**
- Four tiers (from current site):
  - Program Sponsor — $100
  - Reception Sponsor — $500
  - Outreach Sponsor — $1,000
  - Concert Sponsor — $1,500
- Custom sponsorships available
- Partner logo display (when logos are provided)
- Contact CTA for sponsorship inquiries

### `/press` — Press (replaces "In The News")

Expanded press coverage page with real social proof:

- For each piece of coverage: publication name/logo, article headline,
  publication date, a pull quote, and external link
- Known outlets: Spectrum News, Cultural Voice NC, WDAV, QCLife, Art on My
  Sleeve, ShareCharlotte, Reader's Picks: Favorite Local Charities
- Grouped by year

### `/thank-you` — Thank You (post-donation)

- Warm thank-you message (keep existing language: "Your gift goes directly to
  support 7th Street Concerts and helps to bring music to our community
  that's fresh, classical, a little unexpected.")
- Newsletter signup CTA
- Social follow prompt
- Link to upcoming events
- Optional social share buttons

---

## Shared Components

### Navigation (all pages)

```
Home | Events | About | Community | Gallery | Support Us | Press
```

The site name/logo links home. Current page is visually indicated (bold or
underlined). Mobile: hamburger menu or equivalent.

### Footer (all pages)

- **Newsletter signup** — inline form or CTA with pitch
- **Contact:** 115 W. Seventh Street, Charlotte, NC 28202 |
  contact@7thstreetconcerts.org
- **Social media links** — Instagram, Facebook (when URLs provided)
- **501(c)(3) disclosure** with EIN 47-3338048
- **Nav links** — mirror main nav

---

## Data (all hardcoded — no database)

### Site config (`app/config.ts`)

```typescript
{
  siteName: "7th Street Concerts",
  tagline: "A nonprofit concert series bringing exceptional musicians and
    meaningful community connection in Charlotte, NC.",
  seasonTagline: "...",  // current season's editorial theme
  contactEmail: "contact@7thstreetconcerts.org",
  address: "115 W. Seventh Street, Charlotte, NC 28202",
  venueName: "St. Peter's Episcopal Church",
  ein: "47-3338048",
  instagramUrl: "",
  facebookUrl: "",
  mailingListUrl: "",
  donateUrl: "",  // external donation processor URL
}
```

### Events (replaces Concert type)

```typescript
type EventType = "concert" | "outreach" | "special";

type Performer = {
  name: string;
  bio: string;           // 2-3 sentences
  credentials: string;   // e.g. "Lyric Opera of Chicago, Royal Danish Opera"
  imageUrl: string | null;
};

type Event = {
  slug: string;              // URL-friendly identifier
  title: string;             // e.g. "Scenes From a Paris Cafe"
  date: string;              // "YYYY-MM-DD"
  time: string;              // "4:00 PM"
  doorsTime: string | null;  // "3:30 PM"
  venue: string;
  eventType: EventType;
  description: string;       // evocative program description
  performers: Performer[];
  programNotes: string | null;
  ticketUrl: string | null;
  imageUrl: string | null;
  videoUrl: string | null;    // YouTube/Vimeo embed URL
  spotifyUrl: string | null;
  outreachEvent: string | null;  // description of companion outreach
  isFree: boolean;
};
```

### Press items

```typescript
type PressItem = {
  publication: string;
  headline: string;
  date: string;
  quote: string;        // pull quote or excerpt
  url: string;
  logoUrl: string | null;
};
```

### Sponsorship tiers

```typescript
type SponsorshipTier = {
  name: string;       // e.g. "Concert Sponsor"
  amount: number;     // e.g. 1500
  benefits: string[];
};
```

### Gallery items

```typescript
type GalleryItem = {
  imageUrl: string;
  caption: string;
  credit: string | null;
  category: "current-season" | "past-seasons" | "outreach";
  eventTitle: string | null;
  date: string | null;
};
```

---

## Non-goals (what we are intentionally NOT building)

- No user accounts or login
- No online ticket sales (link out to a ticketing service instead)
- No content management system (CMS) — content is edited directly in code
  with Claude's help
- No comment sections or forums
- No complex animations
- No backend, API routes, or databases
- No new npm dependencies beyond what's already installed
- No analytics or tracking scripts

---

## What to leave out

- **Board member list (names only)** — adds no visitor value. If included at
  all, board members need brief bios explaining their connection to the
  mission, and should be a collapsible section, not a main feature.
- **Unpopulated event page stubs** — don't publish pages without full content;
  redirect to the events overview instead.
- **Standalone mailing list page as main nav item** — embed signup forms
  throughout the site; keep standalone page only as a landing destination for
  external links (social ads, etc.).

---

## Acceptance checklist

- [ ] Runs locally (`npm run dev`)
- [ ] Homepage loads and looks great on mobile and desktop
- [ ] Events page shows upcoming events with real or placeholder data
- [ ] Individual event page template works with full content
- [ ] About page has structured content (mission, story, experience, history)
- [ ] Community page shows outreach mission and past events
- [ ] Gallery page displays photos with captions and filtering
- [ ] Support page has donate CTA and sponsorship tiers
- [ ] Press page shows coverage with headlines and quotes
- [ ] Nav works and all pages are reachable from every page
- [ ] Footer appears on every page with newsletter signup and contact info
- [ ] Social media links appear in footer (when URLs provided)
- [ ] 501(c)(3) / EIN disclosure appears in footer
- [ ] Deploys to Vercel
