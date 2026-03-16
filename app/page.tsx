import Link from "next/link";
import { siteConfig, upcomingEvents, pressItems, type Event } from "./config";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NextEventSpotlight({ event }: { event: Event }) {
  return (
    <div className="border border-[--color-rule] bg-[--color-accent-light] rounded-lg p-8 space-y-3">
      <p className="text-sm font-bold tracking-widest uppercase text-[--color-accent]">
        {formatDate(event.date)} · {event.time}
      </p>
      <h3 className="text-3xl font-[--font-display]">{event.title}</h3>
      <p className="text-sm text-[--color-ink-soft]">{event.venue}</p>
      <p className="text-[--color-ink-soft] leading-relaxed">
        {event.description}
      </p>
      {event.performers.length > 0 && (
        <p className="text-sm text-[--color-ink-soft]">
          Featuring {event.performers.map((p) => p.name).join(", ")}
        </p>
      )}
      <div className="pt-2">
        <Link
          href={`/events/${event.slug}`}
          className="inline-block px-6 py-2 bg-[--color-accent] text-white text-sm rounded hover:opacity-90 transition-opacity"
        >
          {event.ticketUrl ? "Get Tickets" : "Learn More"}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const nextEvent = upcomingEvents[0] ?? null;
  const moreEvents = upcomingEvents.slice(1, 4);
  const featuredQuote = pressItems.find((p) => p.quote.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 text-center border-b border-[--color-rule]">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-[--font-display] font-medium leading-tight">
            {siteConfig.siteName}
          </h1>
          <p className="text-xl text-[--color-ink-soft] leading-relaxed">
            {siteConfig.seasonTagline}
          </p>
          <Link
            href="/events"
            className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity"
          >
            See Upcoming Events
          </Link>
        </div>
      </section>

      {/* Next event spotlight */}
      {nextEvent && (
        <section className="px-6 py-16 border-b border-[--color-rule]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-[--font-display]">Next Event</h2>
            <NextEventSpotlight event={nextEvent} />
          </div>
        </section>
      )}

      {/* More upcoming */}
      {moreEvents.length > 0 && (
        <section className="px-6 py-16 border-b border-[--color-rule]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-[--font-display]">Coming Up</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moreEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="block border border-[--color-rule] bg-[--color-accent-light] rounded-lg p-6 space-y-2 hover:border-[--color-accent] transition-colors"
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-[--color-accent]">
                    {formatDate(event.date)}
                  </p>
                  <h3 className="text-xl font-[--font-display]">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[--color-ink-soft]">
                    {event.venue}
                  </p>
                  {event.isFree && (
                    <span className="inline-block text-xs font-bold text-[--color-accent] uppercase tracking-widest">
                      Free
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/events"
                className="text-[--color-accent] hover:underline"
              >
                View all events →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Community impact snapshot */}
      <section className="px-6 py-16 border-b border-[--color-rule]">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-[--font-display]">Music for Everyone</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            For every ticketed concert, 7th Street Concerts performs free in
            underserved communities — at hospitals, shelters, schools, and
            assisted living facilities across Charlotte.
          </p>
          <Link
            href="/community"
            className="text-[--color-accent] hover:underline"
          >
            Learn about our outreach →
          </Link>
        </div>
      </section>

      {/* Featured press quote */}
      {featuredQuote && (
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <blockquote className="text-2xl font-[--font-display] text-[--color-ink] italic leading-relaxed">
              &ldquo;{featuredQuote.quote}&rdquo;
            </blockquote>
            <p className="text-sm text-[--color-ink-soft]">
              — {featuredQuote.publication}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
