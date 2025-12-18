# 🔐 Solutions "G Faim" - Guide Enseignant

**⚠️ Ce fichier contient les solutions complètes. Ne pas partager avec les étudiants !**

---

## 📝 Solutions JavaScript

### 1. GFaimPage.jsx

#### handleAddIngredient
```javascript
const handleAddIngredient = (ingredient) => {
  // Vérifier que l'ingrédient n'est pas vide
  if (!ingredient || ingredient.trim() === '') {
    return;
  }
  
  // Nettoyer l'ingrédient
  const cleanedIngredient = ingredient.trim().toLowerCase();
  
  // Éviter les doublons
  if (ingredients.includes(cleanedIngredient)) {
    alert('Cet ingrédient est déjà dans votre liste !');
    return;
  }
  
  // Ajouter l'ingrédient
  setIngredients([...ingredients, cleanedIngredient]);
};
```

#### handleRemoveIngredient
```javascript
const handleRemoveIngredient = (ingredientToRemove) => {
  setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
};
```

#### Bonus : Bouton vider tout
```javascript
const handleClearAll = () => {
  if (window.confirm('Voulez-vous vraiment vider votre liste d\'ingrédients ?')) {
    setIngredients([]);
  }
};

// Dans le JSX de GFaimPage.jsx
{ingredients.length > 0 && (
  <button 
    className="clear-all-button" 
    onClick={handleClearAll}
  >
    🗑️ Vider tout
  </button>
)}
```

---

### 2. IngredientInput.jsx

#### handleSubmit
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Vérifier que l'input n'est pas vide
  const trimmedValue = inputValue.trim();
  if (trimmedValue === '') {
    return;
  }
  
  // Nettoyer et appeler la fonction parent
  const cleanedValue = trimmedValue.toLowerCase();
  onAddIngredient(cleanedValue);
  
  // Réinitialiser l'input
  setInputValue('');
};
```

#### Bonus : Suggestions d'ingrédients
```javascript
const COMMON_INGREDIENTS = [
  'tomates', 'oignons', 'ail', 'poulet', 'bœuf', 'porc',
  'pâtes', 'riz', 'pommes de terre', 'carottes', 'courgettes',
  'fromage', 'œufs', 'lait', 'beurre', 'huile d\'olive',
  'salade', 'champignons', 'poivrons'
];

const [suggestions, setSuggestions] = useState([]);

// Dans handleChange
const handleChange = (e) => {
  const value = e.target.value;
  setInputValue(value);
  
  // Filtrer les suggestions
  if (value.length >= 2) {
    const filtered = COMMON_INGREDIENTS.filter(ing =>
      ing.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5);
    setSuggestions(filtered);
  } else {
    setSuggestions([]);
  }
};

// Dans le JSX
{suggestions.length > 0 && (
  <div className="suggestions">
    {suggestions.map((suggestion, index) => (
      <button
        key={index}
        type="button"
        className="suggestion-item"
        onClick={() => {
          setInputValue(suggestion);
          setSuggestions([]);
        }}
      >
        {suggestion}
      </button>
    ))}
  </div>
)}
```

---

### 3. RecipeSuggestions.jsx

#### Algorithme de filtrage complet
```javascript
const suggestedRecipes = useMemo(() => {
  if (ingredients.length === 0) {
    return [];
  }

  // Mapper chaque recette avec son score
  const recipesWithScores = RECIPES_DB.map(recipe => {
    // Compter les ingrédients qui correspondent
    const matchingIngredients = recipe.ingredients.filter(recipeIng =>
      ingredients.some(userIng => 
        recipeIng.toLowerCase().includes(userIng) || 
        userIng.includes(recipeIng.toLowerCase())
      )
    );
    
    const matchingCount = matchingIngredients.length;
    const totalIngredients = recipe.ingredients.length;
    const missingCount = totalIngredients - matchingCount;
    
    // Calculer un score (pourcentage de correspondance)
    const score = (matchingCount / totalIngredients) * 100;
    
    return {
      ...recipe,
      matchingCount,
      missingCount,
      score
    };
  });

  // Filtrer : garder seulement celles avec au moins 1 ingrédient
  const filtered = recipesWithScores.filter(recipe => recipe.matchingCount > 0);
  
  // Trier par score décroissant, puis par nombre d'ingrédients manquants
  const sorted = filtered.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.missingCount - b.missingCount;
  });
  
  return sorted;
}, [ingredients]);
```

#### Bonus : Ajout de plus de recettes
```javascript
const RECIPES_DB = [
  // ... recettes existantes ...
  {
    id: 6,
    name: "Soupe de légumes",
    ingredients: ["carottes", "pommes de terre", "oignons", "bouillon"],
    difficulty: "facile",
    time: 30,
    image: "🍲",
    vegetarian: true
  },
  {
    id: 7,
    name: "Burger maison",
    ingredients: ["pain", "bœuf", "salade", "tomates", "fromage"],
    difficulty: "moyen",
    time: 20,
    image: "🍔"
  },
  {
    id: 8,
    name: "Curry de légumes",
    ingredients: ["légumes", "lait de coco", "curry", "riz"],
    difficulty: "moyen",
    time: 35,
    image: "🍛",
    vegetarian: true
  },
  {
    id: 9,
    name: "Crêpes",
    ingredients: ["farine", "œufs", "lait", "sucre"],
    difficulty: "facile",
    time: 20,
    image: "🥞"
  },
  {
    id: 10,
    name: "Risotto aux champignons",
    ingredients: ["riz", "champignons", "parmesan", "bouillon", "vin blanc"],
    difficulty: "difficile",
    time: 45,
    image: "🍚"
  }
];
```

---

### 4. RecipeCard.jsx

#### getMissingIngredients
```javascript
const getMissingIngredients = () => {
  return recipe.ingredients.filter(recipeIng =>
    !userIngredients.some(userIng =>
      recipeIng.toLowerCase().includes(userIng) ||
      userIng.includes(recipeIng.toLowerCase())
    )
  );
};
```

#### Calcul du pourcentage
```javascript
const missingIngredients = getMissingIngredients();
const matchingCount = recipe.ingredients.length - missingIngredients.length;
const matchPercentage = Math.round((matchingCount / recipe.ingredients.length) * 100);
```

#### Affichage amélioré dans le JSX
```javascript
<div className="recipe-match">
  <div className="match-bar">
    <div 
      className="match-fill" 
      style={{ width: `${matchPercentage}%` }}
    ></div>
  </div>
  <span className="match-text">{matchPercentage}% de correspondance</span>
