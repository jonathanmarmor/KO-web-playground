import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { upcomingConcerts, pastConcerts, type Concert } from "../config";

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
    <div className="py-8 border-b border-rule grid md:grid-cols-[180px_1fr] gap-4">
      <div>
        <p className="font-bold text-accent text-sm uppercase tracking-widest">
          {formatDate(concert.date)}
        </p>
        <p className="text-ink-soft text-sm">{concert.time}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-display">{concert.artist}</h3>
        <p className="text-sm text-ink-soft">{concert.venue}</p>
        <p className="text-ink-soft leading-relaxed">{concert.description}</p>
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
    </div>
  );
}

export default function ConcertsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav currentPage="/concerts" />

      {/* Page header — dark navy banner */}
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-white">
          Upcoming Concerts
        </h1>
      </section>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Upcoming */}
          <section>
            {upcomingConcerts.length > 0 ? (
              <div>
                {upcomingConcerts.map((c, i) => (
                  <ConcertRow key={i} concert={c} />
                ))}
              </div>
            ) : (
              <p className="text-ink-soft py-8">
                No upcoming concerts listed yet. Check back soon!
              </p>
            )}
          </section>

          {/* Past concerts */}
          {pastConcerts.length > 0 && (
            <section>
              <h2 className="text-3xl font-display mb-8 text-accent">
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

      <Footer />
    </div>
  );
}
