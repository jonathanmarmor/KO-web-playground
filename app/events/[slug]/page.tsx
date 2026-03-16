import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllEvents,
  getEventBySlug,
  siteConfig,
  type Event,
} from "../../config";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return getAllEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — ${siteConfig.siteName}`,
    description: event.description,
  };
}

function TicketButton({ event }: { event: Event }) {
  if (event.isFree) {
    return (
      <span className="inline-block px-6 py-3 bg-[--color-magenta] text-white rounded-full text-sm font-bold uppercase tracking-wider">
        Free Admission
      </span>
    );
  }
  if (event.ticketUrl) {
    return (
      <a
        href={event.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[--color-magenta] text-white rounded-full hover:opacity-90 transition-opacity text-sm font-bold uppercase tracking-wider"
      >
        Get Tickets
      </a>
    );
  }
  return null;
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Back link */}
        <Link
          href="/events"
          className="text-sm text-[--color-magenta] hover:underline"
        >
          ← All Events
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <p className="text-sm font-bold tracking-widest uppercase text-[--color-magenta]">
            {formatDate(event.date)} · {event.time}
          </p>
          <h1 className="text-4xl md:text-5xl font-[--font-display] leading-tight">
            {event.title}
          </h1>
          <p className="text-[--color-ink-soft]">{event.venue}</p>

          {/* Ticket button (top) */}
          <TicketButton event={event} />
        </div>

        {/* Concert format details */}
        {event.doorsTime && (
          <div className="bg-[--color-bg-alt] rounded-lg p-6 space-y-2">
            <p className="text-sm text-[--color-ink-soft]">
              <span className="font-bold">Doors:</span> {event.doorsTime} for
              pre-concert happy hour
            </p>
            <p className="text-sm text-[--color-ink-soft]">
              <span className="font-bold">Concert:</span> {event.time} (75
              minutes, no intermission)
            </p>
            <p className="text-sm text-[--color-ink-soft]">
              Post-concert reception with drinks, tasty bites, and a chance to
              mingle with the artists
            </p>
          </div>
        )}

        {/* Program description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-[--font-display]">About the Program</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            {event.description}
          </p>
        </section>

        {/* Program notes */}
        {event.programNotes && (
          <div className="bg-[--color-bg-alt] rounded-lg p-6">
            <p className="text-[--color-ink-soft] leading-relaxed">
              {event.programNotes}
            </p>
          </div>
        )}

        {/* Performers */}
        {event.performers.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-[--font-display]">
              {event.eventType === "special" ? "Collaborators" : "Performers"}
            </h2>
            <div className="space-y-6">
              {event.performers.map((performer) => (
                <div
                  key={performer.name}
                  className="border-l-4 border-[--color-magenta] pl-6 space-y-1"
                >
                  <h3 className="text-xl font-[--font-display]">
                    {performer.name}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-[--color-magenta]">
                    {performer.credentials}
                  </p>
                  <p className="text-[--color-ink-soft] leading-relaxed">
                    {performer.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outreach companion */}
        {event.outreachEvent && (
          <section className="bg-[--color-bg-alt] rounded-lg p-6 space-y-2">
            <h3 className="font-[--font-display] text-lg font-semibold">
              Community Outreach
            </h3>
            <p className="text-[--color-ink-soft] leading-relaxed">
              {event.outreachEvent}
            </p>
            <Link
              href="/community"
              className="text-sm text-[--color-magenta] hover:underline"
            >
              Learn more about our outreach mission →
            </Link>
          </section>
        )}

        {/* Video embed */}
        {event.videoUrl && (
          <section className="space-y-4">
            <h2 className="text-2xl font-[--font-display]">Watch</h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-[--color-ink]">
              <iframe
                src={event.videoUrl}
                className="w-full h-full"
                allowFullScreen
                title={`${event.title} video`}
              />
            </div>
          </section>
        )}

        {/* Spotify link */}
        {event.spotifyUrl && (
          <a
            href={event.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[--color-magenta] hover:underline"
          >
            Listen on Spotify →
          </a>
        )}

        {/* Ticket button (bottom) */}
        <div className="pt-4 border-t border-[--color-rule]">
          <TicketButton event={event} />
        </div>
      </div>
    </div>
  );
}
