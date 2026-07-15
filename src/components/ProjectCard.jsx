import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Code } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function ProjectCard({ project, index }) {
  const reduce = useReducedMotion();
  const { title, year, context, blurb, tags, live, repo } = project;

  // Pointer-tracked spotlight that follows the cursor across the card.
  const ref = useRef(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, rgba(236,72,153,0.10), transparent 70%)`;

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={reduce ? undefined : onMove}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, ease, delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-8"
    >
      {/* cursor spotlight */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}

      <div className="relative mb-4 flex items-baseline justify-between gap-4">
        <span className="font-heading text-sm font-bold tabular-nums text-accent/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-body text-xs text-faint">{year}</span>
      </div>

      <div className="relative">
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h3>
        {context && (
          <p className="mt-1 font-body text-xs uppercase tracking-widest text-faint">
            {context}
          </p>
        )}
      </div>

      <p className="relative mb-6 mt-4 flex-1 font-body text-sm leading-relaxed text-muted">
        {blurb}
      </p>

      <div className="relative mb-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 font-body text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative flex items-center gap-4 border-t border-border pt-4">
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-body text-sm text-foreground transition-colors duration-200 hover:text-accent"
          >
            Live
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        ) : (
          <span className="font-body text-sm text-faint">Case study on request</span>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} source code`}
            className="inline-flex items-center gap-1.5 font-body text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            <Code className="h-4 w-4" strokeWidth={2} />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
