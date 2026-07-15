import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "../data/site.js";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const words = site.tagline.split(" ");

  // Pointer parallax for the decorative accent glyph.
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const px = useTransform(sx, (v) => v * 24);
  const py = useTransform(sy, (v) => v * 24);

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
      className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center overflow-hidden px-6 pt-24"
    >
      {/* decorative parallax accent — a large soft ring, not a glow blob */}
      <motion.div
        aria-hidden="true"
        style={{ x: px, y: py }}
        className="pointer-events-none absolute -right-24 top-24 -z-0 h-72 w-72 rounded-full border border-accent/20 sm:h-96 sm:w-96"
      >
        <div className="absolute inset-8 rounded-full border border-accent/10" />
        <div className="absolute inset-20 rounded-full border border-accent/10" />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-body text-xs text-muted">
          Available for Summer 2026 internships
        </span>
      </motion.div>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.05 }}
        className="mb-5 font-body text-sm text-muted"
      >
        {site.role} · {site.location}
      </motion.p>

      <h1 className="relative z-10 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {words.map((word, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-1 align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.045 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.15 + words.length * 0.045 + 0.1 }}
        className="relative z-10 mt-10 flex flex-wrap items-center gap-4"
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

      {/* scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-6 hidden items-center gap-2 font-body text-xs uppercase tracking-widest text-faint sm:flex"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
        Scroll
      </motion.a>
    </section>
  );
}
