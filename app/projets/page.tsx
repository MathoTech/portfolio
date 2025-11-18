import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Études de cas Thomas Lopez : Crédit du Nord, <div>Riots, Astrelya, FixSpec et Bouygues Telecom."
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">Études de cas</p>
        <h1 className="text-4xl font-semibold text-white">Des stages produits aux plateformes internes</h1>
        <p className="text-base text-white/70">
          Portail RH pour le Crédit du Nord, écosystème marketing Riots, refonte Angular Astrelya, application marchés
          FixSpec et outils internes Bouygues Telecom : cinq projets concrets construits pendant mes stages pour livrer
          des expériences robustes et mesurables.
        </p>
      </header>
      <ProjectsGrid />
    </section>
  );
}
