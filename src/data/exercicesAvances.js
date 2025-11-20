/**
 * Exercices avancés avec nouveaux types
 * - JS Snippets (évaluation de variables)
 * - JS Functions (tests unitaires)
 * - QCM
 */

export const exercicesJSSnippets = [
  {
    id: "js-snippet-01",
    titre: "Boucle et incrémentation : devine la valeur finale",
    type: "js-snippet",
    consigne: "Lis attentivement ce code JavaScript. Sans l'exécuter, essaie de deviner quelle sera la valeur finale de la variable 'compteur'. Ensuite, clique sur 'Exécuter' pour vérifier ta réponse. L'objectif est de comprendre comment fonctionne une boucle for avec un compteur.",
    code_initial: {
      code: `let compteur = 0;
for (let i = 0; i < 5; i++) {
  compteur = compteur + 2;
}`,
      question: "Quelle est la valeur finale de 'compteur' ?",
      variableName: "compteur",
      expectedValue: 10
    },
    validation_attendue: 10,
    difficulte: 2,
    feedback: {
      success: "Bravo ! Tu as bien compris le mécanisme de la boucle. À chaque itération (5 fois), on ajoute 2 au compteur : 0 + 2 + 2 + 2 + 2 + 2 = 10.",
      error: "Pas tout à fait ! Compte bien le nombre d'itérations de la boucle (de 0 à 4, donc 5 fois) et ce qui est ajouté à chaque fois (+2).",
      hint: "La boucle part de i=0 et va jusqu'à i=4 (car i < 5). Combien de fois va-t-elle tourner ?"
    },
    tags: ["javascript", "boucles", "variables"],
    timeEstimate: 5
  },
  {
    id: "js-snippet-02",
    titre: "Variables et réassignation : le piège",
    type: "js-snippet",
    consigne: "Ce snippet contient plusieurs réassignations de variable. Suis le fil de l'exécution ligne par ligne et devine la valeur finale de 'resultat'. C'est un exercice classique pour bien comprendre que la valeur d'une variable peut changer au cours de l'exécution.",
    code_initial: {
      code: `let x = 5;
let y = 3;
let resultat = x + y;
x = 10;
resultat = resultat + x;`,
      question: "Quelle est la valeur finale de 'resultat' ?",
      variableName: "resultat",
      expectedValue: 18
    },
    validation_attendue: 18,
    difficulte: 2,
    feedback: {
      success: "Excellent ! Tu as bien suivi le fil : resultat = 5+3 = 8, puis x change pour 10, puis resultat = 8+10 = 18.",
      error: "Revois le calcul étape par étape : d'abord resultat = 5+3, puis x change, puis on ajoute le nouveau x à resultat.",
      hint: "Calcule d'abord 'resultat' avec les valeurs initiales de x et y, puis vois ce qui se passe quand x change."
    },
    tags: ["javascript", "variables", "réassignation"],
    timeEstimate: 5
  },
  {
    id: "js-snippet-03",
    titre: "Conditions et accumulation",
    type: "js-snippet",
    consigne: "Ce code combine une boucle et une condition. Seules certaines valeurs seront ajoutées à 'total'. Analyse bien la condition if avant de répondre.",
    code_initial: {
      code: `let total = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    total = total + i;
  }
}`,
      question: "Quelle est la valeur finale de 'total' ?",
      variableName: "total",
      expectedValue: 30
    },
    validation_attendue: 30,
    difficulte: 3,
    feedback: {
      success: "Parfait ! Tu as identifié que seuls les nombres pairs (2, 4, 6, 8, 10) sont ajoutés : 2+4+6+8+10 = 30.",
      error: "Regarde bien la condition : i % 2 === 0 ne sélectionne que les nombres pairs entre 1 et 10.",
      hint: "L'opérateur % (modulo) retourne le reste d'une division. Si i % 2 === 0, c'est que i est pair."
    },
    tags: ["javascript", "boucles", "conditions", "modulo"],
    timeEstimate: 7
  }
];

