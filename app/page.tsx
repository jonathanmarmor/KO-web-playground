import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
    <div className="bg-white rounded-lg p-6 space-y-2 shadow-sm">
      <p className="text-sm font-bold tracking-widest uppercase text-accent">
        {formatDate(concert.date)} · {concert.time}
      </p>
      <h3 className="text-2xl font-display">{concert.artist}</h3>
      <p className="text-ink-soft text-sm">{concert.venue}</p>
      <p className="text-ink-soft leading-relaxed">
        {concert.description}
      </p>
      {concert.ticketUrl && (
        <a
          href={concert.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
        >
          Buy Tickets
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
      <Nav />

      <main className="flex-1">
        {/* Hero — dark navy with white text */}
        <section className="bg-navy px-6 py-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-display font-normal leading-tight text-white">
              {siteConfig.siteName}
            </h1>
            <p className="text-xl text-white/80">{siteConfig.tagline}</p>
            <Link
              href="/concerts"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              See Upcoming Concerts
            </Link>
          </div>
        </section>

        {/* Next concert spotlight */}
        {nextConcert && (
          <section className="px-6 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-display text-accent">
                Next Concert
              </h2>
              <ConcertCard concert={nextConcert} />
            </div>
          </section>
        )}

        {/* More upcoming */}
        {moreConcerts.length > 0 && (
          <section className="px-6 py-16 bg-accent-light">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-display text-accent">
                Coming Up
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {moreConcerts.map((c, i) => (
                  <ConcertCard key={i} concert={c} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About blurb */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-display text-accent">
              About the Series
            </h2>
            <p className="text-ink-soft leading-relaxed text-lg">
              {/* Kristin: replace this with a short paragraph about your concert series */}
              7th Street Concerts brings live music to Charlotte in an
              intimate and welcoming setting. A nonprofit concert series
              bringing exceptional musicians and meaningful community
              connection.
            </p>
            <Link
              href="/about"
              className="text-accent hover:underline font-semibold"
            >
              Learn more →
            </Link>
          </div>
        </section>

        {/* Mailing list */}
        <section className="px-6 py-16 bg-navy">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-display text-white">
              Stay in the Loop
            </h2>
            <p className="text-white/70">
              Join our mailing list to hear about upcoming concerts first.
            </p>
            {siteConfig.mailingListUrl ? (
              <a
                href={siteConfig.mailingListUrl}
                className="inline-block px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </a>
            ) : (
              <p className="text-sm text-white/50 italic">
                Mailing list link coming soon — add mailingListUrl to config.ts
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
