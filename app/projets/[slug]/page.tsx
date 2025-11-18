import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projet introuvable" };
  }
  return {
    title: `${project.title} | Projets`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Case study</p>
        <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
        <p className="text-base text-white/70">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag-pill text-[11px] text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="overflow-hidden rounded-[40px] border border-white/10 bg-black/30">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          className="h-[480px] w-full object-cover"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Problématique</p>
          <p className="mt-3 text-sm text-white/70">{project.problem}</p>
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Solution</p>
          <p className="mt-3 text-sm text-white/70">{project.solution}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-electric"
            >
              Voir la ressource
              <span aria-hidden>↗</span>
            </a>
          )}
        </section>
      </div>

      {project.workflows && project.workflows.length > 0 && (
        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Chantiers clés</p>
          <div className="mt-6 space-y-5">
            {project.workflows.map((flow) => (
              <div
                key={flow.name}
                className="rounded-3xl border border-white/10 bg-black/30 p-5 text-sm text-white/70"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">{flow.name}</h3>
                  <p>{flow.description}</p>
                  {flow.tech && (
                    <div className="flex flex-wrap gap-2">
                      {flow.tech.map((tech) => (
                        <span key={tech} className="tag-pill text-[11px] text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.demoMedia && project.demoMedia.length > 0 && (
        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Aperçus</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.demoMedia.map((media) => (
              <div
                key={media.src}
                className="space-y-4 rounded-[26px] border border-white/10 bg-black/25 p-4 text-sm text-white/70"
              >
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
                  {media.type === "image" ? (
                    <div className="relative h-56 w-full">
                      <Image
                        src={media.src}
                        alt={media.title || project.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <iframe
                      src={media.src}
                      title={media.title || "Video"}
                      className="h-56 w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                {media.title && <h3 className="text-lg font-semibold text-white">{media.title}</h3>}
                {media.description && <p>{media.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
