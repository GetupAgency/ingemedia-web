import React from 'react';
import { modulesData } from '../data';
import ModuleCard from '../components/ModuleCard';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">
          Bienvenue dans ta formation web 🚀
        </h1>
        <p className="hero-subtitle">
          De zéro à développeur web : une progression structurée et bienveillante pour maîtriser HTML, CSS, JavaScript et React.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Modules</span>
          </div>
          <div className="stat">
            <span className="stat-number">47</span>
            <span className="stat-label">Exercices</span>
          </div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Heures</span>
          </div>
        </div>
      </section>

      <section className="modules-section">
        <h2 className="section-title">Les modules de formation</h2>
        <p className="section-description">
          Chaque module est conçu pour te faire progresser pas à pas, du plus simple au plus avancé.
          Pas de panique, on commence vraiment depuis le début !
        </p>
        <div className="modules-grid">
          {modulesData.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h3>📚 Comment ça marche ?</h3>
          <ul>
            <li>Choisis un module (commence par HTML si tu débutes)</li>
            <li>Lis la consigne de chaque exercice</li>
            <li>Écris ton code directement dans l'éditeur</li>
            <li>Vois le résultat en temps réel</li>
            <li>Valide et passe à l'exercice suivant</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>💡 Conseils pour réussir</h3>
          <ul>
            <li>Prends ton temps, il n'y a pas de course</li>
            <li>Expérimente, casse des trucs, répare-les</li>
            <li>Consulte la doc MDN quand tu bloques</li>
            <li>Fais les exercices dans l'ordre</li>
            <li>N'hésite pas à demander de l'aide</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

