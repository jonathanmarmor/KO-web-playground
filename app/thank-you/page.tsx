import Link from "next/link";
import { siteConfig } from "../config";

export default function ThankYouPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-lg mx-auto text-center space-y-8">
        <h1 className="text-5xl font-[--font-display]">Thank You</h1>

        <p className="text-[--color-ink-soft] leading-relaxed text-lg">
          Your gift goes directly to support 7th Street Concerts and helps to
          bring music to our community that&apos;s fresh, classical, a little
          unexpected.
        </p>

        <div className="space-y-4 pt-4">
          <Link
            href="/events"
            className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity"
          >
            See Upcoming Events
          </Link>
        </div>

        <div className="pt-8 border-t border-[--color-rule] space-y-4 text-sm text-[--color-ink-soft]">
          <p>
            Want to stay connected? Join our mailing list to hear about upcoming
            concerts, artist announcements, and ticket presales.
          </p>
          <div className="flex justify-center gap-4">
            {siteConfig.instagramUrl && (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] hover:underline"
              >
                Follow on Instagram
              </a>
            )}
            {siteConfig.facebookUrl && (
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] hover:underline"
              >
                Follow on Facebook
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
