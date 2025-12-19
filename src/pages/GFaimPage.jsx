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
    // Indices :
    // - Vérifier que l'ingrédient n'est pas vide avec trim()
    // - Nettoyer avec trim() et toLowerCase()
    // - Vérifier les doublons avec includes()
    // - Ajouter au state avec le spread operator [...]
    
    // VOTRE CODE ICI
  };

  // TODO: Fonction à compléter par les étudiants
  const handleRemoveIngredient = (ingredientToRemove) => {
    // Retirer l'ingrédient de la liste
    // Indice : Utiliser filter() pour créer un nouveau tableau sans cet ingrédient
    
    // VOTRE CODE ICI
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

