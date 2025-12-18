import React, { useState } from 'react';
import IngredientInput from '../components/GFaim/IngredientInput';
import IngredientList from '../components/GFaim/IngredientList';
import RecipeSuggestions from '../components/GFaim/RecipeSuggestions';
import './GFaimPage.css';

function GFaimPage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // TODO: Fonction à compléter par les étudiants
  const handleAddIngredient = (ingredient) => {
    // Ajouter l'ingrédient à la liste (éviter les doublons)
    // VOTRE CODE ICI
    
    /* CORRECTION COMMENTÉE :
    
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
    
    */
  };

  // TODO: Fonction à compléter par les étudiants
  const handleRemoveIngredient = (ingredientToRemove) => {
    // Retirer l'ingrédient de la liste
    // VOTRE CODE ICI
    
    /* CORRECTION COMMENTÉE :
    
    // filter() crée un nouveau tableau en gardant seulement les éléments
    // qui respectent la condition (ceux qui sont différents de celui à retirer)
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
    
    // Explication détaillée :
    // - ingredients.filter() : parcourt tous les ingrédients
    // - ing => ing !== ingredientToRemove : garde seulement ceux qui sont différents
    // - setIngredients(...) : met à jour le state avec le nouveau tableau
    
    */
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
        {/* Section gauche : Ingrédients */}
        <div className="ingredients-section">
          <h2>Mes Ingrédients</h2>
          <IngredientInput onAddIngredient={handleAddIngredient} />
          <IngredientList 
            ingredients={ingredients} 
            onRemoveIngredient={handleRemoveIngredient} 
          />
          
          {/* TODO: Ajouter un bouton pour vider tous les ingrédients */}
        </div>

        {/* Section droite : Recettes */}
        <div className="recipes-section">
          <h2>Recettes Suggérées</h2>
          <RecipeSuggestions 
            ingredients={ingredients}
            onSelectRecipe={handleSelectRecipe}
            selectedRecipe={selectedRecipe}
          />
        </div>
      </div>

      {/* TODO: Section bonus à ajouter par les étudiants */}
      {/* - Afficher les statistiques (nombre d'ingrédients, de recettes) */}
      {/* - Ajouter un système de favoris */}
      {/* - Ajouter des filtres (végétarien, rapide, etc.) */}
    </div>
  );
}

export default GFaimPage;

