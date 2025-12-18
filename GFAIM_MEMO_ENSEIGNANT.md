# 📝 Mémo Rapide - Application "G Faim"

## ✅ Ce qui est prêt

### Structure créée
- ✅ Page principale : `src/pages/GFaimPage.jsx`
- ✅ 4 composants dans `src/components/GFaim/`
  - `IngredientInput.jsx` - Saisie des ingrédients
  - `IngredientList.jsx` - Affichage de la liste
  - `RecipeSuggestions.jsx` - Conteneur des recettes
  - `RecipeCard.jsx` - Carte de recette
- ✅ Tous les fichiers CSS correspondants
- ✅ Route `/gfaim` intégrée dans App.jsx
- ✅ Lien dans le Header (🍽️ G Faim)

### Données de base
- ✅ 5 recettes d'exemple dans `RecipeSuggestions.jsx`
- ✅ Structure complète de l'application

---

## 🎯 Ce que les étudiants doivent compléter

### Niveau 1 - Obligatoire (1h-1h30)

1. **GFaimPage.jsx** - 2 fonctions
   - `handleAddIngredient()` : Ajouter un ingrédient sans doublon
   - `handleRemoveIngredient()` : Retirer un ingrédient

2. **IngredientInput.jsx** - 1 fonction
   - `handleSubmit()` : Valider et soumettre l'input

3. **RecipeSuggestions.jsx** - 1 algorithme
   - Filtrage et tri des recettes selon les ingrédients

4. **RecipeCard.jsx** - 1 fonction
   - `getMissingIngredients()` : Calculer les ingrédients manquants

### Niveau 2 - Style (1h-1h30)
- Améliorer les couleurs et la typographie
- Rendre responsive (mobile-first)
- Ajouter des animations
- Peaufiner l'UX

### Niveau 3 - Bonus (facultatif)
- Système de favoris
- Filtres (végétarien, rapide, facile)
- Modal de recette détaillée
- Plus de recettes

---

## 🚀 Déroulement Suggéré du Cours

### Phase 1 : Présentation (15 min)
1. Montrer l'application finale (avec les solutions)
2. Expliquer l'objectif pédagogique
3. Faire un tour de la structure du code
4. Distribuer le fichier `PROJET_GFAIM.md`

### Phase 2 : Logique JavaScript (1h-1h15)
**En live coding avec les étudiants :**

#### Étape 1 : Ajout d'ingrédients (20 min)
```javascript
// Dans GFaimPage.jsx
const handleAddIngredient = (ingredient) => {
  if (!ingredient || ingredient.trim() === '') return;
  const cleaned = ingredient.trim().toLowerCase();
  if (ingredients.includes(cleaned)) {
    alert('Déjà dans la liste !');
    return;
  }
  setIngredients([...ingredients, cleaned]);
};
```
**Points à souligner :**
- Validation des données
- Immutabilité React (spread operator)
- trim() et toLowerCase()

#### Étape 2 : Suppression (10 min)
```javascript
const handleRemoveIngredient = (ingredientToRemove) => {
  setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
};
```
**Points à souligner :**
- Array.filter()
- Immutabilité

#### Étape 3 : Soumission du formulaire (15 min)
```javascript
// Dans IngredientInput.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const trimmed = inputValue.trim();
  if (trimmed === '') return;
  onAddIngredient(trimmed.toLowerCase());
  setInputValue('');
};
```
**Points à souligner :**
- e.preventDefault()
- Communication parent-enfant (props)

**🧪 Test : Ajouter/retirer des ingrédients**

#### Étape 4 : Filtrage des recettes (25 min)
```javascript
// Dans RecipeSuggestions.jsx
const suggestedRecipes = useMemo(() => {
  if (ingredients.length === 0) return [];
  
  const recipesWithScores = RECIPES_DB.map(recipe => {
    const matchingIngredients = recipe.ingredients.filter(recipeIng =>
      ingredients.some(userIng => 
        recipeIng.toLowerCase().includes(userIng)
      )
    );
    
    return {
      ...recipe,
      score: matchingIngredients.length,
      matchingCount: matchingIngredients.length,
      missingCount: recipe.ingredients.length - matchingIngredients.length
    };
  });
  
  return recipesWithScores
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);
}, [ingredients]);
```

**Points à souligner :**
- useMemo et performance
- Array.map() pour transformer
- Array.filter() et Array.some()
- Array.sort() avec fonction de comparaison

**🧪 Test : Ajouter "tomates", "pâtes", "poulet"**

### Phase 3 : Style CSS (1h-1h30)

#### Démo 1 : Responsive (20 min)
Montrer comment utiliser les media queries :
```css
@media (max-width: 768px) {
  .gfaim-container {
    grid-template-columns: 1fr;
  }
}
```

#### Démo 2 : Animations (20 min)
```css
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.ingredient-item {
  animation: slideIn 0.3s ease-out;
}
```

#### Exercice pratique (30-40 min)
**Laisser les étudiants :**
- Choisir leur palette de couleurs
- Améliorer les hover effects
- Rendre responsive
- Ajouter leurs propres animations

