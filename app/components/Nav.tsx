import Link from "next/link";

export default function Nav({ currentPage }: { currentPage?: string }) {
  const links = [
    { href: "/concerts", label: "Concerts" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white px-6 py-4 border-b border-rule">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-ink">
            7th ST.
          </span>
          <span className="font-body text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-ink-soft">
            Concerts
          </span>
        </Link>
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium uppercase tracking-wide">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                currentPage === link.href
                  ? "text-accent font-bold"
                  : "text-ink-soft hover:text-accent transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
