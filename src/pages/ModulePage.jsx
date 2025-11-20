import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { modulesData, getExercicesByModule } from '../data';
import ExerciceItem from '../components/ExerciceItem';
import './ModulePage.css';

function ModulePage() {
  const { moduleId } = useParams();
  const module = modulesData.find(m => m.id === moduleId);
  const exercices = getExercicesByModule(moduleId);

  if (!module) {
    return (
      <div className="module-page">
        <div className="error-message">
          <h2>Module non trouvé</h2>
          <Link to="/">← Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const exercicesParDifficulte = {
    1: exercices.filter(ex => ex.difficulte === 1),
    2: exercices.filter(ex => ex.difficulte === 2),
    3: exercices.filter(ex => ex.difficulte === 3),
    4: exercices.filter(ex => ex.difficulte === 4),
    5: exercices.filter(ex => ex.difficulte === 5),
  };

  const niveauxLabels = {
    1: 'Débutant - Premiers pas',
    2: 'Débutant - En confiance',
    3: 'Intermédiaire - Ça se corse',
    4: 'Intermédiaire+ - Presque un pro',
    5: 'Avancé - Le boss final'
  };

  return (
    <div className="module-page" style={{ '--module-color': module.couleur }}>
      <header className="module-header">
        <div className="module-header-content">
          <span className="module-icon-large">{module.icone}</span>
          <div>
            <h1 className="module-page-title">{module.titre}</h1>
            <p className="module-page-subtitle">{module.sousTitre}</p>
          </div>
        </div>
        <p className="module-page-description">{module.description}</p>
      </header>

      {/* Section Introduction (si disponible) */}
      {module.introduction && (
        <section className="module-introduction">
          <h2 className="section-title">📖 Introduction : Pourquoi apprendre HTML ?</h2>
          
          <div className="intro-grid">
            <div className="intro-card">
              <h3>🕰️ Un peu d'histoire</h3>
              <p>{module.introduction.histoire}</p>
            </div>

            <div className="intro-card">
              <h3>🤔 Pourquoi HTML ?</h3>
              <p>{module.introduction.pourquoi}</p>
            </div>

            <div className="intro-card">
              <h3>🏠 La métaphore de la maison</h3>
              <p>{module.introduction.metaphore}</p>
            </div>

            <div className="intro-card">
              <h3>🚀 L'évolution du langage</h3>
              <p>{module.introduction.evolution}</p>
            </div>

            <div className="intro-card highlight">
              <h3>🌍 HTML dans le monde réel</h3>
              <p>{module.introduction.dansMonde}</p>
            </div>
          </div>
        </section>
      )}

      <section className="module-info-section">
        <div className="info-box">
          <h3>🎯 Objectifs pédagogiques</h3>
          <ul className="objectifs-list">
            {module.objectifs.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
        <div className="info-box">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <div className="stat-number">{exercices.length}</div>
                <div className="stat-label">Exercices</div>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-number">{module.dureeEstimee}</div>
                <div className="stat-label">Durée estimée</div>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">🔧</div>
              <div className="stat-content">
                <div className="stat-number">{module.prerequis}</div>
                <div className="stat-label">Prérequis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exercices-section">
        <h2 className="section-title">Les exercices</h2>
        {Object.entries(exercicesParDifficulte).map(([niveau, exos]) => {
          if (exos.length === 0) return null;
          return (
            <div key={niveau} className="difficulte-group">
              <h3 className="difficulte-title">
                <span className="difficulte-badge" data-niveau={niveau}>
                  Niveau {niveau}
                </span>
                {niveauxLabels[niveau]}
              </h3>
              <div className="exercices-list">
                {exos.map((exercice, index) => (
                  <ExerciceItem 
                    key={exercice.id} 
                    exercice={exercice} 
                    index={index}
                    moduleColor={module.couleur}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default ModulePage;

