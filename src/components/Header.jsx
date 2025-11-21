import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIngemedia from '../data/assets/logo.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={logoIngemedia} alt="Ingémédia" className="logo-image" />
          <div className="logo-text-wrapper">
            <span className="logo-title">Plateforme Web</span>
            <span className="logo-subtitle">Formation Développement - Master 1</span>
          </div>
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="nav-icon">🏠</span>
            Modules
          </Link>
          <Link 
            to="/competences" 
            className={`nav-link ${isActive('/competences') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="nav-icon">💼</span>
            Compétences
          </Link>
          <Link 
            to="/lexique" 
            className={`nav-link ${isActive('/lexique') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="nav-icon">📖</span>
            Lexique
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

