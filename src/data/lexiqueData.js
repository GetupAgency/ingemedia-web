export const lexique = [
  // A
  { terme: "API (Application Programming Interface)", definition: "Interface qui permet à deux applications de communiquer entre elles. Exemple : l'API Twitter permet d'afficher des tweets sur un site externe." },
  { terme: "Asynchrone", definition: "Code qui s'exécute sans bloquer le reste du programme. Permet de faire des requêtes serveur pendant que l'utilisateur continue d'interagir avec la page." },
  { terme: "Attribut", definition: "Information supplémentaire ajoutée à une balise HTML. Exemple : src, alt, class, id." },
  { terme: "Accessibilité (A11y)", definition: "Pratique visant à rendre un site utilisable par tous, y compris les personnes en situation de handicap (lecteurs d'écran, navigation au clavier)." },
  
  // B
  { terme: "Backend", definition: "Partie serveur d'une application qui gère la logique métier, les bases de données et les APIs. Invisible pour l'utilisateur." },
  { terme: "Balise", definition: "Élément de base du HTML qui structure le contenu. Exemples : <div>, <p>, <h1>, <img>." },
  { terme: "Boolean", definition: "Type de données qui ne peut avoir que deux valeurs : true (vrai) ou false (faux)." },
  { terme: "Box Model", definition: "Modèle CSS qui définit comment calculer la taille d'un élément : content, padding, border, margin." },
  { terme: "Breakpoint", definition: "Point de rupture en CSS responsive où le design s'adapte à une nouvelle taille d'écran (mobile, tablette, desktop)." },
  { terme: "Browser", definition: "Navigateur web (Chrome, Firefox, Safari, Edge) qui interprète le HTML/CSS/JS et affiche les pages web." },
  { terme: "Bug", definition: "Erreur dans le code qui cause un dysfonctionnement. Peut être une erreur de logique, de syntaxe ou un cas non géré." },
  { terme: "Bundle", definition: "Fichier unique regroupant plusieurs fichiers JS/CSS optimisés pour la production. Créé par des outils comme Webpack ou Vite." },
  
  // C
  { terme: "Cache", definition: "Mémoire temporaire qui stocke des données pour accélérer les chargements futurs. Évite de re-télécharger les mêmes ressources." },
  { terme: "Callback", definition: "Fonction passée en argument à une autre fonction, pour être exécutée plus tard (souvent après une opération asynchrone)." },
  { terme: "CDN (Content Delivery Network)", definition: "Réseau de serveurs distribués géographiquement qui délivrent du contenu rapidement aux utilisateurs." },
  { terme: "Class", definition: "Attribut HTML pour appliquer des styles CSS ou sélectionner des éléments en JavaScript. Peut être partagé par plusieurs éléments." },
  { terme: "Client", definition: "Navigateur ou appareil de l'utilisateur qui fait des requêtes au serveur et affiche les résultats." },
  { terme: "Closure", definition: "Fonction JavaScript qui a accès aux variables de sa fonction parente, même après que celle-ci ait terminé son exécution." },
  { terme: "Composant", definition: "Bloc de code réutilisable qui encapsule HTML, CSS et logique. Concept central de React." },
  { terme: "Console", definition: "Outil de débogage dans les DevTools du navigateur pour afficher des messages, erreurs et tester du code JavaScript." },
  { terme: "Cookie", definition: "Petit fichier texte stocké par le navigateur pour mémoriser des informations (session, préférences, tracking)." },
  { terme: "CORS (Cross-Origin Resource Sharing)", definition: "Mécanisme de sécurité qui contrôle quels sites peuvent accéder aux ressources d'un serveur." },
  { terme: "CSS (Cascading Style Sheets)", definition: "Langage de style qui définit l'apparence visuelle des éléments HTML (couleurs, tailles, positionnement)." },
  
  // D
  { terme: "Déboguer / Debugging", definition: "Processus de recherche et correction des bugs dans le code. Utilise la console, les breakpoints, etc." },
  { terme: "Déploiement", definition: "Action de mettre en ligne une application sur un serveur accessible au public (Vercel, Netlify, Heroku)." },
  { terme: "DevTools", definition: "Outils de développement intégrés au navigateur (F12) pour inspecter le HTML, déboguer le JS, analyser les performances." },
  { terme: "DOM (Document Object Model)", definition: "Représentation en arbre du HTML que JavaScript peut manipuler pour modifier la page dynamiquement." },
  { terme: "DRY (Don't Repeat Yourself)", definition: "Principe de programmation : ne pas dupliquer le code. Créer des fonctions/composants réutilisables." },
  
  // E
  { terme: "Événement", definition: "Action déclenchée par l'utilisateur (click, scroll, submit) ou le système, que JavaScript peut écouter et gérer." },
  { terme: "Event Listener", definition: "Méthode JavaScript qui attend qu'un événement se produise pour exécuter une fonction (addEventListener)." },
  { terme: "Expression", definition: "Morceau de code JavaScript qui produit une valeur. Exemple : 2 + 2, myFunction(), condition ? a : b." },
  
  // F
  { terme: "Flexbox", definition: "Système de layout CSS en une dimension (ligne ou colonne) pour aligner et distribuer des éléments." },
  { terme: "Font", definition: "Police de caractères utilisée pour afficher du texte. Peut être web font (Google Fonts) ou système." },
  { terme: "Framework", definition: "Structure de code pré-construite qui fournit une base pour développer plus rapidement (React, Vue, Angular)." },
  { terme: "Frontend", definition: "Partie visible d'une application web avec laquelle l'utilisateur interagit directement (HTML, CSS, JS)." },
  { terme: "Fonction", definition: "Bloc de code réutilisable qui effectue une tâche spécifique. Peut prendre des paramètres et retourner une valeur." },
  
  // G
  { terme: "Git", definition: "Système de contrôle de version qui permet de suivre les modifications du code et collaborer en équipe." },
  { terme: "GitHub", definition: "Plateforme web pour héberger des projets Git, collaborer et partager du code open source." },
  { terme: "Grid", definition: "Système de layout CSS en deux dimensions (lignes et colonnes) pour créer des layouts complexes." },
  
  // H
  { terme: "Hébergement / Hosting", definition: "Service qui stocke les fichiers d'un site web et les rend accessibles sur Internet." },
  { terme: "Hook", definition: "Fonction React spéciale (useState, useEffect) qui permet d'utiliser les features de React dans les composants." },
  { terme: "HTML (HyperText Markup Language)", definition: "Langage de balisage qui structure le contenu d'une page web (titres, paragraphes, images, liens)." },
  { terme: "HTTP (HyperText Transfer Protocol)", definition: "Protocole de communication entre le client (navigateur) et le serveur pour échanger des données." },
  { terme: "HTTPS", definition: "Version sécurisée de HTTP qui chiffre les données échangées. Reconnaissable au cadenas dans la barre d'adresse." },
  
  // I
  { terme: "ID", definition: "Identifiant unique d'un élément HTML. Ne peut être utilisé qu'une seule fois par page." },
  { terme: "Iframe", definition: "Élément HTML qui permet d'intégrer une page web dans une autre (vidéos YouTube, cartes Google Maps)." },
  { terme: "Import", definition: "Mot-clé JavaScript pour charger du code depuis d'autres fichiers (modules, bibliothèques)." },
  { terme: "Indentation", definition: "Espaces ou tabulations en début de ligne pour rendre le code lisible et structuré visuellement." },
  { terme: "Intégration Continue (CI/CD)", definition: "Pratique qui automatise les tests et le déploiement à chaque modification du code." },
  
  // J
  { terme: "JavaScript (JS)", definition: "Langage de programmation qui rend les pages web interactives et dynamiques." },
  { terme: "JSON (JavaScript Object Notation)", definition: "Format de données léger pour échanger des informations entre le client et le serveur. Ressemble à un objet JS." },
  { terme: "JSX", definition: "Syntaxe React qui ressemble à du HTML mais dans du JavaScript. Permet d'écrire des composants de manière intuitive." },
  { terme: "JWT (JSON Web Token)", definition: "Méthode d'authentification sécurisée qui génère un token pour identifier l'utilisateur." },
  
  // K
  { terme: "Keyword", definition: "Mot réservé du langage (const, let, function, if, return) qui a une signification spéciale et ne peut être utilisé comme nom de variable." },
  
  // L
  { terme: "Librairie / Library", definition: "Collection de code réutilisable pour accomplir des tâches spécifiques (React, jQuery, Lodash)." },
  { terme: "Linter", definition: "Outil qui analyse le code pour détecter les erreurs, bugs potentiels et violations de conventions (ESLint)." },
  { terme: "LocalStorage", definition: "API du navigateur pour stocker des données côté client de manière persistante (survit à la fermeture du navigateur)." },
  { terme: "Loop / Boucle", definition: "Structure qui répète un bloc de code plusieurs fois (for, while, forEach)." },
  
  // M
  { terme: "Méthode", definition: "Fonction associée à un objet. Exemple : array.push(), string.toUpperCase()." },
  { terme: "Minification", definition: "Processus qui réduit la taille des fichiers JS/CSS en enlevant espaces, commentaires et en raccourcissant les noms." },
  { terme: "Mobile-first", definition: "Approche de design qui commence par concevoir pour mobile puis adapte pour les écrans plus grands." },
  { terme: "Module", definition: "Fichier JavaScript qui exporte du code (fonctions, variables) pour être importé et réutilisé ailleurs." },
  
  // N
  { terme: "Node.js", definition: "Environnement d'exécution JavaScript côté serveur. Permet de créer des APIs, des outils et des serveurs en JS." },
  { terme: "npm (Node Package Manager)", definition: "Gestionnaire de paquets JavaScript pour installer et gérer les dépendances d'un projet." },
  { terme: "null", definition: "Valeur JavaScript qui représente explicitement l'absence de valeur." },
  
  // O
  { terme: "Objet", definition: "Structure de données JavaScript qui stocke des paires clé-valeur. Exemple : { nom: 'Alice', age: 25 }." },
  { terme: "Open Source", definition: "Code source librement accessible, modifiable et distribuable. GitHub héberge des millions de projets open source." },
  { terme: "Opérateur", definition: "Symbole qui effectue une opération : arithmétique (+, -, *, /), comparaison (===, >, <), logique (&&, ||)." },
  
  // P
  { terme: "Package", definition: "Ensemble de code publié sur npm qui peut être installé et utilisé dans un projet." },
  { terme: "Paramètre", definition: "Variable définie dans la déclaration d'une fonction pour recevoir des valeurs lors de l'appel." },
  { terme: "Plugin", definition: "Extension qui ajoute des fonctionnalités à un outil existant (plugins VS Code, Webpack, Vite)." },
  { terme: "Propriété CSS", definition: "Attribut de style qu'on peut modifier (color, font-size, margin, display, etc.)." },
  { terme: "Props", definition: "Données passées d'un composant parent à un composant enfant en React (comme des arguments de fonction)." },
  { terme: "Prototype", definition: "Mécanisme JavaScript d'héritage où les objets peuvent hériter des propriétés d'autres objets." },
  
  // Q
  { terme: "Query Selector", definition: "Méthode JavaScript pour sélectionner des éléments du DOM (document.querySelector, querySelectorAll)." },
  
  // R
  { terme: "React", definition: "Bibliothèque JavaScript pour créer des interfaces utilisateur avec des composants réutilisables." },
  { terme: "Refactoring", definition: "Processus de réécriture du code pour l'améliorer sans changer son comportement (plus lisible, plus performant)." },
  { terme: "Regex (Expression Régulière)", definition: "Pattern qui permet de rechercher et manipuler du texte selon des règles (validation email, extraction de données)." },
  { terme: "Render", definition: "Action d'afficher ou mettre à jour l'interface utilisateur. En React, quand l'état change, le composant se re-render." },
  { terme: "Repository / Repo", definition: "Dossier de projet versionné avec Git, souvent hébergé sur GitHub." },
  { terme: "Responsive", definition: "Design qui s'adapte automatiquement à différentes tailles d'écran (mobile, tablette, desktop)." },
  { terme: "REST API", definition: "Architecture d'API qui utilise HTTP et des URLs pour créer, lire, modifier, supprimer des données (CRUD)." },
  { terme: "Router", definition: "Système qui gère la navigation entre différentes pages/vues dans une SPA (React Router, Vue Router)." },
  
  // S
  { terme: "Scope", definition: "Portée d'une variable : où elle est accessible dans le code (globale, fonction, bloc)." },
  { terme: "Sélecteur CSS", definition: "Pattern qui cible des éléments HTML pour leur appliquer des styles (.class, #id, tag)." },
  { terme: "Sémantique", definition: "Utilisation de balises HTML qui ont du sens (header, nav, article, footer) plutôt que des div génériques." },
  { terme: "SEO (Search Engine Optimization)", definition: "Optimisation d'un site pour mieux apparaître dans les résultats de recherche Google." },
  { terme: "Serveur", definition: "Ordinateur qui héberge une application et répond aux requêtes des clients (navigateurs)." },
  { terme: "SPA (Single Page Application)", definition: "Application web qui charge une seule page HTML et met à jour le contenu dynamiquement sans recharger." },
  { terme: "Stack", definition: "Ensemble de technologies utilisées ensemble. Exemple : MERN (MongoDB, Express, React, Node)." },
  { terme: "State / État", definition: "Données qui peuvent changer dans le temps et qui déclenchent un re-render quand elles changent (useState en React)." },
  { terme: "String", definition: "Type de données représentant du texte. Délimité par des guillemets simples, doubles ou backticks." },
  { terme: "Syntaxe", definition: "Ensemble de règles qui définissent comment écrire du code valide dans un langage." },
  
  // T
  { terme: "Tableau / Array", definition: "Structure de données qui stocke une liste ordonnée de valeurs. Exemple : [1, 2, 3]." },
  { terme: "Template Literal", definition: "String JavaScript avec des backticks `` qui permet d'insérer des variables avec ${variable}." },
  { terme: "Token", definition: "Identifiant unique et temporaire utilisé pour l'authentification (souvent un JWT)." },
  { terme: "TypeScript", definition: "Sur-ensemble de JavaScript qui ajoute le typage statique pour détecter les erreurs plus tôt." },
  
  // U
  { terme: "UI (User Interface)", definition: "Interface utilisateur : tout ce que l'utilisateur voit et avec quoi il interagit." },
  { terme: "undefined", definition: "Valeur JavaScript par défaut pour une variable déclarée mais pas initialisée." },
  { terme: "URL (Uniform Resource Locator)", definition: "Adresse web qui pointe vers une ressource (page, image, API). Exemple : https://google.com." },
  { terme: "UX (User Experience)", definition: "Expérience globale de l'utilisateur : facilité d'utilisation, plaisir, efficacité." },
  
  // V
  { terme: "Variable", definition: "Conteneur nommé qui stocke une valeur. Déclaré avec let, const ou var." },
  { terme: "Version Control", definition: "Système qui suit l'historique des modifications du code (Git permet de revenir en arrière, fusionner, collaborer)." },
  { terme: "Virtual DOM", definition: "Copie légère du DOM gardée en mémoire par React pour optimiser les mises à jour de l'interface." },
  { terme: "Vite", definition: "Build tool moderne ultra-rapide pour les projets JavaScript/TypeScript (remplace Webpack)." },
  
  // W
  { terme: "Webpack", definition: "Module bundler qui regroupe tous les fichiers JS, CSS, images en bundles optimisés pour la production." },
  { terme: "WebP", definition: "Format d'image moderne plus léger que JPEG/PNG, idéal pour optimiser les performances web." },
  
  // X
  { terme: "XMLHttpRequest (XHR)", definition: "Ancienne API JavaScript pour faire des requêtes HTTP. Remplacée par Fetch API." },
  
  // Y
  { terme: "Yarn", definition: "Gestionnaire de paquets JavaScript alternatif à npm, souvent plus rapide." },
  
  // Z
  { terme: "z-index", definition: "Propriété CSS qui définit l'ordre d'empilement des éléments (quel élément apparaît au-dessus)." }
];

