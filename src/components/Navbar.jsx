import { useEffect, useState } from "react";
import { site } from "../data/site.js";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-ink/80 backdrop-blur-sm" : "border-b border-transparent"
      }`}
    >
      {/* gap-5 is a floor, not a suggestion. justify-between only spaces things
          out while there is slack, and on a phone there is none — the name and
          the four labels want more room than a 390px screen has — so the two
          groups sat flush against each other. A flex gap holds even when the row
          is over-full.

          The 20px comes out of the links: gap-4 below sm instead of gap-6 frees
          24px across the three of them, which more than pays for it. Keeping the
          name's gap wider than the gaps inside the menu is the point — it reads
          as the name and the menu, not five links in a row. Unchanged from sm
          up, where there is slack and none of this applies. */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-6 py-4 sm:gap-4">
        <a
          href="#top"
          className="font-heading text-sm font-bold tracking-tight text-foreground"
          aria-label={`${site.name} — home`}
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="flex items-center gap-4 sm:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
