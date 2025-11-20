# 🚀 Plateforme d'Apprentissage Web - Ingémédia M1

Une plateforme pédagogique interactive pour apprendre le développement web de zéro à React, conçue spécifiquement pour les étudiants de Master 1 Ingémédia.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.3-646cff)

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Modules de formation](#modules-de-formation)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Pédagogie](#pédagogie)
- [Fonctionnalités](#fonctionnalités)

## 🎯 Vue d'ensemble

Cette plateforme est un **référentiel pédagogique complet** qui accompagne les étudiants débutants dans leur apprentissage du développement web. Elle propose une progression structurée, bienveillante mais exigeante, du HTML de base jusqu'à React.

### Caractéristiques principales

- ✨ **47 exercices progressifs** répartis sur 4 modules
- 💻 **Éditeur de code en temps réel** avec aperçu instantané
- 🎨 **Interface moderne et intuitive** (dark mode)
- 📱 **Responsive** : fonctionne sur tous les appareils
- 🎮 **Gamification** : système de niveaux et de difficulté
- 📚 **Pédagogie bienveillante** : consignes claires et motivantes

## 📚 Modules de formation

### Module 1 : HTML 🏗️
**Les fondations du web**
- 13 exercices (difficulté 1-5)
- Durée estimée : 4-6 heures
- Objectifs : Balises essentielles, structure sémantique, formulaires

**Progression :**
1. Premier H1 et paragraphe
2. Images et attributs alt
3. Listes ordonnées et non ordonnées
4. Liens et navigation
5. Structure header/main/footer
6. Formulaires complets
7. Intégration HTML + CSS
8. Mini-portfolio final

### Module 2 : CSS 🎨
**L'art de la mise en forme**
- 12 exercices (difficulté 1-5)
- Durée estimée : 6-8 heures
- Objectifs : Sélecteurs, box model, Flexbox, Grid, animations

**Progression :**
1. Stylisation de base (couleurs, typographie)
2. Box model (padding, margin, border)
3. Flexbox pour layouts simples
4. CSS Grid pour layouts complexes
5. Transitions et animations
6. Variables CSS
7. Design responsive
8. Landing page complète

### Module 3 : JavaScript ⚡
**La magie interactive**
- 12 exercices (difficulté 1-5)
- Durée estimée : 8-10 heures
- Objectifs : Variables, DOM, événements, fonctions, logique

**Progression :**
1. Console.log et variables
2. Types et opérateurs
3. Manipulation du DOM
4. Événements (click, submit)
5. Conditions et boucles
6. Fonctions réutilisables
7. Tableaux et objets
8. Formulaires interactifs
9. Gestion d'état basique
10. Mini-jeu (quizz interactif)

### Module 4 : React ⚛️
**Les composants modernes**
- 10 exercices (difficulté 1-5)
- Durée estimée : 10-12 heures
- Objectifs : Composants, props, state, hooks, app complète

**Progression :**
1. Premier composant
2. Props et composition
3. useState (état local)
4. Inputs contrôlés
5. Affichage de listes (.map)
6. Rendu conditionnel
7. useEffect (cycle de vie)
8. Composants réutilisables
9. Formulaires multi-inputs
10. Todo App complète

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
# Cloner le projet
git clone [url-du-repo]
cd dev-cmd2

# Installer les dépendances
npm install
```

## 💻 Utilisation

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir le navigateur à l'adresse : `http://localhost:5173`

### Build pour la production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

## 📁 Structure du projet

```
dev-cmd2/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── ExerciceItem.jsx
│   │   ├── CodeEditor.jsx
│   │   └── Preview.jsx
│   ├── pages/               # Pages principales
│   │   ├── HomePage.jsx
│   │   ├── ModulePage.jsx
│   │   └── ExercicePage.jsx
│   ├── data/                # Données des modules et exercices
│   │   ├── modulesData.js
│   │   ├── exercicesHTML.js
│   │   ├── exercicesCSS.js
│   │   ├── exercicesJavaScript.js
│   │   ├── exercicesReact.js
│   │   └── index.js
│   ├── App.jsx              # Composant principal avec routing
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎓 Pédagogie

### Philosophie

Cette plateforme adopte une approche pédagogique qui allie :

1. **Bienveillance** : Consignes claires, ton décomplexé et motivant
2. **Exigence** : Validation précise, progression structurée
3. **Autonomie** : Apprentissage par la pratique, encouragement à l'expérimentation
4. **Contexte** : Exemples concrets, projets finaux réalistes

### Ton et style

- Humoristique mais pas infantilisant
- Références à la culture geek/gaming (RPG, boss final, level up)
- Encouragements constants
- Consignes précises et détaillées

### Exemples de consignes

> "Fais pousser ton premier cri de développeur : ajoute un `<h1>` avec le texte EXACT 'Bienvenue sur mon site'..."

> "C'est l'heure du boss final du CSS. Crée une mini landing page avec..."

## ✨ Fonctionnalités

### Pour les étudiants

- ✅ **Éditeur en temps réel** : Voir le résultat instantanément
- ✅ **Réinitialisation** : Recommencer un exercice à zéro
- ✅ **Progression claire** : Exercices classés par difficulté
- ✅ **Consignes détaillées** : Savoir exactement quoi faire
- ✅ **Aperçu responsive** : Tester sur tous les écrans

### Pour les enseignants

- ✅ **Facilement extensible** : Ajouter de nouveaux exercices
- ✅ **Modifiable** : Adapter les consignes et exercices
- ✅ **Hébergeable** : Déployer sur Vercel, Netlify, etc.
- ✅ **Open source** : Personnaliser selon les besoins

## 🛠️ Technologies utilisées

- **React 18.3** : Bibliothèque UI
- **Vite 5.3** : Build tool rapide
- **React Router 6** : Routing
- **CSS3** : Styles (variables CSS, Grid, Flexbox)

## 📝 Ajouter un exercice

Pour ajouter un nouvel exercice, éditer le fichier correspondant dans `src/data/` :

```javascript
{
  id: "html-14",
  titre: "Titre de l'exercice",
  type: "code-html", // ou "code-css", "code-js", "code-react"
  consigne: "Description détaillée de ce qu'il faut faire...",
  code_initial: "<!-- Code de départ -->",
  validation_attendue: {
    doit_contenir: ["<h1>", "<p>"]
  },
  difficulte: 3 // 1 à 5
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit les changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍🏫 Auteur

Créé pour les étudiants de Master 1 Ingémédia.

---

**Bon courage dans votre apprentissage du développement web ! 🚀**

*Remember: "Le seul moyen d'apprendre à programmer, c'est de programmer."*

