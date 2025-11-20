# 🆕 Guide des nouveaux types d'exercices

Suite à tes suggestions, la plateforme supporte maintenant **7 types d'exercices** différents pour une expérience d'apprentissage enrichie.

## 📚 Types d'exercices disponibles

### 1. **Code HTML** (`code-html`)
Exercices d'écriture de code HTML pur.

```javascript
{
  id: "html-01",
  titre: "Ton premier H1",
  type: "code-html",
  consigne: "Ajoute un <h1> avec le texte 'Bienvenue'...",
  code_initial: "<!-- Écris ton code ici -->",
  validation_attendue: {
    doit_contenir: ["<h1>Bienvenue</h1>"]
  },
  difficulte: 1
}
```

### 2. **Code CSS** (`code-css`)
Exercices de stylisation CSS.

```javascript
{
  id: "css-01",
  titre: "Styliser un bouton",
  type: "code-css",
  consigne: "Donne du style à ce bouton...",
  code_initial: {
    html: "<button>Clique-moi</button>",
    css: "button {\n  /* Ton CSS ici */\n}"
  },
  validation_attendue: {
    css_doit_contenir: ["background", "padding"]
  },
  difficulte: 2
}
```

### 3. **Code JavaScript** (`code-js`)
Exercices JavaScript avec DOM.

```javascript
{
  id: "js-01",
  titre: "Manipuler le DOM",
  type: "code-js",
  consigne: "Change le texte du H1...",
  code_initial: {
    html: "<h1 id='titre'>Titre original</h1>",
    js: "// Ton JS ici"
  },
  validation_attendue: {
    doit_contenir: ["querySelector", "textContent"]
  },
  difficulte: 2
}
```

### 4. **Code React** (`code-react`)
Exercices de composants React.

```javascript
{
  id: "react-01",
  titre: "Premier composant",
  type: "code-react",
  consigne: "Crée un composant Bienvenue...",
  code_initial: "function Bienvenue() {\n  // Ton code\n}",
  validation_attendue: {
    doit_contenir: ["return", "<h1>"]
  },
  difficulte: 2
}
```

### 5. **🆕 JS Snippet** (`js-snippet`)
**Nouveau !** Devine la valeur finale d'une variable après exécution.

```javascript
{
  id: "js-snippet-01",
  titre: "Devine la valeur",
  type: "js-snippet",
  consigne: "Quel sera la valeur de 'compteur' après l'exécution ?",
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
    success: "Bravo ! Tu as bien compris...",
    error: "Pas tout à fait...",
    hint: "Compte le nombre d'itérations..."
  }
}
```

**Interface :**
- Affiche le code à analyser
- L'étudiant entre sa réponse (valeur attendue)
- Bouton "Vérifier" + Bouton "Exécuter le code"
- Feedback détaillé avec explication

### 6. **🆕 JS Function** (`js-function`)
**Nouveau !** Écris une fonction qui passe des tests unitaires.

