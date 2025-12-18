import React, { useMemo } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeSuggestions.css';

// Base de données de recettes simplifiée
const RECIPES_DB = [
  {
    id: 1,
    name: "Pâtes à la tomate",
    ingredients: ["pâtes", "tomates", "ail", "huile d'olive"],
    difficulty: "facile",
    time: 15,
    image: "🍝"
  },
  {
    id: 2,
    name: "Omelette",
    ingredients: ["œufs", "fromage", "sel", "poivre"],
    difficulty: "facile",
    time: 10,
    image: "🍳"
  },
  {
    id: 3,
    name: "Riz sauté au poulet",
    ingredients: ["riz", "poulet", "légumes", "sauce soja"],
    difficulty: "moyen",
    time: 25,
    image: "🍛"
  },
  {
    id: 4,
    name: "Salade César",
    ingredients: ["salade", "poulet", "parmesan", "croûtons"],
    difficulty: "facile",
    time: 15,
    image: "🥗"
  },
  {
    id: 5,
    name: "Pizza maison",
    ingredients: ["farine", "tomates", "fromage", "levure"],
    difficulty: "moyen",
    time: 40,
    image: "🍕"
  }
  // TODO: Ajouter plus de recettes !
];

function RecipeSuggestions({ ingredients, onSelectRecipe, selectedRecipe }) {
  
  // TODO: Compléter l'algorithme de filtrage
  const suggestedRecipes = useMemo(() => {
    if (ingredients.length === 0) {
      return [];
    }

    // Filtrer les recettes qui contiennent au moins un des ingrédients
    // Calculer un score de correspondance
    // Trier par score décroissant
    
    // VOTRE CODE ICI
    return RECIPES_DB; // Temporaire : retourne toutes les recettes
    
    /* CORRECTION COMMENTÉE :
    
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
    
    */
  }, [ingredients]);

  if (ingredients.length === 0) {
    return (
      <div className="no-recipes">
        <p>👨‍🍳 Ajoute des ingrédients pour voir des recettes !</p>
      </div>
    );
  }

  if (suggestedRecipes.length === 0) {
    return (
      <div className="no-recipes">
        <p>😔 Aucune recette trouvée avec ces ingrédients</p>
        <p className="help-text">Essaie d'ajouter d'autres ingrédients !</p>
      </div>
    );
  }

  return (
    <div className="recipe-suggestions">
      <p className="recipes-count">
        {suggestedRecipes.length} recette(s) trouvée(s)
        {/* TODO: Afficher le nombre d'ingrédients manquants par recette */}
      </p>
      
      <div className="recipes-grid">
        {suggestedRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            userIngredients={ingredients}
            isSelected={selectedRecipe?.id === recipe.id}
            onSelect={() => onSelectRecipe(recipe)}
          />
        ))}
      </div>

      {/* TODO: Ajouter une pagination si beaucoup de recettes */}
    </div>
  );
}

export default RecipeSuggestions;