### Phase 4 : Bonus (30 min - facultatif)

#### Option 1 : Système de favoris
- Introduire localStorage
- useState avec initialisation

#### Option 2 : Ajouter plus de recettes
- Brainstorming collectif
- Chacun ajoute 2-3 recettes

#### Option 3 : Filtres
- Ajouter des propriétés aux recettes (vegetarian, quick)
- Créer des boutons de filtre

---

## 💡 Conseils Pédagogiques

### Pour la logique JavaScript
1. **Faire en live coding** : Ne pas leur donner directement le code
2. **Questionner** : "Comment vérifier si un élément existe dans un tableau ?"
3. **Laisser chercher** : Donner 2-3 minutes de recherche autonome
4. **Debugger ensemble** : Utiliser console.log() pour comprendre

### Pour le CSS
1. **Montrer les DevTools** : Inspecter les éléments
2. **Expérimenter** : Changer les valeurs en direct
3. **Encourager la créativité** : Pas de "bonne" réponse pour le style

### Gestion du temps
- ⏰ **1h logique** minimum (c'est le plus important)
- ⏰ **1h style** (peut être réduit si manque de temps)
- ⏰ **30min bonus** (à sauter si nécessaire)

### Si en avance
- Ajouter plus de recettes ensemble
- Créer un système de catégories
- Intégrer des images réelles

### Si en retard
- Se concentrer sur l'ajout/suppression d'ingrédients
- Filtrage basique des recettes
- Style minimal acceptable

---

## 🗂️ Fichiers de Référence

### Pour les étudiants
📘 `PROJET_GFAIM.md` - Guide complet avec explications et ressources

### Pour vous (ne pas partager)
🔐 `GFAIM_SOLUTIONS_ENSEIGNANT.md` - Solutions complètes et bonus avancés

### Ce fichier
📝 `GFAIM_MEMO_ENSEIGNANT.md` - Mémo rapide pour le déroulement du cours

---

## ✅ Checklist Avant le Cours

- [ ] Lancer `npm run dev` pour vérifier que tout fonctionne
- [ ] Tester l'ajout/suppression d'ingrédients avec les solutions
- [ ] Vérifier que la route `/gfaim` fonctionne
- [ ] Préparer un exemple de rendu final (avec vos solutions)
- [ ] Avoir `PROJET_GFAIM.md` prêt à partager
- [ ] Avoir les solutions sous la main (ne pas projeter !)
- [ ] Préparer quelques recettes supplémentaires au cas où

---

## 🎯 Objectifs Pédagogiques Finaux

À la fin du cours, les étudiants doivent être capables de :
- ✅ Gérer le state avec useState
- ✅ Utiliser useMemo pour optimiser
- ✅ Manipuler des tableaux (map, filter, sort)
- ✅ Valider et nettoyer des inputs utilisateur
- ✅ Créer une interface responsive
- ✅ Ajouter des animations CSS
- ✅ Débugger avec console.log et React DevTools

---

## 🚨 Points d'Attention

### Erreurs Courantes
1. **Oubli du spread operator** : `[...ingredients, new]`
2. **Oubli de e.preventDefault()** dans les formulaires
3. **Mutation directe du state** : Insister sur l'immutabilité
4. **Comparaison de strings** : Penser au toLowerCase()

### Questions Fréquentes
**Q: Pourquoi useMemo ?**
R: Performance - évite de recalculer à chaque render

**Q: Pourquoi toLowerCase() ?**
R: Cohérence - "Tomates" = "tomates"

**Q: Comment débugger ?**
R: console.log() et React DevTools

---

## 📊 Évaluation (si nécessaire)

### Barème suggéré
- Fonctionnalités de base : 40%
  - Ajout/suppression : 20%
  - Filtrage : 20%
- Code propre : 30%
- Design/UX : 20%
- Bonus/créativité : 10%

### Critères de réussite minimum
- ✅ Pouvoir ajouter des ingrédients
- ✅ Pouvoir les retirer
- ✅ Voir au moins quelques recettes filtrées
- ✅ Interface utilisable (lisible, pas cassée)

---

## 📞 En Cas de Problème

### L'application ne se lance pas
```bash
npm install
npm run dev
```

### Les composants ne s'affichent pas
- Vérifier les imports
- Vérifier la route dans App.jsx
- Vérifier la console pour les erreurs

### Le CSS ne fonctionne pas
- Vérifier que les .css sont importés
- Vérifier les noms de classes

---

## 🎉 Message de Fin de Cours

Bravo à tous ! Vous avez créé une vraie application React fonctionnelle avec :
- Gestion d'état complexe
- Algorithmes de filtrage
- Interface responsive
- Composants réutilisables

Cette application peut être :
- 📱 Déployée sur Vercel/Netlify
- 📝 Ajoutée à votre portfolio
- 🚀 Étendue avec des fonctionnalités supplémentaires
- 💼 Présentée en entretien d'embauche

**Félicitations et bon appétit ! 🍽️**

---

*Dernière mise à jour : Décembre 2025*

