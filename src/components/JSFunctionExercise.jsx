import React, { useState } from 'react';
import { validateJSFunction } from '../utils/validator';
import CodeEditor from './CodeEditor';
import './JSFunctionExercise.css';

function JSFunctionExercise({ exercice }) {
  const [code, setCode] = useState(exercice.code_initial.template || '');
  const [result, setResult] = useState(null);

  const handleTest = () => {
    const validation = validateJSFunction(code, exercice.code_initial);
    setResult(validation);
  };

  return (
    <div className="js-function-exercise">
      <div className="editor-section">
        <CodeEditor
          title={`Fonction à écrire : ${exercice.code_initial.functionName}`}
          language="javascript"
          value={code}
          onChange={setCode}
        />
        <button onClick={handleTest} className="btn-test">
          🧪 Lancer les tests
        </button>
      </div>

      <div className="tests-section">
        <h3>📋 Tests à passer</h3>
        <ul className="tests-list">
          {exercice.code_initial.tests.map((test, index) => (
            <li key={index} className="test-item">
              <span className="test-description">{test.description}</span>
              <code className="test-input">
                Entrée: {JSON.stringify(test.input)} → Sortie attendue: {JSON.stringify(test.expected)}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {result && (
        <div className={`result ${result.isValid ? 'success' : 'error'}`}>
          <div className="result-header">
            <div className="result-icon">{result.isValid ? '✅' : '❌'}</div>
            <div className="result-summary">
              <h4>
                {result.isValid ? 'Tous les tests passent !' : 'Certains tests échouent'}
              </h4>
              <p className="test-score">
                {result.passedTests} / {result.totalTests} tests réussis
              </p>
            </div>
          </div>

          {result.isValid ? (
            <div className="success-message">
              <p>{exercice.feedback?.success}</p>
            </div>
          ) : (
            <div className="error-details">
              <h5>Détails des erreurs :</h5>
              <ul>
                {result.errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
              {exercice.feedback?.hint && (
                <p className="hint">💡 Indice : {exercice.feedback.hint}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default JSFunctionExercise;

