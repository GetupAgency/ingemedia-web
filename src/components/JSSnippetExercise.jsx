import React, { useState } from 'react';
import { validateJSSnippet } from '../utils/validator';
import './JSSnippetExercise.css';

function JSSnippetExercise({ exercice }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleExecute = () => {
    const validation = validateJSSnippet(exercice.code_initial);
    setResult(validation);
    setShowExplanation(false);
  };

  const handleCheck = () => {
    if (userAnswer.trim() === '') {
      setResult({
        isValid: false,
        errors: ['Entre une réponse avant de vérifier !']
      });
      return;
    }

    const userValue = parseFloat(userAnswer);
    const expectedValue = exercice.code_initial.expectedValue;

    if (userValue === expectedValue) {
      setResult({
        isValid: true,
        value: expectedValue,
        errors: []
      });
      setShowExplanation(true);
    } else {
      setResult({
        isValid: false,
        value: userValue,
        errors: [`Attendu: ${expectedValue}, Ta réponse: ${userValue}`]
      });
    }
  };

  return (
    <div className="js-snippet-exercise">
      <div className="code-display">
        <div className="code-header">
          <span>📜 Code à analyser</span>
        </div>
        <pre><code>{exercice.code_initial.code}</code></pre>
      </div>

      <div className="question-section">
        <h3>{exercice.code_initial.question}</h3>
        <div className="answer-input">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Entre ta réponse..."
          />
          <button onClick={handleCheck} className="btn-check">
            Vérifier
          </button>
          <button onClick={handleExecute} className="btn-execute">
            🔍 Exécuter le code
          </button>
        </div>
      </div>

      {result && (
        <div className={`result ${result.isValid ? 'success' : 'error'}`}>
          {result.isValid ? (
            <>
              <div className="result-icon">✅</div>
              <div className="result-content">
                <h4>Bravo ! C'est correct !</h4>
                <p>{exercice.feedback?.success}</p>
                {result.value !== null && (
                  <p className="result-value">
                    La valeur de <code>{exercice.code_initial.variableName}</code> est bien <strong>{result.value}</strong>
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="result-icon">❌</div>
              <div className="result-content">
                <h4>Pas tout à fait...</h4>
                {result.errors.map((error, i) => (
                  <p key={i} className="error-message">{error}</p>
                ))}
                {exercice.feedback?.hint && (
                  <p className="hint">💡 Indice : {exercice.feedback.hint}</p>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {showExplanation && exercice.feedback?.success && (
        <div className="explanation">
          <h4>📚 Explication</h4>
          <p>{exercice.feedback.success}</p>
        </div>
      )}
    </div>
  );
}

export default JSSnippetExercise;

