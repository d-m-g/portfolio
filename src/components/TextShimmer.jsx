import { motion, useReducedMotion } from "motion/react";

/**
 * A slow light sweep across text. Ported from Motion Primitives' Text Shimmer,
 * adapted to a masked accent gradient over the design tokens.
 * Use sparingly — one instance per page.
 *
 * @param {number} duration  seconds per sweep
 */
export default function TextShimmer({
  children,
  duration = 3.5,
  className = "",
}) {
  const reduce = useReducedMotion();

  // Reduced motion: render plain text, no sweep.
  if (reduce) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, var(--color-muted) 0%, var(--color-muted) 40%, var(--color-accent-soft) 50%, var(--color-muted) 60%, var(--color-muted) 100%)",
        backgroundSize: "250% 100%",
      }}
      animate={{ backgroundPositionX: ["150%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
    >
      {children}
    </motion.span>
  );
}
