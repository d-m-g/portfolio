import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";

/**
 * Torch on the dot-grid.
 * A brighter copy of the page's dot-grid texture, revealed only within a
 * soft radius around the cursor via a mask. Monochrome light, so it can't
 * clash with the magenta wash. Sits behind content, pointer-events off.
 * Skipped on coarse pointers (touch) and under reduced-motion.
 */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.4 });

  // Reveal the grid only near the cursor.
  const mask = useMotionTemplate`radial-gradient(200px circle at ${sx}px ${sy}px, #000 0%, rgba(0,0,0,0.35) 45%, transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        opacity: 0.11,
        backgroundImage: "radial-gradient(#fafafa 1px, transparent 1px)",
        backgroundSize: "3px 3px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
