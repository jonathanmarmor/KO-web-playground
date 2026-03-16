// Site-wide settings — edit these to update the whole site

export const siteConfig = {
  siteName: "7th Street Concerts",
  tagline: "Charlotte's Unexpected Concert Series",
  contactEmail: "contact@7thstreetconcerts.org",
  instagramUrl: "",   // ← paste your Instagram URL here, e.g. "https://instagram.com/..."
  facebookUrl: "",    // ← paste your Facebook URL here
  linkedInUrl: "",    // ← paste your LinkedIn URL here
  mailingListUrl: "", // ← paste your mailing list signup URL here (e.g. Mailchimp)
};

// Upcoming concerts — add new ones at the top, move past ones to the bottom section
// Date format: "YYYY-MM-DD" (e.g. "2025-09-14")
export type Concert = {
  date: string;
  time: string;
  artist: string;
  venue: string;
  description: string;
  ticketUrl: string | null;
  imageUrl: string | null;
};

export const upcomingConcerts: Concert[] = [
  {
    date: "2025-09-14",
    time: "4:00 PM",
    artist: "Placeholder Artist",
    venue: "7th Street Venue",
    description:
      "A wonderful afternoon of music. Update this with the real artist name and program notes.",
    ticketUrl: null, // set to a URL string if there's ticketing, e.g. "https://eventbrite.com/..."
    imageUrl: null,
  },
  {
    date: "2025-10-12",
    time: "3:00 PM",
    artist: "Another Artist",
    venue: "7th Street Venue",
    description: "Another great concert. Update with real details.",
    ticketUrl: null,
    imageUrl: null,
  },
];

export const pastConcerts: Concert[] = [
  // Move concerts here after they've happened
];
