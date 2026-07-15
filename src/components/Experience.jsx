import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/site.js";

const ease = [0.16, 1, 0.3, 1];

function Row({ item, index }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.05 }}
      className="relative pl-10"
    >
      {/* node on the timeline */}
      <span className="absolute left-[7px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-ink" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
          {item.company}
        </h3>
        <span className="font-body text-sm text-faint">{item.period}</span>
      </div>
      <p className="mt-0.5 font-body text-sm text-accent">{item.role}</p>

      <ul className="mt-3 space-y-1.5">
        {item.points.map((p, i) => (
          <li key={i} className="font-body text-sm leading-relaxed text-muted">
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-0.5 font-body text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  // The vertical line "draws" as you scroll through the section.
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Experience" title="Where I've worked" className="mb-12" />

      <div ref={ref} className="relative">
        {/* track + animated fill */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <motion.span
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent"
          style={reduce ? { scaleY: 1 } : { scaleY }}
        />

        <ol className="space-y-12">
          {experience.map((item, i) => (
            <Row key={item.company} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
