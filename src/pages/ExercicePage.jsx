import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getExerciceById } from '../data';
import { findModuleForExercice, getNextExercice } from '../utils/exerciseNavigation';
import CodeEditor from '../components/CodeEditor';
import Preview from '../components/Preview';
import ValidationPanel from '../components/ValidationPanel';
import JSSnippetExercise from '../components/JSSnippetExercise';
import JSFunctionExercise from '../components/JSFunctionExercise';
import QuizExercise from '../components/QuizExercise';
import './ExercicePage.css';

function ExercicePage() {
  const { exerciceId } = useParams();
  const navigate = useNavigate();
  const exercice = getExerciceById(exerciceId);

  // États pour le code
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  // État pour l'affichage
  const [showConsigne, setShowConsigne] = useState(true);

  useEffect(() => {
    if (!exercice) return;

    console.log('=== Initialisation exercice ===');
    console.log('Type:', exercice.type);
    console.log('code_initial:', exercice.code_initial);

    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Réinitialise tous les états d'abord
    setHtmlCode('');
    setCssCode('');
    setJsCode('');

    // Initialise le code selon le type d'exercice
    if (typeof exercice.code_initial === 'string') {
      // Exercice simple (HTML seul ou JS seul)
      console.log('-> code_initial est une string');
      if (exercice.type === 'code-html') {
        setHtmlCode(exercice.code_initial);
      } else if (exercice.type === 'code-js') {
        setJsCode(exercice.code_initial);
      } else if (exercice.type === 'code-css') {
        setCssCode(exercice.code_initial);
      }
    } else if (exercice.code_initial) {
      // Exercice avec plusieurs langages
      console.log('-> code_initial est un objet');
      console.log('HTML initial:', exercice.code_initial.html);
      console.log('CSS initial:', exercice.code_initial.css);
      setHtmlCode(exercice.code_initial.html || '');
      setCssCode(exercice.code_initial.css || '');
      setJsCode(exercice.code_initial.js || '');
    }
  }, [exercice, exerciceId]);

  // Trouve le module et l'exercice suivant
  const moduleId = findModuleForExercice(exerciceId);
  const nextExercice = getNextExercice(exerciceId);

  if (!exercice) {
    return (
      <div className="exercice-page">
        <div className="error-message">
          <h2>Exercice non trouvé</h2>
          <button onClick={() => navigate('/')}>← Retour à l'accueil</button>
        </div>
      </div>
    );
  }

  const handleReset = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser votre code ?')) {
      // Réinitialise tous les états d'abord
      setHtmlCode('');
      setCssCode('');
      setJsCode('');
      
      if (typeof exercice.code_initial === 'string') {
        if (exercice.type === 'code-html') {
          setHtmlCode(exercice.code_initial);
        } else if (exercice.type === 'code-js') {
          setJsCode(exercice.code_initial);
        } else if (exercice.type === 'code-css') {
          setCssCode(exercice.code_initial);
        }
      } else if (exercice.code_initial) {
        setHtmlCode(exercice.code_initial.html || '');
        setCssCode(exercice.code_initial.css || '');
        setJsCode(exercice.code_initial.js || '');
      }
    }
  };

  const getDifficultyStars = (difficulte) => {
    return '★'.repeat(difficulte) + '☆'.repeat(5 - difficulte);
  };

  // Détermine quel type d'interface afficher
  const isCodeEditor = ['code-html', 'code-css', 'code-js', 'code-react', 'code-html-css'].includes(exercice.type);
  const isJSSnippet = exercice.type === 'js-snippet';
  const isJSFunction = exercice.type === 'js-function';
  const isQuiz = exercice.type === 'quiz';

  const showHtmlEditor = exercice.type.includes('html') || exercice.type.includes('css');
  const showCssEditor = exercice.type.includes('css');
  const showJsEditor = (exercice.type.includes('js') || exercice.type === 'code-react') && !isJSSnippet && !isJSFunction;

  const handleBack = () => {
    if (moduleId) {
      navigate(`/module/${moduleId}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="exercice-page">
      <div className="exercice-header">
        <button className="back-btn" onClick={handleBack}>
          ← Retour au module
        </button>
        <div className="exercice-info">
          <h1 className="exercice-page-title">{exercice.titre}</h1>
          <div className="exercice-badges">
            <span className="badge badge-type">{exercice.type}</span>
            <span className="badge badge-difficulty">
              {getDifficultyStars(exercice.difficulte)}
            </span>
          </div>
        </div>
        {isCodeEditor && (
          <button className="reset-btn" onClick={handleReset}>
            🔄 Réinitialiser
          </button>
        )}
      </div>

      <div className="exercice-layout">
        <div className="consigne-panel">
          <div className="consigne-header">
            <h2>📋 Consigne</h2>
            <button 
              className="toggle-btn"
              onClick={() => setShowConsigne(!showConsigne)}
            >
              {showConsigne ? '−' : '+'}
            </button>
          </div>
          {showConsigne && (
            <div className="consigne-content">
              <p>{exercice.consigne}</p>
            </div>
          )}
        </div>

        {/* Exercice de type code classique (HTML/CSS/JS/React) */}
        {isCodeEditor && (
          <>
            <div className="editors-container">
              {showHtmlEditor && (
                <CodeEditor
                  title="HTML"
                  language="html"
                  value={htmlCode}
                  onChange={setHtmlCode}
                />
              )}
              {showCssEditor && (
                <CodeEditor
                  title="CSS"
                  language="css"
                  value={cssCode}
                  onChange={setCssCode}
                />
              )}
              {showJsEditor && (
                <CodeEditor
                  title={exercice.type === 'code-react' ? 'React / JSX' : 'JavaScript'}
                  language="javascript"
                  value={jsCode}
                  onChange={setJsCode}
                />
              )}
            </div>

            <div className="preview-and-validation">
              {exercice.type !== 'code-react' && (
                <div className="preview-container">
                  <Preview 
                    html={htmlCode} 
                    css={cssCode} 
                    js={jsCode}
                  />
                </div>
              )}

              {exercice.type === 'code-react' && (
                <div className="react-info-panel">
                  <div className="info-box-react">
                    <h3>⚛️ Exercice React</h3>
                    <p>Pour les exercices React, utilise un environnement externe comme :</p>
                    <ul>
                      <li><a href="https://codesandbox.io/s/react-new" target="_blank" rel="noopener noreferrer">CodeSandbox</a> - Éditeur en ligne React</li>
                      <li><a href="https://stackblitz.com/fork/react" target="_blank" rel="noopener noreferrer">StackBlitz</a> - IDE en ligne</li>
                      <li><a href="https://react.new" target="_blank" rel="noopener noreferrer">React.new</a> - Démarrage rapide</li>
                    </ul>
                    <p>Ou crée un projet local avec :</p>
                    <pre><code>npm create vite@latest mon-app -- --template react</code></pre>
                  </div>
                </div>
              )}

              <ValidationPanel
                exercice={exercice}
                htmlCode={htmlCode}
                cssCode={cssCode}
                jsCode={jsCode}
                nextExerciceId={nextExercice?.id}
              />
            </div>
          </>
        )}

        {/* Exercice de type JS Snippet */}
        {isJSSnippet && (
          <JSSnippetExercise exercice={exercice} />
        )}

        {/* Exercice de type JS Function avec tests */}
        {isJSFunction && (
          <JSFunctionExercise exercice={exercice} />
        )}

        {/* Exercice de type Quiz */}
        {isQuiz && (
          <QuizExercise exercice={exercice} />
        )}
      </div>
    </div>
  );
}

export default ExercicePage;

