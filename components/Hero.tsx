import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Annees d'experience", value: "2+" },
  { label: "Stacks pilotees", value: "Full Stack (appétence front-end)" },
  { label: "Langues", value: "FR / EN" }
];

const focus = ["React.js", "Vue.js", "Node.js", "TS/JS"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-surface/70 via-base/80 to-base/60 px-8 py-12 shadow-2xl shadow-black/40">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40 blur-3xl">
        <div className="h-full w-full bg-gradient-to-br from-accent-iris/30 via-accent-electric/20 to-accent-magenta/20" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr),320px] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
            Montlhery / Essonne
          </div>
          <div>
            <p className="text-sm text-muted">Developpeur Full Stack</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Bonjour, je suis Thomas Lopez.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">
              Développeur front-end passionné, spécialisé en JavaScript, TypeScript et
frameworks modernes (React, Next.js, Vue.js, Angular). Expérimenté en création
d’interfaces performantes et accessibles, intégration d’API et gestion de l’état.
Connaissances de base en back-end avec Node.js et Nest.js.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-iris to-accent-magenta px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:gap-3"
            >
              Mes projets
              <span aria-hidden className="transition group-hover:translate-x-0.5">-&gt;</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white opacity-80 transition hover:border-accent-electric hover:text-accent-electric"
            >
              Me contacter
            </Link>
          </div>
          <dl className="grid gap-6 text-sm text-white/70 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.25em] text-white/60">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-6 h-56 w-56 rounded-full bg-accent-electric/20 blur-[100px]" />
          <div className="relative mx-auto aspect-[3/4] w-72 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-2 backdrop-blur">
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src="/assets/thomas-lopez.jpg"
                alt="Portrait de Thomas Lopez"
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/40 p-4 text-sm text-white/80 backdrop-blur">
                <p className="text-white">Thomas Lopez</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Full Stack Engineer</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {focus.map((tech) => (
                    <span key={tech} className="tag-pill text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
