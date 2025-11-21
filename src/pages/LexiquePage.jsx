import React, { useState, useMemo } from 'react';
import { lexique } from '../data/lexiqueData';
import './LexiquePage.css';

function LexiquePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('Tous');

  // Groupe les termes par lettre
  const termesByLetter = useMemo(() => {
    const grouped = {};
    lexique.forEach(item => {
      const firstLetter = item.terme.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(item);
    });
    return grouped;
  }, []);

  const letters = Object.keys(termesByLetter).sort();

  // Filtre les termes selon la recherche et la lettre sélectionnée
  const filteredTermes = useMemo(() => {
    return lexique.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.terme.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLetter = selectedLetter === 'Tous' || 
        item.terme.charAt(0).toUpperCase() === selectedLetter;
      
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, selectedLetter]);

  return (
    <div className="lexique-page">
      <header className="page-header">
        <h1>📖 Lexique du Développement Web</h1>
        <p className="page-subtitle">
          Plus de 100 termes essentiels expliqués simplement. Ton dictionnaire de survie pour comprendre le jargon du dev web.
        </p>
      </header>

      {/* Barre de recherche */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Rechercher un terme ou un concept..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="clear-btn">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Alphabet filter */}
      <div className="alphabet-filter">
        <button
          className={`letter-btn ${selectedLetter === 'Tous' ? 'active' : ''}`}
          onClick={() => setSelectedLetter('Tous')}
        >
          Tous
        </button>
        {letters.map(letter => (
          <button
            key={letter}
            className={`letter-btn ${selectedLetter === letter ? 'active' : ''}`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Statistiques */}
      <div className="stats-bar">
        <span className="stat-item">
          📚 {filteredTermes.length} terme{filteredTermes.length > 1 ? 's' : ''} trouvé{filteredTermes.length > 1 ? 's' : ''}
        </span>
        {searchTerm && (
          <span className="stat-item search-active">
            🔍 Recherche active : "{searchTerm}"
          </span>
        )}
      </div>

      {/* Liste des termes */}
      <div className="termes-list">
        {filteredTermes.length > 0 ? (
          filteredTermes.map((item, index) => (
            <div key={index} className="terme-card">
              <div className="terme-header">
                <h3 className="terme-titre">{item.terme}</h3>
                <span className="terme-letter">{item.terme.charAt(0).toUpperCase()}</span>
              </div>
              <p className="terme-definition">{item.definition}</p>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>Aucun résultat trouvé</h3>
            <p>Essaie avec un autre terme ou réinitialise la recherche.</p>
            <button onClick={() => { setSearchTerm(''); setSelectedLetter('Tous'); }} className="reset-search-btn">
              Réinitialiser
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LexiquePage;

