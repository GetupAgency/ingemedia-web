# 🍽️ Projet "G Faim" - Guide Étudiant

## 📋 Vue d'ensemble

"G Faim" est une application web qui permet de saisir les ingrédients disponibles dans son frigo et de recevoir des suggestions de recettes correspondantes.

## 🎯 Objectifs pédagogiques

Ce projet vous permettra de mettre en pratique :
- ✅ La gestion d'état avec React (useState, useMemo)
- ✅ Les événements et formulaires
- ✅ Le filtrage et tri de données
- ✅ Le CSS et le design responsive
- ✅ La composition de composants
- ✅ Les bonnes pratiques de développement

## 🏗️ Architecture du projet

```
src/
├── pages/
│   ├── GFaimPage.jsx          # Page principale de l'application
│   └── GFaimPage.css
│
└── components/GFaim/
    ├── IngredientInput.jsx     # Champ de saisie d'ingrédients
    ├── IngredientInput.css
    ├── IngredientList.jsx      # Liste des ingrédients saisis
    ├── IngredientList.css
    ├── RecipeSuggestions.jsx   # Conteneur des recettes suggérées
    ├── RecipeSuggestions.css
    ├── RecipeCard.jsx          # Carte d'une recette
    └── RecipeCard.css
```

## 🚀 Démarrage

1. Accédez à l'application via le menu "🍽️ G Faim"
2. L'application est déjà intégrée dans le routing
3. Lancez le serveur de développement : `npm run dev`

## ✏️ Fonctions à compléter

### 1. GFaimPage.jsx