</div>

{missingIngredients.length > 0 && (
  <p className="missing-info">
    Il vous manque {missingIngredients.length} ingrédient(s)
  </p>
)}
```

---

## 🎨 Solutions CSS Avancées

### Responsive Design

```css
/* GFaimPage.css */
@media (max-width: 1024px) {
  .gfaim-container {
    grid-template-columns: 1fr;
  }
  
  .ingredients-section {
    order: 1;
  }
  
  .recipes-section {
    order: 2;
  }
}

@media (max-width: 768px) {
  .gfaim-header h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .gfaim-page {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .ingredient-input {
    flex-direction: column;
  }
  
  .add-button {
    width: 100%;
  }
  
  .recipes-grid {
    grid-template-columns: 1fr;
  }
}
```

### Animations

```css
/* IngredientList.css */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}

.ingredient-item {
  animation: slideInFromLeft 0.3s ease-out;
}

.ingredient-item.removing {
  animation: fadeOut 0.3s ease-out forwards;
}

/* RecipeCard.css */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.recipe-card {
  animation: popIn 0.4s ease-out;
  animation-fill-mode: backwards;
}

.recipe-card:nth-child(1) { animation-delay: 0.1s; }
.recipe-card:nth-child(2) { animation-delay: 0.2s; }
.recipe-card:nth-child(3) { animation-delay: 0.3s; }
```

### Barre de progression

```css
/* RecipeCard.css */
.recipe-match {
  margin: 1rem 0;
}

.match-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.match-fill {
  height: 100%;
  background: linear-gradient(90deg, #e74c3c 0%, #f39c12 50%, #27ae60 100%);
  transition: width 0.6s ease-out;
  border-radius: 4px;
}

.match-text {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 600;
}

.missing-info {
  font-size: 0.8rem;
  color: #e74c3c;
  font-style: italic;
  margin-top: 0.5rem;
}
```

---

## 🚀 Fonctionnalités Bonus Implémentées

### 1. Système de favoris avec localStorage

```javascript
// GFaimPage.jsx
const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem('gfaim-favorites');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('gfaim-favorites', JSON.stringify(favorites));
}, [favorites]);

const toggleFavorite = (recipeId) => {
  if (favorites.includes(recipeId)) {
    setFavorites(favorites.filter(id => id !== recipeId));
  } else {
    setFavorites([...favorites, recipeId]);
  }
};

// Dans RecipeCard.jsx
<button 
  className="favorite-button"
  onClick={(e) => {
    e.stopPropagation();
    onToggleFavorite(recipe.id);
  }}
>
  {isFavorite ? '❤️' : '🤍'}
</button>
```

### 2. Filtres

```javascript
// GFaimPage.jsx
const [filters, setFilters] = useState({
  vegetarian: false,
  quick: false,
  easy: false
});

