// Site-wide settings

export const siteConfig = {
  siteName: "7th Street Concerts",
  tagline:
    "A nonprofit concert series bringing exceptional musicians and meaningful community connection in Charlotte, NC.",
  seasonTagline:
    "Travels to Persia, from Latin America to American roots — four concerts that cross centuries and cultures to celebrate the beauty that connects us all.",
  contactEmail: "contact@7thstreetconcerts.org",
  address: "115 W. Seventh Street, Charlotte, NC 28202",
  venueName: "St. Peter's Episcopal Church",
  ein: "47-3338048",
  instagramUrl: "", // ← paste Instagram URL here
  facebookUrl: "", // ← paste Facebook URL here
  mailingListUrl: "", // ← paste mailing list signup URL here
  donateUrl: "", // ← paste donation processor URL here
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EventType = "concert" | "outreach" | "special";

export type Performer = {
  name: string;
  bio: string;
  credentials: string;
  imageUrl: string | null;
};

export type Event = {
  slug: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  time: string;
  doorsTime: string | null;
  venue: string;
  eventType: EventType;
  description: string;
  performers: Performer[];
  programNotes: string | null;
  ticketUrl: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  spotifyUrl: string | null;
  outreachEvent: string | null;
  isFree: boolean;
};

export type PressItem = {
  publication: string;
  headline: string;
  date: string;
  quote: string;
  url: string;
  logoUrl: string | null;
};

export type SponsorshipTier = {
  name: string;
  amount: number;
  benefits: string[];
};

export type GalleryItem = {
  imageUrl: string;
  caption: string;
  credit: string | null;
  category: "current-season" | "past-seasons" | "outreach";
  eventTitle: string | null;
  date: string | null;
};

// ---------------------------------------------------------------------------
// Events — 2025-26 Season (upcoming)
// ---------------------------------------------------------------------------

export const upcomingEvents: Event[] = [
  {
    slug: "luz-de-navidad",
    title: "Luz de Navidad: Music of Spain and the Americas",
    date: "2025-12-06",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "Journey across oceans and centuries with music from Spain and the Americas, reimagining Mary and Joseph's search for refuge as a timeless reflection of migration, faith, and hope. This benefit concert partners with Nourish Up CLT and Our Bridge for Kids, collecting food for families in need and toys for children who may not have holiday gifts.",
    performers: [],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent:
      "In conjunction with this concert, performers visited Brookdale Charlotte East Assisted Living Community and led a masterclass at Wingate University.",
    isFree: false,
  },
  {
    slug: "freedom-in-the-air",
    title: "Freedom in the Air: Sounds of Resistance and Resilience",
    date: "2026-01-24",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "Celebrate the legacy of Dr. Martin Luther King Jr. with music that weaves together spirituals, folk songs, and classical traditions — voices of resistance and resilience that inspire hope and belonging.",
    performers: [
      {
        name: "Sequina DuBose",
        bio: "Soprano acclaimed for her performances with the Lyric Opera of Chicago, Royal Danish Opera, and Jazz at Lincoln Center Orchestra.",
        credentials:
          "Lyric Opera of Chicago, Royal Danish Opera, Jazz at Lincoln Center Orchestra",
        imageUrl: null,
      },
      {
        name: "Patrick Dailey",
        bio: "Tenor praised by the Los Angeles Daily News and Boston Classical Review, and featured at the Kennedy Center with Aretha Franklin.",
        credentials:
          "Kennedy Center, Los Angeles Daily News, Boston Classical Review",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: false,
  },
  {
    slug: "scenes-from-a-paris-cafe",
    title: "Scenes From a Paris Cafe",
    date: "2026-03-01",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "On a summer evening in Paris, the streets hum with music, laughter, and clinking glasses. Victor Wang and Andrea Mumm Trammell bring an intimate program of impressionist pieces, salon favorites, and beloved classics. Experience the charm and cosmopolitan spirit of the City of Light — right here in Charlotte.",
    performers: [
      {
        name: "Victor Wang",
        bio: "Principal Flute of the Charlotte Symphony Orchestra since 2016, regularly featured as a soloist with the orchestra. He has performed at major summer music festivals including Tanglewood, Colorado College, Texas, Atlantic, Norfolk, and Bard.",
        credentials:
          "Principal Flute, Charlotte Symphony Orchestra; Yale University",
        imageUrl: null,
      },
      {
        name: "Andrea Mumm Trammell",
        bio: "Distinguished harpist and Dr. Billy Graham Principal Harp of the Charlotte Symphony Orchestra. Also serves as Principal Harp of the Colorado Music Festival and appears regularly as a soloist and chamber musician.",
        credentials:
          "Principal Harp, Charlotte Symphony Orchestra; Eastman School of Music, Northwestern University",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: false,
  },
  {
    slug: "the-trout-who-found-the-river",
    title: "The Trout Who Found the River",
    date: "2026-04-12",
    time: "1:00 PM",
    doorsTime: null,
    venue: "Wells Fargo Atrium courtyard, South Tryon Street",
    eventType: "special",
    description:
      "A curious trout sets out on a long swim home, guided by the voices of a river, a child, and the natural world around him. This whimsical musical play blends live music, narration, and storytelling into a gentle adventure about listening, belonging, and care for the environment. Built around music from composer Jonathan Woody, the performance unfolds as a story told from multiple perspectives — water, wildlife, and human alike — inviting audiences of all ages to experience the river as a living, remembering presence.",
    performers: [
      {
        name: "Jonathan Woody",
        bio: "Versatile composer and bass-baritone with an active career throughout New York and across North America. His work draws inspiration from 17th- and 18th-century music while engaging with minimalism and socially conscious themes.",
        credentials:
          "The Washington Post, GRAMMY-nominated Choir of Trinity Wall Street, commissions from Apollo's Fire, Chanticleer, Handel and Haydn Society",
        imageUrl: null,
      },
    ],
    programNotes:
      "Three FREE family showings at 1 PM, 3 PM, and 5 PM on April 12. A special ticketed evening performance on April 14 at 6:30 PM includes a post-concert conversation with the composer. Young audience members receive musical field journals — beautifully illustrated booklets filled with prompts, drawings, and space to observe, listen, and respond.",
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: true,
  },
];

// ---------------------------------------------------------------------------
// Events — Past (2024 inaugural season)
// ---------------------------------------------------------------------------

export const pastEvents: Event[] = [
  {
    slug: "music-for-the-winter-solstice",
    title: "Music for the Winter Solstice",
    date: "2024-12-07",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "A wintry adventure through centuries of music featuring holiday carols and pieces inspired by the coldest and darkest time of year, with early music stars from across North America. Accompanied by spiced wine, cider, cozy treats, and holiday cheer. Music by Handel, Purcell, Vivaldi, and Lalande.",
    performers: [
      {
        name: "Aisslin Nosky",
        bio: "Violinist and early music specialist.",
        credentials: "Early music performer",
        imageUrl: null,
      },
      {
        name: "Kristin Olson",
        bio: "Artistic and Executive Director of 7th Street Concerts. Juilliard-trained oboist.",
        credentials: "Juilliard School, USC, CalArts",
        imageUrl: null,
      },
      {
        name: "Keiran Campbell",
        bio: "Cellist.",
        credentials: "Chamber musician",
        imageUrl: null,
      },
      {
        name: "Kevin Payne",
        bio: "Theorbo and renaissance guitar specialist.",
        credentials: "Early music performer",
        imageUrl: null,
      },
      {
        name: "Laura Bohn",
        bio: "Soprano.",
        credentials: "Vocalist",
        imageUrl: null,
      },
      {
        name: "Paul Chwe MinChul An",
        bio: "Bass-baritone.",
        credentials: "Vocalist",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: false,
  },
  {
    slug: "renaissance-voices-gesualdo-six",
    title: "Renaissance Voices: The Gesualdo Six",
    date: "2025-02-26",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "Evoking a contemplative atmosphere with music inspired by the ancient service of compline, The Gesualdo Six bring their signature blend of Renaissance polyphony and contemporary works to Charlotte.",
    performers: [
      {
        name: "The Gesualdo Six",
        bio: "UK-based ensemble and one of the leading a cappella groups in the world, specializing in music of the Renaissance through today. Formed in 2014 for a performance of Gesualdo's Tenebrae Responsories in Cambridge.",
        credentials: "The Times, BBC Music Magazine, Gramophone",
        imageUrl: null,
      },
      {
        name: "Owain Park",
        bio: "Director of The Gesualdo Six. Known for imaginative programming and fostering the ensemble's impeccable blend.",
        credentials: "Director, The Gesualdo Six",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: false,
  },
  {
    slug: "the-poetry-of-music",
    title:
      "The Poetry of Music: The Poiesis Quartet + Poet Junious Ward",
    date: "2025-03-22",
    time: "4:00 PM",
    doorsTime: "3:30 PM",
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "Weaving ethereal music of both new and old works for string quartet with rich poetry, exploring how light, sound, word, and melody combine and deconstruct, finding new ways to discover the beauty of nature through music.",
    performers: [
      {
        name: "The Poiesis Quartet",
        bio: "One of the hottest young chamber ensembles in the US. Winners of the Fischoff Competition — the pinnacle of chamber music competitions. Constantly commissioning, performing, touring, and recording.",
        credentials: "Fischoff Competition winners",
        imageUrl: null,
      },
      {
        name: 'Junious "Jay" Ward',
        bio: "Known for his honest, conversational, and raw style exploring identity, place, history, and more. Author of two published collections and a 2023 Academy of American Poets Laureate Fellow.",
        credentials:
          "2022 Poet Laureate of Charlotte, National Slam Champion (2018), Individual World Poetry Slam Champion (2019)",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent:
      "Poiesis String Quartet performed live at Carolinas Medical Center as a community outreach event.",
    isFree: false,
  },
  {
    slug: "ensemble-decoda",
    title: "Ensemble Decoda",
    date: "2025-04-06",
    time: "5:00 PM",
    doorsTime: null,
    venue: "St. Peter's Episcopal Church",
    eventType: "concert",
    description:
      "An artist-led collective that seeks to create a more compassionate and connected world through music. Decoda thoughtfully curates outstanding performances of live chamber music, facilitates creative community projects, and inspires the next generation of musical artists.",
    performers: [
      {
        name: "Ensemble Decoda",
        bio: "The only independent ensemble recognized as an Affiliate Ensemble of Carnegie Hall. An artist-led collective creating a more compassionate and connected world through music.",
        credentials: "Affiliate Ensemble of Carnegie Hall",
        imageUrl: null,
      },
    ],
    programNotes: null,
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent:
      "Ensemble Decoda performed at Carolinas Medical Center as a community outreach event.",
    isFree: false,
  },
  {
    slug: "music-technology-hackathon",
    title: "Music + Technology Hackathon",
    date: "2025-04-05",
    time: "12:00 PM",
    doorsTime: null,
    venue: "Charlotte SHOUT! Festival",
    eventType: "special",
    description:
      "A free, collaborative event where attendees attend workshops with musicians, composers, and technology experts, then join breakout sessions to collaborate and explore creative projects with professional mentors. The day wraps up with a final concert featuring all work produced during the day.",
    performers: [
      {
        name: "Jonathan Marmor",
        bio: "Director of Engineering at Spotify. Workshop leader and event organizer.",
        credentials: "Spotify",
        imageUrl: null,
      },
      {
        name: "Teresa Nakra",
        bio: "Director of Music and Technology at Stevens Institute of Technology, known for her focus on technology and innovation.",
        credentials: "Stevens Institute of Technology",
        imageUrl: null,
      },
      {
        name: "Eric Rosenbaum",
        bio: "Founder of Makey Makey, the tech toy that turns everyday objects into touchpads. Named Consumer Reports' Best Tech Toy 2014, finalist for Toy of the Year 2016.",
        credentials: "Founder of Makey Makey",
        imageUrl: null,
      },
    ],
    programNotes:
      "Noon to 8:00 PM. Open to musicians, composers, technologists, and curious members of the public. Ensemble Decoda presents on performing with technology and collaborating with composers.",
    ticketUrl: null,
    imageUrl: null,
    videoUrl: null,
    spotifyUrl: null,
    outreachEvent: null,
    isFree: true,
  },
];

// ---------------------------------------------------------------------------
// Press
// ---------------------------------------------------------------------------

export const pressItems: PressItem[] = [
  {
    publication: "Cultural Voice North Carolina",
    headline: "Review: Luz de Navidad at 7th Street Concerts",
    date: "2025-12",
    quote:
      "The music of Luz de Navidad overflowed with energy and sincerity, blending beauty, tradition, and heartfelt joy into a deeply engaging performance.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "WDAV",
    headline: "Review: Luz de Navidad",
    date: "2025-12",
    quote:
      "There's nothing quite like hearing a small group fill a small room with a big sound, especially when the result inspires a grin from ear to ear.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "QCLife",
    headline: "7th Street Concerts Spotlight",
    date: "2024",
    quote:
      "Founded by Juilliard-trained Kristin Olson, 7th Street Concerts brings world-class performances to the city while giving back to the community.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "ShareCharlotte",
    headline: "7th Street Concerts",
    date: "2024",
    quote:
      "Audiences were thrilled by artists whose engaging and electrifying performances created unforgettable musical experiences.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "The Times",
    headline: "The Gesualdo Six Review",
    date: "2024",
    quote:
      "Their sound seemed to float in mid-air before reaching the ears of the rapt audience.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "BBC Music Magazine",
    headline: "The Gesualdo Six",
    date: "2024",
    quote:
      "Weavers of rich and plangent aural tapestries, The Gesualdo Six meld style and substance with beguiling sure-footedness.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "Gramophone",
    headline: "The Gesualdo Six Review",
    date: "2024",
    quote:
      "Ingeniously programmed and impeccably delivered, with that undefinable excitement that comes from a group of musicians working absolutely as one.",
    url: "",
    logoUrl: null,
  },
  {
    publication: "Spectrum News",
    headline: "7th Street Concerts Coverage",
    date: "2024",
    quote: "",
    url: "",
    logoUrl: null,
  },
  {
    publication: "Art on My Sleeve",
    headline: "7th Street Concerts Feature",
    date: "2024",
    quote: "",
    url: "",
    logoUrl: null,
  },
];

// ---------------------------------------------------------------------------
// Sponsorship
// ---------------------------------------------------------------------------

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Program Sponsor",
    amount: 100,
    benefits: [
      "Full-color advertisement in the concert program",
      "Recognition on social media",
    ],
  },
  {
    name: "Reception Sponsor",
    amount: 500,
    benefits: [
      "Brand visibility at the concert reception",
      "Placement of banner or printed materials",
      "Social media recognition",
      "Complimentary tickets",
    ],
  },
  {
    name: "Outreach Sponsor",
    amount: 1000,
    benefits: [
      "Logo or advertisement featured on the program cover",
      "Brand presence at an outreach event",
      "Verbal acknowledgment at the concert",
      "Social media recognition",
      "Complimentary tickets",
    ],
  },
  {
    name: "Concert Sponsor",
    amount: 1500,
    benefits: [
      "Premier logo or advertisement on the program cover",
      "Brand presence at the concert",
      "Verbal acknowledgment from the stage",
      "Social media recognition",
      "Complimentary tickets",
    ],
  },
];

// ---------------------------------------------------------------------------
// Outreach venues
// ---------------------------------------------------------------------------

export const outreachVenues = [
  {
    name: "Carolinas Medical Center",
    description:
      "Multiple performances including Poiesis String Quartet and Ensemble Decoda.",
  },
  {
    name: "Brookdale Charlotte East Assisted Living Community",
    description: "Performances by Luz de Navidad artists.",
  },
  {
    name: "Wingate University",
    description: "Masterclass led by Luz de Navidad guest artist Nick Garza.",
  },
  {
    name: "Roof Above",
    description:
      "Performances for individuals experiencing homelessness.",
  },
  {
    name: "Mercy Hospital",
    description: "Community outreach performances.",
  },
  {
    name: "Charlotte Prep",
    description:
      "Benefit concert with Sphinx Virtuosi for Hurricane Helene relief.",
  },
  {
    name: "Local Public Schools",
    description:
      "Masterclasses and performances for students.",
  },
];

// ---------------------------------------------------------------------------
// Gallery — placeholder (Kristin will provide real photos)
// ---------------------------------------------------------------------------

export const galleryItems: GalleryItem[] = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getAllEvents(): Event[] {
  return [...upcomingEvents, ...pastEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getEventBySlug(slug: string): Event | undefined {
  return getAllEvents().find((e) => e.slug === slug);
}