export const exercicesJSFunctions = [
  {
    id: "js-function-01",
    titre: "Fonction addition : ton premier test unitaire",
    type: "js-function",
    consigne: "Écris une fonction nommée 'addition' qui prend deux nombres en paramètres et retourne leur somme. C'est la fonction la plus simple du monde, mais c'est l'occasion de comprendre comment fonctionnent les tests unitaires. Ton code sera testé automatiquement avec plusieurs valeurs.",
    code_initial: {
      functionName: "addition",
      template: `function addition(a, b) {
  // Écris ton code ici
  // Retourne la somme de a et b
}`,
      tests: [
        {
          description: "addition(2, 3) doit retourner 5",
          input: [2, 3],
          expected: 5
        },
        {
          description: "addition(10, 20) doit retourner 30",
          input: [10, 20],
          expected: 30
        },
        {
          description: "addition(-5, 5) doit retourner 0",
          input: [-5, 5],
          expected: 0
        },
        {
          description: "addition(0, 0) doit retourner 0",
          input: [0, 0],
          expected: 0
        }
      ]
    },
    validation_attendue: "tests",
    difficulte: 1,
    feedback: {
      success: "Bravo ! Ta fonction passe tous les tests. Tu viens de comprendre le principe des tests unitaires : on vérifie que la fonction se comporte correctement avec différentes valeurs.",
      error: "Certains tests échouent. Vérifie que tu retournes bien la somme des deux paramètres avec 'return a + b'.",
      hint: "Une fonction retourne une valeur avec le mot-clé 'return'. Par exemple : return a + b;"
    },
    tags: ["javascript", "fonctions", "tests", "débutant"],
    timeEstimate: 5
  },
  {
    id: "js-function-02",
    titre: "Fonction isAdult : maîtriser les conditions",
    type: "js-function",
    consigne: "Crée une fonction 'isAdult' qui prend un âge en paramètre et retourne true si l'âge est >= 18, false sinon. Tu vas apprendre à combiner fonction et condition, un pattern ultra-fréquent en programmation.",
    code_initial: {
      functionName: "isAdult",
      template: `function isAdult(age) {
  // Retourne true si age >= 18, false sinon
}`,
      tests: [
        {
          description: "isAdult(25) doit retourner true",
          input: [25],
          expected: true
        },
        {
          description: "isAdult(18) doit retourner true",
          input: [18],
          expected: true
        },
        {
          description: "isAdult(17) doit retourner false",
          input: [17],
          expected: false
        },
        {
          description: "isAdult(10) doit retourner false",
          input: [10],
          expected: false
        }
      ]
    },
    validation_attendue: "tests",
    difficulte: 2,
    feedback: {
      success: "Excellent ! Ta fonction gère correctement tous les cas, y compris le cas limite (18 ans pile).",
      error: "Vérifie ta condition. Pense bien au cas où age = 18 exactement (c'est majeur).",
      hint: "Utilise 'if (age >= 18) { return true; } else { return false; }' ou plus court : 'return age >= 18;'"
    },
    tags: ["javascript", "fonctions", "conditions", "boolean"],
    timeEstimate: 7
  },
  {
    id: "js-function-03",
    titre: "Fonction getMax : trouver le maximum",
    type: "js-function",
    consigne: "Écris une fonction 'getMax' qui prend deux nombres et retourne le plus grand des deux. Si les deux sont égaux, retourne n'importe lequel (ils sont égaux de toute façon). C'est l'occasion de manipuler des conditions avec des opérateurs de comparaison.",
    code_initial: {
      functionName: "getMax",
      template: `function getMax(a, b) {
  // Retourne le plus grand des deux nombres
}`,
      tests: [
        {
          description: "getMax(5, 10) doit retourner 10",
          input: [5, 10],
          expected: 10
        },
        {
          description: "getMax(20, 15) doit retourner 20",
          input: [20, 15],
          expected: 20
        },
        {
          description: "getMax(7, 7) doit retourner 7",
          input: [7, 7],
          expected: 7
        },
        {
          description: "getMax(-5, -10) doit retourner -5",
          input: [-5, -10],
          expected: -5
        }
      ]
    },
    validation_attendue: "tests",
    difficulte: 2,
    feedback: {
      success: "Parfait ! Tu maîtrises les comparaisons. N'oublie pas qu'il existe aussi Math.max(a, b) pour faire la même chose.",
      error: "Pense à la logique : si a est plus grand que b, retourne a, sinon retourne b.",
      hint: "Utilise 'if (a > b) { return a; } else { return b; }' ou plus court : 'return a > b ? a : b;'"
    },
    tags: ["javascript", "fonctions", "conditions", "comparaison"],
    timeEstimate: 7
  },
  {
    id: "js-function-04",
    titre: "Fonction sumArray : boucler sur un tableau",
    type: "js-function",
    consigne: "Crée une fonction 'sumArray' qui prend un tableau de nombres et retourne la somme de tous les éléments. C'est un exercice classique qui combine tableau, boucle et accumulation. Tu vas utiliser ça dans TOUS tes projets futurs.",
    code_initial: {
      functionName: "sumArray",
      template: `function sumArray(arr) {
  // Retourne la somme de tous les nombres du tableau
  // Utilise une boucle for ou forEach
}`,
      tests: [
        {
          description: "sumArray([1, 2, 3]) doit retourner 6",
          input: [[1, 2, 3]],
          expected: 6
        },
        {
          description: "sumArray([10, 20, 30, 40]) doit retourner 100",
          input: [[10, 20, 30, 40]],
          expected: 100
        },
        {
          description: "sumArray([]) doit retourner 0",
          input: [[]],
          expected: 0
        },
        {
          description: "sumArray([5]) doit retourner 5",
          input: [[5]],
          expected: 5
        }
      ]
    },
    validation_attendue: "tests",
    difficulte: 3,
    feedback: {
      success: "Bravo ! Tu maîtrises maintenant l'accumulation dans un tableau. C'est une compétence fondamentale en programmation.",
      error: "Crée une variable 'sum' initialisée à 0, puis parcours le tableau avec une boucle for en ajoutant chaque élément à sum.",
      hint: "let sum = 0; for (let i = 0; i < arr.length; i++) { sum += arr[i]; } return sum;"
    },
    tags: ["javascript", "fonctions", "tableaux", "boucles", "accumulation"],
    timeEstimate: 10
  }
];

