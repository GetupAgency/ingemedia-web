# 🔐 Corrections Code JavaScript - Application "G Faim"

**⚠️ CONFIDENTIEL ENSEIGNANT - Ne pas partager avec les étudiants ⚠️**

Ce document contient toutes les corrections du code JavaScript à compléter par les étudiants.

---

## 📂 Fichier 1 : `src/pages/GFaimPage.jsx`

### Fonction `handleAddIngredient(ingredient)`

**Objectif** : Ajouter un ingrédient à la liste en évitant les doublons

```javascript
const handleAddIngredient = (ingredient) => {
  // 1. Vérifier que l'ingrédient n'est pas vide
  if (!ingredient || ingredient.trim() === '') {
    return; // On arrête la fonction si c'est vide
  }
  
  // 2. Nettoyer l'ingrédient (enlever les espaces, mettre en minuscule)
  const cleanedIngredient = ingredient.trim().toLowerCase();
  
  // 3. Vérifier si l'ingrédient existe déjà dans la liste
  // includes() retourne true si l'élément est dans le tableau
  if (ingredients.includes(cleanedIngredient)) {
    alert('Cet ingrédient est déjà dans votre liste !');
    return;
  }
  
  // 4. Ajouter l'ingrédient au state
  // IMPORTANT : On ne modifie JAMAIS directement le state en React
  // On crée un NOUVEAU tableau avec le spread operator (...)
  setIngredients([...ingredients, cleanedIngredient]);
};
```

