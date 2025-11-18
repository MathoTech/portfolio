import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/5 text-white shadow-2xl shadow-black/30 outline-none transition hover:border-accent-electric/60 focus-visible:ring-2 focus-visible:ring-accent-electric"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/80">
          Cas d&apos;usage
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">Impact</p>
        <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-white/70">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag-pill text-[11px] text-white/70">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-accent-electric">
          <span>Étude de cas</span>
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
