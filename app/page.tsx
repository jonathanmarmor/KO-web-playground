import Link from "next/link";
import { siteConfig, upcomingConcerts, type Concert } from "./config";

// Format "2025-09-14" → "Sunday, September 14, 2025"
function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ConcertCard({ concert }: { concert: Concert }) {
  return (
    <div className="border border-[--color-rule] bg-[--color-accent-light] rounded-lg p-6 space-y-2">
      <p className="text-sm font-bold tracking-widest uppercase text-[--color-accent]">
        {formatDate(concert.date)} · {concert.time}
      </p>
      <h3 className="text-2xl font-[--font-display]">{concert.artist}</h3>
      <p className="text-[--color-ink-soft] text-sm">{concert.venue}</p>
      <p className="text-[--color-ink-soft] leading-relaxed">
        {concert.description}
      </p>
      {concert.ticketUrl && (
        <a
          href={concert.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-2 bg-[--color-accent] text-white text-sm rounded hover:opacity-90 transition-opacity"
        >
          Get Tickets
        </a>
      )}
    </div>
  );
}

export default function Home() {
  const nextConcert = upcomingConcerts[0] ?? null;
  const moreConcerts = upcomingConcerts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-[--color-rule] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-[--font-display] text-xl font-semibold tracking-tight"
          >
            {siteConfig.siteName}
          </Link>
          <div className="flex gap-6 text-sm text-[--color-ink-soft]">
            <Link href="/concerts" className="hover:text-[--color-ink] transition-colors">
              Concerts
            </Link>
            <Link href="/about" className="hover:text-[--color-ink] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[--color-ink] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 py-20 text-center border-b border-[--color-rule]">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-[--font-display] font-medium leading-tight">
              {siteConfig.siteName}
            </h1>
            <p className="text-xl text-[--color-ink-soft]">{siteConfig.tagline}</p>
            <Link
              href="/concerts"
              className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity"
            >
              See Upcoming Concerts
            </Link>
          </div>
        </section>

        {/* Next concert spotlight */}
        {nextConcert && (
          <section className="px-6 py-16 border-b border-[--color-rule]">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-[--font-display]">Next Concert</h2>
              <ConcertCard concert={nextConcert} />
            </div>
          </section>
        )}

        {/* More upcoming */}
        {moreConcerts.length > 0 && (
          <section className="px-6 py-16 border-b border-[--color-rule]">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-[--font-display]">Coming Up</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {moreConcerts.map((c, i) => (
                  <ConcertCard key={i} concert={c} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About blurb */}
        <section className="px-6 py-16 border-b border-[--color-rule]">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-[--font-display]">About the Series</h2>
            <p className="text-[--color-ink-soft] leading-relaxed text-lg">
              {/* Kristin: replace this with a short paragraph about your concert series */}
              7th Street Concerts brings live music to [your location] in an
              intimate and welcoming setting. [Add a sentence about what makes
              your series special — the vibe, the community, the music.]
            </p>
            <Link
              href="/about"
              className="text-[--color-accent] hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </section>

        {/* Mailing list */}
        <section className="px-6 py-16">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-[--font-display]">Stay in the loop</h2>
            <p className="text-[--color-ink-soft]">
              Join our mailing list to hear about upcoming concerts first.
            </p>
            {siteConfig.mailingListUrl ? (
              <a
                href={siteConfig.mailingListUrl}
                className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity"
              >
                Join the Mailing List
              </a>
            ) : (
              <p className="text-sm text-[--color-ink-soft] italic">
                {/* Kristin: add your mailing list URL to app/config.ts and this button will appear */}
                Mailing list link coming soon — add mailingListUrl to config.ts
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[--color-rule] px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[--color-ink-soft]">
          <p>{siteConfig.siteName}</p>
          <div className="flex gap-6">
            <Link href="/concerts" className="hover:text-[--color-ink]">Concerts</Link>
            <Link href="/about" className="hover:text-[--color-ink]">About</Link>
            <Link href="/contact" className="hover:text-[--color-ink]">Contact</Link>
          </div>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hover:text-[--color-ink]"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
