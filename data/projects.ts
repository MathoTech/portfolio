export type ProjectWorkflow = {
  name: string;
  description: string;
  tech?: string[];
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  title?: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  stack: string[];
  problem: string;
  solution: string;
  link?: string;
  workflows?: ProjectWorkflow[];
  demoMedia?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "credit-du-nord-plateforme-rh",
    title: "Plateforme RH Crédit du Nord",
    description:
      "Portail React pour fluidifier la gestion des congés, carrières et données employé des équipes Crédit du Nord.",
    longDescription:
      "Dans le cadre de la modernisation des outils RH, j’ai contribué à la création d’une application web interne permettant aux collaborateurs du Crédit du Nord (Société Générale) de suivre congés, historique de carrière et informations administratives. Le chantier visait une UI claire, des processus automatisés et une cohérence forte avec les back-ends existants.",
    image: "/assets/projects/project-01.jpg",
    stack: ["React", "JavaScript", "CSS", "REST API", "GitHub"],
    problem:
      "Les équipes RH travaillaient sur plusieurs interfaces vieillissantes qui rendaient la gestion des demandes et mises à jour trop lente, avec des incohérences de données.",
    solution:
      "Livraison d’un portail unifié React avec composants réutilisables, intégration aux API RH et validations front. Les équipes ont pu centraliser les workflows et réduire les retours manuels.",
    workflows: [
      {
        name: "Portail congés & carrière",
        description: "Création des écrans de suivi des congés, carrières et documents RH avec formulaires validés.",
        tech: ["React hooks", "Form validation", "REST"]
      },
      {
        name: "Bibliothèque UI interne",
        description:
          "Développement de composants partagés (tableaux, cartes employé, modales) pour garantir cohérence et accessibilité.",
        tech: ["Storybook", "CSS modules"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-02.jpg",
        title: "Dashboard RH",
        description: "Vue synthétique des droits à congés et statuts RH."
      },
      {
        type: "image",
        src: "/assets/projects/project-03.jpg",
        title: "Gestion des dossiers",
        description: "Composant tableau permettant de filtrer et mettre à jour les dossiers employé."
      }
    ]
  },
  {
    slug: "riots-ecosysteme-digital",
    title: "Écosystème digital <div>Riots",
    description:
      "Sites Astro, blog markdown et application de ranking Vue.js pour valoriser les produits numériques <div>Riots.",
    longDescription:
      "Au sein de <div>Riots (Paris, full-remote), j’ai participé à plusieurs chantiers pour améliorer la visibilité de leurs offres : site vitrine statique performant, blog connecté à des contenus markdown et application de ranking d’articles avec analytics intégrés.",
    image: "/assets/projects/project-04.jpg",
    stack: ["Astro", "Vue.js", "React", "Node.js", "Fathom Analytics"],
    problem:
      "La marque disposait d’expériences disparates et difficilement mesurables. Les équipes marketing n’avaient ni vitrine performante ni outils de suivi.",
    solution:
      "Construction d’un socle Astro optimisé SEO, d’un blog responsive et d’une app Vue.js reliée à Fathom Analytics et scripts Node de traitement. Les équipes marketing disposent désormais d’un flux de publication fiable et d’une visibilité data.",
    workflows: [
      {
        name: "Site vitrine Astro",
        description:
          "Intégration pixel-perfect de la maquette, génération statique, optimisation Lighthouse et microdata SEO.",
        tech: ["Astro", "MDX", "Tailwind"]
      },
      {
        name: "App de ranking",
        description:
          "Développement d’une UI tableau Vue.js avec filtres dynamiques, connexion à Fathom et agrégation Node avant rendu.",
        tech: ["Vue.js", "Node.js", "Fathom Analytics"]
      },
      {
        name: "Blog markdown",
        description:
          "Parsing markdown, génération de routes statiques et intégration d’un back-office minimal pour publier le contenu marketing.",
        tech: ["Content collections", "Markdown", "React components"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-05.jpg",
        title: "Blog <div>Riots",
        description: "Listing responsive alimenté par des fichiers markdown versionnés."
      }
    ]
  },
  {
    slug: "astrelya-plateforme-candidats",
    title: "Plateforme candidats Astrelya",
    description:
      "Refonte Angular/Java d’un outil de gestion candidats avec UI modulaire et modules analytiques.",
    longDescription:
      "Astrelya souhaitait moderniser sa plateforme stratégique pour les équipes recrutement. J’ai audité l’ancienne version puis développé une nouvelle interface Angular, modulable et accessible, tout en ajoutant des fonctionnalités côté Java/Spring pour enrichir les interactions métier.",
    image: "/assets/projects/project-06.jpg",
    stack: ["Angular", "TypeScript", "Java", "Spring Boot", "SCSS"],
    problem:
      "L’interface historique limitait la manipulation des données candidats et ne respectait plus les standards UX attendus.",
    solution:
      "Conception d’une UI fluide et modulaire, ajout de filtres dynamiques, statistiques et validations front, puis contribution aux nouvelles APIs côté Spring pour prolonger les scénarios métiers.",
    workflows: [
      {
        name: "Tableaux interactifs",
        description:
          "Tables virtualisées et filtres multi-critères pour explorer rapidement les profils et pipelines de recrutement.",
        tech: ["Angular CDK", "RxJS"]
      },
      {
        name: "Visualisations candidates",
        description:
          "Graphiques et cartes synthétiques pour aider les RH à interpréter les données et prendre des décisions.",
        tech: ["Chart.js", "Angular components"]
      },
      {
        name: "Back-end métier",
        description:
          "Contribution aux endpoints Spring pour gérer les nouvelles fonctionnalités et validations côté serveur.",
        tech: ["Spring Boot", "Hibernate"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-03.jpg",
        title: "Vue pipeline",
        description: "Timeline des candidats et modules de statistiques embarqués."
      }
    ]
  },
  {
    slug: "fixspec-market-navigator",
    title: "FixSpec Market Navigator",
    description:
      "Application Vue.js pour explorer horaires de marchés, instruments accessibles et contacts clés.",
    longDescription:
      "Chez FixSpec (Londres, remote), j’ai conçu une application informative dédiée aux acteurs des marchés financiers. L’objectif : proposer un navigateur ergonomique listant les places boursières, leurs horaires, les instruments disponibles et les contacts associés, le tout avec un design sur mesure construit sans librairie UI.",
    image: "/assets/projects/project-02.jpg",
    stack: ["Vue.js", "JavaScript", "Laravel", "REST API", "GitLab"],
    problem:
      "Les interlocuteurs avaient besoin d’un outil simple pour naviguer entre zones géographiques et comprendre les contraintes de trading, mais aucun produit existant ne couvrait ce besoin pédagogique.",
    solution:
      "Développement d’une UI responsive en Vue.js, intégration d’APIs financières Laravel/PHP, création d’un composant complexe d’horaires de sessions et d’un routage multi-zones pour contextualiser les données.",
    workflows: [
      {
        name: "Cartographie marchés",
        description:
          "Interface multi-onglets pour passer d’une zone à l’autre avec affichage des instruments, contacts et zones horaires.",
        tech: ["Vue Router", "Pinia"]
      },
      {
        name: "Composant horaires",
        description:
          "Widget sur-mesure listant les différentes sessions de trading avec conversions automatiques de fuseaux.",
        tech: ["Date-fns", "SVG custom"]
      },
      {
        name: "Intégration API",
        description:
          "Connexion aux endpoints Laravel et traitement des données avant affichage pour assurer cohérence et performance.",
        tech: ["Axios", "Laravel", "PHP"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-01.jpg",
        title: "Navigator multi-zones",
        description: "Écran présentant les marchés par région et sessions de trading associées."
      }
    ]
  },
  {
    slug: "bouygues-medias-design-system",
    title: "Bouygues Telecom : médiathèque & Design System",
    description:
      "Deux applications Next.js : nouvelle médiathèque interne et documentation interactive du design system.",
    longDescription:
      "Bouygues Telecom m’a confié la refonte complète de sa médiathèque interne et la création d’une documentation interactive pour le design system. Ces outils devaient harmoniser la production d’interfaces, fiabiliser les contenus médias et s’intégrer dans l’écosystème Docker/Kubernetes de l’entreprise.",
    image: "/assets/projects/project-05.jpg",
    stack: ["Next.js 14", "TypeScript", "Node.js", "Docker", "Kubernetes", "Directus"],
    problem:
      "L’ancienne médiathèque était lente, difficile à maintenir et aucun support n’existait pour la nouvelle version du design system.",
    solution:
      "Création from scratch d’une application Next.js performante, migration automatisée des contenus et conception d’une documentation interactive avec sandbox intégré. Les équipes disposent désormais d’outils fiables, documentés et alignés sur le design system.",
    workflows: [
      {
        name: "Médiathèque Next.js",
        description:
          "Développement de l’interface, gestion des assets via Directus et optimisation des performances de rendu.",
        tech: ["Next.js App Router", "Directus SDK", "Tailwind"]
      },
      {
        name: "Scripts de migration",
        description:
          "Extraction des contenus, transformation et import automatique dans la nouvelle base avec contrôle d’intégrité.",
        tech: ["Node.js", "CLI personnalisés", "CI/CD GitLab"]
      },
      {
        name: "Documentation Design System",
        description:
          "Site interactif avec sandbox pour tester les composants, exemples live et intégration CI/CD Docker/Kubernetes.",
        tech: ["MDX", "Next.js", "Docker", "Kubernetes"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-02.jpg",
        title: "Sandbox DS",
        description: "Interface montrant les composants en situation réelle."
      },
      {
        type: "image",
        src: "/assets/projects/project-04.jpg",
        title: "Médiathèque",
        description: "Vue des assets avec filtres et recherche instantanée."
      }
    ]
  }
];

export const getProjectSlugs = () => projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
