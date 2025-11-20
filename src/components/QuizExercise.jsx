import React, { useState } from 'react';
import { validateQuiz } from '../utils/validator';
import './QuizExercise.css';

function QuizExercise({ exercice }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showExplanations, setShowExplanations] = useState(false);

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: optionIndex
    });
  };

  const handleSubmit = () => {
    // Vérifie que toutes les questions ont une réponse
    if (Object.keys(userAnswers).length < exercice.code_initial.length) {
      alert('Réponds à toutes les questions avant de valider !');
      return;
    }

    const validation = validateQuiz(exercice.code_initial, userAnswers);
    setResult(validation);
    setShowExplanations(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setResult(null);
    setShowExplanations(false);
  };

  return (
    <div className="quiz-exercise">
      <div className="quiz-questions">
        {exercice.code_initial.map((question, qIndex) => (
          <div key={qIndex} className={`question-card ${result && (result.details[qIndex]?.correct ? 'correct' : 'incorrect')}`}>
            <div className="question-header">
              <span className="question-number">Question {qIndex + 1}</span>
              {result && (
                <span className={`question-result ${result.details[qIndex]?.correct ? 'correct' : 'incorrect'}`}>
                  {result.details[qIndex]?.correct ? '✅' : '❌'}
                </span>
              )}
            </div>
            <h4 className="question-text">{question.question}</h4>
            
            <div className="options-list">
              {question.options.map((option, oIndex) => (
                <label
                  key={oIndex}
                  className={`option ${userAnswers[qIndex] === oIndex ? 'selected' : ''} ${
                    result && showExplanations
                      ? oIndex === question.correctAnswer
                        ? 'correct-answer'
                        : userAnswers[qIndex] === oIndex
                        ? 'wrong-answer'
                        : ''
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={userAnswers[qIndex] === oIndex}
                    onChange={() => handleAnswerSelect(qIndex, oIndex)}
                    disabled={result !== null}
                  />
                  <span className="option-text">{option}</span>
                  {result && showExplanations && oIndex === question.correctAnswer && (
                    <span className="correct-badge">✓ Bonne réponse</span>
                  )}
                </label>
              ))}
            </div>

            {result && showExplanations && question.explanation && (
              <div className="explanation">
                <strong>Explication :</strong> {question.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="quiz-actions">
        {!result ? (
          <button onClick={handleSubmit} className="btn-submit">
            📝 Valider mes réponses
          </button>
        ) : (
          <>
            <button onClick={handleReset} className="btn-reset">
              🔄 Recommencer le quiz
            </button>
            <div className={`quiz-score ${result.isValid ? 'perfect' : ''}`}>
              Score : {result.score} / {result.totalQuestions}
            </div>
          </>
        )}
      </div>

      {result && (
        <div className={`quiz-result ${result.isValid ? 'success' : 'partial'}`}>
          <div className="result-icon">
            {result.isValid ? '🎉' : result.score >= result.totalQuestions / 2 ? '👍' : '💪'}
          </div>
          <div className="result-content">
            <h4>
              {result.isValid
                ? 'Parfait ! Sans faute !'
                : result.score >= result.totalQuestions / 2
                ? 'Pas mal ! Tu maîtrises les bases.'
                : 'Continue tes efforts !'}
            </h4>
            <p>
              {result.isValid
                ? exercice.feedback?.success || 'Tu as tout bon ! Bravo pour ce sans-faute.'
                : `Tu as ${result.score} bonnes réponses sur ${result.totalQuestions}. Relis les explications pour progresser.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizExercise;

