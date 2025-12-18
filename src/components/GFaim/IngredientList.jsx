import React from 'react';
import './IngredientList.css';

function IngredientList({ ingredients, onRemoveIngredient }) {
  
  // TODO: Gérer le cas où il n'y a pas d'ingrédients
  if (ingredients.length === 0) {
    return (
      <div className="no-ingredients">
        <p>🥗 Aucun ingrédient pour le moment</p>
        <p className="help-text">Ajoute des ingrédients pour découvrir des recettes !</p>
      </div>
    );
  }

  return (
    <div className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-item">
          <span className="ingredient-name">{ingredient}</span>
          <button 
            className="remove-button"
            onClick={() => onRemoveIngredient(ingredient)}
            title="Retirer cet ingrédient"
          >
            ❌
          </button>
        </div>
      ))}
      
      {/* TODO: Ajouter un compteur d'ingrédients */}
      {/* TODO: Ajouter une animation lors de l'ajout/suppression */}
    </div>
  );
}

export default IngredientList;

