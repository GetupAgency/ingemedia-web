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
    
    /* CORRECTION COMMENTÉE :
    
    // 1. e.preventDefault() empêche le rechargement de la page
    // (c'est déjà fait au-dessus !)
    
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
    
    */
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