const toggleFilter = (filterName) => {
  setFilters(prev => ({
    ...prev,
    [filterName]: !prev[filterName]
  }));
};

// Dans RecipeSuggestions.jsx, dans useMemo
let filtered = recipesWithScores.filter(recipe => recipe.matchingCount > 0);

// Appliquer les filtres
if (filters.vegetarian) {
  filtered = filtered.filter(r => r.vegetarian);
}
if (filters.quick) {
  filtered = filtered.filter(r => r.time <= 20);
}
if (filters.easy) {
  filtered = filtered.filter(r => r.difficulty === 'facile');
}
```

### 3. Modal de recette complète

```javascript
// RecipeModal.jsx
import React from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <span className="modal-emoji">{recipe.image}</span>
          <h2>{recipe.name}</h2>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3>Ingrédients</h3>
            <ul>
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-section">
            <h3>Instructions</h3>
            <ol>
              <li>Préparer tous les ingrédients</li>
              <li>Suivre les étapes de cuisson</li>
              <li>Servir chaud</li>
              {/* TODO: Ajouter de vraies instructions */}
            </ol>
          </div>
          
          <div className="modal-section">
            <h3>Informations</h3>
            <p>⏱️ Temps : {recipe.time} minutes</p>
            <p>📊 Difficulté : {recipe.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
```

---

## 🎓 Points Pédagogiques à Souligner

### 1. Immutabilité en React
Insister sur l'importance de ne jamais modifier directement le state :
```javascript
// ❌ MAUVAIS
ingredients.push(newIngredient);
setIngredients(ingredients);

// ✅ BON
setIngredients([...ingredients, newIngredient]);
```

### 2. useMemo pour la performance
Expliquer pourquoi on utilise useMemo pour le filtrage :
- Évite de recalculer à chaque render
- Dépendances : ne recalcule que si `ingredients` change

### 3. Événements et Propagation
```javascript
onClick={(e) => {
  e.stopPropagation(); // Empêche la propagation
  // ...
}}
```

### 4. Validation des données utilisateur
Toujours valider et nettoyer les inputs :
- trim() pour enlever les espaces
- toLowerCase() pour la cohérence
- Vérifier les valeurs vides

---

## 📊 Critères d'Évaluation Suggérés

### Fonctionnalités (40%)
- ✅ Ajout d'ingrédients fonctionne (10%)
- ✅ Suppression d'ingrédients fonctionne (10%)
- ✅ Filtrage des recettes fonctionne (15%)
- ✅ Pas de bugs majeurs (5%)

### Code (30%)
- ✅ Code propre et lisible (10%)
- ✅ Bonne utilisation des hooks React (10%)
- ✅ Gestion correcte du state (10%)

### Design/UX (20%)
- ✅ Interface responsive (10%)
- ✅ Bon choix de couleurs et typographie (5%)
- ✅ Animations et transitions (5%)

### Bonus (10%)
- ✅ Fonctionnalités supplémentaires (5%)
- ✅ Créativité et originalité (5%)

---

## 🐛 Problèmes Courants et Solutions

### 1. "Les ingrédients ne s'affichent pas"
**Cause** : Oubli du spread operator
**Solution** : `setIngredients([...ingredients, newIngredient])`

### 2. "Rien ne se passe au clic sur Ajouter"
**Cause** : Oubli de `e.preventDefault()`
**Solution** : Ajouter au début de handleSubmit

### 3. "Les recettes ne se filtrent pas"
**Cause** : Problème de comparaison de chaînes
**Solution** : Utiliser toLowerCase() et includes()

### 4. "Le CSS ne s'applique pas"
**Cause** : Fichier CSS non importé
**Solution** : Vérifier les imports en haut des fichiers JSX

---

## 💡 Astuces pour Guider les Étudiants

### Debugging
Encourager l'utilisation de :
```javascript
console.log('ingredients:', ingredients);
console.log('recipe:', recipe);
```

### React DevTools
Montrer comment inspecter le state avec React DevTools

### Approche Progressive
1. D'abord faire fonctionner la logique
2. Ensuite améliorer le style
3. Enfin ajouter les bonus

### Pair Programming
Encourager le travail en binôme :
- Un au clavier (driver)
- Un qui guide (navigator)
- Échanger régulièrement

---

## 📈 Extensions Possibles

Si certains étudiants terminent en avance :

1. **API externe** : Intégrer une vraie API de recettes (Spoonacular, Edamam)
2. **Base de données** : Utiliser Firebase pour sauvegarder les recettes
3. **Partage** : Permettre de partager une recette par lien
4. **PWA** : Transformer en Progressive Web App
5. **Tests** : Écrire des tests unitaires avec Vitest

---

Bon courage pour le cours ! 🎉

