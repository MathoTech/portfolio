import ProjectCard from "./ProjectCard";

export default async function ProjectsGrid() {
  const projectsModule = await import("@/data/projects");
  const projects = Array.isArray(projectsModule.projects) ? projectsModule.projects : [];

  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        Aucun projet n&apos;est disponible pour le moment.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
