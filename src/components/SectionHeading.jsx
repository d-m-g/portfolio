import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

/** Eyebrow + title with an accent line that draws itself in on scroll. */
export default function SectionHeading({ eyebrow, title, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-3">
        <motion.span
          className="inline-block h-px bg-accent"
          initial={reduce ? { width: 32 } : { width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        />
        <motion.p
          className="font-body text-sm text-muted"
          initial={reduce ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      </div>
      <motion.h2
        className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease, delay: 0.05 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
