import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import RotatingWord from "./RotatingWord.jsx";
import Marquee from "./Marquee.jsx";
import TextShimmer from "./TextShimmer.jsx";
import { site, disciplines } from "../data/site.js";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[82vh] max-w-5xl flex-col justify-center overflow-hidden px-6 pb-10 pt-28"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <TextShimmer className="font-body text-xs">
          Available for 2026–2027 internships
        </TextShimmer>
      </motion.div>

      {/* Thesis: what I build, cycling through the disciplines */}
      {/* Size is viewport-scaled on phones so the longest discipline never wraps
          — a second line would resize the h1 on every word swap. */}
      <h1 className="relative z-10 whitespace-nowrap font-heading text-[11vw] font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl md:text-8xl">
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            I build
          </motion.span>
        </span>
        <RotatingWord words={disciplines} />
      </h1>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.35 }}
        className="relative z-10 mt-7 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg"
      >
        {site.name} — Computer Science &amp; Maths student in Helsinki, working
        across mobile, web and machine learning.
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.45 }}
        className="relative z-10 mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
        >
          View work
          <ArrowDown
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
            strokeWidth={2}
          />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-body text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          Get in touch
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </motion.div>

      {/* Skills ticker — always moving, visible without scrolling */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 mt-14"
      >
        <p className="mb-3 font-body text-xs uppercase tracking-widest text-faint">
          Working with
        </p>
        <Marquee />
      </motion.div>
    </section>
  );
}
