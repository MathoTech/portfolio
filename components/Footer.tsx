export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-base/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-white/50">Thomas Lopez</p>
            <p className="mt-2 text-lg font-semibold">Matho Studio</p>
            <p className="mt-3 text-sm text-white/70">
              Full stack engineer à forte appétence front : expériences React.js, Next.js, Angular, Vue.js et
              plateformes data pensées pour être belles, performantes et maintenables.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contact direct</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a className="hover:text-accent-electric" href="mailto:lopez.thomas91310@gmail.com">
                  lopez.thomas91310@gmail.com
                </a>
              </li>
              <li>
                <a className="hover:text-accent-electric" href="tel:+33634430803">
                  +33 6 34 43 08 03
                </a>
              </li>
              <li>Montlhéry · Essonne</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Disponibilité</p>
            <p className="mt-4 text-sm text-white/75">
              Projets web, applications mobiles, dashboards data et refontes UI pixel-perfect.
            </p>
            <p className="mt-3 text-sm font-semibold text-accent-electric">
              Créneaux ouverts dès maintenant.
            </p>
          </div>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-white/40">
          © {year} Matho · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