```javascript
{
  id: "js-function-01",
  titre: "Fonction addition",
  type: "js-function",
  consigne: "Écris une fonction qui additionne deux nombres...",
  code_initial: {
    functionName: "addition",
    template: `function addition(a, b) {
  // Ton code ici
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
      }
    ]
  },
  validation_attendue: "tests",
  difficulte: 2,
  feedback: {
    success: "Tous les tests passent !",
    error: "Certains tests échouent...",
    hint: "Retourne la somme avec return a + b"
  }
}
```

**Interface :**
- Éditeur de code pour écrire la fonction
- Liste des tests visibles
- Bouton "Lancer les tests"
- Résultat : X/Y tests réussis avec détail des erreurs

### 7. **🆕 Quiz / QCM** (`quiz`)
**Nouveau !** Questions à choix multiples.

```javascript
{
  id: "quiz-html-01",
  titre: "Quiz HTML : Les bases",
  type: "quiz",
  consigne: "Teste tes connaissances...",
  code_initial: [
    {
      question: "Quelle balise pour un titre principal ?",
      options: ["<title>", "<h1>", "<header>", "<heading>"],
      correctAnswer: 1,
      explanation: "<h1> est la balise pour le titre principal..."
    },
    {
      question: "Comment crée-t-on un lien ?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
      explanation: "La balise <a> avec href permet de créer des liens."
    }
  ],
  validation_attendue: "quiz",
  difficulte: 1,
  feedback: {
    success: "Sans faute ! Bravo !",
    error: "Continue tes efforts..."
  }
}
```

**Interface :**
- Questions avec options radio
- Bouton "Valider mes réponses"
- Score final
- Explications pour chaque question
- Indication des bonnes/mauvaises réponses

## 🔧 Architecture technique

### Structure du validateur (`src/utils/validator.js`)

Le fichier `validator.js` contient les fonctions de validation :

- `validateHTMLCode()` - Vérifie le code HTML
- `validateCSSCode()` - Vérifie le code CSS
- `validateJSSnippet()` - Exécute le snippet et vérifie la valeur
- `validateJSFunction()` - Lance les tests unitaires
- `validateQuiz()` - Calcule le score du quiz
- `validateExercise()` - Fonction générique qui dispatche

### Composants spécialisés

Chaque type complexe a son propre composant :

- `CodeEditor.jsx` + `Preview.jsx` - Pour code HTML/CSS/JS/React
- `JSSnippetExercise.jsx` - Pour les snippets JS
- `JSFunctionExercise.jsx` - Pour les fonctions avec tests
- `QuizExercise.jsx` - Pour les QCM

### ExercicePage : Le chef d'orchestre

`ExercicePage.jsx` détecte le type d'exercice et affiche le bon composant :

```jsx
{isCodeEditor && (
  // Affiche CodeEditor + Preview
)}

{isJSSnippet && (
  <JSSnippetExercise exercice={exercice} />
)}

{isJSFunction && (
  <JSFunctionExercise exercice={exercice} />
)}

