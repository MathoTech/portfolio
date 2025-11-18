import type { Metadata } from "next";
import { FaGithub, FaLinkedin, FaCode, FaMobileAlt, FaCogs } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discutons de vos projets web, mobiles ou intégrations Salesforce."
};

const availability = [
  { icon: FaCode, label: "Projets web" },
  { icon: FaMobileAlt, label: "Applications mobiles" },
  { icon: FaCogs, label: "Intégrations Salesforce" }
];

export default function ContactPage() {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">Contact</p>
        <h1 className="text-4xl font-semibold text-white">Un message, une visio, un plan d&apos;action</h1>
        <p className="text-base text-white/70">
          Réponse sous 24h. Interventions remote ou en Ile-de-France. Email direct :{" "}
          <a className="text-accent-electric" href="mailto:lopez.thomas91310@gmail.com">
            lopez.thomas91310@gmail.com
          </a>
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <ContactForm />
        <div className="space-y-6">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Coordonnées</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                Email :{" "}
                <a href="mailto:lopez.thomas91310@gmail.com" className="text-accent-electric">
                  lopez.thomas91310@gmail.com
                </a>
              </li>
              <li>
                Téléphone :{" "}
                <a href="tel:+33634430803" className="text-accent-electric">
                  +33 6 34 43 08 03
                </a>
              </li>
              <li>Basé à Montlhéry · Essonne</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/thomas-lopez-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-accent-electric hover:text-accent-electric"
              >
                <FaLinkedin aria-hidden />
                LinkedIn
              </a>
              <a
                href="https://github.com/thomaslopez-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-accent-electric hover:text-accent-electric"
              >
                <FaGithub aria-hidden />
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Disponible pour</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {availability.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="text-accent-electric">
                    <Icon aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-accent-electric">
              Slot libre pour nouvelles missions dès maintenant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
