import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { siteConfig } from "../config";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav currentPage="/contact" />

      {/* Page header — dark navy banner */}
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-white">
          Get in Touch
        </h1>
      </section>

      <main className="flex-1 px-6 py-16">
        <div className="max-w-lg mx-auto space-y-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-display text-accent">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-accent hover:underline text-lg"
              >
                {siteConfig.contactEmail}
              </a>
            </div>

            {siteConfig.instagramUrl && (
              <div className="space-y-2">
                <h2 className="text-xl font-display text-accent">
                  Instagram
                </h2>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-lg"
                >
                  Follow us on Instagram
                </a>
              </div>
            )}

            {siteConfig.facebookUrl && (
              <div className="space-y-2">
                <h2 className="text-xl font-display text-accent">
                  Facebook
                </h2>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-lg"
                >
                  Find us on Facebook
                </a>
              </div>
            )}

            {siteConfig.mailingListUrl && (
              <div className="pt-8 border-t border-rule space-y-3">
                <h2 className="text-xl font-display text-accent">
                  Mailing List
                </h2>
                <p className="text-ink-soft">
                  Stay up to date with new concerts and announcements.
                </p>
                <a
                  href={siteConfig.mailingListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-2.5 bg-accent text-white font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
