import { siteConfig } from "../config";

export default function AboutPage() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-5xl font-[--font-display]">About</h1>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-3xl font-[--font-display]">Our Mission</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Our mission is to strengthen community through the power of music
            that is surprising and inspired. We bring fresh, classical, and
            intimate musical experiences to both ticketed audiences in the heart
            of the city and nonpaying audiences in underserved areas — infusing
            our community with a new-found artistic energy.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Our community emphasis brings this inspiring music directly to those
            who may be victims of injustice, racism, or inequality. Each year
            our programs include performances for individuals who do not have a
            regular place to sleep as well as engaging with students in
            masterclasses and performances in our local public schools.
          </p>
        </section>

        {/* Kristin's story */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">About Kristin Olson</h2>
          <p className="text-sm text-[--color-accent] font-bold uppercase tracking-widest">
            Artistic &amp; Executive Director
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Kristin is a brilliant professional oboist who has performed in
            orchestras, chamber groups, and as a soloist across North America and
            Europe. In New York City, she created a concert series for Mount
            Sinai Hospital, providing classical concerts for free in the hospital
            lobby, featuring NYC&apos;s top performers. She founded the series as
            a thank you for the care she received following a successful surgery
            to correct a serious lung injury.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Kristin holds degrees from the California Institute of the Arts, the
            University of Southern California, and the Juilliard School. She and
            her family moved to Charlotte from New York in 2020.
          </p>
        </section>

        {/* The concert experience */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">
            The Concert Experience
          </h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            7th Street Concerts promises extraordinary music experiences that
            are fresh, classical, and a little unexpected. We offer a range of
            musical genres from early music performed on period instruments to
            experimental new music, bringing both familiar and unknown artists
            and ensembles to Charlotte audiences in intimate and welcoming
            venues.
          </p>
          <div className="bg-[--color-accent-light] rounded-lg p-6 space-y-3">
            <p className="font-[--font-display] text-lg font-semibold">
              Every ticketed event includes:
            </p>
            <ul className="space-y-2 text-[--color-ink-soft]">
              <li className="flex gap-2">
                <span className="text-[--color-accent] font-bold">·</span>
                Free parking
              </li>
              <li className="flex gap-2">
                <span className="text-[--color-accent] font-bold">·</span>
                Complimentary pre-concert happy hour
              </li>
              <li className="flex gap-2">
                <span className="text-[--color-accent] font-bold">·</span>
                75-minute concert without intermission
              </li>
              <li className="flex gap-2">
                <span className="text-[--color-accent] font-bold">·</span>
                Free post-concert reception with the artists
              </li>
            </ul>
          </div>
        </section>

        {/* History */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">Our History</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Established in 2013, 7th Street Concerts began as Center City
            Concerts, offering free lunchtime musical programs for the public at
            St. Peter&apos;s Episcopal Church at Tryon and 7th streets in
            Charlotte. The organization went quiet during the pandemic.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            As Charlotte&apos;s cultural community came back to life, it was
            decided to reimagine the concert series as something that engaged and
            inspired new audiences. To that end, a new organization was created
            with a new name, a new mission, and a new artistic focus.
          </p>
        </section>

        {/* Venue */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">Our Venue</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Our home is {siteConfig.venueName}, located at the corner of North
            Tryon and 7th streets in the heart of Charlotte&apos;s growing and
            revitalized Uptown area. The historic church provides an intimate and
            welcoming setting for world-class performances.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed">
            {siteConfig.address}
          </p>
        </section>

        {/* Accessibility */}
        <section className="pt-8 border-t border-[--color-rule] space-y-4">
          <h2 className="text-3xl font-[--font-display]">Accessibility</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            We are committed to making our concerts accessible to all. Please
            contact us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[--color-accent] hover:underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            for specific accessibility questions or accommodation requests.
          </p>
        </section>
      </div>
    </div>
  );
}
