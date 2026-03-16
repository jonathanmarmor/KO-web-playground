import Link from "next/link";
import {
  siteConfig,
  upcomingEvents,
  pastEvents,
  type Event,
} from "../config";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function EventRow({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="block py-8 border-b border-[--color-rule] grid md:grid-cols-[200px_1fr] gap-4 hover:bg-[--color-accent-light] -mx-4 px-4 rounded transition-colors"
    >
      <div>
        <p className="font-bold text-[--color-accent] text-sm uppercase tracking-widest">
          {formatDate(event.date)}
        </p>
        <p className="text-[--color-ink-soft] text-sm">{event.time}</p>
        {event.isFree && (
          <span className="inline-block mt-1 text-xs font-bold text-[--color-accent] uppercase tracking-widest">
            Free
          </span>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-[--font-display]">{event.title}</h3>
        <p className="text-sm text-[--color-ink-soft]">{event.venue}</p>
        <p className="text-[--color-ink-soft] leading-relaxed">
          {event.description}
        </p>
        {event.performers.length > 0 && (
          <p className="text-sm text-[--color-ink-soft]">
            Featuring {event.performers.map((p) => p.name).join(", ")}
          </p>
        )}
        {event.ticketUrl && (
          <span className="inline-block mt-2 px-5 py-2 bg-[--color-accent] text-white text-sm rounded">
            Get Tickets
          </span>
        )}
      </div>
    </Link>
  );
}

export default function EventsPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Season intro */}
        <div className="space-y-4">
          <h1 className="text-4xl font-[--font-display]">Events</h1>
          <p className="text-lg text-[--color-ink-soft] leading-relaxed max-w-2xl">
            {siteConfig.seasonTagline}
          </p>
        </div>

        {/* Upcoming */}
        <section>
          <h2 className="text-3xl font-[--font-display] mb-4">
            Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            <div>
              {upcomingEvents.map((event) => (
                <EventRow key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-[--color-ink-soft] py-8">
              No upcoming events listed yet. Check back soon!
            </p>
          )}
        </section>

        {/* Past events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-[--font-display] mb-4 text-[--color-ink-soft]">
              Past Events
            </h2>
            <div className="opacity-70">
              {pastEvents
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((event) => (
                  <EventRow key={event.slug} event={event} />
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
