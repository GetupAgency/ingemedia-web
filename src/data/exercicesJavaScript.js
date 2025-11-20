export const exercicesJavaScript = [
  {
    id: "js-01",
    titre: "Le console.log de la victoire",
    type: "code-js",
    consigne: "Bienvenue dans le monde de JavaScript ! Ta première mission : afficher 'Hello, JavaScript!' dans la console. Utilise console.log(). Puis crée une variable 'nom' avec ton prénom et affiche 'Bonjour [ton prénom], futur dev star!' dans la console. C'est simple, mais c'est le début de tout. Ouvre la console de ton navigateur (F12) pour voir le résultat.",
    code_initial: "// Affiche ton premier message ici\n",
    validation_attendue: {
      doit_contenir: [
        "console.log",
        "Hello, JavaScript!"
      ]
    },
    difficulte: 1
  },
  {
    id: "js-02",
    titre: "Variables et types : le bazar organisé",
    type: "code-js",
    consigne: "Crée 4 variables : une string (ton nom), un number (ton âge), un boolean (true si tu aimes coder, false sinon), et un array avec 3 technologies que tu veux apprendre (exemple : ['React', 'Node.js', 'TypeScript']). Affiche chaque variable dans la console avec un petit texte explicatif. Utilise const pour les valeurs qui ne changent pas. Bonus : affiche le type de chaque variable avec typeof.",
    code_initial: "// Déclare tes variables ici\n\n// Affiche-les dans la console avec typeof\n",
    validation_attendue: {
      doit_contenir: [
        "const",
        "console.log",
        "typeof"
      ]
    },
    difficulte: 1
  },
  {
    id: "js-03",
    titre: "Manipuler le DOM : le changement de texte magique",
    type: "code-js",
    consigne: "Utilise document.querySelector() pour sélectionner l'élément h1 qui a l'id 'titre'. Ensuite, change son contenu texte avec .textContent = 'Nouveau titre !'. Tu viens de modifier une page web en direct. C'est exactement ce que font toutes les apps modernes. Ressens la puissance.",
    code_initial: {
      html: "<h1 id=\"titre\">Titre original</h1>",
      js: "// Sélectionne le h1 et change son texte\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "document.querySelector",
        "textContent"
      ]
    },
    difficulte: 1
  },
  {
    id: "js-04",
    titre: "L'événement click (le bouton qui réagit)",
    type: "code-js",
    consigne: "Sélectionne le bouton avec document.querySelector('#monBouton'). Ajoute un écouteur d'événement avec .addEventListener('click', function() { ... }). Quand on clique sur le bouton, affiche 'Bouton cliqué !' dans la console ET change le texte du paragraphe (id='message') pour afficher 'Vous avez cliqué sur le bouton !'. C'est l'interactivité de base, le cœur de tout site moderne.",
    code_initial: {
      html: "<button id=\"monBouton\">Clique-moi</button>\n<p id=\"message\">En attente du clic...</p>",
      js: "// Ajoute l'écouteur d'événement ici\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "addEventListener",
        "click",
        "querySelector"
      ]
    },
    difficulte: 2
  },
  {
    id: "js-05",
    titre: "Les conditions : le testeur d'âge",
    type: "code-js",
    consigne: "Crée une variable 'age' avec un nombre. Utilise une structure if/else pour vérifier : si age >= 18, affiche 'Vous êtes majeur' dans le paragraphe (id='resultat'). Sinon, affiche 'Vous êtes mineur'. Teste avec différentes valeurs pour vérifier que ça fonctionne. Les conditions, c'est ce qui rend les programmes intelligents.",
    code_initial: {
      html: "<p id=\"resultat\">Le résultat apparaîtra ici</p>",
      js: "const age = 20; // Change cette valeur pour tester\n\n// Ajoute ta condition if/else ici\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "if",
        "else",
        "textContent"
      ]
    },
    difficulte: 2
  },
  {
    id: "js-06",
    titre: "La boucle for : afficher des nombres comme un pro",
    type: "code-js",
    consigne: "Utilise une boucle for pour afficher les nombres de 1 à 10 dans la console. Ensuite, crée une liste <ul> dans le HTML (id='liste') et utilise une boucle pour créer 5 éléments <li> avec le texte 'Élément 1', 'Élément 2', etc. Pour créer un élément : document.createElement('li'), pour le texte : li.textContent = '...', et pour l'ajouter : liste.appendChild(li). Tu viens de générer du HTML avec JavaScript, bienvenue dans la magie.",
    code_initial: {
      html: "<ul id=\"liste\"></ul>",
      js: "// Boucle 1 : afficher 1 à 10 dans la console\n\n// Boucle 2 : créer 5 <li> dans la liste\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "for",
        "createElement",
        "appendChild"
      ]
    },
    difficulte: 2
  },
  {
    id: "js-07",
    titre: "Fonction réutilisable : le salueur personnalisé",
    type: "code-js",
    consigne: "Crée une fonction saluer(nom) qui prend un nom en paramètre et retourne 'Bonjour [nom], bienvenue !'. Utilise cette fonction pour afficher des salutations pour 3 personnes différentes dans la console. Ensuite, crée une fonction ajouterMessage(texte) qui crée un nouveau paragraphe, lui donne le texte en paramètre, et l'ajoute au div (id='messages'). Appelle cette fonction 3 fois avec des messages différents. Les fonctions, c'est la réutilisabilité incarnée.",
    code_initial: {
      html: "<div id=\"messages\"></div>",
      js: "// Fonction saluer\n\n// Fonction ajouterMessage\n\n// Appelle tes fonctions ici\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "function",
        "return",
        "createElement"
      ]
    },
    difficulte: 3
  },
  {
    id: "js-08",
    titre: "Manipulation de tableau : la liste de courses",
    type: "code-js",
    consigne: "Crée un array 'courses' avec 5 articles (exemple : ['pain', 'lait', 'œufs', 'fromage', 'tomates']). Affiche le nombre d'éléments avec .length. Utilise .forEach() pour parcourir le tableau et créer un <li> pour chaque article dans la liste (id='listeCourses'). Ajoute un bouton qui, quand on clique dessus, ajoute un nouvel article 'beurre' au tableau avec .push() et rafraîchit l'affichage. C'est exactement ce que font les todo-lists.",
    code_initial: {
      html: "<ul id=\"listeCourses\"></ul>\n<button id=\"ajouterArticle\">Ajouter un article</button>",
      js: "const courses = ['pain', 'lait', 'œufs'];\n\n// Fonction pour afficher la liste\n\n// Écouteur d'événement sur le bouton\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "forEach",
        "push",
        "addEventListener"
      ]
    },
    difficulte: 3
  },
  {
    id: "js-09",
    titre: "Le formulaire intelligent (récupérer des valeurs)",
    type: "code-js",
    consigne: "Crée un formulaire avec un input (id='inputNom') et un bouton. Quand on clique sur le bouton, récupère la valeur de l'input avec input.value, et affiche 'Bonjour [valeur] !' dans un paragraphe (id='accueil'). Bonus : vide le champ input après l'affichage avec input.value = ''. C'est la base de tout formulaire interactif, de l'inscription à la connexion.",
    code_initial: {
      html: "<input type=\"text\" id=\"inputNom\" placeholder=\"Votre nom\">\n<button id=\"btnValider\">Valider</button>\n<p id=\"accueil\"></p>",
      js: "// Récupère la valeur de l'input et affiche le message\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "value",
        "addEventListener",
        "textContent"
      ]
    },
    difficulte: 3
  },
  {
    id: "js-10",
    titre: "Le compteur (state management basique)",
    type: "code-js",
    consigne: "Crée une variable 'compteur' initialisée à 0. Crée deux boutons : '+' et '-'. Quand on clique sur '+', incrémente le compteur et affiche la nouvelle valeur dans un span (id='valeurCompteur'). Quand on clique sur '-', décrémente le compteur. Ajoute une condition : le compteur ne peut pas descendre en dessous de 0. C'est le principe de 'state' qu'on retrouve dans React. Tu gères un état et tu affiches sa valeur.",
    code_initial: {
      html: "<button id=\"moins\">-</button>\n<span id=\"valeurCompteur\">0</span>\n<button id=\"plus\">+</button>",
      js: "let compteur = 0;\n\n// Fonction pour mettre à jour l'affichage\n\n// Écouteurs d'événements sur les boutons\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "let",
        "addEventListener",
        "++",
        "if"
      ]
    },
    difficulte: 3
  },
  {
    id: "js-11",
    titre: "Le toggle de classe (afficher/masquer)",
    type: "code-js",
    consigne: "Utilise classList.toggle() pour afficher/masquer un élément. Crée un bouton qui, quand on clique dessus, ajoute ou retire la classe 'hidden' sur un div (id='contenu'). Dans le CSS, la classe .hidden doit avoir 'display: none'. Change aussi le texte du bouton entre 'Afficher' et 'Masquer' en fonction de l'état. C'est la base des menus déroulants, des modals, de tout ce qui apparaît/disparaît sur le web.",
    code_initial: {
      html: "<button id=\"toggleBtn\">Masquer</button>\n<div id=\"contenu\">Ce contenu peut être masqué ou affiché</div>",
      css: ".hidden {\n  display: none;\n}",
      js: "// Ajoute le toggle de classe ici\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "classList",
        "toggle",
        "addEventListener"
      ]
    },
    difficulte: 4
  },
  {
    id: "js-12",
    titre: "Mini-jeu : le quizz interactif (projet final)",
    type: "code-js",
    consigne: "C'est le boss final de JavaScript ! Crée un mini-quizz avec 3 questions. Crée un array d'objets avec des questions et leurs bonnes réponses. Affiche la première question et 2 boutons de réponse. Quand on clique sur une réponse, vérifie si c'est la bonne (change la couleur du bouton en vert si correct, rouge si faux). Affiche ensuite la question suivante. À la fin, affiche le score (nombre de bonnes réponses sur 3). Utilise : objets, boucles, conditions, événements, manipulation du DOM. C'est ton chef-d'œuvre JavaScript.",
    code_initial: {
      html: "<div id=\"quizz\">\n  <h2 id=\"question\">Question apparaîtra ici</h2>\n  <button class=\"reponse\" id=\"reponse1\">Réponse 1</button>\n  <button class=\"reponse\" id=\"reponse2\">Réponse 2</button>\n  <p id=\"score\"></p>\n</div>",
      js: "// Crée ton array de questions (objets avec question, reponse1, reponse2, bonnereponse)\n\n// Variables pour suivre l'état (index question actuelle, score)\n\n// Fonction pour afficher une question\n\n// Fonction pour vérifier la réponse\n\n// Fonction pour afficher le score final\n\n// Initialise le quizz\n"
    },
    validation_attendue: {
      js_doit_contenir: [
        "const",
        "let",
        "addEventListener",
        "function",
        "if"
      ]
    },
    difficulte: 5
  }
];

