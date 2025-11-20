import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateHTMLCode, validateCSSCode } from '../utils/validator';
import './ValidationPanel.css';

function ValidationPanel({ exercice, htmlCode, cssCode, jsCode, nextExerciceId }) {
  const [result, setResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  // Réinitialise le résultat quand on change d'exercice
  useEffect(() => {
    setResult(null);
  }, [exercice.id]);

  const handleValidate = () => {
    setIsValidating(true);

    // Simule un petit délai pour l'effet de validation
    setTimeout(() => {
      let validation = {
        isValid: true,
        errors: [],
        warnings: []
      };

      // Selon le type d'exercice, on valide différemment
      if (exercice.type === 'code-html') {
        validation = validateHTMLCode(htmlCode, exercice.validation_attendue);
      } else if (exercice.type === 'code-html-css') {
        // Valide à la fois HTML et CSS
        const htmlValidation = validateHTMLCode(htmlCode, exercice.validation_attendue);
        const cssValidation = validateCSSCode(cssCode, exercice.validation_attendue);
        
        validation = {
          isValid: htmlValidation.isValid && cssValidation.isValid,
          errors: [...htmlValidation.errors, ...cssValidation.errors],
          warnings: [...htmlValidation.warnings, ...cssValidation.warnings]
        };
      } else if (exercice.type === 'code-css') {
        // Pour les exercices CSS purs, valide le CSS
        validation = validateCSSCode(cssCode, exercice.validation_attendue);
      } else if (exercice.type === 'code-js' || exercice.type === 'code-react') {
        // Pour JS/React, validation basique
        validation = {
          isValid: true,
          errors: [],
          warnings: ['Validation automatique non disponible pour ce type d\'exercice. Vérifie ton code dans l\'aperçu !']
        };
      } else {
        // Pour les autres types, validation basique
        validation = {
          isValid: true,
          errors: [],
          warnings: ['Validation automatique non disponible pour ce type d\'exercice']
        };
      }

      setResult(validation);
      setIsValidating(false);
    }, 500);
  };

  const handleReset = () => {
    setResult(null);
  };

  const handleNextExercice = () => {
    if (nextExerciceId) {
      navigate(`/exercice/${nextExerciceId}`);
    }
  };

  return (
    <div className="validation-panel">
      <div className="validation-header">
        <h3>✅ Validation</h3>
        <div className="validation-actions">
          <button 
            onClick={handleValidate} 
            className="btn-validate"
            disabled={isValidating}
          >
            {isValidating ? '⏳ Validation...' : '🔍 Valider mon code'}
          </button>
          {result && (
            <button onClick={handleReset} className="btn-reset-result">
              ✕
            </button>
          )}
        </div>
      </div>

      {result && (
        <div className={`validation-result ${result.isValid ? 'success' : 'error'}`}>
          <div className="result-icon">
            {result.isValid ? '🎉' : '⚠️'}
          </div>
          <div className="result-content">
            {result.isValid ? (
              <>
                <h4>Bravo ! Exercice validé ! 🎊</h4>
                <p>Ton code respecte tous les critères de l'exercice. Tu peux passer au suivant !</p>
                {exercice.feedback?.success && (
                  <p className="feedback-success">{exercice.feedback.success}</p>
                )}
                {nextExerciceId && (
                  <button onClick={handleNextExercice} className="btn-next-exercice">
                    Exercice suivant →
                  </button>
                )}
              </>
            ) : (
              <>
                <h4>Pas tout à fait... Continue ! 💪</h4>
                {result.errors.length > 0 && (
                  <div className="errors-list">
                    <strong>Éléments manquants :</strong>
                    <ul>
                      {result.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exercice.feedback?.hint && (
                  <div className="hint-box">
                    💡 <strong>Indice :</strong> {exercice.feedback.hint}
                  </div>
                )}
              </>
            )}
            {result.warnings.length > 0 && (
              <div className="warnings-list">
                {result.warnings.map((warning, i) => (
                  <p key={i} className="warning">⚠️ {warning}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!result && (
        <div className="validation-help">
          <p>👆 Clique sur "Valider mon code" quand tu penses avoir terminé l'exercice.</p>
          <p>Le système vérifiera automatiquement si ton code respecte les consignes.</p>
        </div>
      )}
    </div>
  );
}

export default ValidationPanel;

