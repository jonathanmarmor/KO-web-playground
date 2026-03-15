import Link from "next/link";
import { upcomingConcerts, pastConcerts, type Concert } from "../config";
import { siteConfig } from "../config";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ConcertRow({ concert }: { concert: Concert }) {
  return (
    <div className="py-8 border-b border-[--color-rule] grid md:grid-cols-[180px_1fr] gap-4">
      <div>
        <p className="font-bold text-[--color-accent] text-sm uppercase tracking-widest">
          {formatDate(concert.date)}
        </p>
        <p className="text-[--color-ink-soft] text-sm">{concert.time}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-[--font-display]">{concert.artist}</h3>
        <p className="text-sm text-[--color-ink-soft]">{concert.venue}</p>
        <p className="text-[--color-ink-soft] leading-relaxed">{concert.description}</p>
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
    </div>
  );
}

export default function ConcertsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-[--color-rule] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-[--font-display] text-xl font-semibold tracking-tight">
            {siteConfig.siteName}
          </Link>
          <div className="flex gap-6 text-sm text-[--color-ink-soft]">
            <Link href="/concerts" className="text-[--color-ink] font-bold">Concerts</Link>
            <Link href="/about" className="hover:text-[--color-ink] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[--color-ink] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Upcoming */}
          <section>
            <h1 className="text-4xl font-[--font-display] mb-8">Upcoming Concerts</h1>
            {upcomingConcerts.length > 0 ? (
              <div>
                {upcomingConcerts.map((c, i) => (
                  <ConcertRow key={i} concert={c} />
                ))}
              </div>
            ) : (
              <p className="text-[--color-ink-soft] py-8">
                No upcoming concerts listed yet. Check back soon!
              </p>
            )}
          </section>

          {/* Past concerts */}
          {pastConcerts.length > 0 && (
            <section>
              <h2 className="text-3xl font-[--font-display] mb-8 text-[--color-ink-soft]">
                Past Concerts
              </h2>
              <div className="opacity-70">
                {pastConcerts.map((c, i) => (
                  <ConcertRow key={i} concert={c} />
                ))}
              </div>
            </section>
          )}
        </div>
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
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-[--color-ink]">
            {siteConfig.contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
