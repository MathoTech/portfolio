# Matho — Portfolio Next.js 14

Portfolio multi-page dédié à Thomas Lopez, développeur Full Stack basé à Montlhéry. Le site repose sur Next.js 14 (App Router) + Tailwind CSS et expose quatre pages autonomes : Accueil, Projets, À propos et Contact.

## Pages clés
- **Accueil (`/`)** : hero compact avec portrait, intitulé de poste et CTA vers Projets / Contact.
- **Projets (`/projets`)** : grille responsive alimentée par `data/projects.ts`, chaque carte renvoie vers une étude de cas détaillée.
- **À propos (`/apropos`)** : manifeste, compétences en badges, timeline Bouygues Telecom → Riots et mention de la GSX-R 750 K6.
- **Contact (`/contact`)** : formulaire accessible (nom, email, message), coordonnées, liens GitHub & LinkedIn et bloc “Disponible pour : projets web, applications mobiles, intégrations Salesforce”.

## Stack & caractéristiques
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS avec thème sombre électro (dégradés bleu/violet/cyan)
- Composants fonctionnels (`/components`) et data centralisée (`/data/projects.ts`)
- SEO de base via `metadata` par page, skip-link, labels, formulaire server action Resend
- Prêt pour Vercel (`npm run build` → `.next`)

## Structure
```
app/
  layout.tsx
  globals.css
  page.tsx
  projets/page.tsx
  projets/[slug]/page.tsx
  apropos/page.tsx
  contact/page.tsx
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProjectsGrid.tsx
  ProjectCard.tsx
  AboutSection.tsx
  ContactForm.tsx
data/
  projects.ts
public/
  assets/
    thomas-lopez.jpg
    thomas-lopez-cv.pdf
```

## Démarrage
```bash
npm install
npm run dev
# http://localhost:3000
```

## Scripts npm
| Script | Description |
| --- | --- |
| `npm run dev` | Mode développement avec HMR |
| `npm run build` | Build production prête pour Vercel |
| `npm start` | Lance Next.js en mode production |
| `npm run lint` | Vérifie le code via ESLint |

## Personnalisation
- **Projets** : modifier `data/projects.ts` (texte, stack, médias, slug).
- **Styles globaux** : `tailwind.config.js` et `app/globals.css`.
- **CV** : éditer `scripts/generate-cv.js`, puis `node scripts/generate-cv.js`.
- **Assets** : placer vos images dans `public/assets` et mettre à jour les composants.

## Contact
- Email : [lopez.thomas91310@gmail.com](mailto:lopez.thomas91310@gmail.com)
- Téléphone : +33 6 34 43 08 03
- LinkedIn : https://www.linkedin.com/in/thomas-lopez-dev
- GitHub : https://github.com/thomaslopez-dev

Le projet est prêt à être déployé sur Vercel après `npm install && npm run build`.
