import Link from "next/link";
import { siteConfig } from "../config";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-[--color-rule] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-[--font-display] text-xl font-semibold tracking-tight">
            {siteConfig.siteName}
          </Link>
          <div className="flex gap-6 text-sm text-[--color-ink-soft]">
            <Link href="/concerts" className="hover:text-[--color-ink] transition-colors">Concerts</Link>
            <Link href="/about" className="text-[--color-ink] font-bold">About</Link>
            <Link href="/contact" className="hover:text-[--color-ink] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-10">
          <h1 className="text-5xl font-[--font-display]">About the Series</h1>

          {/* Kristin: replace everything below with your real content */}
          <div className="space-y-6 text-[--color-ink-soft] leading-relaxed text-lg">
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
          <div className="pt-8 border-t border-[--color-rule] space-y-4">
            <h2 className="text-3xl font-[--font-display]">About Kristin</h2>
            <p className="text-[--color-ink-soft] leading-relaxed text-lg">
              [Write a short bio here — who you are, your musical background,
              why you started the series, and anything else you&apos;d like
              people to know about you.]
            </p>
          </div>
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
