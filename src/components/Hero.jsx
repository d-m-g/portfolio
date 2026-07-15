import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import RotatingWord from "./RotatingWord.jsx";
import Marquee from "./Marquee.jsx";
import { site, disciplines } from "../data/site.js";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  // Pointer parallax for the single decorative ring.
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const px = useTransform(sx, (v) => v * 26);
  const py = useTransform(sy, (v) => v * 26);

  const onPointerMove = (e) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative mx-auto flex min-h-[82vh] max-w-5xl flex-col justify-center overflow-hidden px-6 pb-10 pt-28"
    >
      {/* single subtle parallax ring — quiet ambient depth */}
      <motion.div
        aria-hidden="true"
        style={{ x: px, y: py }}
        className="pointer-events-none absolute -right-20 top-16 -z-0 h-80 w-80 rounded-full border border-accent/15 sm:h-[26rem] sm:w-[26rem]"
      />

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
        <span className="font-body text-xs text-muted">
          Available for Summer 2026 internships
        </span>
      </motion.div>

      {/* Thesis: what I build, cycling through the disciplines */}
      <h1 className="relative z-10 font-heading text-6xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl md:text-8xl">
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
