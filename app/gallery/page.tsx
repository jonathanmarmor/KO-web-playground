"use client";

import { useState } from "react";
import { galleryItems, pressItems, type GalleryItem } from "../config";

type Tab = "all" | "current-season" | "past-seasons" | "outreach";

const tabs: { value: Tab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "current-season", label: "Current Season" },
  { value: "past-seasons", label: "Past Seasons" },
  { value: "outreach", label: "Community Outreach" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  // Grab a couple of press quotes to intersperse
  const quotesWithContent = pressItems.filter((p) => p.quote.length > 0);

  return (
    <div className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-5xl font-[--font-display] text-[--color-magenta]">Gallery</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 text-sm rounded transition-colors ${
                activeTab === tab.value
                  ? "bg-[--color-magenta] text-white"
                  : "bg-[--color-bg-alt] text-[--color-ink-soft] hover:bg-[--color-rule]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery grid or placeholder */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <GalleryCard key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <p className="text-[--color-ink-soft] text-lg">
              Photos coming soon! Check back after our upcoming concerts.
            </p>
            <p className="text-sm text-[--color-ink-soft]">
              Photos by our talented concert photographers will appear here.
            </p>
          </div>
        )}

        {/* Press quotes interspersed */}
        {quotesWithContent.length > 0 && (
          <section className="pt-8 border-t border-[--color-rule] space-y-6">
            <h2 className="text-2xl font-[--font-display]">
              What People Are Saying
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {quotesWithContent.slice(0, 4).map((item, i) => (
                <blockquote
                  key={i}
                  className="bg-[--color-bg-alt] rounded-lg p-6 space-y-3"
                >
                  <p className="text-[--color-ink] italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-sm text-[--color-ink-soft]">
                    — {item.publication}
                  </p>
                </blockquote>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[--color-rule]">
      <img
        src={item.imageUrl}
        alt={item.caption}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-3 space-y-1">
        <p className="text-sm text-[--color-ink]">{item.caption}</p>
        {item.credit && (
          <p className="text-xs text-[--color-ink-soft]">
            Photo: {item.credit}
          </p>
        )}
      </div>
    </div>
  );
}
