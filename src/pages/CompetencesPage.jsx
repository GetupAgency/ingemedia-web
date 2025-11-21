import React from 'react';
import { hardSkills, softSkills } from '../data/competencesData';
import './CompetencesPage.css';

function CompetencesPage() {
  return (
    <div className="competences-page">
      <header className="page-header">
        <h1>💼 Compétences du Développeur Web</h1>
        <p className="page-subtitle">
          Le guide complet des hard skills techniques et soft skills humaines pour réussir dans le développement web moderne.
        </p>
      </header>

      {/* Hard Skills */}
      <section className="skills-section">
        <div className="section-intro">
          <h2>🛠️ Hard Skills - Compétences Techniques</h2>
          <p>
            Les compétences techniques que tu vas acquérir tout au long de ta formation. 
            Chaque compétence est classée par niveau d'importance : <span className="badge-essentiel">Essentiel</span>, 
            <span className="badge-important">Important</span>, <span className="badge-utile">Utile</span>.
          </p>
        </div>

        <div className="skills-grid">
          {hardSkills.map((category) => (
            <div key={category.id} className="skill-category-card">
              <h3 className="category-title">{category.categorie}</h3>
              <div className="competences-list">
                {category.competences.map((comp, index) => (
                  <div key={index} className="competence-item">
                    <div className="competence-header">
                      <span className="competence-nom">{comp.nom}</span>
                      <span className={`niveau-badge niveau-${comp.niveau.toLowerCase()}`}>
                        {comp.niveau}
                      </span>
                    </div>
                    <p className="competence-description">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="skills-section soft-skills-section">
        <div className="section-intro">
          <h2>🧠 Soft Skills - Compétences Humaines</h2>
          <p>
            Les compétences comportementales et relationnelles sont tout aussi importantes que les compétences techniques. 
            Un bon développeur ne code pas seulement bien, il communique, collabore et s'adapte efficacement.
          </p>
        </div>

        <div className="skills-grid">
          {softSkills.map((category) => (
            <div key={category.id} className="skill-category-card soft">
              <h3 className="category-title">{category.categorie}</h3>
              <div className="competences-list">
                {category.competences.map((comp, index) => (
                  <div key={index} className="competence-item soft">
                    <div className="competence-header">
                      <span className="competence-nom">{comp.nom}</span>
                    </div>
                    <p className="competence-description">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h3>🚀 Prêt à développer tes compétences ?</h3>
          <p>
            Ces compétences s'acquièrent progressivement avec la pratique, les projets et l'expérience. 
            Ne te décourage pas si tout ne vient pas tout de suite. Chaque développeur senior a commencé par être débutant !
          </p>
          <div className="cta-stats">
            <div className="stat">
              <span className="stat-number">{hardSkills.reduce((acc, cat) => acc + cat.competences.length, 0)}</span>
              <span className="stat-label">Hard Skills</span>
            </div>
            <div className="stat">
              <span className="stat-number">{softSkills.reduce((acc, cat) => acc + cat.competences.length, 0)}</span>
              <span className="stat-label">Soft Skills</span>
            </div>
            <div className="stat">
              <span className="stat-number">{hardSkills.length + softSkills.length}</span>
              <span className="stat-label">Catégories</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompetencesPage;

