import Link from "next/link";
import { siteConfig } from "../config";

export default function ContactPage() {
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
            <Link href="/about" className="hover:text-[--color-ink] transition-colors">About</Link>
            <Link href="/contact" className="text-[--color-ink] font-bold">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
        <div className="max-w-lg mx-auto space-y-10">
          <h1 className="text-5xl font-[--font-display]">Get in Touch</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-[--font-display]">Email</h2>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[--color-accent] hover:underline text-lg"
              >
                {siteConfig.contactEmail}
              </a>
            </div>

            {siteConfig.instagramUrl && (
              <div className="space-y-2">
                <h2 className="text-xl font-[--font-display]">Instagram</h2>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-accent] hover:underline text-lg"
                >
                  Follow us on Instagram
                </a>
              </div>
            )}

            {siteConfig.facebookUrl && (
              <div className="space-y-2">
                <h2 className="text-xl font-[--font-display]">Facebook</h2>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-accent] hover:underline text-lg"
                >
                  Find us on Facebook
                </a>
              </div>
            )}

            {siteConfig.mailingListUrl && (
              <div className="pt-8 border-t border-[--color-rule] space-y-3">
                <h2 className="text-xl font-[--font-display]">Mailing List</h2>
                <p className="text-[--color-ink-soft]">
                  Stay up to date with new concerts and announcements.
                </p>
                <a
                  href={siteConfig.mailingListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity"
                >
                  Join the Mailing List
                </a>
              </div>
            )}
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
