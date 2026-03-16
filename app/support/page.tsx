import { siteConfig, sponsorshipTiers } from "../config";

export default function SupportPage() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-5xl font-[--font-display]">Support Us</h1>

        {/* Individual giving */}
        <section className="space-y-4">
          <h2 className="text-3xl font-[--font-display]">Make a Gift</h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            Your donation supports free outreach performances at hospitals,
            shelters, and schools — bringing extraordinary music directly to
            those who need it most.
          </p>
          <p className="text-[--color-ink-soft] leading-relaxed">
            7th Street Concerts is a 501(c)(3) nonprofit organization (EIN{" "}
            {siteConfig.ein}). Charitable contributions are tax deductible to
            the extent allowed by law.
          </p>
          {siteConfig.donateUrl ? (
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity text-lg"
            >
              Donate Now
            </a>
          ) : (
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Donation`}
              className="inline-block px-8 py-3 bg-[--color-accent] text-white rounded hover:opacity-90 transition-opacity text-lg"
            >
              Contact Us to Donate
            </a>
          )}
        </section>

        {/* Corporate sponsorship */}
        <section className="pt-8 border-t border-[--color-rule] space-y-6">
          <h2 className="text-3xl font-[--font-display]">
            Corporate Sponsorship
          </h2>
          <p className="text-[--color-ink-soft] leading-relaxed text-lg">
            7th Street Concerts offers a variety of sponsorship opportunities to
            corporations, small businesses, and individuals. In addition to
            demonstrating a commitment to the arts, sponsors receive a range of
            benefits including print and online recognition, logo visibility,
            and on-site signage.
          </p>

          <div className="space-y-6">
            {sponsorshipTiers
              .sort((a, b) => b.amount - a.amount)
              .map((tier) => (
                <div
                  key={tier.name}
                  className="border border-[--color-rule] rounded-lg p-6 space-y-3"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-[--font-display]">
                      {tier.name}
                    </h3>
                    <span className="text-[--color-accent] font-bold text-lg">
                      ${tier.amount.toLocaleString()}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {tier.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-sm text-[--color-ink-soft] flex gap-2"
                      >
                        <span className="text-[--color-accent]">·</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="bg-[--color-accent-light] rounded-lg p-6 space-y-2">
            <p className="font-[--font-display] font-semibold">
              Custom sponsorships are available
            </p>
            <p className="text-sm text-[--color-ink-soft]">
              We welcome the opportunity to create a collaboration that reflects
              your goals. Contact Kristin Olson at{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[--color-accent] hover:underline"
              >
                {siteConfig.contactEmail}
              </a>{" "}
              to discuss sponsorship opportunities.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
