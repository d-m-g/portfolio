import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

/**
 * Cycles through a list of words with a vertical mask-swap.
 * The hero's signature moving part. Static (first word) under reduced-motion.
 */
export default function RotatingWord({ words, interval = 2100 }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  if (reduce) {
    return <span className="text-accent">{words[0]}</span>;
  }

  return (
    <span className="relative inline-grid overflow-hidden pb-[0.12em] align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "125%" }}
          animate={{ y: 0 }}
          exit={{ y: "-125%" }}
          transition={{ duration: 0.55, ease }}
          className="text-accent [grid-area:1/1]"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