**Points clés à expliquer** :
- ✅ Validation des données (vérifier que ce n'est pas vide)
- ✅ Nettoyage avec `trim()` et `toLowerCase()`
- ✅ Éviter les doublons avec `includes()`
- ✅ **Immutabilité React** : Ne jamais faire `ingredients.push()`, toujours créer un nouveau tableau
- ✅ Le spread operator `[...]` copie tous les éléments existants

---

### Fonction `handleRemoveIngredient(ingredientToRemove)`

**Objectif** : Retirer un ingrédient de la liste

```javascript
const handleRemoveIngredient = (ingredientToRemove) => {
  // filter() crée un nouveau tableau en gardant seulement les éléments
  // qui respectent la condition (ceux qui sont différents de celui à retirer)
  setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
};
```

**Explication détaillée** :
- `ingredients.filter()` : parcourt tous les ingrédients
- `ing => ing !== ingredientToRemove` : garde seulement ceux qui sont différents
- `setIngredients(...)` : met à jour le state avec le nouveau tableau

**Points clés à expliquer** :
- ✅ `Array.filter()` crée un nouveau tableau (immutabilité)
- ✅ La condition `!==` pour exclure l'élément à retirer
- ✅ Arrow function courte : `ing => condition`

---

## 📂 Fichier 2 : `src/components/GFaim/IngredientInput.jsx`

### Fonction `handleSubmit(e)`

**Objectif** : Valider et soumettre un nouvel ingrédient

```javascript
const handleSubmit = (e) => {
  // 1. Empêcher le rechargement de la page
  e.preventDefault();
  
  // 2. Nettoyer la valeur de l'input
  // trim() enlève les espaces au début et à la fin
  const trimmedValue = inputValue.trim();
  
  // 3. Vérifier que ce n'est pas vide après le trim
  if (trimmedValue === '') {
    return; // On arrête si c'est vide
  }
  
  // 4. Mettre en minuscule pour la cohérence
  // (tomates = Tomates = TOMATES)
  const cleanedValue = trimmedValue.toLowerCase();
  
  // 5. Appeler la fonction du parent pour ajouter l'ingrédient
  // Cette fonction vient des props (onAddIngredient={handleAddIngredient})
  onAddIngredient(cleanedValue);
  
  // 6. Réinitialiser le champ input pour une nouvelle saisie
  setInputValue('');
};
```

**Points clés à expliquer** :
- ✅ `e.preventDefault()` empêche le rechargement de page (comportement par défaut des formulaires)
- ✅ Validation : vérifier après le `trim()`, pas avant
- ✅ Communication parent-enfant : `onAddIngredient` vient des props
- ✅ UX : réinitialiser l'input après la soumission

---

## 📂 Fichier 3 : `src/components/GFaim/RecipeSuggestions.jsx`

### Algorithme de filtrage (dans `useMemo`)

**Objectif** : Filtrer et trier les recettes selon les ingrédients disponibles

```javascript
const suggestedRecipes = useMemo(() => {
  if (ingredients.length === 0) {
    return [];
  }

  // ÉTAPE 1 : Ajouter un score à chaque recette
  // map() transforme chaque recette en ajoutant des infos
  const recipesWithScores = RECIPES_DB.map(recipe => {
    
    // Compter combien d'ingrédients de la recette on possède
    // filter() garde seulement les ingrédients qu'on a
    const matchingIngredients = recipe.ingredients.filter(recipeIng =>
      // some() vérifie si AU MOINS UN ingrédient utilisateur correspond
      ingredients.some(userIng => 
        // On compare en vérifiant si l'un contient l'autre
        recipeIng.toLowerCase().includes(userIng) || 
        userIng.includes(recipeIng.toLowerCase())
      )
    );
    
    // Calculer les statistiques
    const matchingCount = matchingIngredients.length; // Nb d'ingrédients qu'on a
    const totalIngredients = recipe.ingredients.length; // Nb total d'ingrédients
    const missingCount = totalIngredients - matchingCount; // Nb d'ingrédients manquants
    
    // Calculer un score en pourcentage
    const score = (matchingCount / totalIngredients) * 100;
    
    // Retourner la recette avec toutes ses infos d'origine + les nouvelles
    return {
      ...recipe, // Spread operator : copie toutes les propriétés de recipe
      matchingCount,
      missingCount,
      score
    };
  });

  // ÉTAPE 2 : Filtrer pour garder seulement les recettes avec au moins 1 ingrédient
  const filtered = recipesWithScores.filter(recipe => recipe.matchingCount > 0);
  
  // ÉTAPE 3 : Trier par score décroissant (les meilleurs en premier)
  const sorted = filtered.sort((a, b) => {
    // Si les scores sont différents, trier par score
    if (b.score !== a.score) {
      return b.score - a.score; // Ordre décroissant
    }
    // Si les scores sont égaux, mettre en premier celle avec moins d'ingrédients manquants
    return a.missingCount - b.missingCount;
  });
  
  return sorted;
}, [ingredients]);
```

**Points clés à expliquer** :

### Pourquoi `useMemo` ?
- ✅ Évite de recalculer à chaque render
- ✅ Ne recalcule que si `ingredients` change (dépendance)
- ✅ Optimisation des performances

### Méthodes Array utilisées :

**1. `map()`** : Transformer chaque élément
```javascript
[1, 2, 3].map(x => x * 2) // [2, 4, 6]
```

**2. `filter()`** : Garder seulement certains éléments
```javascript
[1, 2, 3, 4].filter(x => x > 2) // [3, 4]
```

**3. `some()`** : Tester si AU MOINS UN élément respecte la condition
```javascript
[1, 2, 3].some(x => x > 2) // true (3 est > 2)
```

**4. `sort()`** : Trier le tableau
```javascript
// Ordre croissant : a - b
[3, 1, 2].sort((a, b) => a - b) // [1, 2, 3]

// Ordre décroissant : b - a
[3, 1, 2].sort((a, b) => b - a) // [3, 2, 1]
```

### Comparaison d'ingrédients :
```javascript
recipeIng.toLowerCase().includes(userIng) || 
userIng.includes(recipeIng.toLowerCase())
```
Permet de matcher :
- "tomates" avec "tomate"
- "pommes de terre" avec "pommes"
- Etc.

---

## 📂 Fichier 4 : `src/components/GFaim/RecipeCard.jsx`

### Fonction `getMissingIngredients()`

**Objectif** : Calculer quels ingrédients manquent à l'utilisateur

```javascript
const getMissingIngredients = () => {
  // filter() garde seulement les ingrédients de la recette
  // que l'utilisateur NE possède PAS
  return recipe.ingredients.filter(recipeIng =>
    // !some() = AUCUN des ingrédients utilisateur ne correspond
    !userIngredients.some(userIng =>
      // On vérifie si l'un contient l'autre (tomates contient tomate)
      recipeIng.toLowerCase().includes(userIng) ||
      userIng.includes(recipeIng.toLowerCase())
    )
  );
};
```

**Explication logique** :
- On parcourt tous les ingrédients de la recette
- Pour chacun, on vérifie si l'utilisateur l'a (avec `some()`)
- Le `!` inverse la logique : on garde ceux qu'il N'a PAS
- Résultat : tableau des ingrédients manquants

---

### Calcul du pourcentage de correspondance

```javascript
const missingIngredients = getMissingIngredients();

// Calculer combien d'ingrédients on a
const matchingCount = recipe.ingredients.length - missingIngredients.length;

// Calculer le pourcentage (et arrondir avec Math.round)
const matchPercentage = Math.round(
  (matchingCount / recipe.ingredients.length) * 100
);
```

**Exemple** :
- Recette a 5 ingrédients
- On en a 3 (donc 2 manquants)
- Pourcentage = (3 / 5) * 100 = 60%

**Points clés** :
- ✅ `Math.round()` pour arrondir (60.5 → 61)
- ✅ Formule : (nombre possédé / nombre total) × 100

---

## 🎓 Conseils Pédagogiques

### 1. Ordre de Complétion Suggéré

**Phase 1** : Fonctions simples (30 min)
1. `handleRemoveIngredient` (le plus simple)
2. `handleAddIngredient` (validation de base)
3. `handleSubmit` (formulaires)

**Phase 2** : Algorithmes (45 min)
4. `getMissingIngredients` (filter + some)
5. Calcul du pourcentage
6. Algorithme de filtrage complet

### 2. Concepts à Souligner

**Immutabilité React** :
```javascript
// ❌ MAUVAIS
ingredients.push(newIngredient);
setIngredients(ingredients);

// ✅ BON
setIngredients([...ingredients, newIngredient]);
```

**Arrow Functions** :
```javascript
// Forme longue
ingredients.filter(function(ing) {
  return ing !== ingredientToRemove;
});

// Forme courte (à privilégier)
ingredients.filter(ing => ing !== ingredientToRemove);
```

**Array Methods** : Expliquer que filter(), map(), some() ne modifient PAS le tableau original

### 3. Debugging

Encourager l'utilisation de `console.log()` :
```javascript
const handleAddIngredient = (ingredient) => {
  console.log('Ingrédient reçu:', ingredient);
  
  const cleaned = ingredient.trim().toLowerCase();
  console.log('Après nettoyage:', cleaned);
  console.log('Liste actuelle:', ingredients);
  
  // ... reste du code
};
```

### 4. Erreurs Courantes

**Erreur 1** : Mutation directe du state
```javascript
// ❌ MAUVAIS
ingredients.push(newIngredient);
```

**Erreur 2** : Oubli de preventDefault
```javascript
// ❌ MAUVAIS
const handleSubmit = (e) => {
  // Oubli de e.preventDefault()
  // La page se recharge !
}
```

**Erreur 3** : Comparaison de casse
```javascript
// ❌ MAUVAIS
if (ingredients.includes(ingredient)) // "Tomates" !== "tomates"

// ✅ BON
const cleaned = ingredient.toLowerCase();
if (ingredients.includes(cleaned))
```

---

## 🧪 Tests à Faire avec les Étudiants

### Test 1 : Ajout d'ingrédients
- Ajouter "tomates" → OK
- Ajouter "Tomates" → Devrait dire "déjà dans la liste"
- Ajouter "  poulet  " → Devrait ajouter "poulet" (sans espaces)
- Ajouter "" → Ne devrait rien faire

### Test 2 : Suppression
- Ajouter 3 ingrédients
- Supprimer le 2ème → Devrait fonctionner
- Les autres restent dans la liste

### Test 3 : Filtrage des recettes
- Ajouter "tomates" → Devrait montrer "Pâtes à la tomate"
- Ajouter "pâtes" → Score devrait augmenter
- Ajouter "poulet" → Devrait montrer "Riz sauté au poulet"

---

## 📊 Version Complète des Fichiers

### `GFaimPage.jsx` (version complète)

```javascript
import React, { useState } from 'react';
import IngredientInput from '../components/GFaim/IngredientInput';
import IngredientList from '../components/GFaim/IngredientList';
import RecipeSuggestions from '../components/GFaim/RecipeSuggestions';
import './GFaimPage.css';

function GFaimPage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleAddIngredient = (ingredient) => {
    if (!ingredient || ingredient.trim() === '') {
      return;
    }
    
    const cleanedIngredient = ingredient.trim().toLowerCase();
    
    if (ingredients.includes(cleanedIngredient)) {
      alert('Cet ingrédient est déjà dans votre liste !');
      return;
    }
    
    setIngredients([...ingredients, cleanedIngredient]);
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="gfaim-page">
      <div className="gfaim-header">
        <h1>🍽️ G Faim</h1>
        <p className="subtitle">Trouve des recettes avec les ingrédients de ton frigo !</p>
      </div>

      <div className="gfaim-container">
        <div className="ingredients-section">
          <h2>Mes Ingrédients</h2>
          <IngredientInput onAddIngredient={handleAddIngredient} />
          <IngredientList 
            ingredients={ingredients} 
            onRemoveIngredient={handleRemoveIngredient} 
          />
        </div>

        <div className="recipes-section">
          <h2>Recettes Suggérées</h2>
          <RecipeSuggestions 
            ingredients={ingredients}
            onSelectRecipe={handleSelectRecipe}
            selectedRecipe={selectedRecipe}
          />
        </div>
      </div>
    </div>
  );
}

export default GFaimPage;
```

---

**Dernière mise à jour : 18/12/2025**

**Note** : Ce document est confidentiel et destiné uniquement à l'enseignant. Les étudiants doivent trouver les solutions par eux-mêmes avec les indices fournis dans le code.



