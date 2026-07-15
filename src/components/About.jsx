import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { about } from "../data/site.js";

const ease = [0.16, 1, 0.3, 1];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div>
          <Reveal delay={0.05}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Skills — staggered pop-in */}
          <div className="mt-8">
            <h3 className="mb-4 font-body text-xs uppercase tracking-widest text-faint">
              Toolkit
            </h3>
            <ul className="flex flex-wrap gap-2">
              {about.skills.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease, delay: i * 0.04 }}
                  className="rounded-lg border border-border bg-surface px-3 py-1.5 font-body text-sm text-foreground transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <Reveal delay={0.05}>
            <div className="mt-10">
              <h3 className="mb-4 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-faint">
                <GraduationCap className="h-4 w-4 text-accent" strokeWidth={2} />
                Education
              </h3>
              <ul className="space-y-4">
                {about.education.map((e) => (
                  <li key={e.place} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <div>
                      <p className="font-heading text-base font-semibold text-foreground">
                        {e.place}
                      </p>
                      <p className="font-body text-sm text-muted">{e.detail}</p>
                    </div>
                    <span className="font-body text-sm text-faint">{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Certificates */}
          <Reveal delay={0.05}>
            <div className="mt-10">
              <h3 className="mb-4 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-faint">
                <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={2} />
                Certificates
              </h3>
              <ul className="space-y-2">
                {about.certificates.map((c) => (
                  <li key={c} className="font-body text-sm leading-relaxed text-muted">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
