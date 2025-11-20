# 👨‍🏫 Guide de l'Enseignant

## Vue d'ensemble de la plateforme

Cette plateforme est conçue comme un **outil pédagogique complet** pour accompagner ton cours de développement web en Master 1 Ingémédia. Elle peut servir de :

- **Support de cours** : Les exercices suivent une progression logique
- **Travail autonome** : Les étudiants peuvent avancer à leur rythme
- **Devoir à la maison** : Exercices assignables
- **Évaluation** : Vérification des acquis

## 🎯 Utilisation pédagogique recommandée

### Séquence type d'un cours (2h)

**Cours 1 - Module HTML** (exemple)
1. **Introduction théorique** (30 min)
   - Présenter les concepts du jour (ex: balises sémantiques)
   - Montrer des exemples concrets de sites

2. **Démonstration guidée** (20 min)
   - Ouvrir la plateforme
   - Faire un exercice ensemble en live coding
   - Montrer l'utilisation de l'éditeur

3. **Pratique autonome** (1h)
   - Les étudiants font 3-5 exercices du module
   - Tu circules pour aider individuellement
   - Déblocage des situations complexes

4. **Débriefing** (10 min)
   - Questions/réponses
   - Difficultés rencontrées
   - Annonce des exercices à finir pour le prochain cours

### Progression sur le semestre

**Semaines 1-3 : HTML**
- Cours 1 : Exercices 1-5 (balises de base)
- Cours 2 : Exercices 6-9 (structure, formulaires)
- Cours 3 : Exercices 10-13 (HTML+CSS)

**Semaines 4-6 : CSS**
- Cours 4 : Exercices 1-4 (sélecteurs, box model)
- Cours 5 : Exercices 5-8 (flexbox, grid, transitions)
- Cours 6 : Exercices 9-12 (animations, responsive, projet)

**Semaines 7-10 : JavaScript**
- Cours 7 : Exercices 1-4 (variables, DOM, événements)
- Cours 8 : Exercices 5-8 (conditions, boucles, fonctions, tableaux)
- Cours 9 : Exercices 9-11 (formulaires, état, classes)
- Cours 10 : Exercice 12 (projet quizz)

**Semaines 11-14 : React**
- Cours 11 : Exercices 1-3 (composants, props, useState)
- Cours 12 : Exercices 4-6 (inputs contrôlés, listes, conditions)
- Cours 13 : Exercices 7-9 (useEffect, composants réutilisables, formulaires)
- Cours 14 : Exercice 10 (Todo App finale)

## 📊 Évaluation

### Évaluation continue

**Exercices à rendre** (40% de la note)
- Chaque semaine : 3-5 exercices à compléter
- Critères : code fonctionnel, respect des consignes, propreté du code

**Mini-projets** (30% de la note)
- Fin HTML : Mini-portfolio (exercice 13)
- Fin CSS : Landing page (exercice 12)
- Fin JavaScript : Quizz interactif (exercice 12)
- Fin React : Todo App (exercice 10)

**Projet final** (30% de la note)
- Application web complète utilisant tous les acquis
- Proposition : Portfolio personnel avec projets interactifs

### Grille d'évaluation (exemple pour un exercice)

| Critère | Points |
|---------|--------|
| Code fonctionnel (rendu correct) | 4 pts |
| Respect exact de la consigne | 3 pts |
| Propreté du code (indentation, nommage) | 2 pts |
| Créativité / amélioration personnelle | 1 pt |
| **Total** | **10 pts** |

## 🛠️ Personnalisation de la plateforme

### Ajouter un exercice

1. Ouvrir le fichier correspondant dans `src/data/` (ex: `exercicesHTML.js`)
2. Ajouter un objet dans l'array :

```javascript
{
  id: "html-14",
  titre: "Titre accrocheur de l'exercice",
  type: "code-html", // ou code-css, code-js, code-react
  consigne: "Consigne détaillée et motivante...",
  code_initial: "<!-- Code de départ -->",
  validation_attendue: {
    doit_contenir: ["<balise>", "attribut"]
  },
  difficulte: 3 // de 1 à 5
}
```

3. Le nouvel exercice apparaît automatiquement

### Modifier un exercice existant

Éditer directement l'objet dans le fichier de données. Les changements sont immédiats.

### Ajouter un module

1. Ajouter le module dans `src/data/modulesData.js`
2. Créer un fichier `exercices[NomModule].js`
3. Importer et exporter dans `src/data/index.js`

## 💡 Conseils pédagogiques

### Pour les étudiants en difficulté

- **Encourager l'expérimentation** : "Casse des trucs, c'est comme ça qu'on apprend"
- **Débloquer sans donner la réponse** : Poser des questions qui guident
- **Montrer la documentation** : MDN, W3Schools
- **Binômes** : Mettre en place du pair programming

### Pour les étudiants avancés

- **Bonus créatifs** : "Améliore l'exercice à ta façon"
- **Challenges supplémentaires** : Exercices plus complexes
- **Mentorat** : Les faire aider leurs camarades
- **Projets personnels** : Encourager à créer au-delà des exercices

### Ressources complémentaires à recommander

