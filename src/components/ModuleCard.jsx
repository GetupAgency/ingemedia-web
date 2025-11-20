import React from 'react';
import { Link } from 'react-router-dom';
import './ModuleCard.css';

function ModuleCard({ module }) {
  return (
    <Link to={`/module/${module.id}`} className="module-card" style={{ '--module-color': module.couleur }}>
      <div className="module-card-header">
        <span className="module-icon">{module.icone}</span>
        <div className="module-badge">{module.nombreExercices} exercices</div>
      </div>
      <h3 className="module-title">{module.titre}</h3>
      <p className="module-subtitle">{module.sousTitre}</p>
      <p className="module-description">{module.description}</p>
      
      <div className="module-meta">
        <div className="meta-item">
          <span className="meta-label">Durée estimée</span>
          <span className="meta-value">{module.dureeEstimee}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Prérequis</span>
          <span className="meta-value">{module.prerequis}</span>
        </div>
      </div>

      <div className="module-card-footer">
        <span className="start-btn">
          Commencer →
        </span>
      </div>
    </Link>
  );
}

export default ModuleCard;

