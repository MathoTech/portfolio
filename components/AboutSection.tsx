import { ArrowDownToLine, Sparkles, Timer } from "lucide-react";

const introCards = [
  {
    title: "Approche produit",
    icon: Sparkles,
    content:
      "Je mixe discovery, design system et industrialisation pour livrer des expériences rapides, pixel-perfect et cohérentes. Je suis obsédé par les détails UI : micro-interactions, typos et lumière doivent raconter quelque chose, quitte à passer des heures à polir une interface pour qu’elle soit aussi belle qu’efficace."
  },
  {
    title: "Énergie & passions",
    icon: Timer,
    content:
      "Trader amateur et passionné de cryptomonnaies, je décortique les marchés comme un backlog produit : analyse fine, gestion du risque et décisions rapides. Cette curiosité finance nourrit ma veille tech et ma capacité à concevoir des interfaces data-intensives lisibles et fiables."
  }
];

const skillGroups = [
  {
    label: "Front-end",
    items: ["Next.js", "React.js", "Vue.js", "Angular", "Astro"]
  },
  {
    label: "Back-end",
    items: ["Node.js", "SpringBoot Java"]
  },
  {
    label: "Tooling & Ops",
    items: ["Docker", "Kubernetes", "GitLab CI", "GitHub Actions", "GitLab"]
  },
  {
    label: "Data & Langues",
    items: ["MongoDB", "French", "English"]
  }
];

const experiences = [
  {
    company: "Bouygues Telecom",
    role: "Développeur Full Stack",
    period: "2024",
    stack: ["Next.js", "TypeScript", "Node.js", "Kubernetes"],
    highlights: [
      "Refonte complète de la médiathèque : pages dynamiques, accessibilité AA et assets optimisés.",
      "Script de migration Node.js pour rationaliser des milliers de contenus legacy.",
      "Maintenance et déploiements Kubernetes sur des environnements multi-clusters.",
      "Développement du site de documentation du design system interne."
    ]
  },
  {
    company: "Fixspec",
    role: "Full Stack Engineer",
    period: "2023 - 2024",
    stack: ["Vue.js", "Laravel", "APIs financières"],
    highlights: [
      "Application web de collecte et d'exposition de données financières critiques.",
      "Intégration front/back temps réel et sécurisation des flux d'import/export.",
      "Co-construction des APIs Laravel + pipelines d'enrichissement data."
    ]
  },
  {
    company: "Astrelya",
    role: "Ingénieur Front & Back",
    period: "2023",
    stack: ["Angular", "SpringBoot"],
    highlights: [
      "Refonte d'une plateforme de gestion candidats avec dashboards et filtres temps réel.",
      "Ajout de statistiques, graphes interactifs et moteur de recherche avancé.",
      "Contribution côté SpringBoot pour aligner les modèles métier et la sécurité."
    ]
  },
  {
    company: "<div>Riots",
    role: "Développeur Web",
    period: "2021 - 2022",
    stack: ["Astro", "React", "Vue.js", "Node.js"],
    highlights: [
      "Ajout de contenus modulaires pour plusieurs apps web en Astro + React.",
      "Développement d'un leaderboard data-driven avec Vue.js et Fathom Analytics.",
      "Création de story.to.design from scratch avec Astro pour accélérer les designers."
    ]
  }
];

const education = [
  { title: "Expert en technologies de l'information", school: "EPITECH", period: "2019 - 2024" },
  { title: "Prépa ingénieur", school: "EFREI", period: "2017 - 2019" },
  { title: "Bac Scientifique option ISN", school: "Lycée Edmond Michelet", period: "2014 - 2017" }
];

export default function AboutSection() {
  return (
    <section className="space-y-12">
      <div className="grid gap-6 lg:grid-cols-2">
        {introCards.map(({ title, icon: Icon, content }) => (
          <article
            key={title}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center gap-3 text-accent-electric">
              <Icon className="h-5 w-5" aria-hidden />
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Manifeste</p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-base text-white/70">{content}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-white/50">Expertises</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Stack modulaire</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/60">
              Je conçois des architectures où front, back et delivery avancent au même rythme. Chaque brique listée ci
              dessous est utilisée en production pour Thomas Lopez.
            </p>
          </div>
          <a
            href="/assets/THOMAS_LOPEZ_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-iris to-accent-magenta px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:translate-y-[-2px]"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Télécharger le CV
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.45em] text-white/40">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill bg-white/10 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Parcours</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Expériences professionnelles</h2>
        <div className="mt-10 space-y-10">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="relative border-l border-white/10 pl-6">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent-electric shadow-glow" />
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span>{exp.period}</span>
                <span className="text-white/40">•</span>
                <span>{exp.stack.join(" · ")}</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{exp.company}</h3>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">{exp.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-magenta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-tr from-accent-iris/10 via-transparent to-accent-electric/10 p-8 shadow-2xl shadow-black/30">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Formation</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Apprentissages structurants</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {education.map((diploma) => (
            <div key={diploma.title} className="rounded-3xl border border-white/5 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">{diploma.period}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{diploma.title}</h3>
              <p className="text-sm text-white/70">{diploma.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
