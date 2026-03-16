import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav currentPage="/about" />

      {/* Page header — dark navy banner */}
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-white">
          About the Series
        </h1>
      </section>

      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-10">
          {/* Kristin: replace everything below with your real content */}
          <div className="space-y-6 text-ink-soft leading-relaxed text-lg">
            <p>
              [Write an opening paragraph here about the concert series — how
              it started, what inspired it, and what it&apos;s all about.]
            </p>
            <p>
              [Add a second paragraph about the vibe and experience — what
              is it like to attend? What kind of music? What makes it different
              from other concerts?]
            </p>
            <p>
              [Add a third paragraph about community, mission, or anything
              else you want visitors to know.]
            </p>
          </div>

          {/* About the organizer(s) */}
          <div className="pt-8 border-t border-rule space-y-4">
            <h2 className="text-3xl font-display text-accent">
              About Kristin
            </h2>
            <p className="text-ink-soft leading-relaxed text-lg">
              [Write a short bio here — who you are, your musical background,
              why you started the series, and anything else you&apos;d like
              people to know about you.]
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
