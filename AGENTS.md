# Contexte du projet — Matho

## Objectif principal
Construire un nouveau portfolio Next.js 14 multipage pour Thomas Lopez (Matho). Design sombre, néon bleu/violet, pages indépendantes et prêtes pour déploiement Vercel.

## Pages attendues
1. **Accueil (`/`)** : Hero compact avec portrait, nom, description. Boutons vers `/projets` et `/contact`. Aucun projet, à-propos ou formulaire sur cette page.
2. **Projets (`/projets`)** : Grille responsive alimentée par `data/projects.ts`. Cartes + pages détaillées (`/projets/[slug]`) avec image, description, stack et storytelling.
3. **À propos (`/apropos`)** : Texte long, badges compétences, timeline d’expériences (Bouygues Telecom, Fixspec, Astrelya, Riots) et mention explicite de la passion pour la moto GSX-R 750 K6.
4. **Contact (`/contact`)** : Formulaire (nom, email, message), liens GitHub/LinkedIn, coordonnées et bloc “Disponible pour : projets web, applications mobiles, intégrations Salesforce”.

## Architecture obligatoire
```
/app
  layout.tsx
  globals.css
  page.tsx
  /projets/page.tsx
  /projets/[slug]/page.tsx
  /apropos/page.tsx
  /contact/page.tsx
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProjectCard.tsx
  ProjectsGrid.tsx
  AboutSection.tsx
  ContactForm.tsx
/data
  projects.ts
/public
  assets/
/scripts
  generate-cv.js
```

## Design & UX
- Thème sombre électrique, dégradés bleu/violet/cyan, animations douces.
- Layout aéré, composants cohérents entre pages, pas de one-page.
- Accessibilité : skip-link, labels, boutons focus visibles.

## Contraintes techniques
- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS pour l’intégralité du style
- Composants fonctionnels uniquement
- SEO de base (metadata), optimisation images Next
- Données centralisées dans `data/projects.ts`

## Livrables
- Code complet respectant l’architecture
- `AGENTS.md` (ce fichier) mis à jour
- `README.md` avec stack, installation, scripts, déploiement, contact
- Projet prêt à lancer : `npm install` puis `npm run dev`
