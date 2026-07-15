import { motion, useReducedMotion } from "motion/react";
import { stack } from "../data/site.js";

/**
 * Compact, always-moving skills ticker — embedded in the hero so the
 * breadth of the toolkit is visible immediately. Static wrap under
 * reduced-motion.
 */
export default function Marquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {stack.map((item) => (
          <li key={item} className="font-body text-sm text-faint">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const track = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />

      <motion.ul
        className="flex w-max gap-6 pr-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-6 font-body text-sm font-medium text-faint"
          >
            {item}
            <span className="text-accent/40">/</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
