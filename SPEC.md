# 7th Street Concerts — Website Spec

## One-liner
A beautiful, welcoming website for a live concert series where visitors can
discover upcoming performances, learn about the series, and stay connected.

## Visitors (who is this for?)
- Music lovers looking for upcoming concerts to attend
- Past attendees returning to see what's next
- New visitors discovering the series for the first time
- Press, artists, or partners wanting to learn more

## Pages

### `/` — Homepage
- **Hero**: Series name, tagline, and a "See Upcoming Concerts" call to action
- **Next Concert spotlight**: Feature the single soonest upcoming concert prominently
- **About blurb**: One paragraph about what makes this series special, link to /about
- **Email signup**: A simple field to join the mailing list (link to mailing list provider, or just a mailto: link for now)
- **Footer**: Nav links, contact email, social media links

### `/concerts` — Concerts
- List of **upcoming concerts** (sorted soonest first)
- List of **past concerts** below (collapsed or muted)
- Each concert shows: date, time, artist name, venue, short description, ticket link (if any)

### `/about` — About
- The story of the concert series
- Who runs it / organizers
- What makes it special (venue, vibe, community)
- Photos (placeholders until Kristin provides real ones)

### `/contact` — Contact
- Contact email address
- Links to social media
- (Optional) Simple contact form if desired later

---

## Data (all hardcoded — no database)

**Concerts** — array of objects, one per concert:
```
{
  date: "2025-09-14",
  time: "4:00 PM",
  artist: "Artist Name",
  venue: "Venue Name",
  description: "Short description of the artist or program.",
  ticketUrl: "https://...",   // or null if free/no ticketing
  imageUrl: "/images/...",    // or null for placeholder
}
```

**Site config** — lives in `app/config.ts`:
```
siteName, tagline, contactEmail, instagramUrl, facebookUrl, mailingListUrl
```

---

## Non-goals (what we are intentionally NOT building)
- No user accounts or login
- No online ticket sales (link out to a ticketing service instead)
- No content management system (CMS) — content is edited directly in code with Claude's help
- No comment sections or forums
- No complex animations

---

## Acceptance checklist
- [ ] Runs locally (`npm run dev`)
- [ ] Homepage loads and looks great on mobile and desktop
- [ ] Concerts page shows upcoming concerts with real or placeholder data
- [ ] About page has real or placeholder content
- [ ] Nav works and all pages are reachable
- [ ] Deploys to Vercel
