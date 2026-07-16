import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:py-36">
      <Reveal>
        <p className="mb-3 flex items-center gap-3 font-body text-sm text-muted">
          <span className="inline-block h-px w-8 bg-accent" />
          Contact
        </p>
        <h2 className="max-w-2xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Let's build something{" "}
          <span className="text-accent">worth shipping.</span>
        </h2>

        {/* The one thing on this page that would not fit a phone.

            At text-2xl the address sets 371px wide, and inside this section's
            px-6 a 390px screen leaves it 342 — so it hung 29px out, dragged the
            document's scroll width to 395 and took the whole site with it: the
            fixed header stretched to match and everything panned sideways. An
            inline-flex will not wrap and an email will not hyphenate, so it just
            pushed.

            Fluid, so it fits by construction rather than by a breakpoint that
            happens to be true on the phone I tested. The arrow and its gap are a
            constant 32px and the address is 14.1px wide per px of type, so the
            widest it can be is (100vw - 48 - 32) / 14.1 ≈ 7vw of type; 5vw keeps
            a comfortable margin at 320 and still caps at the 1.875rem (text-3xl)
            it always had from `sm` up. */}
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-2 font-heading text-[clamp(1rem,5vw,1.875rem)] font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-accent"
        >
          {site.email}
          <ArrowUpRight
            className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={2}
          />
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-body text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {s.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  strokeWidth={2}
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
