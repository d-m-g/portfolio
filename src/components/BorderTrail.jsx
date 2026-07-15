import { motion, useReducedMotion } from "motion/react";

/**
 * A soft comet of light that laps the inner edge of its (rounded) parent.
 * Adapted from Motion Primitives' Border Trail. The parent must be
 * `relative`, rounded, and `overflow-hidden` — which clips the comet's
 * outer half so it reads as a glow riding the border.
 *
 * @param {number} size      diameter (px) of the light
 * @param {number} duration  seconds for one full lap
 */
export default function BorderTrail({ size = 120, duration = 6 }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute aspect-square rounded-full"
      style={{
        width: size,
        // Travels the edge of the parent's border box.
        offsetPath: `rect(0 auto auto 0 round 1rem)`,
        background:
          "radial-gradient(circle, var(--color-accent) 0%, rgba(236,72,153,0.35) 35%, transparent 70%)",
        filter: "blur(4px)",
      }}
      animate={{ offsetDistance: ["0%", "100%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}
