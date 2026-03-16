import Link from "next/link";
import { siteConfig } from "../config";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Main footer — dark navy background */}
      <div className="bg-[--color-navy] text-white px-6 py-12">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          {/* White logo */}
          <div className="flex flex-col items-center leading-none">
            <span className="font-[--font-display] text-3xl text-white">
              7th ST.
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-white">
              Concerts
            </span>
          </div>

          <p className="text-sm text-white/80 max-w-md mx-auto">
            We are a 501(c)(3) charity and your contribution is tax deductible
            to the extent allowed by law. Our EIN is {siteConfig.ein}.
          </p>

          <div className="text-sm text-white/80 space-y-1">
            <p>{siteConfig.siteName}</p>
            <p>{siteConfig.address}</p>
          </div>

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            {siteConfig.contactEmail}
          </a>

          {/* Subscribe button — magenta pill */}
          {siteConfig.mailingListUrl ? (
            <div>
              <a
                href={siteConfig.mailingListUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-2 bg-[--color-magenta] text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </a>
            </div>
          ) : (
            <div>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=Mailing%20List`}
                className="inline-block px-8 py-2 bg-[--color-magenta] text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </a>
            </div>
          )}

          {/* Footer nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <Link href="/events" className="hover:text-white transition-colors">
              Events
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/community" className="hover:text-white transition-colors">
              Community
            </Link>
            <Link href="/gallery" className="hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support Us
            </Link>
            <Link href="/press" className="hover:text-white transition-colors">
              Press
            </Link>
          </div>
        </div>
      </div>

      {/* Social bar — bright blue */}
      <div className="bg-[--color-blue] px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-6">
          {siteConfig.facebookUrl && (
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          )}
          {siteConfig.instagramUrl && (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          )}
          {/* Always show placeholder social icons if none configured */}
          {!siteConfig.facebookUrl && !siteConfig.instagramUrl && (
            <>
              <span className="text-white/60" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </span>
              <span className="text-white/60" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
