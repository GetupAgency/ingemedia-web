import React, { useState } from 'react';
import './IngredientInput.css';

function IngredientInput({ onAddIngredient }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Compléter la validation
    // - Vérifier que l'input n'est pas vide
    // - Nettoyer l'input (trim, lowercase)
    // - Appeler onAddIngredient
    // - Réinitialiser l'input
    
    // VOTRE CODE ICI
  };

  return (
    <form className="ingredient-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ex: tomates, poulet, riz..."
        className="ingredient-input-field"
      />
      <button type="submit" className="add-button">
        ➕ Ajouter
      </button>
      
      {/* TODO: Ajouter une liste de suggestions d'ingrédients courants */}
    </form>
  );
}

export default IngredientInput;

