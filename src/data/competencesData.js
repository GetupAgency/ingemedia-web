export const hardSkills = [
  {
    id: 1,
    categorie: "HTML & Sémantique",
    competences: [
      { nom: "HTML5", niveau: "Essentiel", description: "Structurer des pages web avec les balises sémantiques modernes" },
      { nom: "Accessibilité (A11y)", niveau: "Important", description: "Créer des sites utilisables par tous, y compris les personnes en situation de handicap" },
      { nom: "SEO technique", niveau: "Important", description: "Optimiser la structure HTML pour les moteurs de recherche" },
      { nom: "Formulaires", niveau: "Essentiel", description: "Créer des formulaires interactifs avec validation" }
    ]
  },
  {
    id: 2,
    categorie: "CSS & Design",
    competences: [
      { nom: "CSS3", niveau: "Essentiel", description: "Styliser des interfaces modernes avec les dernières propriétés CSS" },
      { nom: "Flexbox", niveau: "Essentiel", description: "Créer des layouts flexibles en une dimension" },
      { nom: "CSS Grid", niveau: "Essentiel", description: "Créer des layouts complexes en deux dimensions" },
      { nom: "Responsive Design", niveau: "Essentiel", description: "Adapter l'interface à tous les formats d'écran (mobile, tablette, desktop)" },
      { nom: "Animations CSS", niveau: "Important", description: "Créer des animations fluides sans JavaScript" },
      { nom: "Sass/SCSS", niveau: "Utile", description: "Utiliser un préprocesseur CSS pour du code plus maintenable" },
      { nom: "Tailwind CSS", niveau: "Utile", description: "Framework CSS utility-first pour un développement rapide" }
    ]
  },
  {
    id: 3,
    categorie: "JavaScript",
    competences: [
      { nom: "JavaScript ES6+", niveau: "Essentiel", description: "Maîtriser les fonctionnalités modernes de JavaScript" },
      { nom: "DOM Manipulation", niveau: "Essentiel", description: "Manipuler le DOM pour créer des interfaces dynamiques" },
      { nom: "Événements", niveau: "Essentiel", description: "Gérer les interactions utilisateur (click, scroll, submit...)" },
      { nom: "Fetch API / AJAX", niveau: "Essentiel", description: "Communiquer avec des APIs et charger des données" },
      { nom: "Async/Await", niveau: "Important", description: "Gérer l'asynchrone de manière élégante" },
      { nom: "Promises", niveau: "Important", description: "Travailler avec des opérations asynchrones" },
      { nom: "LocalStorage / SessionStorage", niveau: "Important", description: "Stocker des données côté client" },
      { nom: "ES Modules", niveau: "Important", description: "Organiser le code en modules réutilisables" }
    ]
  },
  {
    id: 4,
    categorie: "React & Frameworks",
    competences: [
      { nom: "React", niveau: "Essentiel", description: "Bibliothèque pour créer des interfaces utilisateur composées" },
      { nom: "JSX", niveau: "Essentiel", description: "Syntaxe pour écrire du HTML-like dans JavaScript" },
      { nom: "Hooks (useState, useEffect)", niveau: "Essentiel", description: "Gérer l'état et les effets de bord dans les composants" },
      { nom: "Props & State", niveau: "Essentiel", description: "Passer et gérer des données entre composants" },
      { nom: "React Router", niveau: "Important", description: "Gérer la navigation dans une SPA" },
      { nom: "Context API", niveau: "Important", description: "Partager des données globales sans prop drilling" },
      { nom: "Next.js", niveau: "Utile", description: "Framework React pour des applications production-ready" }
    ]
  },
  {
    id: 5,
    categorie: "Outils & Workflow",
    competences: [
      { nom: "Git", niveau: "Essentiel", description: "Versionner son code et collaborer en équipe" },
      { nom: "GitHub/GitLab", niveau: "Essentiel", description: "Héberger et partager du code, gérer les pull requests" },
      { nom: "npm/yarn", niveau: "Essentiel", description: "Gérer les dépendances JavaScript" },
      { nom: "VS Code", niveau: "Essentiel", description: "Éditeur de code moderne avec extensions" },
      { nom: "Chrome DevTools", niveau: "Essentiel", description: "Déboguer et optimiser son code dans le navigateur" },
      { nom: "Vite/Webpack", niveau: "Important", description: "Build tools pour bundler et optimiser le code" },
      { nom: "ESLint/Prettier", niveau: "Important", description: "Maintenir un code propre et cohérent" }
    ]
  },
  {
    id: 6,
    categorie: "Backend & APIs",
    competences: [
      { nom: "Node.js", niveau: "Important", description: "Exécuter du JavaScript côté serveur" },
      { nom: "Express.js", niveau: "Important", description: "Framework pour créer des APIs REST" },
      { nom: "REST API", niveau: "Important", description: "Comprendre et consommer des APIs HTTP" },
      { nom: "JSON", niveau: "Essentiel", description: "Format de données standard pour les échanges web" },
      { nom: "Authentification", niveau: "Important", description: "JWT, sessions, OAuth pour sécuriser les apps" },
      { nom: "Bases de données", niveau: "Utile", description: "MongoDB, PostgreSQL, MySQL pour stocker des données" }
    ]
  },
  {
    id: 7,
    categorie: "Performance & Optimisation",
    competences: [
      { nom: "Lighthouse", niveau: "Important", description: "Auditer les performances d'un site" },
      { nom: "Lazy Loading", niveau: "Important", description: "Charger les ressources à la demande" },
      { nom: "Code Splitting", niveau: "Important", description: "Diviser le code en morceaux chargés séparément" },
      { nom: "Optimisation images", niveau: "Important", description: "WebP, compression, responsive images" },
      { nom: "Cache strategies", niveau: "Utile", description: "Service Workers, Cache-Control pour des apps rapides" }
    ]
  },
  {
    id: 8,
    categorie: "Testing & Qualité",
    competences: [
      { nom: "Jest", niveau: "Utile", description: "Framework de tests JavaScript" },
      { nom: "Tests unitaires", niveau: "Utile", description: "Tester des fonctions isolées" },
      { nom: "Tests d'intégration", niveau: "Utile", description: "Tester l'interaction entre composants" },
      { nom: "Debugging", niveau: "Essentiel", description: "Identifier et corriger les bugs efficacement" }
    ]
  }
];

