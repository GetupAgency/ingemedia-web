export const exercicesCSS = [
  {
    id: "css-01",
    titre: "Le bouton qui se prend pour un super-héros",
    type: "code-css",
    consigne: "Transforme un bouton banal en bouton légendaire. Donne-lui : une couleur de fond vibrante (background-color), du padding généreux (au moins 12px vertical et 24px horizontal), des coins arrondis (border-radius), une couleur de texte qui contraste bien (color), et une police un peu plus grande (font-size). Bonus : ajoute un petit transform au hover pour qu'il ait l'air de se soulever légèrement quand on passe la souris dessus. Ce bouton doit respirer la confiance.",
    code_initial: {
      html: "<button class=\"hero-btn\">Cliquez-moi, je suis un héros</button>",
      css: ".hero-btn {\n  /* Rends ce bouton épique */\n}\n\n.hero-btn:hover {\n  /* Le petit effet de survol qui fait la diff */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "background-color",
        "padding",
        "border-radius",
        "color",
        "font-size"
      ]
    },
    difficulte: 1
  },
  {
    id: "css-02",
    titre: "La card avec une ombre qui en impose",
    type: "code-css",
    consigne: "Crée une card stylée avec : un fond blanc ou très clair (background-color), du padding (environ 20px), des coins bien arrondis (border-radius), et surtout une jolie ombre portée (box-shadow) qui donne l'impression que la card flotte au-dessus de la page. Ajoute aussi une largeur max de 350px et centre-la avec margin: 0 auto. À l'intérieur du HTML fourni, tu as un titre et un paragraphe : assure-toi que tout respire bien.",
    code_initial: {
      html: "<div class=\"floating-card\">\n  <h3>Titre de la card</h3>\n  <p>Un texte qui mérite une belle mise en valeur.</p>\n</div>",
      css: ".floating-card {\n  /* Fais flotter cette card comme une plume stylée */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "background-color",
        "padding",
        "border-radius",
        "box-shadow",
        "max-width"
      ]
    },
    difficulte: 2
  },
  {
    id: "css-03",
    titre: "Flexbox : aligner 3 éléments comme un boss",
    type: "code-css",
    consigne: "Utilise Flexbox pour aligner trois div côte à côte, bien espacées. Ajoute display: flex sur le conteneur, puis utilise justify-content pour espacer les éléments de manière équilibrée. Ajoute un gap entre les éléments (ou utilise margin si tu préfères l'ancienne école). Chaque enfant (.flex-item) doit avoir une couleur de fond, du padding, et des coins arrondis. L'objectif : un layout propre et moderne qui s'adapte.",
    code_initial: {
      html: "<div class=\"flex-container\">\n  <div class=\"flex-item\">Élément 1</div>\n  <div class=\"flex-item\">Élément 2</div>\n  <div class=\"flex-item\">Élément 3</div>\n</div>",
      css: ".flex-container {\n  /* Magie Flexbox ici */\n}\n\n.flex-item {\n  /* Style des enfants */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display: flex",
        "justify-content",
        "gap"
      ]
    },
    difficulte: 2
  },
  {
    id: "css-04",
    titre: "Grid : la grille des champions (2 colonnes)",
    type: "code-css",
    consigne: "Utilise CSS Grid pour créer une grille de 2 colonnes. Définis display: grid sur le conteneur, puis grid-template-columns avec 2 colonnes de taille égale (1fr 1fr ou repeat(2, 1fr)). Ajoute un gap entre les éléments. Chaque item de la grille (.grid-item) doit avoir un fond, du padding et des coins arrondis. Bonus : ajoute une hauteur minimale (min-height) pour que les items aient une belle prestance même avec peu de texte.",
    code_initial: {
      html: "<div class=\"grid-container\">\n  <div class=\"grid-item\">Item 1</div>\n  <div class=\"grid-item\">Item 2</div>\n  <div class=\"grid-item\">Item 3</div>\n  <div class=\"grid-item\">Item 4</div>\n</div>",
      css: ".grid-container {\n  /* Grid power activated */\n}\n\n.grid-item {\n  /* Style des cases de la grille */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display: grid",
        "grid-template-columns",
        "gap"
      ]
    },
    difficulte: 2
  },
  {
    id: "css-05",
    titre: "Typographie qui respire (line-height et spacing)",
    type: "code-css",
    consigne: "Rends un bloc de texte agréable à lire. Applique un line-height généreux (1.6 ou plus) sur le paragraphe, augmente légèrement la taille de la police (font-size), ajoute un peu d'espacement entre les lettres (letter-spacing) et entre les paragraphes (margin-bottom). Le titre h2 doit être un peu plus grand, avec un margin-bottom qui le sépare bien du texte. L'objectif : une mise en page éditoriale digne d'un magazine.",
    code_initial: {
      html: "<article class=\"readable\">\n  <h2>L'importance de la typographie</h2>\n  <p>Un texte bien mis en forme, c'est comme une bonne musique : ça coule tout seul. Le lecteur ne doit jamais buter sur la forme, seulement savourer le fond.</p>\n  <p>Prends soin de tes marges, de tes espacements, de tes hauteurs de ligne. C'est ça, le respect du lecteur.</p>\n</article>",
      css: ".readable h2 {\n  /* Titre majestueux */\n}\n\n.readable p {\n  /* Paragraphe confortable */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "line-height",
        "font-size",
        "letter-spacing",
        "margin-bottom"
      ]
    },
    difficulte: 2
  },
  {
    id: "css-06",
    titre: "Transition douce sur hover (l'effet luxe)",
    type: "code-css",
    consigne: "Crée une card qui change subtilement au survol. Applique une transition (transition) sur plusieurs propriétés (transform, box-shadow, background-color). Au hover, la card doit se soulever légèrement (translateY), son ombre doit s'intensifier, et peut-être même changer légèrement de couleur de fond. Tout doit être fluide, jamais brutal. Durée de transition recommandée : 0.3s.",
    code_initial: {
      html: "<div class=\"smooth-card\">\n  <h3>Survole-moi</h3>\n  <p>Je vais réagir avec élégance.</p>\n</div>",
      css: ".smooth-card {\n  /* Style de base + transition */\n}\n\n.smooth-card:hover {\n  /* L'effet magique au survol */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "transition",
        "transform",
        "box-shadow"
      ]
    },
    difficulte: 3
  },
  {
    id: "css-07",
    titre: "Position absolute : le badge de notification",
    type: "code-css",
    consigne: "Crée un badge de notification (petit rond rouge avec un chiffre) positionné en haut à droite d'un élément parent. Utilise position: relative sur le parent (.notif-container) et position: absolute sur le badge (.badge). Place le badge avec top et right. Donne-lui un fond rouge vif, du texte blanc, une forme ronde (border-radius: 50%), une petite taille (width et height identiques), et centre le texte à l'intérieur. C'est le genre de détail UI qu'on voit sur toutes les apps modernes.",
    code_initial: {
      html: "<div class=\"notif-container\">\n  <button>Messages</button>\n  <span class=\"badge\">3</span>\n</div>",
      css: ".notif-container {\n  /* Position de référence */\n}\n\n.badge {\n  /* Petit badge stylé et bien positionné */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "position: relative",
        "position: absolute",
        "border-radius",
        "top",
        "right"
      ]
    },
    difficulte: 3
  },
  {
    id: "css-08",
    titre: "Responsive : 2 colonnes qui deviennent 1 sur mobile",
    type: "code-css",
    consigne: "Crée une grille de 2 colonnes sur grand écran qui passe à 1 colonne sur mobile. Utilise CSS Grid avec grid-template-columns: repeat(2, 1fr) par défaut. Ajoute une media query @media (max-width: 768px) où tu changes grid-template-columns à 1fr (une seule colonne). Les items (.responsive-item) doivent avoir un fond, du padding et des coins arrondis. C'est ta première incursion dans le design responsive, bienvenue dans le futur.",
    code_initial: {
      html: "<div class=\"responsive-grid\">\n  <div class=\"responsive-item\">Contenu 1</div>\n  <div class=\"responsive-item\">Contenu 2</div>\n  <div class=\"responsive-item\">Contenu 3</div>\n  <div class=\"responsive-item\">Contenu 4</div>\n</div>",
      css: ".responsive-grid {\n  /* Grille par défaut : 2 colonnes */\n}\n\n.responsive-item {\n  /* Style des items */\n}\n\n@media (max-width: 768px) {\n  .responsive-grid {\n    /* Passage à 1 colonne sur petit écran */\n  }\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display: grid",
        "grid-template-columns",
        "@media"
      ]
    },
    difficulte: 3
  },
  {
    id: "css-09",
    titre: "Animation CSS : le pulse infini",
    type: "code-css",
    consigne: "Crée une animation qui fait 'pulser' un élément de manière infinie (comme un cœur qui bat ou un bouton d'alerte). Définis une @keyframes pulse qui change le transform: scale de 1 à 1.1 puis revient à 1. Applique cette animation sur un élément (.pulse-element) avec animation: pulse 1.5s ease-in-out infinite. Donne aussi à cet élément une forme ronde, un fond coloré, et centre-le sur la page. C'est hypnotique et très satisfaisant.",
    code_initial: {
      html: "<div class=\"pulse-element\">!</div>",
      css: "@keyframes pulse {\n  /* Définis l'animation de pulse ici */\n}\n\n.pulse-element {\n  /* Style + application de l'animation */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "@keyframes",
        "animation",
        "transform: scale"
      ]
    },
    difficulte: 4
  },
  {
    id: "css-10",
    titre: "Variables CSS : le thème customisable",
    type: "code-css",
    consigne: "Utilise les variables CSS (custom properties) pour créer un mini système de thème. Définis des variables dans :root pour les couleurs principales (--primary-color, --secondary-color, --text-color, --bg-color). Applique ces variables sur différents éléments (boutons, cards, titres). L'idée : si tu changes une variable dans :root, tout le design s'adapte automatiquement. C'est comme avoir un bouton 'changer de thème' sans JavaScript.",
    code_initial: {
      html: "<div class=\"theme-demo\">\n  <h2>Mon thème personnalisé</h2>\n  <button class=\"themed-btn\">Cliquez-moi</button>\n  <div class=\"themed-card\">Une card avec le thème</div>\n</div>",
      css: ":root {\n  /* Définis tes variables de couleurs ici */\n}\n\n.theme-demo h2 {\n  /* Utilise var(--ton-variable) */\n}\n\n.themed-btn {\n  /* Utilise les variables */\n}\n\n.themed-card {\n  /* Utilise les variables */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        ":root",
        "--",
        "var("
      ]
    },
    difficulte: 4
  },
  {
    id: "css-11",
    titre: "Flexbox avancé : la navbar responsive",
    type: "code-css",
    consigne: "Crée une barre de navigation horizontale avec Flexbox. Sur grand écran, les liens doivent être alignés à droite (justify-content: flex-end ou space-between si tu as un logo à gauche). Sur mobile (media query), passe en colonne (flex-direction: column) et centre les liens. La navbar (.navbar) doit avoir un fond coloré, du padding, et peut-être une petite ombre. Les liens (.nav-link) doivent avoir du padding et changer de couleur au hover. C'est THE élément de navigation moderne.",
    code_initial: {
      html: "<nav class=\"navbar\">\n  <a href=\"#\" class=\"nav-link\">Accueil</a>\n  <a href=\"#\" class=\"nav-link\">Projets</a>\n  <a href=\"#\" class=\"nav-link\">Contact</a>\n</nav>",
      css: ".navbar {\n  /* Flexbox + style de navbar */\n}\n\n.nav-link {\n  /* Style des liens */\n}\n\n.nav-link:hover {\n  /* Effet hover */\n}\n\n@media (max-width: 768px) {\n  .navbar {\n    /* Passage en mode mobile */\n  }\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display: flex",
        "flex-direction",
        "justify-content",
        "@media"
      ]
    },
    difficulte: 4
  },
  {
    id: "css-12",
    titre: "La landing page complète (mini-projet)",
    type: "code-css",
    consigne: "C'est l'heure du boss final du CSS. Crée une mini landing page avec : un hero section (grand titre, sous-titre, bouton d'action), une section avec 3 features en grille, et un footer. Utilise tout ce que tu as appris : Grid ou Flexbox pour les layouts, des transitions sur les boutons, une typographie soignée, du responsive (media queries), des ombres, des espacements harmonieux. Le HTML est fourni avec une structure complète. Ton job : rendre ça magnifique. Prends ton temps, c'est ton chef-d'œuvre CSS.",
    code_initial: {
      html: "<div class=\"landing\">\n  <section class=\"hero\">\n    <h1>Bienvenue sur mon site incroyable</h1>\n    <p>Découvrez ce que je peux créer avec HTML et CSS</p>\n    <button class=\"cta-btn\">Commencer</button>\n  </section>\n  \n  <section class=\"features\">\n    <div class=\"feature\">\n      <h3>Design moderne</h3>\n      <p>Des interfaces qui en jettent</p>\n    </div>\n    <div class=\"feature\">\n      <h3>Responsive</h3>\n      <p>Parfait sur tous les écrans</p>\n    </div>\n    <div class=\"feature\">\n      <h3>Performant</h3>\n      <p>Rapide comme l'éclair</p>\n    </div>\n  </section>\n  \n  <footer class=\"footer\">\n    <p>Fait avec ❤️ et beaucoup de CSS</p>\n  </footer>\n</div>",
      css: "/* Crée ta landing page de rêve ici */\n\n.landing {\n  /* Container principal */\n}\n\n.hero {\n  /* Section hero : centre tout, grand, impressionnant */\n}\n\n.cta-btn {\n  /* Bouton d'action principal */\n}\n\n.features {\n  /* Grille des features */\n}\n\n.feature {\n  /* Style de chaque feature */\n}\n\n.footer {\n  /* Footer simple et élégant */\n}\n\n/* N'oublie pas les media queries pour le responsive ! */"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display",
        "padding",
        "margin",
        "background",
        "@media"
      ]
    },
    difficulte: 5
  }
];

