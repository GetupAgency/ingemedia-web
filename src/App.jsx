import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import ExercicePage from './pages/ExercicePage';
import CompetencesPage from './pages/CompetencesPage';
import LexiquePage from './pages/LexiquePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/exercice/:exerciceId" element={<ExercicePage />} />
            <Route path="/competences" element={<CompetencesPage />} />
            <Route path="/lexique" element={<LexiquePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

