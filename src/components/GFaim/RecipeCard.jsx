import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, userIngredients, isSelected, onSelect }) {
  
  // TODO: Calculer les ingrédients manquants
  const getMissingIngredients = () => {
    // Comparer recipe.ingredients avec userIngredients
    // Retourner la liste des ingrédients manquants
    // VOTRE CODE ICI
    return [];
    
    /* CORRECTION COMMENTÉE :
    
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
    
    */
  };

  const missingIngredients = getMissingIngredients();
  const matchPercentage = 0; // TODO: Calculer le pourcentage de correspondance
  
  /* CORRECTION COMMENTÉE :
  
  // Calculer combien d'ingrédients on a
  const matchingCount = recipe.ingredients.length - missingIngredients.length;
  
  // Calculer le pourcentage (et arrondir avec Math.round)
  const matchPercentage = Math.round(
    (matchingCount / recipe.ingredients.length) * 100
  );
  
  */

  return (
    <div 
      className={`recipe-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="recipe-image">
        <span className="emoji-image">{recipe.image}</span>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-name">{recipe.name}</h3>
        
        <div className="recipe-info">
          <span className="recipe-difficulty">
            {/* TODO: Afficher des étoiles ou un badge selon la difficulté */}
            {recipe.difficulty}
          </span>
          <span className="recipe-time">
            ⏱️ {recipe.time} min
          </span>
        </div>

        <div className="recipe-ingredients">
          <p className="ingredients-title">Ingrédients :</p>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ing, index) => (
              <li 
                key={index}
                className={userIngredients.includes(ing) ? 'has-ingredient' : 'missing-ingredient'}
              >
                {ing}
                {userIngredients.includes(ing) ? ' ✅' : ' ❌'}
              </li>
            ))}
          </ul>
        </div>

        {/* TODO: Afficher le nombre d'ingrédients manquants */}
        {/* TODO: Ajouter un bouton "Favoris" */}
        {/* TODO: Afficher la recette complète au clic */}
      </div>
    </div>
  );
}

export default RecipeCard;