#### `handleAddIngredient(ingredient)`
**Objectif** : Ajouter un ingrédient à la liste
**Ce que vous devez faire** :
- Vérifier que l'ingrédient n'est pas vide
- Éviter les doublons (vérifier si l'ingrédient existe déjà)
- Ajouter l'ingrédient au state `ingredients`

**Indices** :
```javascript
// Vérifier si un élément existe dans un tableau
const exists = myArray.includes(element);

// Ajouter un élément à un tableau (immutabilité React)
setMyArray([...myArray, newElement]);
```

#### `handleRemoveIngredient(ingredientToRemove)`
**Objectif** : Retirer un ingrédient de la liste
**Ce que vous devez faire** :
- Filtrer le tableau pour enlever l'ingrédient spécifié

**Indices** :
```javascript
// Filtrer un tableau
const filtered = myArray.filter(item => item !== itemToRemove);
```

---

### 2. IngredientInput.jsx

#### `handleSubmit(e)`
**Objectif** : Valider et soumettre un nouvel ingrédient
**Ce que vous devez faire** :
1. Empêcher le rechargement de la page
2. Vérifier que l'input n'est pas vide (après trim)
3. Nettoyer la valeur (trim, toLowerCase)
4. Appeler `onAddIngredient` avec la valeur nettoyée
5. Réinitialiser le champ input

**Indices** :
```javascript
// Empêcher la soumission par défaut
e.preventDefault();

// Nettoyer une chaîne
const cleaned = str.trim().toLowerCase();

// Réinitialiser
setInputValue('');
```

---

### 3. RecipeSuggestions.jsx

#### Algorithme de filtrage (dans useMemo)
**Objectif** : Filtrer et trier les recettes selon les ingrédients disponibles
**Ce que vous devez faire** :
1. Filtrer les recettes qui contiennent au moins 1 ingrédient de l'utilisateur
2. Calculer un score de correspondance pour chaque recette
3. Trier les recettes par score décroissant

**Algorithme suggéré** :
```javascript
const recipesWithScores = RECIPES_DB.map(recipe => {
  // Compter combien d'ingrédients correspondent
  const matchingIngredients = recipe.ingredients.filter(ing => 
    ingredients.includes(ing)
  );
  
  const score = matchingIngredients.length;
  
  return {
    ...recipe,
    score,
    matchingCount: matchingIngredients.length,
    missingCount: recipe.ingredients.length - matchingIngredients.length
  };
});

// Filtrer : garder seulement celles avec score > 0
// Trier : par score décroissant
```

---

### 4. RecipeCard.jsx

#### `getMissingIngredients()`
**Objectif** : Calculer quels ingrédients manquent à l'utilisateur
**Ce que vous devez faire** :
- Comparer `recipe.ingredients` avec `userIngredients`
- Retourner la liste des ingrédients manquants

**Indices** :
```javascript
const missing = recipe.ingredients.filter(ing => 
  !userIngredients.includes(ing)
);
```

#### Calcul du pourcentage de correspondance
**Objectif** : Afficher un pourcentage de match
**Formule** :
```javascript
const matchPercentage = Math.round(
  (matchingCount / recipe.ingredients.length) * 100
);
```

---

## 🎨 Améliorations CSS à faire

### Priorités
1. **Responsive Design** :
   - Adapter la grille pour mobile (1 colonne)
   - Menu burger fonctionnel
   - Tailles de police adaptatives

2. **Animations** :
   - Transition à l'ajout/suppression d'ingrédients
   - Animation au survol des cartes de recettes
   - Effet de chargement

3. **Couleurs et Thème** :
   - Créer une palette de couleurs cohérente
   - Ajouter un mode sombre (bonus)
   - Améliorer les contrastes

4. **UX** :
   - Améliorer les états de focus
   - Ajouter des tooltips
   - Améliorer les messages d'erreur/vide

### Exemples de CSS à améliorer

```css
/* Animation d'entrée pour les ingrédients */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.ingredient-item {
  animation: slideIn 0.3s ease-out;
}

/* Effet de hover amélioré */
.recipe-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

/* Media query pour mobile */
@media (max-width: 768px) {
  .gfaim-container {
    grid-template-columns: 1fr;
  }
}
```

---

## 🚀 Fonctionnalités bonus à ajouter

### Niveau 1 - Facile
1. ✅ Bouton "Vider tous les ingrédients"
2. ✅ Compteur d'ingrédients
3. ✅ Afficher le nombre de recettes trouvées
4. ✅ Badge de difficulté coloré

### Niveau 2 - Moyen
1. 🔄 Système de favoris (localStorage)
2. 🔄 Filtres : végétarien, rapide (< 20 min), facile
3. 🔄 Barre de recherche de recettes
4. 🔄 Suggestions d'ingrédients courants (auto-complétion)
5. 🔄 Historique des derniers ingrédients utilisés

### Niveau 3 - Avancé
1. 🚀 Modal pour afficher la recette complète avec instructions
2. 🚀 Système de notation des recettes
3. 🚀 Ajouter de nouvelles recettes (formulaire)
4. 🚀 Export/Import de la liste d'ingrédients
5. 🚀 Mode "course" : générer une liste de courses pour une recette
6. 🚀 Intégration d'une API de recettes externe

---

## 📚 Ressources utiles

### JavaScript
- [Array.filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### React
- [useState](https://fr.react.dev/reference/react/useState)
- [useMemo](https://fr.react.dev/reference/react/useMemo)
- [Gestion des événements](https://fr.react.dev/learn/responding-to-events)

### CSS
- [Grid Layout](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
- [Animations CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations)
- [Media Queries](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries)

---

## 🎯 Plan de travail suggéré

### Session 1 - Logique (1h)
1. Compléter `handleAddIngredient` et `handleRemoveIngredient`
2. Compléter `handleSubmit` dans IngredientInput
3. Tester l'ajout/suppression d'ingrédients

### Session 2 - Filtrage (1h)
1. Implémenter l'algorithme de filtrage des recettes
2. Compléter `getMissingIngredients`
3. Calculer le pourcentage de correspondance
4. Tester avec différents ingrédients

### Session 3 - Style (1h30)
1. Améliorer les couleurs et la typographie
2. Rendre l'application responsive
3. Ajouter des animations
4. Peaufiner l'UX

### Session 4 - Bonus (30min+)
1. Choisir 2-3 fonctionnalités bonus
2. Les implémenter
3. Présenter votre travail

---

## 💡 Conseils

1. **Testez régulièrement** : Après chaque fonction complétée, testez dans le navigateur
2. **Console.log** : N'hésitez pas à utiliser console.log() pour déboguer
3. **Travail d'équipe** : Divisez les tâches (un sur la logique, un sur le style)
4. **Git** : Committez régulièrement vos avancées
5. **Créativité** : Personnalisez l'application avec vos idées !

---

## 🐛 Problèmes courants

### L'ingrédient ne s'ajoute pas
- Vérifiez que vous appelez bien `setIngredients`
- Vérifiez la syntaxe du spread operator `[...ingredients, newIngredient]`

### Les recettes ne se filtrent pas
- Vérifiez que `useMemo` retourne bien un tableau
- Vérifiez les comparaisons de chaînes (toLowerCase)

### Le CSS ne s'applique pas
- Vérifiez que le fichier CSS est bien importé
- Vérifiez les noms de classes (sensibles à la casse)
- Ouvrez les DevTools pour inspecter les éléments

---

## 🎉 Bon code !

N'oubliez pas : l'objectif est d'apprendre et de s'amuser. Ne restez pas bloqués, demandez de l'aide !

