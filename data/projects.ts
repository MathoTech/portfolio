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
    slug: "bouygues-command-center",
    title: "Bouygues Command Center",
    description:
      "Pilotage Next.js d\u2019un centre de supervision fibre : UI temps r\u00e9el, synchronisation Salesforce, exports PowerBI.",
    longDescription:
      "Refonte compl\u00e8te du centre de pilotage national Bouygues Telecom. L\u2019interface unifie les tickets fibre, la roadmap d\u2019intervention et un module analytique en temps r\u00e9el. Projet men\u00e9 en approche produit avec sprints courts et tests de charge.",
    image: "/assets/projects/project-01.jpg",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Salesforce API", "PostgreSQL"],
    problem:
      "Le cockpit existant \u00e9tait bloqu\u00e9 par des rapports statiques. Impossible de suivre les escalades clients ou de pr\u00e9voir la saturation r\u00e9seau.",
    solution:
      "Mise en place d\u2019un frontend Next.js composable, connect\u00e9 \u00e0 Salesforce et \u00e0 un entrep\u00f4t PostgreSQL. Les flux SSE assurent le suivi temps r\u00e9el, tandis que les filtres sauvegard\u00e9s sont pouss\u00e9s dans PowerBI pour l\u2019\u00e9quipe data.",
    link: "https://www.bouyguestelecom.fr",
    workflows: [
      {
        name: "Hub d\u2019observabilit\u00e9",
        description:
          "Dashboard multi-tenant avec agr\u00e9gations pr\u00e9-calcul\u00e9es, autorisations RBAC et snapshots PDF programm\u00e9s.",
        tech: ["Next.js Route Handlers", "tRPC", "BullMQ"]
      },
      {
        name: "Synchronisation Salesforce",
        description:
          "Connecteurs delta avec r\u00e9solution de conflits, replays en cas d\u2019\u00e9chec et monitoring Grafana.",
        tech: ["Salesforce CDC", "Node Streams", "Grafana"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-02.jpg",
        title: "Vue \u00ab Incident Radar \u00bb",
        description: "Heatmap r\u00e9seau coupl\u00e9e \u00e0 un module de dispatch automatis\u00e9."
      },
      {
        type: "image",
        src: "/assets/projects/project-03.jpg",
        title: "Timeline d\u2019intervention",
        description: "Composant timeline virtualis\u00e9 pour suivre 4 000 tickets/jour."
      }
    ]
  },
  {
    slug: "fixspec-connect",
    title: "Fixspec Connect",
    description:
      "Portail B2B Vue/Node migr\u00e9 vers Next.js : sandbox API financi\u00e8re, guidage IA et documentation interactive.",
    longDescription:
      "Fixspec cherchait \u00e0 fluidifier l\u2019onboarding des partenaires boursiers. J\u2019ai con\u00e7u un portail hybride Next.js + Edge Functions permettant de tester les webhooks en direct et d\u2019automatiser la validation des messages FIX.",
    image: "/assets/projects/project-04.jpg",
    stack: ["Next.js 14", "Edge Functions", "Redis", "Tailwind", "Playwright"],
    problem:
      "Les clients perdaient 3 semaines \u00e0 obtenir des acc\u00e8s et des jeux de donn\u00e9es de tests. Le backlog support explosait.",
    solution:
      "Industrialisation d\u2019un sandbox auto-provisionn\u00e9 avec scripts Edge, portail guid\u00e9 par IA (OpenAI Function Calling) et documentation interactive synchronis\u00e9e avec le sch\u00e9ma OpenAPI.",
    workflows: [
      {
        name: "Sandbox FIX supervis\u00e9",
        description:
          "Moteur de messages orchestr\u00e9 par Redis Streams avec r\u00e8gles de validation et snapshots exportables.",
        tech: ["Redis Streams", "Prisma", "Next.js Server Actions"]
      },
      {
        name: "Guidage IA",
        description:
          "Assistant embarqu\u00e9 qui explique les erreurs FIX en langage naturel et g\u00e9n\u00e8re des snippets de correction.",
        tech: ["OpenAI", "LangChain", "Zod"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-05.jpg",
        title: "Console sandbox",
        description: "Vue terminal + timeline pour rejouer les messages d\u00e9faillants."
      }
    ]
  },
  {
    slug: "astrelya-salesforce-kit",
    title: "Astrelya Salesforce Kit",
    description:
      "Kit d\u2019int\u00e9gration Salesforce + Next.js pour les squads consulting : biblioth\u00e8que UI, scripts CLI et monitoring.",
    longDescription:
      "Pour acc\u00e9l\u00e9rer les missions Astrelya, j\u2019ai livr\u00e9 un starter Next.js opinion\u00e9 : authentification Salesforce, dashboards configurables et pipeline CI/CD GitHub Actions + Vercel.",
    image: "/assets/projects/project-06.jpg",
    stack: ["Next.js 14", "Salesforce", "Tailwind", "GitHub Actions", "Cypress"],
    problem:
      "Chaque squad recr\u00e9ait la m\u00eame fondation front, avec des divergences de qualit\u00e9 et peu de tests end-to-end.",
    solution:
      "Unifier les patterns d\u2019int\u00e9gration via un kit modulable : composants UI compatibles Lightning, scripts CLI pour provisionner les sandboxes et pipeline QA automatis\u00e9.",
    link: "https://www.astrelya.com",
    workflows: [
      {
        name: "CLI dx-kit",
        description:
          "Commande Node qui cr\u00e9e les Connected Apps, configure les secrets Vercel et installe les flows MuleSoft requis.",
        tech: ["oclif", "Salesforce DX", "Vercel API"]
      },
      {
        name: "Design System Neon",
        description:
          "Palette sombre avec tokens Tailwind custom, composants accessibles et variantes Motion One.",
        tech: ["Tailwind CSS", "Radix UI", "Motion One"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-03.jpg",
        title: "Command Center KPI",
        description: "Tableau widget\u00e9 synchronis\u00e9 avec Salesforce Analytics."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Pipeline CI/CD",
        description: "Capture montrant les checks automatiques Cypress + Lighthouse."
      }
    ]
  },
  {
    slug: "riots-clubhouse",
    title: "Riots Clubhouse",
    description:
      "Exp\u00e9rience communautaire pour riders : scoring des sorties GSX-R, carnet de trajectoires et challenges WebXR.",
    longDescription:
      "Projet passion men\u00e9 avec la communaut\u00e9 Riots : un espace pour partager les setups de GSX-R 750 K6, suivre ses temps sur piste et t\u00e9l\u00e9charger des pr\u00e9sets d\u2019amortisseurs. Bas\u00e9 sur Next.js et un moteur 3D l\u00e9ger.",
    image: "/assets/projects/project-02.jpg",
    stack: ["Next.js 14", "Three.js", "Supabase", "Tailwind", "Cloudinary"],
    problem:
      "Les riders utilisaient des Google Sheets dispers\u00e9s pour enregistrer les sessions. Aucune vue centralis\u00e9e ni storytelling.",
    solution:
      "Construction d\u2019un espace communautaire : authentification Supabase, feed en temps r\u00e9el des sorties, carnet visuel des trajectoires et comparateur de setup GSX-R K6.",
    workflows: [
      {
        name: "Replay 3D",
        description:
          "Reconstruction des trajectoires via import .gpx et rendu WebGL interactif avec overlays t\u00e9l\u00e9m\u00e9trie.",
        tech: ["Three.js", "zustand", "Supabase Realtime"]
      },
      {
        name: "Badges communautaires",
        description:
          "Syst\u00e8me de qu\u00eates gamifi\u00e9 (night ride, track day, r\u00e9glages suspensions) avec webhooks Discord.",
        tech: ["Supabase Functions", "Discord Webhooks"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/projects/project-01.jpg",
        title: "Comparateur GSX-R",
        description: "Module pour juxtaposer deux pr\u00e9sets suspensions."
      }
    ]
  }
];

export const getProjectSlugs = () => projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
