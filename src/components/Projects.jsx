import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've built"
        className="mb-12"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
