export const exercicesHTML = [
  {
    id: "html-01",
    titre: "Ton tout premier H1 (le cri de naissance du site)",
    type: "code-html",
    consigne: "Fais pousser ton premier cri de développeur : ajoute un <h1> avec le texte EXACT 'Bienvenue sur mon site'. En dessous, ajoute un paragraphe <p> où tu expliques en une phrase ce que les visiteurs vont trouver ici (même si pour l'instant, il n'y a rien, on fait semblant). N'oublie pas de fermer proprement tes balises, on n'est pas des barbares.",
    code_initial: "<!-- Ajoute ton H1 et ton paragraphe ici, future légende du web -->",
    validation_attendue: {
      doit_contenir: [
        "<h1>Bienvenue sur mon site</h1>",
        "<p>"
      ]
    },
    difficulte: 1
  },
  {
    id: "html-02",
    titre: "Paragraphe zen (avec un peu de storytelling)",
    type: "code-html",
    consigne: "Offre un peu de sérénité à ton futur site : écris DEUX paragraphes <p>. Dans le premier, explique en une ou deux phrases qui tu es (version développeur débutant fier). Dans le second, explique ce que tu aimerais apprendre cette année en développement web. L'idée est de te présenter comme si ton site était ta carte de visite virtuelle. Ferme bien les balises, sinon le zen disparaît.",
    code_initial: "<!-- Les paragraphes de la paix intérieure -->",
    validation_attendue: {
      doit_contenir: [
        "<p>",
        "</p>"
      ]
    },
    difficulte: 1
  },
  {
    id: "html-03",
    titre: "L'image mystérieuse (avec un vrai alt)",
    type: "code-html",
    consigne: "Ajoute une image énigmatique avec une balise <img>. Utilise la source suivante pour l'attribut src : https://via.placeholder.com/150. Ajoute également un attribut alt avec un texte descriptif (pas 'image' ou 'truc', un vrai texte du style 'Avatar du futur développeur'). Sous l'image, ajoute un paragraphe <p> qui la commente, comme si tu présentais ta photo de profil sur un réseau social. Tu n'as pas le droit de dire 'je déteste les photos'.",
    code_initial: "<!-- Insère l'image mystérieuse et son commentaire ici -->",
    validation_attendue: {
      doit_contenir: [
        "<img",
        "src=\"https://via.placeholder.com/150\"",
        "alt="
      ]
    },
    difficulte: 1
  },
  {
    id: "html-04",
    titre: "La liste sacrée des compétences",
    type: "code-html",
    consigne: "Crée une liste non ordonnée <ul> contenant les trois compétences que tout héros du web doit maîtriser : HTML, CSS, JavaScript. Au-dessus de la liste, ajoute un titre <h2> avec le texte 'Mes super-pouvoirs web'. En dessous de la liste, ajoute un petit paragraphe expliquant laquelle de ces compétences tu as le plus hâte d'apprendre (et pourquoi). Cette page doit donner l'impression que tu es en train de monter en niveau dans un RPG.",
    code_initial: "<!-- Forge la liste de ton destin ici : titre, liste, texte -->",
    validation_attendue: {
      doit_contenir: [
        "<ul>",
        "<li>HTML</li>",
        "<li>CSS</li>",
        "<li>JavaScript</li>",
        "<h2>Mes super-pouvoirs web</h2>"
      ]
    },
    difficulte: 2
  },
  {
    id: "html-05",
    titre: "La quête des 3 étapes",
    type: "code-html",
    consigne: "Crée une liste ordonnée <ol> représentant les étapes de ta transformation en développeur web. Mets les textes suivants dans des <li> : 'Découvrir les bases', 'Casser du code (puis le réparer)', 'Créer mon premier vrai projet'. Ajoute un titre <h2> 'Plan de domination du web' juste avant la liste. Pour terminer, ajoute un petit paragraphe sous la liste où tu expliques en une phrase à quelle étape tu te situes aujourd'hui.",
    code_initial: "<!-- À toi d'ordonner le chaos de ta progression ici -->",
    validation_attendue: {
      doit_contenir: [
        "<ol>",
        "<li>Découvrir les bases</li>",
        "<li>Casser du code (puis le réparer)</li>",
        "<li>Créer mon premier vrai projet</li>",
        "<h2>Plan de domination du web</h2>"
      ]
    },
    difficulte: 2
  },
  {
    id: "html-06",
    titre: "Le portail dimensionnel (a.k.a. le lien)",
    type: "code-html",
    consigne: "Ajoute un lien <a> qui mène vers https://google.com avec le texte 'Visiter Google'. Ajoute un deuxième lien vers https://developer.mozilla.org avec le texte 'Lire la doc MDN (oui, un jour)'. Mets ces deux liens dans un paragraphe ou dans une petite liste <ul>, comme si tu présentais tes 'ressources de survie' de développeur. Bonus moral : tu viens de créer ton kit de téléportation pour aller chercher des réponses.",
    code_initial: "<!-- Le portail t'attend : Google, MDN, et toi -->",
    validation_attendue: {
      doit_contenir: [
        "<a",
        "href=\"https://google.com\"",
        "Visiter Google",
        "href=\"https://developer.mozilla.org\"",
        "Lire la doc MDN"
      ]
    },
    difficulte: 2
  },
  {
    id: "html-07",
    titre: "Le temple header, main, footer",
    type: "code-html",
    consigne: "Construis un magnifique temple HTML composé d'un <header>, d'un <main> et d'un <footer>. Dans le header, ajoute un titre <h1> avec le nom de ton site (par exemple 'Le labo d'un développeur débutant'). Dans le main, ajoute au moins un <h2> et deux paragraphes décrivant ce que les gens peuvent faire sur ton site. Dans le footer, ajoute un petit texte du type 'Fait avec un peu de HTML et beaucoup de café'. Ton objectif : que la structure ressemble à une vraie mini-page.",
    code_initial: "<!-- Bâtis ton temple HTML ici -->",
    validation_attendue: {
      doit_contenir: [
        "<header>",
        "<main>",
        "<footer>",
        "<h1>"
      ]
    },
    difficulte: 3
  },
  {
    id: "html-08",
    titre: "Le formulaire qui lit dans tes pensées",
    type: "code-html",
    consigne: "Crée un formulaire <form> qui simule une inscription à ta 'newsletter de futur dev star'. Le formulaire doit contenir : un champ texte pour le nom, un champ email pour l'adresse mail, et un bouton de soumission avec le texte 'Je m'abonne'. Ajoute des labels <label> pour chaque champ afin que ton futur toi (et tes profs) voient que tu es déjà UX friendly. Ajoute un titre <h2> 'Restons en contact' au-dessus du formulaire.",
    code_initial: "<!-- Formulaire futuriste ici (nom, email, bouton, labels) -->",
    validation_attendue: {
      doit_contenir: [
        "<form>",
        "<input",
        "type=\"text\"",
        "type=\"email\"",
        "<button",
        "<label"
      ]
    },
    difficulte: 3
  },
  {
    id: "html-09",
    titre: "La classe important (tellement importante)",
    type: "code-html-css",
    consigne: "Ajoute deux paragraphes : un paragraphe normal et un paragraphe avec la classe 'important'. Dans le CSS, rends le paragraphe 'important' rouge (color), en gras (font-weight) et légèrement plus grand (font-size). Dans le HTML, mets un texte vraiment dramatique dans le paragraphe important (par exemple 'Si tu lis ça, c'est que tu prends le dev au sérieux'). L'autre paragraphe doit être plus calme, pour qu'on voie bien la différence.",
    code_initial: {
      html: "<p>Je suis un paragraphe normal, très posé.</p>\n<p class=\"important\">Je suis un paragraphe qui veut absolument être remarqué.</p>",
      css: "/* Donne du caractère au paragraphe important */\n.important {\n  \n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "color",
        "font-weight",
        "font-size"
      ]
    },
    difficulte: 3
  },
  {
    id: "html-10",
    titre: "Styliser un H2 comme un chef d'orchestre",
    type: "code-html-css",
    consigne: "Crée un H2 avec le texte 'Chapitre 1 : Les bases'. Sous ce H2, ajoute un paragraphe qui explique ce que tu considères comme les 'bases absolues' du web (de ton point de vue de débutant). Dans le CSS, stylise le H2 : mets-le en bleu (color), centre-le (text-align), ajoute un peu d'espace autour (margin-top et margin-bottom). L'objectif est que ce titre ait un vrai rôle de chef d'orchestre visuel sur la page.",
    code_initial: {
      html: "<!-- Ajoute ton H2 majestueux et son paragraphe -->\n",
      css: "h2 {\n  /* Magie CSS ici : couleur, centrage, marges */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "color",
        "text-align",
        "margin"
      ]
    },
    difficulte: 3
  },
  {
    id: "html-11",
    titre: "Créer une card mignonne comme un chaton",
    type: "code-html-css",
    consigne: "Crée une div avec la classe 'card' contenant : un titre <h3> (par exemple 'Projet secret'), un paragraphe expliquant brièvement ce projet imaginaire, et un lien <a> 'En savoir plus' (même s'il ne mène nulle part pour l'instant). Dans le CSS, fais en sorte que la card ait : un fond gris clair, du padding, des coins arrondis, une ombre légère (box-shadow) et une largeur max de 300px. Elle doit ressembler à un petit bloc de contenu qu'on pourrait mettre sur n'importe quel site moderne.",
    code_initial: {
      html: "<!-- Crée ta card adorable ici -->",
      css: ".card {\n  /* Donne-lui du swag : fond, padding, coins arrondis, ombre, largeur */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "background",
        "padding",
        "border-radius",
        "box-shadow",
        "max-width"
      ]
    },
    difficulte: 4
  },
  {
    id: "html-12",
    titre: "La grille magique de 3 colonnes",
    type: "code-html-css",
    consigne: "Crée une div avec la classe 'grid' qui contient 3 éléments enfants (par exemple trois div représentant trois services : 'Sites vitrines', 'Applications web', 'Projets expérimentaux'). Utilise display: grid dans le CSS pour créer une grille en 3 colonnes sur écran large. Ajoute un gap (espacement) entre les colonnes. Ajoute aussi un peu de padding à la grille pour que tout ne soit pas collé aux bords. Bonus : tu peux ajouter un fond léger pour distinguer la zone de la grille.",
    code_initial: {
      html: "<div class=\"grid\">\n  <div>Sites vitrines</div>\n  <div>Applications web</div>\n  <div>Projets expérimentaux</div>\n</div>",
      css: ".grid {\n  /* À toi les super-pouvoirs du CSS moderne : grid, colonnes, gap, padding */\n}"
    },
    validation_attendue: {
      css_doit_contenir: [
        "display: grid",
        "grid-template-columns",
        "gap",
        "padding"
      ]
    },
    difficulte: 4
  },
  {
    id: "html-13",
    titre: "Ton mini-portfolio (version apprentie star du web)",
    type: "code-html-css",
    consigne: "Crée une mini-page de portfolio. Elle doit contenir : un <h1> avec ton nom ou pseudo, un paragraphe de présentation (qui tu es, ce que tu veux faire en dev), une image de profil (avec une balise <img> et un alt correct), et une liste <ul> de 3 'projets' ou idées de projets (même imaginaires). Dans le CSS, assure-toi que : le texte est lisible (line-height et une taille de police correcte), l'image a une taille raisonnable (width) et éventuellement des coins arrondis, et la liste a un peu d'espace autour. L'objectif : une vraie petite page qui pourrait être ta première carte de visite en ligne.",
    code_initial: {
      html: "<!-- Expose ton génie au monde ici : titre, présentation, image, liste de projets -->",
      css: "/* Stylise avec amour : typographie, image, liste */"
    },
    validation_attendue: {
      doit_contenir: [
        "<h1>",
        "<img",
        "<ul>"
      ]
    },
    difficulte: 5
  },
  {
    id: "html-14",
    titre: "Le lecteur vidéo HTML5 (comme sur YouTube, mais en mieux)",
    type: "code-html",
    consigne: "Intègre une vidéo avec la balise <video> HTML5. Va chercher un fichier MP4 sur le web (tu peux utiliser https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 ou trouver le tien). Utilise les attributs suivants : src (l'URL de la vidéo), controls (pour afficher les boutons play/pause/volume), width (600px par exemple), et si tu veux être stylé, ajoute aussi l'attribut poster avec une URL d'image qui s'affichera avant le play. Au-dessus de la vidéo, ajoute un titre <h2> 'Ma vidéo du moment' et en dessous un paragraphe expliquant pourquoi tu as choisi cette vidéo. Bonus : teste aussi les attributs autoplay, muted et loop pour voir ce qui se passe !",
    code_initial: "<!-- Ajoute ton lecteur vidéo HTML5 ici : titre, video, description -->",
    validation_attendue: {
      doit_contenir: [
        "<video",
        "controls",
        "src=",
        "<h2>"
      ]
    },
    difficulte: 3,
    feedback: {
      success: "Bravo ! Tu viens de créer un lecteur vidéo natif HTML5. Pas besoin de Flash (RIP), pas besoin de plugins, juste du HTML pur. C'est exactement ce que font les sites de streaming modernes.",
      hint: "La balise <video> fonctionne comme <img>, mais avec des attributs supplémentaires. N'oublie pas 'controls' pour voir les boutons !"
    }
  },
  {
    id: "html-15",
    titre: "L'iframe YouTube ultime (maîtrise totale du player)",
    type: "code-html",
    consigne: "Intègre une vidéo YouTube avec une <iframe>. Va sur YouTube, choisis une vidéo que tu aimes, clique sur 'Partager' puis 'Intégrer' et copie le code de l'iframe. MAIS ATTENTION : ne te contente pas de coller bêtement ! Tu vas personnaliser l'URL de l'iframe pour ajouter des paramètres magiques. Ajoute '?mute=1' à la fin de l'URL (dans le src) pour démarrer en mode muet. Ajoute aussi '&autoplay=1' pour qu'elle démarre automatiquement (fonctionne seulement si mute=1). Ajoute '&loop=1' pour qu'elle tourne en boucle. Tu peux aussi tester '&controls=0' pour masquer les contrôles. Exemple d'URL finale : src='https://www.youtube.com/embed/VIDEO_ID?mute=1&autoplay=1&loop=1'. Au-dessus, ajoute un <h2> avec le titre de ta vidéo. En dessous, un paragraphe qui explique quels paramètres tu as activés et pourquoi. L'objectif : devenir un ninja de l'iframe YouTube.",
    code_initial: "<!-- Intègre ton iframe YouTube customisée ici : titre, iframe avec paramètres, explications -->",
    validation_attendue: {
      doit_contenir: [
        "<iframe",
        "youtube.com/embed",
        "src=",
        "<h2>"
      ]
    },
    difficulte: 4,
    feedback: {
      success: "Chapeau ! Tu maîtrises maintenant l'art de l'iframe YouTube et ses paramètres. Ces techniques sont utilisées sur tous les sites qui intègrent des vidéos. Tu viens de gagner un super-pouvoir marketing/créatif !",
      hint: "L'iframe YouTube a une URL qui ressemble à : https://www.youtube.com/embed/VIDEO_ID. Ajoute tes paramètres après avec ?param1=valeur&param2=valeur. N'oublie pas width='560' et height='315' pour une belle taille !"
    }
  },
  {
    id: "html-16",
    titre: "Le tableau HTML ultime : Planning de cours (1h de flow)",
    type: "code-html-css",
    consigne: "Crée un tableau HTML complet représentant un planning de cours hebdomadaire. Ce n'est pas un simple tableau, c'est LE tableau qui va t'apprendre TOUTES les subtilités : <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>, colspan, rowspan, caption... tout y passe ! Voici ce que tu dois créer : \n\n1. Un <caption> avec 'Planning Master 1 Ingémédia - Semestre 1' \n2. Un <thead> avec la ligne d'en-tête : Horaire | Lundi | Mardi | Mercredi | Jeudi | Vendredi \n3. Un <tbody> avec 5 créneaux horaires (9h-11h, 11h-13h, 14h-16h, 16h-18h, 18h-20h). Remplis avec des cours imaginaires (Développement Web, Design, Marketing Digital, Gestion de projet, etc.). Utilise colspan pour les cours qui durent plusieurs créneaux consécutifs. Utilise rowspan pour les cours qui s'étalent sur plusieurs jours. \n4. Un <tfoot> avec une ligne récapitulative : 'Total : XX heures de cours' (compte les heures) \n5. Dans le CSS : stylise le tableau avec des bordures, des couleurs alternées pour les lignes (nth-child), un fond pour le thead, du padding dans les cellules, une largeur fixe, du hover sur les lignes. Rends le tableau professionnel et lisible. \n\nObjectif : créer un vrai planning digne d'un emploi du temps universitaire. C'est long, c'est minutieux, mais c'est exactement ce qu'on te demandera en entreprise. Prends ton temps, organise ton code, et sois fier du résultat !",
    code_initial: {
      html: "<!-- Construis ton tableau de planning ici : table, caption, thead, tbody, tfoot -->\n<!-- N'oublie pas : th pour les en-têtes, td pour les cellules, colspan et rowspan pour fusionner -->",
      css: "/* Stylise ton tableau : bordures, couleurs, hover, spacing */\ntable {\n  /* Commence par border-collapse: collapse; pour de belles bordures */\n}\n\nthead {\n  /* Fond coloré pour l'en-tête */\n}\n\ntbody tr:nth-child(even) {\n  /* Couleurs alternées pour les lignes */\n}\n\ntbody tr:hover {\n  /* Effet au survol */\n}"
    },
    validation_attendue: {
      doit_contenir: [
        "<table>",
        "<thead>",
        "<tbody>",
        "<caption>",
        "<th>",
        "<td>"
      ],
      css_doit_contenir: [
        "border",
        "padding",
        "background"
      ]
    },
    difficulte: 5,
    feedback: {
      success: "INCROYABLE ! Tu viens de créer un tableau HTML complet et stylé. Les tableaux sont essentiels pour présenter des données structurées : plannings, résultats, comparatifs de prix, statistiques... Tu maîtrises maintenant un outil ultra-utilisé en entreprise. Bravo pour ta patience et ta rigueur !",
      hint: "Structure : <table> contient <caption>, <thead>, <tbody>, <tfoot>. Dans <thead> et <tbody>, tu as des <tr> (lignes) qui contiennent des <th> (en-têtes) ou <td> (cellules). Pour fusionner : colspan='2' pour 2 colonnes, rowspan='2' pour 2 lignes. N'oublie pas border-collapse: collapse dans le CSS !"
    },
    tags: ["html", "tableau", "thead", "tbody", "colspan", "rowspan"],
    timeEstimate: 60
  },
  {
    id: "html-17",
    titre: "Le mini-site complet : Ta page About professionnelle (1h de création)",
    type: "code-html-css",
    consigne: "C'est le boss final du HTML ! Crée une page 'À propos' complète et professionnelle, comme on en voit sur les vrais sites. Cette page doit être un condensé de TOUT ce que tu as appris : sémantique, formulaires, listes, images, liens, vidéo, tableau... et du CSS soigné. Voici la structure attendue : \n\n1. HEADER : Logo/nom du site + Navigation (liens vers #about, #skills, #experience, #contact) \n2. SECTION HERO : Grande photo/image de fond + Titre H1 'À propos de moi' + Sous-titre accrocheur \n3. SECTION ABOUT (#about) : H2 'Qui suis-je ?', 2-3 paragraphes de présentation, une image à droite ou gauche avec float ou flexbox \n4. SECTION SKILLS (#skills) : H2 'Mes compétences', un tableau comparatif de tes compétences avec 3 colonnes (Compétence | Niveau | Description). Au moins 5 compétences listées. \n5. SECTION EXPERIENCE (#experience) : H2 'Mon parcours', une liste ordonnée (<ol>) avec tes études/expériences (même imaginaires), chaque item contient un titre en gras (<strong>), une date, une description. \n6. SECTION VIDEO : H2 'Ma présentation vidéo', intègre une vidéo (YouTube iframe ou HTML5 video) avec une légende expliquant pourquoi tu as choisi cette vidéo. \n7. SECTION CONTACT (#contact) : H2 'Me contacter', un formulaire avec : nom (text), email (email), message (textarea), bouton 'Envoyer'. Ajoute des labels et des placeholders. \n8. FOOTER : Copyright, liens réseaux sociaux (même fictifs), mention 'Fait avec ❤️ et HTML'. \n\nCSS : Crée un design cohérent et professionnel. Palette de couleurs harmonieuse, typographie soignée (line-height, font-size), espacements généreux (padding, margin), sections alternées (fond clair/foncé), responsive (au moins pour le menu et les sections). Ajoute des transitions au hover sur les liens et boutons. \n\nC'est un projet d'envergure, prends ton temps, structure bien ton code (indentation !), commente si besoin. À la fin, tu auras une vraie page professionnelle que tu pourras montrer fièrement. C'est ton chef-d'œuvre HTML !",
    code_initial: {
      html: "<!-- Construis ta page About complète ici -->\n<!-- Structure suggérée : header > nav, section.hero, section#about, section#skills (table), section#experience (ol), section.video, section#contact (form), footer -->\n<!-- N'oublie pas : sémantique HTML5, attributs (id, class), alt sur les images, labels sur les inputs -->",
      css: "/* Crée un design professionnel et cohérent */\n\n/* Reset de base */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  line-height: 1.6;\n  color: #333;\n}\n\n/* À toi de styliser : header, nav, sections, table, form, footer, boutons, liens... */\n/* Pense aux couleurs, espacements, responsive, hover effects ! */"
    },
    validation_attendue: {
      doit_contenir: [
        "<header>",
        "<nav>",
        "<section",
        "<table>",
        "<form>",
        "<footer>",
        "<h1>",
        "<h2>"
      ],
      css_doit_contenir: [
        "font-family",
        "color",
        "padding",
        "margin",
        "background"
      ]
    },
    difficulte: 5,
    feedback: {
      success: "CHAPEAU BAS ! 🎩 Tu viens de créer une page web complète et professionnelle de A à Z. Tu as utilisé : structure sémantique, navigation, sections, tableau, formulaire, médias, et un CSS aux petits oignons. C'est exactement le niveau attendu d'un développeur web junior. Tu peux être fier de toi, c'était un marathon et tu l'as terminé ! Ce projet pourrait être la base de ton vrai portfolio. Bravo ! 🎉",
      hint: "Commence par la structure HTML complète sans style, puis stylise section par section. Utilise des classes pour réutiliser les styles (.btn, .section, .container). Pour le responsive, commence par mobile puis adapte pour desktop. N'hésite pas à t'inspirer de vrais sites About (Airbnb, Stripe, etc.) pour les idées de design !"
    },
    tags: ["html", "css", "projet-complet", "sémantique", "formulaire", "tableau"],
    timeEstimate: 60
  }
];

