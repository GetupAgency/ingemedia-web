export const modulesData = [
  {
    id: 'html',
    titre: 'Module HTML',
    sousTitre: 'Les fondations du web',
    description: 'Apprends à structurer tes pages web comme un pro. HTML, c\'est le squelette de tous les sites que tu visites.',
    icone: '🏗️',
    couleur: '#e34c26',
    introduction: {
      histoire: "Créé en 1991 par Tim Berners-Lee au CERN, HTML (HyperText Markup Language) est le langage fondateur du World Wide Web. À l'origine, c'était un simple système pour partager des documents scientifiques entre chercheurs. Aujourd'hui, c'est la colonne vertébrale de chaque page web que tu consultes, de Instagram à Netflix, en passant par ton site d'info préféré.",
      pourquoi: "HTML, c'est comme l'alphabet du web. Sans lui, pas de sites, pas d'apps web, pas de réseaux sociaux. Il définit la structure et le sens du contenu : où sont les titres, les paragraphes, les images, les liens. C'est le langage universel que tous les navigateurs comprennent, quel que soit ton appareil.",
      metaphore: "Imagine construire une maison. HTML, c'est la structure : les murs, les fondations, les pièces. Sans structure solide, peu importe la beauté de la décoration (CSS) ou le confort des équipements (JavaScript), la maison ne tient pas debout. Avec HTML, tu vas apprendre à poser ces fondations comme un architecte du web.",
      evolution: "De HTML 1.0 (8 balises seulement !) à HTML5 (lancé en 2014), le langage a énormément évolué. Aujourd'hui, HTML5 permet de faire des choses incroyables : vidéo, audio, canvas pour dessiner, géolocalisation, stockage local... Tout en restant simple et accessible aux débutants. C'est cette version moderne que tu vas apprendre.",
      dansMonde: "Chaque seconde, des millions de pages HTML sont créées dans le monde. Que tu veuilles devenir développeur web, créer ton portfolio, lancer une startup, ou simplement comprendre comment fonctionne le web, HTML est ton premier pas. Et bonne nouvelle : c'est plus simple qu'il n'y paraît !"
    },
    objectifs: [
      'Comprendre la structure d\'une page HTML',
      'Maîtriser les balises essentielles (titres, paragraphes, listes, liens, images)',
      'Utiliser les balises sémantiques (header, main, footer)',
      'Créer des formulaires basiques',
      'Intégrer HTML et CSS pour styliser ton contenu'
    ],
    prerequis: 'Aucun ! C\'est ton point de départ.',
    dureeEstimee: '6-8 heures',
    nombreExercices: 17
  },
  {
    id: 'css',
    titre: 'Module CSS',
    sousTitre: 'L\'art de la mise en forme',
    description: 'Transforme tes pages HTML brutes en œuvres d\'art visuelles. CSS, c\'est la peinture et le style de ton site.',
    icone: '🎨',
    couleur: '#264de4',
    introduction: {
      histoire: "CSS (Cascading Style Sheets) a été créé en 1996 par Håkon Wium Lie pour séparer le contenu (HTML) de la présentation. Avant CSS, le style était mélangé au HTML, créant un vrai chaos. L'idée révolutionnaire : un fichier CSS peut styliser des milliers de pages HTML. Aujourd'hui, CSS3 permet des animations, des dégradés, des ombres et même des layouts complexes sans JavaScript.",
      pourquoi: "CSS, c'est la différence entre un site austère année 90 et un site moderne qui donne envie d'y rester. C'est lui qui décide des couleurs, des polices, des espacements, des animations. Sans CSS, tous les sites seraient en Times New Roman noir sur fond blanc. Avec CSS, tu peux créer n'importe quelle ambiance : professionnelle, fun, minimaliste, colorée...",
      metaphore: "Si HTML est la structure de la maison, CSS est l'architecte d'intérieur. C'est lui qui choisit les couleurs des murs, l'emplacement des meubles, l'éclairage, la déco. Tu peux avoir la même structure (HTML) et créer des ambiances complètement différentes juste en changeant le CSS. Un même site peut passer de dark mode à light mode uniquement grâce au CSS.",
      evolution: "De CSS1 (propriétés basiques) à CSS3 (animations, Flexbox, Grid), le langage a explosé en possibilités. Aujourd'hui, avec des outils comme Flexbox et Grid, tu peux créer des layouts qui auraient demandé des heures de JavaScript il y a 10 ans. Les variables CSS, les media queries, les transforms... CSS est devenu un langage ultra-puissant.",
      dansMonde: "Tous les sites que tu admires pour leur beauté (Apple, Airbnb, Spotify) doivent leur design à CSS. C'est aussi grâce au CSS que ton site s'adapte automatiquement à ton téléphone, ta tablette, ton écran 4K. Le responsive design, c'est du CSS. Les animations smooth, c'est du CSS. Le dark mode que tout le monde adore, c'est du CSS. Bref, CSS, c'est la magie visuelle du web."
    },
    objectifs: [
      'Comprendre les sélecteurs CSS et la cascade',
      'Maîtriser le box model (margin, padding, border)',
      'Utiliser Flexbox pour les layouts simples',
      'Découvrir CSS Grid pour les layouts complexes',
      'Créer des animations et transitions',
      'Rendre ton site responsive'
    ],
    prerequis: 'Module HTML complété',
    dureeEstimee: '6-8 heures',
    nombreExercices: 12
  },
  {
    id: 'javascript',
    titre: 'Module JavaScript',
    sousTitre: 'La magie interactive',
    description: 'Donne vie à tes pages ! JavaScript, c\'est le cerveau qui rend ton site intelligent et interactif.',
    icone: '⚡',
    couleur: '#f7df1e',
    introduction: {
      histoire: "Créé en 1995 par Brendan Eich en seulement 10 jours (!), JavaScript devait à l'origine s'appeler LiveScript. Netscape l'a rebaptisé JavaScript pour surfer sur la hype de Java (même si les deux n'ont rien à voir). Conçu pour rendre les pages web interactives, JavaScript est devenu LE langage du web. Aujourd'hui, il ne se limite plus au navigateur : avec Node.js, on peut coder des serveurs, des apps mobiles, des outils en ligne de commande...",
      pourquoi: "JavaScript, c'est ce qui transforme une brochure statique en application interactive. Quand tu cliques sur 'J'aime', quand un formulaire vérifie ton email en temps réel, quand une carte se charge sans recharger la page, quand un menu s'anime... c'est JavaScript. Sans lui, le web serait figé, tu devrais recharger la page à chaque action. Avec lui, tu peux créer des expériences fluides comme des apps natives.",
      metaphore: "Si HTML est la structure de la maison et CSS la décoration, JavaScript est le système domotique intelligent. C'est lui qui allume les lumières quand tu entres, qui règle le chauffage, qui ferme les volets automatiquement. Il rend la maison vivante et réactive. Sans JavaScript, ton site est un musée (joli mais figé). Avec JavaScript, c'est un parc d'attractions (vivant et interactif).",
      evolution: "De simple langage de scripting à écosystème géant, JavaScript a explosé. ES6 (2015) a révolutionné le langage avec les arrow functions, les classes, les modules... Aujourd'hui, avec des frameworks comme React, Vue, Angular, JavaScript peut créer des applications web aussi complexes que des logiciels desktop. TypeScript (JavaScript avec des types) l'a rendu encore plus robuste. C'est le langage le plus utilisé au monde selon GitHub.",
      dansMonde: "JavaScript est PARTOUT. Facebook ? JavaScript (React). Netflix ? JavaScript. Google Maps ? JavaScript. Gmail ? JavaScript. Les apps de ton téléphone ? Souvent JavaScript (React Native). Les extensions Chrome ? JavaScript. Les serveurs ? JavaScript (Node.js). C'est littéralement le langage le plus polyvalent et demandé du marché. Maîtriser JavaScript, c'est avoir un super-pouvoir."
    },
    objectifs: [
      'Comprendre les variables, types et opérateurs',
      'Manipuler le DOM (sélection, modification d\'éléments)',
      'Gérer les événements (click, submit, hover)',
      'Utiliser les conditions et boucles',
      'Créer des fonctions réutilisables',
      'Travailler avec les tableaux et objets'
    ],
    prerequis: 'Modules HTML et CSS complétés',
    dureeEstimee: '8-10 heures',
    nombreExercices: 12
  },
  {
    id: 'react',
    titre: 'Module React',
    sousTitre: 'Les composants modernes',
    description: 'Passe au niveau supérieur ! React, c\'est la bibliothèque qui te fait construire des apps web comme les pros.',
    icone: '⚛️',
    couleur: '#61dafb',
    introduction: {
      histoire: "Créé par Facebook (Meta) en 2013 et rendu open-source la même année, React a révolutionné le développement web. Jordan Walke, ingénieur chez Facebook, l'a conçu pour résoudre un problème : comment gérer des interfaces complexes qui changent en permanence (le fil d'actualité, les notifs, les messages...) sans que tout devienne un cauchemar à maintenir ? Sa solution : les composants réutilisables et le Virtual DOM.",
      pourquoi: "React te permet de créer des interfaces complexes en les découpant en petits morceaux réutilisables (les composants). Un bouton, une card, un formulaire : chaque élément est un composant que tu peux réutiliser partout. Plus besoin de manipuler le DOM à la main comme en JavaScript vanilla. React s'occupe de tout : tu déclares ce que tu veux afficher, et React se charge de mettre à jour l'interface efficacement. C'est comme passer de l'assemblage manuel à la chaîne de production automatisée.",
      metaphore: "Si JavaScript c'est bricoler une maison pièce par pièce, React c'est utiliser des modules préfabriqués qu'on assemble comme des LEGO. Tu crées un composant 'Bouton', et tu peux l'utiliser 50 fois dans ton app sans réécrire le code. Tu changes le composant, et les 50 boutons se mettent à jour automatiquement. C'est l'industrialisation du développement web : efficace, maintenable, scalable.",
      evolution: "React a popularisé plusieurs concepts révolutionnaires : le Virtual DOM (super performant), le JSX (mélanger HTML et JS), les hooks (useState, useEffect) qui ont simplifié le code. Aujourd'hui, React domine le marché avec des frameworks basés dessus : Next.js pour le web, React Native pour le mobile. La version 18 (2022) a apporté le Concurrent Rendering. React Server Components arrive. L'écosystème n'arrête jamais d'évoluer.",
      dansMonde: "React, c'est le standard de l'industrie. Facebook (évidemment), Instagram, WhatsApp, Netflix, Airbnb, Uber, Discord, Dropbox, Reddit... La liste est infinie. Pourquoi ? Parce que React permet de créer des apps web qui ressemblent à des apps natives, super réactives et performantes. C'est aussi la compétence la plus demandée sur le marché du dev front-end. Maîtriser React, c'est avoir les portes grandes ouvertes."
    },
    objectifs: [
      'Comprendre les composants et le JSX',
      'Utiliser les props pour passer des données',
      'Gérer l\'état avec useState',
      'Gérer les effets avec useEffect',
      'Créer des listes dynamiques',
      'Construire une application complète'
    ],
    prerequis: 'Tous les modules précédents complétés',
    dureeEstimee: '10-12 heures',
    nombreExercices: 10
  }
];

