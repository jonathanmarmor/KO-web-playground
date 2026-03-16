import Link from "next/link";
import { siteConfig } from "../config";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* Main footer — dark navy */}
      <div className="bg-navy text-white px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center leading-none">
            <span className="font-display text-4xl tracking-tight">
              7th ST.
            </span>
            <span className="font-body text-xs tracking-[0.3em] uppercase">
              Concerts
            </span>
          </Link>

          <p className="text-sm text-white/70 max-w-md">
            We are a 501(c)(3) charity and your contribution is tax deductible
            to the extent allowed by law.
          </p>

          <div className="text-sm text-white/80 space-y-1">
            <p>7th Street Concerts</p>
            <p>115 W. Seventh Street</p>
            <p>Charlotte, N.C. 28202</p>
          </div>

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            {siteConfig.contactEmail}
          </a>

          {siteConfig.mailingListUrl ? (
            <a
              href={siteConfig.mailingListUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-2.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              Subscribe
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-block px-8 py-2.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              Subscribe
            </Link>
          )}
        </div>
      </div>

      {/* Social bar — bright cyan */}
      <div className="bg-cyan px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-center gap-8">
          {siteConfig.facebookUrl && (
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          )}
          {siteConfig.instagramUrl && (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          )}
          {siteConfig.linkedInUrl && (
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          )}
          {/* Show icons as placeholders even if URLs aren't set yet */}
          {!siteConfig.facebookUrl && !siteConfig.instagramUrl && !siteConfig.linkedInUrl && (
            <div className="flex gap-8 text-white/60">
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
