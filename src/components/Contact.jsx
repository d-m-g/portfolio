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

        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-accent sm:text-3xl"
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
