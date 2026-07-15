import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-into-view fade-up wrapper.
 * Small y offset so it reads as a fade, not a slide. Respects reduced-motion.
 */
export default function Reveal({ children, delay = 0, as = "div", className }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