export const softSkills = [
  {
    id: 1,
    categorie: "Communication",
    competences: [
      { nom: "Communication écrite", description: "Rédiger des messages clairs, des documentations, des pull requests bien expliquées" },
      { nom: "Communication orale", description: "Présenter son travail, expliquer des concepts techniques, participer aux réunions" },
      { nom: "Écoute active", description: "Comprendre les besoins des utilisateurs et les retours de l'équipe" },
      { nom: "Vulgarisation", description: "Expliquer des concepts techniques à des non-développeurs" }
    ]
  },
  {
    id: 2,
    categorie: "Résolution de problèmes",
    competences: [
      { nom: "Pensée analytique", description: "Décomposer un problème complexe en sous-problèmes simples" },
      { nom: "Debugging", description: "Identifier la source d'un bug et le corriger méthodiquement" },
      { nom: "Recherche d'informations", description: "Savoir chercher sur Google, Stack Overflow, documentation" },
      { nom: "Créativité", description: "Trouver des solutions innovantes aux contraintes techniques" }
    ]
  },
  {
    id: 3,
    categorie: "Apprentissage",
    competences: [
      { nom: "Curiosité", description: "Vouloir comprendre comment les choses fonctionnent" },
      { nom: "Apprentissage continu", description: "Se former régulièrement aux nouvelles technologies" },
      { nom: "Autodidaxie", description: "Capacité à apprendre par soi-même via tutoriels, docs, vidéos" },
      { nom: "Adaptation", description: "S'adapter rapidement à de nouveaux frameworks ou langages" }
    ]
  },
  {
    id: 4,
    categorie: "Travail d'équipe",
    competences: [
      { nom: "Collaboration", description: "Travailler efficacement avec designers, PMs, autres devs" },
      { nom: "Code Review", description: "Donner et recevoir des feedbacks constructifs sur le code" },
      { nom: "Partage de connaissances", description: "Aider les autres, documenter, faire des présentations" },
      { nom: "Empathie", description: "Comprendre les contraintes et besoins des autres membres de l'équipe" }
    ]
  },
  {
    id: 5,
    categorie: "Organisation",
    competences: [
      { nom: "Gestion du temps", description: "Prioriser les tâches et respecter les deadlines" },
      { nom: "Autonomie", description: "Travailler de manière indépendante sans supervision constante" },
      { nom: "Attention aux détails", description: "Produire du code propre, sans bugs évidents" },
      { nom: "Documentation", description: "Documenter son code et ses décisions techniques" }
    ]
  },
  {
    id: 6,
    categorie: "Mindset",
    competences: [
      { nom: "Résilience", description: "Ne pas se décourager face aux bugs et aux difficultés" },
      { nom: "Growth mindset", description: "Voir les erreurs comme des opportunités d'apprentissage" },
      { nom: "Patience", description: "Accepter que le code prenne du temps et que les bugs soient normaux" },
      { nom: "Humilité", description: "Reconnaître qu'on ne sait pas tout et qu'on peut apprendre des autres" }
    ]
  },
  {
    id: 7,
    categorie: "Vision produit",
    competences: [
      { nom: "UX/UI awareness", description: "Comprendre l'impact du code sur l'expérience utilisateur" },
      { nom: "Thinking user-first", description: "Toujours penser à l'utilisateur final lors du développement" },
      { nom: "Vision business", description: "Comprendre les enjeux business derrière les features" },
      { nom: "Pragmatisme", description: "Trouver l'équilibre entre code parfait et deadline" }
    ]
  }
];

