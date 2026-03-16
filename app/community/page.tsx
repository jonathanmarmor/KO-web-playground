import Link from "next/link";
import { siteConfig, outreachVenues, pastEvents } from "../config";

export default function CommunityPage() {
  const outreachEvents = pastEvents.filter((e) => e.outreachEvent);

  return (
    <div className="px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-5xl font-[--font-display] text-[--color-magenta]">Community</h1>

        {/* Outreach mission */}
        <section className="space-y-4">
          <h2 className="text-3xl font-[--font-display]">Our Outreach Mission</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            For every ticketed concert, 7th Street Concerts performs free in
            underserved communities. We bring inspiring music directly to those
            who may be victims of injustice, racism, or inequality — at
            hospitals, shelters, schools, and assisted living facilities across
            Charlotte.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Each year our programs include performances for individuals who do
            not have a regular place to sleep as well as engaging with students
            in masterclasses and performances in our local public schools.
          </p>
        </section>

        {/* Venues served */}
        <section className="pt-8 border-t border-[--color-rule] space-y-6">
          <h2 className="text-3xl font-[--font-display]">Where We Perform</h2>
          <div className="grid gap-4">
            {outreachVenues.map((venue) => (
              <div
                key={venue.name}
                className="bg-[--color-bg-alt] rounded-lg p-5 space-y-1"
              >
                <h3 className="font-[--font-display] text-lg font-semibold">
                  {venue.name}
                </h3>
                <p className="text-sm text-[--color-ink-soft]">
                  {venue.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Past outreach highlights */}
        {outreachEvents.length > 0 && (
          <section className="pt-8 border-t border-[--color-rule] space-y-6">
            <h2 className="text-3xl font-[--font-display]">
              Recent Outreach Events
            </h2>
            {outreachEvents.map((event) => (
              <div
                key={event.slug}
                className="border-l-4 border-[--color-magenta] pl-6 space-y-1"
              >
                <h3 className="font-[--font-display] text-lg">
                  {event.title}
                </h3>
                <p className="text-sm text-[--color-ink-soft]">
                  {event.outreachEvent}
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className="text-sm text-[--color-magenta] hover:underline"
                >
                  View event details →
                </Link>
              </div>
            ))}
          </section>
        )}

        {/* Get involved */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">Get Involved</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            There are many ways to support our community mission:
          </p>
          <ul className="space-y-3 text-[--color-ink-soft]">
            <li className="flex gap-2">
              <span className="text-[--color-magenta] font-bold">·</span>
              Volunteer at an upcoming concert or outreach event
            </li>
            <li className="flex gap-2">
              <span className="text-[--color-magenta] font-bold">·</span>
              Bring a group to experience a performance
            </li>
            <li className="flex gap-2">
              <span className="text-[--color-magenta] font-bold">·</span>
              Suggest a venue for an outreach performance
            </li>
            <li className="flex gap-2">
              <span className="text-[--color-magenta] font-bold">·</span>
              Host a post-concert reception
            </li>
            <li className="flex gap-2">
              <span className="text-[--color-magenta] font-bold">·</span>
              <Link
                href="/support"
                className="text-[--color-magenta] hover:underline"
              >
                Make a donation
              </Link>{" "}
              to support free community performances
            </li>
          </ul>
          <p className="text-[--color-ink-soft] leading-relaxed">
            Interested? Contact us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[--color-magenta] hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
