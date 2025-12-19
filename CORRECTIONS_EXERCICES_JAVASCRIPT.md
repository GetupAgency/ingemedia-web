# 🔐 Corrections Exercices JavaScript

**⚠️ CONFIDENTIEL ENSEIGNANT - Ne pas partager avec les étudiants ⚠️**

Ce document contient toutes les corrections des 12 exercices JavaScript de la plateforme.

---

## 📋 Table des Matières

1. [JS-01 - Le console.log de la victoire](#js-01)
2. [JS-02 - Variables et types](#js-02)
3. [JS-03 - Manipuler le DOM](#js-03)
4. [JS-04 - L'événement click](#js-04)
5. [JS-05 - Les conditions](#js-05)
6. [JS-06 - La boucle for](#js-06)
7. [JS-07 - Fonction réutilisable](#js-07)
8. [JS-08 - Manipulation de tableau](#js-08)
9. [JS-09 - Le formulaire intelligent](#js-09)
10. [JS-10 - Le compteur](#js-10)
11. [JS-11 - Le toggle de classe](#js-11)
12. [JS-12 - Mini-jeu : le quizz](#js-12)

---

<a name="js-01"></a>
## 📝 Exercice JS-01 : Le console.log de la victoire

**Difficulté** : ⭐ (1/5)

### Consigne
Afficher 'Hello, JavaScript!' dans la console. Créer une variable 'nom' avec ton prénom et afficher 'Bonjour [ton prénom], futur dev star!'.

### Correction

```javascript
// Affiche ton premier message ici
console.log('Hello, JavaScript!');

// Crée une variable avec ton prénom
const nom = 'Adrien';

// Affiche le message personnalisé
console.log('Bonjour ' + nom + ', futur dev star!');

// Ou avec les template literals (ES6) - recommandé
console.log(`Bonjour ${nom}, futur dev star!`);
```

### Points Clés à Expliquer

**1. console.log()**
- Affiche des messages dans la console du navigateur
- Utile pour déboguer
- Ouvrir avec F12 ou clic droit > Inspecter

**2. Variables avec const**
```javascript
const nom = 'Adrien';  // Ne peut pas être réassigné
let age = 25;          // Peut être modifié
var ancien = 'old';    // Éviter, utiliser const/let
```

**3. Concaténation de strings**
```javascript
// Méthode 1 : avec +
'Bonjour ' + nom + '!'

// Méthode 2 : template literals (moderne)
`Bonjour ${nom}!`
```

### Erreurs Courantes
- ❌ Oublier les guillemets : `console.log(Hello)` → Erreur
- ❌ Faute de frappe : `consol.log()` ou `Console.log()`
- ❌ Oublier les parenthèses : `console.log`

---

<a name="js-02"></a>
## 📝 Exercice JS-02 : Variables et types

**Difficulté** : ⭐ (1/5)

### Consigne
Créer 4 variables (string, number, boolean, array) et afficher leur type avec typeof.

### Correction

```javascript
// Déclare tes variables ici
const nom = 'Marie';
const age = 22;
const aimeCoder = true;
const technologies = ['React', 'Node.js', 'TypeScript'];

// Affiche-les dans la console avec typeof
console.log('Nom:', nom, '- Type:', typeof nom);
console.log('Âge:', age, '- Type:', typeof age);
console.log('Aime coder:', aimeCoder, '- Type:', typeof aimeCoder);
console.log('Technologies:', technologies, '- Type:', typeof technologies);

// Version plus complète
console.log(`Mon nom est ${nom} (${typeof nom})`);
console.log(`J'ai ${age} ans (${typeof age})`);
console.log(`J'aime coder : ${aimeCoder} (${typeof aimeCoder})`);
console.log(`Je veux apprendre : ${technologies.join(', ')} (${typeof technologies})`);
```

### Points Clés à Expliquer

**1. Types de données en JavaScript**
```javascript
// Primitifs
const texte = 'string';        // string
const nombre = 42;             // number
const vrai = true;             // boolean
const indefini = undefined;    // undefined
const vide = null;             // object (bug historique)

// Complexes
const tableau = [1, 2, 3];     // object
const objet = {nom: 'Jean'};   // object
```

**2. typeof**
```javascript
typeof 'hello'     // 'string'
typeof 42          // 'number'
typeof true        // 'boolean'
typeof [1, 2, 3]   // 'object' (attention!)
typeof {a: 1}      // 'object'
typeof undefined   // 'undefined'
typeof null        // 'object' (bug historique)
```

**3. const vs let**
```javascript
const fixe = 10;
fixe = 20;  // ❌ Erreur : reassignment impossible

let variable = 10;
variable = 20;  // ✅ OK
```

### Erreurs Courantes
- ❌ Utiliser `var` au lieu de `const`/`let`
- ❌ Penser que `typeof` sur un array retourne 'array'
- ❌ Oublier les crochets `[]` pour les tableaux

---

<a name="js-03"></a>
## 📝 Exercice JS-03 : Manipuler le DOM

**Difficulté** : ⭐ (1/5)

### Consigne
Sélectionner un h1 par son id et changer son texte avec textContent.

### Correction

```javascript
// Sélectionne le h1 et change son texte
const titre = document.querySelector('#titre');
titre.textContent = 'Nouveau titre !';

// Ou en une ligne
document.querySelector('#titre').textContent = 'Nouveau titre !';

// Alternative avec getElementById (plus rapide pour les IDs)
const titre2 = document.getElementById('titre');
titre2.textContent = 'Nouveau titre !';
```

### Points Clés à Expliquer

**1. document.querySelector()**
```javascript
// Par ID (avec #)
document.querySelector('#monId');

// Par classe (avec .)
document.querySelector('.maClasse');

// Par balise
document.querySelector('h1');

// Par attribut
document.querySelector('[data-id="123"]');

// Sélecteur CSS complexe
document.querySelector('div.container > p:first-child');
```

**2. querySelector vs querySelectorAll**
```javascript
// Sélectionne le PREMIER élément correspondant
const premierP = document.querySelector('p');

// Sélectionne TOUS les éléments (retourne un NodeList)
const tousLesP = document.querySelectorAll('p');
tousLesP.forEach(p => console.log(p));
```

**3. textContent vs innerHTML**
```javascript
const element = document.querySelector('#demo');

// textContent : texte brut seulement (sécurisé)
element.textContent = '<strong>Texte</strong>';
// Affiche : <strong>Texte</strong>

// innerHTML : interprète le HTML (attention XSS!)
element.innerHTML = '<strong>Texte</strong>';
// Affiche : Texte (en gras)
```

### Erreurs Courantes
- ❌ Oublier le `#` pour les IDs : `querySelector('titre')` au lieu de `querySelector('#titre')`
- ❌ Oublier le `.` pour les classes
- ❌ Essayer de modifier un élément inexistant → `null`

---

<a name="js-04"></a>
## 📝 Exercice JS-04 : L'événement click

**Difficulté** : ⭐⭐ (2/5)

### Consigne
Ajouter un addEventListener sur un bouton pour changer un texte au clic.

### Correction

```javascript
// Ajoute l'écouteur d'événement ici
const bouton = document.querySelector('#monBouton');
const message = document.querySelector('#message');

bouton.addEventListener('click', function() {
  console.log('Bouton cliqué !');
  message.textContent = 'Vous avez cliqué sur le bouton !';
});

// Version avec arrow function (moderne)
bouton.addEventListener('click', () => {
  console.log('Bouton cliqué !');
  message.textContent = 'Vous avez cliqué sur le bouton !';
});

// Version avec fonction nommée (pour réutilisation)
function handleClick() {
  console.log('Bouton cliqué !');
  message.textContent = 'Vous avez cliqué sur le bouton !';
}
bouton.addEventListener('click', handleClick);
```

### Points Clés à Expliquer

**1. addEventListener()**
```javascript
element.addEventListener('événement', fonction);

// Événements courants
element.addEventListener('click', fn);      // Clic
element.addEventListener('mouseover', fn);  // Survol
element.addEventListener('keydown', fn);    // Touche pressée
element.addEventListener('submit', fn);     // Soumission formulaire
element.addEventListener('change', fn);     // Changement input
```

**2. L'objet event**
```javascript
bouton.addEventListener('click', function(event) {
  console.log(event);              // Objet Event complet
  console.log(event.target);       // Élément cliqué
  console.log(event.type);         // Type d'événement ('click')
  event.preventDefault();          // Empêcher action par défaut
  event.stopPropagation();         // Arrêter la propagation
});
```

**3. Function vs Arrow Function**
```javascript
// Function classique
button.addEventListener('click', function() {
  console.log('Click!');
});

// Arrow function (plus concise)
button.addEventListener('click', () => {
  console.log('Click!');
});

// Fonction nommée (réutilisable)
function handleClick() {
  console.log('Click!');
}
button.addEventListener('click', handleClick);
// ⚠️ Attention : pas de parenthèses après handleClick !
```

### Erreurs Courantes
- ❌ Mettre des parenthèses : `addEventListener('click', maFonction())` → La fonction s'exécute immédiatement
- ✅ Correct : `addEventListener('click', maFonction)`
- ❌ Oublier les guillemets pour le nom de l'événement
- ❌ Utiliser `onclick` dans le HTML (old school)

---

<a name="js-05"></a>
## 📝 Exercice JS-05 : Les conditions

**Difficulté** : ⭐⭐ (2/5)

### Consigne
Utiliser if/else pour afficher si quelqu'un est majeur ou mineur.

### Correction

```javascript
const age = 20; // Change cette valeur pour tester

// Ajoute ta condition if/else ici
const resultat = document.querySelector('#resultat');

if (age >= 18) {
  resultat.textContent = 'Vous êtes majeur';
} else {
  resultat.textContent = 'Vous êtes mineur';
}

// Version avec else if (pour plus de cas)
if (age >= 18) {
  resultat.textContent = 'Vous êtes majeur';
} else if (age >= 16) {
  resultat.textContent = 'Vous êtes presque majeur';
} else if (age >= 13) {
  resultat.textContent = 'Vous êtes adolescent';
} else {
  resultat.textContent = 'Vous êtes enfant';
}

// Version avec opérateur ternaire (une ligne)
resultat.textContent = age >= 18 ? 'Vous êtes majeur' : 'Vous êtes mineur';
```

### Points Clés à Expliquer

**1. Opérateurs de comparaison**
```javascript
age === 18     // Égalité stricte (type + valeur)
age !== 18     // Différent de
age > 18       // Supérieur à
age >= 18      // Supérieur ou égal
age < 18       // Inférieur à
age <= 18      // Inférieur ou égal

// ⚠️ Éviter == et != (comparaison non stricte)
'5' == 5       // true (conversion de type)
'5' === 5      // false (types différents)
```

**2. Opérateurs logiques**
```javascript
// ET logique (&&)
if (age >= 18 && age < 65) {
  console.log('Adulte en âge de travailler');
}

// OU logique (||)
if (age < 12 || age > 65) {
  console.log('Tarif réduit');
}

// NON logique (!)
if (!estMajeur) {
  console.log('Accès refusé');
}
```

**3. Opérateur ternaire**
```javascript
// Syntaxe : condition ? siVrai : siFaux
const message = age >= 18 ? 'Majeur' : 'Mineur';

// Peut être imbriqué (mais moins lisible)
const categorie = age >= 18 ? 'Adulte' : age >= 13 ? 'Ado' : 'Enfant';
```

### Erreurs Courantes
- ❌ Utiliser `=` au lieu de `===` : `if (age = 18)` → Affectation!
- ❌ Confondre `==` et `===`
- ❌ Oublier les accolades pour plusieurs instructions

---

<a name="js-06"></a>
## 📝 Exercice JS-06 : La boucle for

**Difficulté** : ⭐⭐ (2/5)

### Consigne
Utiliser une boucle for pour afficher les nombres 1-10, puis créer des éléments <li>.

### Correction

```javascript
// Boucle 1 : afficher 1 à 10 dans la console
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Boucle 2 : créer 5 <li> dans la liste
const liste = document.querySelector('#liste');

for (let i = 1; i <= 5; i++) {
  // Créer un élément <li>
  const li = document.createElement('li');
  
  // Définir son texte
  li.textContent = 'Élément ' + i;
  
  // L'ajouter à la liste
  liste.appendChild(li);
}

// Version plus compacte
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Élément ${i}`;
  liste.appendChild(li);
}
```

### Points Clés à Expliquer

**1. Anatomie d'une boucle for**
```javascript
for (initialisation; condition; incrémentation) {
  // Code à répéter
}

// Exemple
for (let i = 0; i < 10; i++) {
  console.log(i);  // Affiche 0 à 9
}

// i = 0        → Début
// i < 10       → Continue tant que vrai
// i++          → Incrémente après chaque tour
```

**2. Créer et ajouter des éléments**
```javascript
// 1. Créer un élément
const element = document.createElement('div');

// 2. Le configurer
element.textContent = 'Texte';
element.className = 'ma-classe';
element.id = 'mon-id';
element.style.color = 'red';

// 3. L'ajouter au DOM
parent.appendChild(element);

// Ou avec innerHTML (moins sécurisé)
parent.innerHTML += '<div>Nouveau</div>';
```

**3. Variations de boucles**
```javascript
// Boucle descendante
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Avec un pas de 2
for (let i = 0; i < 10; i += 2) {
  console.log(i);  // 0, 2, 4, 6, 8
}

// Parcourir un tableau
const fruits = ['pomme', 'banane', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Erreurs Courantes
- ❌ Commencer à 1 au lieu de 0 : `for (let i = 1; ...)`
- ❌ Off-by-one error : `i <= array.length` → Hors limites!
- ✅ Correct : `i < array.length`
- ❌ Oublier l'incrémentation `i++`

---

<a name="js-07"></a>
## 📝 Exercice JS-07 : Fonction réutilisable

**Difficulté** : ⭐⭐⭐ (3/5)

### Consigne
Créer une fonction saluer(nom) et une fonction ajouterMessage(texte).

### Correction

```javascript
// Fonction saluer
function saluer(nom) {
  return `Bonjour ${nom}, bienvenue !`;
}

// Appeler la fonction pour 3 personnes
console.log(saluer('Alice'));
console.log(saluer('Bob'));
console.log(saluer('Charlie'));

// Fonction ajouterMessage
function ajouterMessage(texte) {
  // Sélectionner le conteneur
  const container = document.querySelector('#messages');
  
  // Créer un paragraphe
  const p = document.createElement('p');
  
  // Définir son texte
  p.textContent = texte;
  
  // L'ajouter au container
  container.appendChild(p);
}

// Appeler la fonction 3 fois
ajouterMessage('Premier message');
ajouterMessage('Deuxième message');
ajouterMessage('Troisième message');

// Version avec arrow function
const saluer2 = (nom) => `Bonjour ${nom}, bienvenue !`;

const ajouterMessage2 = (texte) => {
  const p = document.createElement('p');
  p.textContent = texte;
  document.querySelector('#messages').appendChild(p);
};
```

### Points Clés à Expliquer

**1. Déclaration de fonction**
```javascript
// Function declaration (hoisted)
function maFonction(param1, param2) {
  return param1 + param2;
}

// Function expression
const maFonction = function(param1, param2) {
  return param1 + param2;
};

// Arrow function (ES6)
const maFonction = (param1, param2) => {
  return param1 + param2;
};

// Arrow function (raccourci si une seule expression)
const maFonction = (param1, param2) => param1 + param2;
```

**2. Paramètres et return**
```javascript
// Avec paramètres
function addition(a, b) {
  return a + b;
}
const resultat = addition(5, 3);  // 8

// Sans paramètres
function direBonjour() {
  console.log('Bonjour !');
}

// Paramètres par défaut
function saluer(nom = 'Anonyme') {
  return `Bonjour ${nom}`;
}
saluer();          // 'Bonjour Anonyme'
saluer('Marie');   // 'Bonjour Marie'
```

**3. Scope (portée)**
```javascript
const globale = 'Je suis global';

function maFonction() {
  const locale = 'Je suis local';
  console.log(globale);  // ✅ Accessible
  console.log(locale);   // ✅ Accessible
}

console.log(globale);    // ✅ Accessible
console.log(locale);     // ❌ Erreur : locale n'existe pas ici
```

### Erreurs Courantes
- ❌ Oublier le `return` : la fonction retourne `undefined`
- ❌ Appeler la fonction avec les mauvais arguments
- ❌ Confondre `function maFonction()` et `const maFonction = () => {}`

---

<a name="js-08"></a>
## 📝 Exercice JS-08 : Manipulation de tableau

**Difficulté** : ⭐⭐⭐ (3/5)

### Consigne
Créer une liste de courses avec forEach() et un bouton pour ajouter un article.

### Correction

```javascript
const courses = ['pain', 'lait', 'œufs'];

// Fonction pour afficher la liste
function afficherListe() {
  const liste = document.querySelector('#listeCourses');
  
  // Vider la liste avant de la remplir
  liste.innerHTML = '';
  
  // Parcourir le tableau et créer les <li>
  courses.forEach(function(article) {
    const li = document.createElement('li');
    li.textContent = article;
    liste.appendChild(li);
  });
}

// Afficher la liste au démarrage
afficherListe();

// Écouteur d'événement sur le bouton
const boutonAjouter = document.querySelector('#ajouterArticle');

boutonAjouter.addEventListener('click', function() {
  // Ajouter un nouvel article
  courses.push('beurre');
  
  // Rafraîchir l'affichage
  afficherListe();
});

// Version avec arrow functions
const afficherListe2 = () => {
  const liste = document.querySelector('#listeCourses');
  liste.innerHTML = '';
  courses.forEach(article => {
    const li = document.createElement('li');
    li.textContent = article;
    liste.appendChild(li);
  });
};
```

### Points Clés à Expliquer

**1. Array.forEach()**
```javascript
const fruits = ['pomme', 'banane', 'orange'];

// forEach avec fonction
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// forEach avec arrow function
fruits.forEach(fruit => console.log(fruit));

// forEach avec index
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
```

**2. Méthodes de tableau essentielles**
```javascript
const arr = [1, 2, 3];

// Ajouter/retirer
arr.push(4);          // Ajoute à la fin → [1,2,3,4]
arr.pop();            // Retire du fin → [1,2,3]
arr.unshift(0);       // Ajoute au début → [0,1,2,3]
arr.shift();          // Retire du début → [1,2,3]

// Informations
arr.length;           // Nombre d'éléments
arr.includes(2);      // true si 2 est dans le tableau
arr.indexOf(2);       // Position de 2 (ou -1 si absent)

// Transformation
arr.join(', ');       // Convertir en string → '1, 2, 3'
arr.reverse();        // Inverser → [3,2,1]
arr.sort();           // Trier
```

**3. innerHTML vs appendChild**
```javascript
// innerHTML : remplace tout (plus simple mais moins performant)
liste.innerHTML = '';
liste.innerHTML = '<li>Item 1</li><li>Item 2</li>';

// appendChild : ajoute élément par élément (plus performant)
liste.innerHTML = '';  // Vider d'abord
const li = document.createElement('li');
li.textContent = 'Item 1';
liste.appendChild(li);
```

### Erreurs Courantes
- ❌ Oublier de vider la liste avant de la remplir → doublons
- ❌ Ne pas rafraîchir l'affichage après push()
- ❌ Modifier le tableau pendant forEach → comportement imprévisible

---

<a name="js-09"></a>
## 📝 Exercice JS-09 : Le formulaire intelligent

**Difficulté** : ⭐⭐⭐ (3/5)

### Consigne
Récupérer la valeur d'un input et l'afficher dans un paragraphe.

### Correction

```javascript
// Récupère la valeur de l'input et affiche le message
const input = document.querySelector('#inputNom');
const bouton = document.querySelector('#btnValider');
const accueil = document.querySelector('#accueil');

bouton.addEventListener('click', function() {
  // Récupérer la valeur de l'input
  const nom = input.value;
  
  // Vérifier que ce n'est pas vide
  if (nom.trim() !== '') {
    // Afficher le message
    accueil.textContent = `Bonjour ${nom} !`;
    
    // Bonus : vider le champ
    input.value = '';
    
    // Bonus : remettre le focus sur l'input
    input.focus();
  } else {
    accueil.textContent = 'Veuillez entrer un nom';
  }
});

// Bonus : Valider aussi avec la touche Entrée
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    bouton.click();  // Simule un clic sur le bouton
  }
});

// Version plus complète avec validation
bouton.addEventListener('click', () => {
  const nom = input.value.trim();
  
  if (nom === '') {
    accueil.textContent = '⚠️ Veuillez entrer un nom';
    accueil.style.color = 'red';
    return;
  }
  
  if (nom.length < 2) {
    accueil.textContent = '⚠️ Le nom doit contenir au moins 2 caractères';
    accueil.style.color = 'red';
    return;
  }
  
  accueil.textContent = `Bonjour ${nom} ! 👋`;
  accueil.style.color = 'green';
  input.value = '';
});
```

### Points Clés à Expliquer

**1. Récupérer la valeur d'un input**
```javascript
// Lire la valeur
const valeur = input.value;

// Modifier la valeur
input.value = 'Nouveau texte';

// Vider l'input
input.value = '';

// Autres propriétés utiles
input.placeholder = 'Entrez votre nom';
input.disabled = true;
input.focus();      // Met le focus
input.blur();       // Retire le focus
```

**2. Validation des formulaires**
```javascript
const input = document.querySelector('#email');
const valeur = input.value.trim();  // Toujours trim()!

// Vérifier si vide
if (valeur === '') {
  console.log('Champ obligatoire');
}

// Vérifier la longueur
if (valeur.length < 3) {
  console.log('Minimum 3 caractères');
}

// Vérifier avec une regex (email)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(valeur)) {
  console.log('Email invalide');
}
```

**3. Événements clavier**
```javascript
input.addEventListener('keydown', (event) => {
  console.log(event.key);       // Touche pressée ('Enter', 'a', etc.)
  console.log(event.code);      // Code de la touche ('KeyA', 'Enter')
  console.log(event.ctrlKey);   // true si Ctrl est pressé
  console.log(event.shiftKey);  // true si Shift est pressé
  
  // Vérifier une touche spécifique
  if (event.key === 'Enter') {
    // Faire quelque chose
  }
});
```

### Erreurs Courantes
- ❌ Oublier `.value` : `const nom = input` → Récupère l'élément, pas la valeur
- ❌ Ne pas vérifier si vide : accepter des espaces
- ❌ Ne pas trim() : `'  abc  '` vs `'abc'`

---

<a name="js-10"></a>
## 📝 Exercice JS-10 : Le compteur

**Difficulté** : ⭐⭐⭐ (3/5)

### Consigne
Créer un compteur avec boutons + et - qui ne descend pas en dessous de 0.

### Correction

```javascript
let compteur = 0;

// Fonction pour mettre à jour l'affichage
function mettreAJourAffichage() {
  const affichage = document.querySelector('#valeurCompteur');
  affichage.textContent = compteur;
}

// Sélectionner les boutons
const btnPlus = document.querySelector('#plus');
const btnMoins = document.querySelector('#moins');

// Écouteur sur le bouton +
btnPlus.addEventListener('click', function() {
  compteur++;
  mettreAJourAffichage();
});

// Écouteur sur le bouton -
btnMoins.addEventListener('click', function() {
  // Ne pas descendre en dessous de 0
  if (compteur > 0) {
    compteur--;
    mettreAJourAffichage();
  }
});

// Version avec couleurs selon la valeur
function mettreAJourAffichage() {
  const affichage = document.querySelector('#valeurCompteur');
  affichage.textContent = compteur;
  
  // Changer la couleur selon la valeur
  if (compteur === 0) {
    affichage.style.color = 'gray';
  } else if (compteur > 0 && compteur <= 5) {
    affichage.style.color = 'green';
  } else {
    affichage.style.color = 'red';
  }
}

// Version avec désactivation du bouton -
btnMoins.addEventListener('click', () => {
  if (compteur > 0) {
    compteur--;
    mettreAJourAffichage();
    
    // Désactiver le bouton si on atteint 0
    if (compteur === 0) {
      btnMoins.disabled = true;
    }
  }
});

btnPlus.addEventListener('click', () => {
  compteur++;
  mettreAJourAffichage();
  
  // Réactiver le bouton - si on était à 0
  if (compteur > 0) {
    btnMoins.disabled = false;
  }
});
```

### Points Clés à Expliquer

**1. let vs const pour le state**
```javascript
let compteur = 0;  // ✅ Peut être modifié
compteur++;        // OK

const compteur = 0;  // ❌ Ne peut pas être modifié
compteur++;          // Erreur!
```

**2. Incrémentation/décrémentation**
```javascript
let x = 0;

// Incrémenter
x++;        // x devient 1
x += 1;     // Équivalent
x = x + 1;  // Équivalent

// Décrémenter
x--;        // x devient 0
x -= 1;     // Équivalent
x = x - 1;  // Équivalent

// Autres opérations
x += 5;     // Ajouter 5
x *= 2;     // Multiplier par 2
```

**3. Gestion du state**
```javascript
// Variable d'état
let compteur = 0;

// Fonction pour changer l'état
function incrementer() {
  compteur++;
  mettreAJourAffichage();  // Ne pas oublier!
}

// Fonction pour l'affichage (séparation des responsabilités)
function mettreAJourAffichage() {
  document.querySelector('#affichage').textContent = compteur;
}
```

### Erreurs Courantes
- ❌ Oublier de mettre à jour l'affichage après modification
- ❌ Ne pas vérifier si compteur > 0 avant de décrémenter
- ❌ Utiliser `const` au lieu de `let` pour le compteur

---

<a name="js-11"></a>
## 📝 Exercice JS-11 : Le toggle de classe

**Difficulté** : ⭐⭐⭐⭐ (4/5)

### Consigne
Utiliser classList.toggle() pour afficher/masquer un élément et changer le texte du bouton.

### Correction

```javascript
// Ajoute le toggle de classe ici
const bouton = document.querySelector('#toggleBtn');
const contenu = document.querySelector('#contenu');

bouton.addEventListener('click', function() {
  // Toggle la classe hidden
  contenu.classList.toggle('hidden');
  
  // Changer le texte du bouton selon l'état
  if (contenu.classList.contains('hidden')) {
    bouton.textContent = 'Afficher';
  } else {
    bouton.textContent = 'Masquer';
  }
});

// Version plus concise avec opérateur ternaire
bouton.addEventListener('click', () => {
  contenu.classList.toggle('hidden');
  bouton.textContent = contenu.classList.contains('hidden') 
    ? 'Afficher' 
    : 'Masquer';
});

// Version avec animation (transition CSS)
// CSS nécessaire :
// .contenu {
//   transition: opacity 0.3s ease;
//   opacity: 1;
// }
// .hidden {
//   opacity: 0;
//   pointer-events: none;
// }

bouton.addEventListener('click', () => {
  const estCache = contenu.classList.toggle('hidden');
  bouton.textContent = estCache ? 'Afficher' : 'Masquer';
  
  // Bonus : changer l'icône
  bouton.innerHTML = estCache ? '👁️ Afficher' : '🙈 Masquer';
});
```

### Points Clés à Expliquer

**1. classList (API moderne)**
```javascript
const element = document.querySelector('#demo');

// Ajouter une classe
element.classList.add('active');
element.classList.add('active', 'selected');  // Plusieurs à la fois

// Retirer une classe
element.classList.remove('active');

// Toggle (ajouter si absente, retirer si présente)
element.classList.toggle('active');

// Vérifier si une classe existe
if (element.classList.contains('active')) {
  console.log('Élément actif');
}

// Remplacer une classe
element.classList.replace('old-class', 'new-class');
```

**2. Alternatives (old school, à éviter)**
```javascript
// ❌ className (remplace TOUTES les classes)
element.className = 'nouvelle-classe';

// ❌ Manipulation de string
element.className += ' autre-classe';

// ✅ classList (moderne, recommandé)
element.classList.add('autre-classe');
```

**3. Toggle retourne une valeur**
```javascript
// toggle() retourne true si la classe a été AJOUTÉE
const estAjoute = element.classList.toggle('active');

if (estAjoute) {
  console.log('Classe ajoutée');
} else {
  console.log('Classe retirée');
}

// Utilisation dans un ternaire
const texte = element.classList.toggle('active') ? 'Actif' : 'Inactif';
```

### CSS Nécessaire
```css
.hidden {
  display: none;
}

/* Ou avec opacity pour une animation */
.contenu {
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

.contenu.hidden {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;  /* Désactiver les interactions */
}
```

### Erreurs Courantes
- ❌ Oublier le point dans le CSS : `.hidden` et non `hidden`
- ❌ Utiliser `style.display` au lieu de classes CSS
- ❌ Ne pas synchroniser le texte du bouton avec l'état

---

<a name="js-12"></a>
## 📝 Exercice JS-12 : Mini-jeu : le quizz interactif

**Difficulté** : ⭐⭐⭐⭐⭐ (5/5)

### Consigne
Créer un quizz complet avec questions, vérification des réponses, et score final.

### Correction Complète

```javascript
// Crée ton array de questions
const questions = [
  {
    question: 'Quelle est la capitale de la France ?',
    reponse1: 'Paris',
    reponse2: 'Londres',
    bonneReponse: 1  // 1 pour reponse1, 2 pour reponse2
  },
  {
    question: 'Combien font 2 + 2 ?',
    reponse1: '3',
    reponse2: '4',
    bonneReponse: 2
  },
  {
    question: 'JavaScript est-il un langage de programmation ?',
    reponse1: 'Oui',
    reponse2: 'Non',
    bonneReponse: 1
  }
];

// Variables pour suivre l'état
let questionActuelle = 0;
let score = 0;
let aRepondu = false;

// Sélectionner les éléments
const questionElement = document.querySelector('#question');
const reponse1Btn = document.querySelector('#reponse1');
const reponse2Btn = document.querySelector('#reponse2');
const scoreElement = document.querySelector('#score');

// Fonction pour afficher une question
function afficherQuestion() {
  // Réinitialiser l'état
  aRepondu = false;
  reponse1Btn.style.backgroundColor = '';
  reponse2Btn.style.backgroundColor = '';
  reponse1Btn.disabled = false;
  reponse2Btn.disabled = false;
  
  // Récupérer la question actuelle
  const q = questions[questionActuelle];
  
  // Afficher la question et les réponses
  questionElement.textContent = q.question;
  reponse1Btn.textContent = q.reponse1;
  reponse2Btn.textContent = q.reponse2;
}

// Fonction pour vérifier la réponse
function verifierReponse(numeroReponse) {
  // Éviter de répondre deux fois
  if (aRepondu) return;
  aRepondu = true;
  
  const q = questions[questionActuelle];
  const estCorrect = numeroReponse === q.bonneReponse;
  
  // Colorier les boutons
  if (estCorrect) {
    // Bonne réponse
    score++;
    if (numeroReponse === 1) {
      reponse1Btn.style.backgroundColor = 'green';
    } else {
      reponse2Btn.style.backgroundColor = 'green';
    }
  } else {
    // Mauvaise réponse
    if (numeroReponse === 1) {
      reponse1Btn.style.backgroundColor = 'red';
      reponse2Btn.style.backgroundColor = 'green';  // Montrer la bonne
    } else {
      reponse2Btn.style.backgroundColor = 'red';
      reponse1Btn.style.backgroundColor = 'green';
    }
  }
  
  // Désactiver les boutons
  reponse1Btn.disabled = true;
  reponse2Btn.disabled = true;
  
  // Passer à la question suivante après 2 secondes
  setTimeout(() => {
    questionActuelle++;
    
    if (questionActuelle < questions.length) {
      afficherQuestion();
    } else {
      afficherScore();
    }
  }, 2000);
}

// Fonction pour afficher le score final
function afficherScore() {
  questionElement.textContent = 'Quizz terminé !';
  reponse1Btn.style.display = 'none';
  reponse2Btn.style.display = 'none';
  
  const pourcentage = Math.round((score / questions.length) * 100);
  
  scoreElement.innerHTML = `
    <h3>Votre score : ${score}/${questions.length}</h3>
    <p>${pourcentage}% de bonnes réponses</p>
    <button onclick="location.reload()">Recommencer</button>
  `;
  
  // Message selon le score
  let message = '';
  if (pourcentage === 100) {
    message = '🎉 Parfait ! Excellent !';
  } else if (pourcentage >= 66) {
    message = '👍 Bien joué !';
  } else if (pourcentage >= 33) {
    message = '😐 Peut mieux faire';
  } else {
    message = '😅 Il faut réviser !';
  }
  
  scoreElement.innerHTML += `<p style="font-size: 24px">${message}</p>`;
}

// Écouteurs d'événements sur les boutons
reponse1Btn.addEventListener('click', () => verifierReponse(1));
reponse2Btn.addEventListener('click', () => verifierReponse(2));

// Initialise le quizz
afficherQuestion();
```

### Version Alternative (Plus Avancée)

```javascript
// Version orientée objet
class Quizz {
  constructor(questions) {
    this.questions = questions;
    this.questionActuelle = 0;
    this.score = 0;
    this.aRepondu = false;
    
    // Sélectionner les éléments
    this.questionElement = document.querySelector('#question');
    this.reponse1Btn = document.querySelector('#reponse1');
    this.reponse2Btn = document.querySelector('#reponse2');
    this.scoreElement = document.querySelector('#score');
    
    // Ajouter les écouteurs
    this.reponse1Btn.addEventListener('click', () => this.verifierReponse(1));
    this.reponse2Btn.addEventListener('click', () => this.verifierReponse(2));
  }
  
  start() {
    this.afficherQuestion();
  }
  
  afficherQuestion() {
    this.aRepondu = false;
    this.resetButtons();
    
    const q = this.questions[this.questionActuelle];
    this.questionElement.textContent = q.question;
    this.reponse1Btn.textContent = q.reponse1;
    this.reponse2Btn.textContent = q.reponse2;
  }
  
  resetButtons() {
    this.reponse1Btn.style.backgroundColor = '';
    this.reponse2Btn.style.backgroundColor = '';
    this.reponse1Btn.disabled = false;
    this.reponse2Btn.disabled = false;
  }
  
  verifierReponse(numeroReponse) {
    if (this.aRepondu) return;
    this.aRepondu = true;
    
    const q = this.questions[this.questionActuelle];
    const estCorrect = numeroReponse === q.bonneReponse;
    
    if (estCorrect) {
      this.score++;
      this.colorButton(numeroReponse, 'green');
    } else {
      this.colorButton(numeroReponse, 'red');
      this.colorButton(q.bonneReponse, 'green');
    }
    
    this.reponse1Btn.disabled = true;
    this.reponse2Btn.disabled = true;
    
    setTimeout(() => {
      this.questionActuelle++;
      if (this.questionActuelle < this.questions.length) {
        this.afficherQuestion();
      } else {
        this.afficherScore();
      }
    }, 2000);
  }
  
  colorButton(numero, couleur) {
    if (numero === 1) {
      this.reponse1Btn.style.backgroundColor = couleur;
    } else {
      this.reponse2Btn.style.backgroundColor = couleur;
    }
  }
  
  afficherScore() {
    this.questionElement.textContent = 'Quizz terminé !';
    this.reponse1Btn.style.display = 'none';
    this.reponse2Btn.style.display = 'none';
    
    const pourcentage = Math.round((this.score / this.questions.length) * 100);
    this.scoreElement.innerHTML = `
      <h3>Score : ${this.score}/${this.questions.length}</h3>
      <p>${pourcentage}%</p>
      <button onclick="location.reload()">Recommencer</button>
    `;
  }
}

// Créer et lancer le quizz
const monQuizz = new Quizz(questions);
monQuizz.start();
```

### Points Clés à Expliquer

**1. Gestion d'état complexe**
```javascript
// Variables d'état
let questionActuelle = 0;  // Index de la question
let score = 0;             // Points marqués
let aRepondu = false;      // Éviter double-clic

// Toujours synchroniser état et affichage
function changerEtat() {
  // 1. Modifier l'état
  questionActuelle++;
  
  // 2. Mettre à jour l'affichage
  afficherQuestion();
}
```

**2. Array d'objets**
```javascript
const questions = [
  {
    question: 'Texte de la question',
    reponse1: 'Option 1',
    reponse2: 'Option 2',
    bonneReponse: 1
  },
  // ... autres questions
];

// Accéder aux données
const q = questions[0];
console.log(q.question);      // 'Texte de la question'
console.log(q.reponse1);      // 'Option 1'
console.log(q.bonneReponse);  // 1
```

**3. setTimeout()**
```javascript
// Exécuter du code après un délai
setTimeout(function() {
  console.log('Après 2 secondes');
}, 2000);  // 2000 millisecondes = 2 secondes

// Avec arrow function
setTimeout(() => {
  console.log('Après 1 seconde');
}, 1000);

// Annuler un setTimeout
const timerId = setTimeout(() => {}, 1000);
clearTimeout(timerId);
```

**4. Désactiver des boutons**
```javascript
const bouton = document.querySelector('#btn');

// Désactiver
bouton.disabled = true;

// Réactiver
bouton.disabled = false;

// Toggle
bouton.disabled = !bouton.disabled;
```

### Améliorations Possibles

```javascript
// 1. Mélanger les questions
function melangerQuestions(array) {
  return array.sort(() => Math.random() - 0.5);
}

// 2. Chronomètre
let tempsRestant = 30;
const timer = setInterval(() => {
  tempsRestant--;
  if (tempsRestant === 0) {
    clearInterval(timer);
    afficherScore();
  }
}, 1000);

// 3. Animations
bouton.style.transition = 'all 0.3s ease';
bouton.style.transform = 'scale(1.1)';

// 4. Son au clic
const bonneReponseSound = new Audio('correct.mp3');
bonneReponseSound.play();

// 5. LocalStorage pour sauvegarder le meilleur score
const meilleurScore = localStorage.getItem('meilleurScore') || 0;
if (score > meilleurScore) {
  localStorage.setItem('meilleurScore', score);
}
```

### Erreurs Courantes
- ❌ Ne pas empêcher le double-clic → réponses multiples
- ❌ Oublier de réinitialiser les couleurs entre questions
- ❌ Ne pas désactiver les boutons après réponse
- ❌ Index out of bounds : `questions[3]` quand il n'y a que 3 questions

---

## 🎓 Conseils Pédagogiques Généraux

### Progression Suggérée

**Semaine 1** : JS-01 à JS-03 (Bases)
- console.log
- Variables
- DOM basique

**Semaine 2** : JS-04 à JS-06 (Interactivité)
- Événements
- Conditions
- Boucles

**Semaine 3** : JS-07 à JS-09 (Fonctions et données)
- Fonctions
- Tableaux
- Formulaires

**Semaine 4** : JS-10 à JS-12 (Projets)
- State management
- Classes CSS
- Projet final

### Points à Souligner Systématiquement

1. **Toujours console.log() pour déboguer**
2. **Utiliser const par défaut, let si besoin, jamais var**
3. **Arrow functions = syntaxe moderne**
4. **querySelector() = sélecteur CSS**
5. **addEventListener() > onclick dans HTML**

### Exercices Bonus

Encourager les étudiants à :
- Ajouter du CSS pour améliorer le design
- Ajouter des validations supplémentaires
- Créer des variations (compteur avec reset, quizz avec plus de questions)
- Combiner plusieurs exercices (formulaire + liste + compteur)

---

**Dernière mise à jour : 18/12/2025 à 23:15**

**Note** : Ce document est confidentiel et destiné uniquement à l'enseignant. Les étudiants doivent trouver les solutions en cherchant et en expérimentant.

