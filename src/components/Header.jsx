import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIngemedia from '../data/assets/logo.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

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
        {!isHome && (
          <Link to="/" className="back-home">
            <svg className="back-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retour aux modules
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