- [MDN Web Docs](https://developer.mozilla.org) - La référence
- [CSS-Tricks](https://css-tricks.com) - Astuces CSS
- [JavaScript.info](https://javascript.info) - JS en profondeur
- [React.dev](https://react.dev) - Docs officielles React
- [Frontend Mentor](https://www.frontendmentor.io) - Challenges design

## 🎓 Objectifs par module

### HTML - Les fondations
**Compétences attendues en fin de module :**
- ✅ Structurer une page HTML complète
- ✅ Utiliser les balises sémantiques appropriées
- ✅ Créer des formulaires accessibles
- ✅ Intégrer images et liens correctement

**Indicateur de réussite :**
L'étudiant peut créer un mini-site de 3 pages avec navigation.

### CSS - La mise en forme
**Compétences attendues :**
- ✅ Styliser une page avec sélecteurs et propriétés
- ✅ Créer des layouts avec Flexbox et Grid
- ✅ Rendre un site responsive
- ✅ Ajouter des transitions et animations

**Indicateur de réussite :**
L'étudiant peut reproduire un design donné (maquette).

### JavaScript - L'interactivité
**Compétences attendues :**
- ✅ Manipuler le DOM (sélection, modification)
- ✅ Gérer les événements utilisateur
- ✅ Créer des fonctions réutilisables
- ✅ Travailler avec tableaux et objets
- ✅ Implémenter de la logique (conditions, boucles)

**Indicateur de réussite :**
L'étudiant peut créer une interface interactive (formulaire avec validation, jeu simple).

### React - Les applications modernes
**Compétences attendues :**
- ✅ Créer et composer des composants
- ✅ Gérer l'état avec useState
- ✅ Gérer les effets avec useEffect
- ✅ Travailler avec des listes dynamiques
- ✅ Créer une application fonctionnelle complète

**Indicateur de réussite :**
L'étudiant peut créer une Todo App ou une app similaire de A à Z.

## 🔧 Déploiement de la plateforme

### Option 1 : Vercel (recommandé)

```bash
# Installation du CLI Vercel
npm i -g vercel

# Déploiement
vercel
```

### Option 2 : Netlify

```bash
# Build
npm run build

# Déployer le dossier dist/ sur Netlify (drag & drop)
```

### Option 3 : GitHub Pages

Ajouter dans `vite.config.js` :
```javascript
export default defineConfig({
  base: '/nom-du-repo/',
  plugins: [react()],
})
```

Puis déployer avec GitHub Actions.

## 📞 Support et questions

### FAQ enseignants

**Q : Les étudiants peuvent-ils tricher en regardant les solutions ?**
R : Il n'y a pas de solutions codées en dur. L'évaluation se fait sur le travail rendu, pas sur la validation automatique. Encourage la compréhension plutôt que la copie.

**Q : Puis-je adapter les consignes à mon style ?**
R : Absolument ! Tous les exercices sont dans `src/data/`. Tu peux modifier le ton, ajouter des exemples, etc.

**Q : Comment suivre la progression des étudiants ?**
R : Actuellement, il n'y a pas de système de suivi intégré. Tu peux demander aux étudiants de :
- Faire des captures d'écran
- Copier-coller leur code dans un document
- Héberger leurs exercices sur CodePen/CodeSandbox

**Q : Peut-on ajouter un système de validation automatique ?**
R : Oui, en développant un système qui compare le code de l'étudiant aux critères de `validation_attendue`. C'est une évolution possible du projet.

## 🎯 Cas d'usage concrets

### Cas 1 : Cours en présentiel
- Afficher la plateforme au vidéoprojecteur
- Live coding d'un exercice ensemble
- Étudiants travaillent sur leurs machines
- Support individuel pendant la pratique

### Cas 2 : Cours en distanciel
- Partager l'écran sur Zoom/Teams
- Les étudiants suivent sur leur propre instance
- Utiliser les salles de groupe pour l'entraide
- Chat pour les questions rapides

### Cas 3 : Travail autonome
- Assigner X exercices pour la prochaine séance
- Les étudiants avancent à leur rythme
- Questions par email/forum
- Validation en début de cours suivant

### Cas 4 : Révisions avant examen
- Les étudiants refont les exercices
- Focus sur les exercices de difficulté 4-5
- Révision des concepts clés
- Identification des lacunes

## 📈 Suivi pédagogique

### Indicateurs à surveiller

1. **Taux de complétion** : Combien d'exercices terminés par étudiant
2. **Temps passé** : Certains exercices prennent-ils trop de temps ?
3. **Questions récurrentes** : Quels concepts bloquent ?
4. **Satisfaction** : Feedback des étudiants sur les exercices

### Ajustements possibles

- **Trop facile** : Augmenter la difficulté, ajouter des contraintes
- **Trop difficile** : Décomposer en sous-étapes, ajouter des indices
- **Ennuyeux** : Rendre les consignes plus fun, varier les thèmes
- **Hors sujet** : Vérifier l'alignement avec les objectifs pédagogiques

## 🌟 Bonnes pratiques

### Pour maximiser l'engagement

1. **Célébrer les victoires** : Féliciter publiquement les réussites
2. **Gamification** : Créer un "leaderboard" informel
3. **Projets personnels** : Encourager à créer au-delà des exercices
4. **Communauté** : Créer un Discord/Slack pour l'entraide
5. **Show & tell** : Sessions où les étudiants présentent leurs créations

### Pour favoriser l'autonomie

1. **Documentation** : Apprendre à chercher sur MDN
2. **Debugging** : Enseigner à lire les erreurs
3. **Expérimentation** : "Que se passe-t-il si je change ça ?"
4. **Pair programming** : Travailler en binôme
5. **Code reviews** : Faire relire le code entre pairs

---

**Bonne chance pour ton cours ! 🚀**

*N'hésite pas à adapter cette plateforme à tes besoins. Elle est là pour servir ta pédagogie, pas l'inverse.*

