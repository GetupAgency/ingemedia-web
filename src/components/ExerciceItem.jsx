import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciceItem.css';

function ExerciceItem({ exercice, index, moduleColor }) {
  const getDifficultyStars = (difficulte) => {
    return '★'.repeat(difficulte) + '☆'.repeat(5 - difficulte);
  };

  return (
    <Link 
      to={`/exercice/${exercice.id}`} 
      className="exercice-item"
      style={{ '--module-color': moduleColor }}
    >
      <div className="exercice-number">#{index + 1}</div>
      <div className="exercice-content">
        <h4 className="exercice-title">{exercice.titre}</h4>
        <p className="exercice-preview">{exercice.consigne.substring(0, 120)}...</p>
      </div>
      <div className="exercice-meta">
        <div className="exercice-difficulty">
          <span className="difficulty-stars">{getDifficultyStars(exercice.difficulte)}</span>
        </div>
        <div className="exercice-type-badge">
          {exercice.type}
        </div>
      </div>
      <div className="exercice-arrow">→</div>
    </Link>
  );
}

export default ExerciceItem;

