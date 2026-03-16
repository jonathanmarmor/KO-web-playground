import { pressItems } from "../config";

export default function PressPage() {
  // Group by year
  const byYear = pressItems.reduce(
    (acc, item) => {
      const year = item.date.slice(0, 4);
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    },
    {} as Record<string, typeof pressItems>
  );

  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-5xl font-[--font-display] text-[--color-magenta]">Press</h1>

        {years.map((year) => (
          <section key={year} className="space-y-6">
            <h2 className="text-2xl font-[--font-display] text-[--color-ink-soft]">
              {year}
            </h2>
            <div className="space-y-6">
              {byYear[year].map((item, i) => (
                <div
                  key={i}
                  className="border-l-4 border-[--color-magenta] pl-6 space-y-2"
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-[--color-magenta]">
                    {item.publication}
                  </p>
                  <h3 className="text-lg font-[--font-display]">
                    {item.headline}
                  </h3>
                  {item.quote && (
                    <blockquote className="text-[--color-ink-soft] italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[--color-magenta] hover:underline"
                    >
                      Read article →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