{isQuiz && (
  <QuizExercise exercice={exercice} />
)}
```

## 📝 Exemples d'utilisation

### Créer un nouveau snippet JS

```javascript
// Dans src/data/exercicesAvances.js
export const exercicesJSSnippets = [
  {
    id: "js-snippet-04",
    titre: "Arrays et map",
    type: "js-snippet",
    consigne: "Quelle sera la valeur de 'doubled' ?",
    code_initial: {
      code: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
const result = doubled.length;`,
      question: "Quelle est la valeur de 'result' ?",
      variableName: "result",
      expectedValue: 3
    },
    validation_attendue: 3,
    difficulte: 3,
    feedback: {
      success: "Exact ! map() retourne un nouveau tableau de même taille.",
      error: "Pense à la taille du tableau retourné par map().",
      hint: "map() retourne un tableau de même longueur que l'original."
    }
  }
];
```

### Créer un exercice de fonction avec tests

```javascript
// Dans src/data/exercicesAvances.js
export const exercicesJSFunctions = [
  {
    id: "js-function-05",
    titre: "Compter les voyelles",
    type: "js-function",
    consigne: "Écris une fonction qui compte les voyelles dans un texte...",
    code_initial: {
      functionName: "compterVoyelles",
      template: `function compterVoyelles(texte) {
  // Retourne le nombre de voyelles (a, e, i, o, u, y)
}`,
      tests: [
        {
          description: "compterVoyelles('hello') doit retourner 2",
          input: ["hello"],
          expected: 2
        },
        {
          description: "compterVoyelles('JavaScript') doit retourner 3",
          input: ["JavaScript"],
          expected: 3
        },
        {
          description: "compterVoyelles('xyz') doit retourner 1",
          input: ["xyz"],
          expected: 1
        }
      ]
    },
    validation_attendue: "tests",
    difficulte: 3,
    feedback: {
      success: "Parfait ! Tu maîtrises les strings et les boucles.",
      error: "Parcours le texte et compte les voyelles.",
      hint: "Utilise .includes() pour vérifier si un caractère est une voyelle."
    }
  }
];
```

### Créer un quiz

```javascript
// Dans src/data/exercicesAvances.js
export const exercicesQuiz = [
  {
    id: "quiz-css-01",
    titre: "Quiz CSS : Flexbox",
    type: "quiz",
    consigne: "Teste tes connaissances sur Flexbox...",
    code_initial: [
      {
        question: "Quelle propriété aligne les éléments horizontalement ?",
        options: [
          "align-items",
          "justify-content",
          "flex-direction",
          "align-content"
        ],
        correctAnswer: 1,
        explanation: "justify-content aligne sur l'axe principal (horizontal par défaut)."
      },
      {
        question: "Comment créer une colonne Flexbox ?",
        options: [
          "flex-direction: row",
          "flex-direction: column",
          "display: column",
          "flex-wrap: column"
        ],
        correctAnswer: 1,
        explanation: "flex-direction: column empile les éléments verticalement."
      }
    ],
    validation_attendue: "quiz",
    difficulte: 2,
    feedback: {
      success: "Tu maîtrises Flexbox !",
      error: "Relis les explications et réessaie."
    }
  }
];
```

## 🚀 Intégration dans un module

Pour ajouter ces exercices dans un module, éditer `src/data/modulesData.js` :

```javascript
{
  id: 'js-advanced',
  titre: 'Module JavaScript Avancé',
  sousTitre: 'Snippets, fonctions et quiz',
  description: 'Exercices variés pour maîtriser JS...',
  icone: '🚀',
  couleur: '#f7df1e',
  objectifs: [...],
  prerequis: 'Module JavaScript complété',
  dureeEstimee: '5-7 heures',
  nombreExercices: 10
}
```

Puis dans `src/data/index.js` :

```javascript
export const exercicesParModule = {
  'html': exercicesHTML,
  'css': exercicesCSS,
  'javascript': exercicesJavaScript,
  'react': exercicesReact,
  'js-advanced': [...exercicesJSSnippets, ...exercicesJSFunctions, ...exercicesQuiz]
};
```

## 🎯 Avantages pédagogiques

### JS Snippets
✅ Apprendre à lire et comprendre du code  
✅ Développer la pensée algorithmique  
✅ Comprendre le flow d'exécution  
✅ S'entraîner sans écrire de code (bon pour débuter)

### JS Functions avec tests
✅ Introduction aux tests unitaires  
✅ Feedback immédiat et précis  
✅ Apprendre à écrire du code fiable  
✅ Cas d'usage concrets avec plusieurs scénarios

### Quiz
✅ Vérification rapide des connaissances  
✅ Bon pour réviser avant un examen  
✅ Feedback immédiat avec explications  
✅ Moins intimidant que du code pour certains

## 📊 Métriques de validation

Chaque type d'exercice retourne un objet `result` :

```javascript
// Code HTML/CSS/JS
{
  isValid: boolean,
  errors: string[],
  warnings: string[]
}

// JS Snippet
{
  isValid: boolean,
  value: any,
  errors: string[]
}

// JS Function
{
  isValid: boolean,
  passedTests: number,
  totalTests: number,
  errors: string[]
}

// Quiz
{
  isValid: boolean,
  score: number,
  totalQuestions: number,
  details: [{
    question: string,
    correct: boolean,
    userAnswer: string,
    correctAnswer: string,
    explanation: string
  }]
}
```

## 🔐 Sécurité

### Sandboxing JavaScript

Les snippets et fonctions JS sont exécutés dans un contexte isolé avec `new Function()` :

```javascript
const func = new Function(
  'console',
  `${userCode}\nreturn ${variableName};`
);
const result = func({ log: (...args) => console.log('[Sandbox]', ...args) });
```

**Limitations :**
- Pas d'accès au DOM réel
- Pas d'accès aux variables globales
- Timeout de 5 secondes (à implémenter)

### Validation côté serveur

Pour une vraie production, il faudrait :
1. Exécuter la validation côté serveur
2. Utiliser un vrai sandbox (comme VM2 ou un container Docker)
3. Limiter le temps d'exécution
4. Stocker les résultats dans une base de données

## 🎓 Cas d'usage en cours

### Séance "Lecture de code"
Utilise les **JS Snippets** pour une séance où les étudiants apprennent à lire du code avant de l'écrire.

### Séance "TDD (Test Driven Development)"
Utilise les **JS Functions** pour introduire le concept de tests unitaires.

### Évaluation rapide
Utilise les **Quiz** en début de cours pour vérifier les acquis de la séance précédente.

### Progression mixte
Mélange les types dans un même module pour varier les plaisirs et les approches pédagogiques.

---

**🎉 Tu as maintenant une plateforme ultra-complète avec 7 types d'exercices différents !**

