import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Études de cas Thomas Lopez : refontes Next.js, hubs data Vue.js, plateformes Angular et expériences Astro."
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">Études de cas</p>
        <h1 className="text-4xl font-semibold text-white">Du prototype au déploiement Kubernetes</h1>
        <p className="text-base text-white/70">
          Chaque mission représentée ici mêle réflexion produit, stack full stack (Next.js, Vue.js, Angular) et
          opérations cloud. Focus sur l&apos;impact business et la maintenabilité.
        </p>
      </header>
      <ProjectsGrid />
    </section>
  );
}
