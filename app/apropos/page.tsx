import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, compétences et inspirations de Thomas Lopez, développeur Full Stack basé à Montlhéry."
};

export default function AboutPage() {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">Profil</p>
        <h1 className="text-4xl font-semibold text-white">Construire des produits fiables & scalables</h1>
        <p className="text-base text-white/70">
          Thomas Lopez accompagne les équipes produit sur des refontes Next.js, des plateformes data Vue.js,
          des outils Angular et des intégrations Kubernetes. Banlieue sud de Paris, interventions France &
          remote.
        </p>
      </header>
      <AboutSection />
    </section>
  );
}
