"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/gallery", label: "Gallery" },
  { href: "/support", label: "Support Us" },
  { href: "/press", label: "Press" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="border-b border-[--color-rule] bg-white px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo — styled text matching original "7th ST. CONCERTS" */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[--font-display] text-2xl md:text-3xl tracking-tight text-[--color-ink]">
            7th ST.
          </span>
          <span className="text-[0.6rem] md:text-xs font-[--font-body] tracking-[0.25em] uppercase text-[--color-ink]">
            Concerts
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm text-[--color-ink-soft]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-[--color-navy] font-bold"
                  : "hover:text-[--color-navy] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[--color-ink-soft]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-3 text-sm text-[--color-ink-soft]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? "text-[--color-navy] font-bold"
                  : "hover:text-[--color-navy] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
