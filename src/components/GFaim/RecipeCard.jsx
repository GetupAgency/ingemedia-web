import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, userIngredients, isSelected, onSelect }) {
  
  // TODO: Calculer les ingrédients manquants
  const getMissingIngredients = () => {
    // Comparer recipe.ingredients avec userIngredients
    // Retourner la liste des ingrédients manquants
    // Indice : Utiliser filter() et some()
    
    // VOTRE CODE ICI
    return [];
  };

  const missingIngredients = getMissingIngredients();
  const matchPercentage = 0; // TODO: Calculer le pourcentage de correspondance

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