export const exercicesQuiz = [
  {
    id: "quiz-html-01",
    titre: "Quiz HTML : Les bases",
    type: "quiz",
    consigne: "Teste tes connaissances sur les bases du HTML. 5 questions pour vérifier que tu as bien compris les fondamentaux. Pas de panique, c'est pour apprendre !",
    code_initial: [
      {
        question: "Quelle balise utilise-t-on pour créer un titre principal ?",
        options: ["<title>", "<h1>", "<header>", "<heading>"],
        correctAnswer: 1,
        explanation: "<h1> est la balise pour le titre principal. <title> est pour le titre dans l'onglet du navigateur."
      },
      {
        question: "Comment crée-t-on un lien hypertexte ?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        explanation: "La balise <a> (anchor) avec l'attribut href permet de créer des liens."
      },
      {
        question: "Quel attribut est obligatoire pour une image ?",
        options: ["title", "alt", "src", "href"],
        correctAnswer: 2,
        explanation: "L'attribut src (source) est obligatoire pour indiquer le chemin de l'image. L'attribut alt est fortement recommandé pour l'accessibilité."
      },
      {
        question: "Quelle balise utilise-t-on pour un paragraphe ?",
        options: ["<p>", "<pg>", "<paragraph>", "<text>"],
        correctAnswer: 0,
        explanation: "<p> est la balise standard pour les paragraphes en HTML."
      },
      {
        question: "Comment crée-t-on une liste non ordonnée ?",
        options: ["<ol>", "<list>", "<ul>", "<nl>"],
        correctAnswer: 2,
        explanation: "<ul> (unordered list) pour les listes à puces, <ol> (ordered list) pour les listes numérotées."
      }
    ],
    validation_attendue: "quiz",
    difficulte: 1,
    feedback: {
      success: "Excellent ! Tu maîtrises les bases du HTML. Continue comme ça !",
      error: "Pas de souci, c'est en se trompant qu'on apprend. Relis les explications et retente ta chance.",
      hint: "Lis bien chaque question et pense à ce que tu as appris dans les exercices précédents."
    },
    tags: ["html", "quiz", "bases"],
    timeEstimate: 5
  }
];

