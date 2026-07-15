import { motion, useReducedMotion } from "motion/react";
import { stack } from "../data/site.js";

/**
 * Infinite horizontal tech ticker. Duplicated track for a seamless loop.
 * Falls back to a static wrapped row when reduced-motion is on.
 */
export default function Marquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="border-y border-border py-6">
        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 px-6">
          {stack.map((item) => (
            <li key={item} className="font-heading text-lg font-semibold text-faint">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const track = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <motion.ul
        className="flex w-max gap-10 pr-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-heading text-lg font-semibold text-faint transition-colors duration-200 hover:text-accent"
          >
            {item}
            <span className="text-accent/40">✦</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
