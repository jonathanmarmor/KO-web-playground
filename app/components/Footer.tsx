import Link from "next/link";
import { siteConfig } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-rule] px-6 py-12 mt-auto">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Newsletter CTA */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-[--font-display]">Stay in the loop</h3>
          <p className="text-[--color-ink-soft] text-sm max-w-md mx-auto">
            Be the first to know about concerts, artist announcements, and
            ticket presales.
          </p>
          {siteConfig.mailingListUrl ? (
            <a
              href={siteConfig.mailingListUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[--color-accent] text-white text-sm rounded hover:opacity-90 transition-opacity"
            >
              Join the Mailing List
            </a>
          ) : (
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Mailing%20List`}
              className="inline-block px-6 py-2 bg-[--color-accent] text-white text-sm rounded hover:opacity-90 transition-opacity"
            >
              Join the Mailing List
            </a>
          )}
        </div>

        <div className="border-t border-[--color-rule] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[--color-ink-soft]">
            {/* Contact info */}
            <div className="text-center md:text-left space-y-1">
              <p className="font-[--font-display] text-[--color-ink] font-semibold">
                {siteConfig.siteName}
              </p>
              <p>{siteConfig.address}</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="hover:text-[--color-ink] transition-colors"
              >
                {siteConfig.contactEmail}
              </a>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/events" className="hover:text-[--color-ink] transition-colors">
                Events
              </Link>
              <Link href="/about" className="hover:text-[--color-ink] transition-colors">
                About
              </Link>
              <Link href="/community" className="hover:text-[--color-ink] transition-colors">
                Community
              </Link>
              <Link href="/gallery" className="hover:text-[--color-ink] transition-colors">
                Gallery
              </Link>
              <Link href="/support" className="hover:text-[--color-ink] transition-colors">
                Support Us
              </Link>
              <Link href="/press" className="hover:text-[--color-ink] transition-colors">
                Press
              </Link>
            </div>

            {/* Social + legal */}
            <div className="text-center md:text-right space-y-2">
              <div className="flex justify-center md:justify-end gap-4">
                {siteConfig.instagramUrl && (
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[--color-ink] transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.facebookUrl && (
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[--color-ink] transition-colors"
                  >
                    Facebook
                  </a>
                )}
              </div>
              <p className="text-xs text-[--color-ink-soft]">
                501(c)(3) nonprofit &middot; EIN {siteConfig.ein}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
