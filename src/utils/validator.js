/**
 * Moteur de validation des exercices
 */

/**
 * Valide un exercice de type code HTML
 */
export function validateHTMLCode(userCode, validation) {
  const results = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // Vérifie les éléments requis
  if (validation.doit_contenir) {
    for (const required of validation.doit_contenir) {
      if (!userCode.includes(required)) {
        results.isValid = false;
        results.errors.push(`Le code doit contenir : ${required}`);
      }
    }
  }

  // Vérifie les éléments interdits
  if (validation.ne_doit_pas_contenir) {
    for (const forbidden of validation.ne_doit_pas_contenir) {
      if (userCode.includes(forbidden)) {
        results.isValid = false;
        results.errors.push(`Le code ne doit pas contenir : ${forbidden}`);
      }
    }
  }

  // Vérifie la structure DOM (si nécessaire)
  if (validation.dom_check) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(userCode, 'text/html');
      
      if (validation.dom_check.elements) {
        for (const selector of validation.dom_check.elements) {
          const element = doc.querySelector(selector);
          if (!element) {
            results.isValid = false;
            results.errors.push(`L'élément "${selector}" est manquant`);
          }
        }
      }

      if (validation.dom_check.attributes) {
        for (const check of validation.dom_check.attributes) {
          const element = doc.querySelector(check.selector);
          if (!element) {
            results.isValid = false;
            results.errors.push(`L'élément "${check.selector}" est manquant`);
          } else if (!element.hasAttribute(check.attribute)) {
            results.isValid = false;
            results.errors.push(`L'élément "${check.selector}" doit avoir l'attribut "${check.attribute}"`);
          }
        }
      }
    } catch (error) {
      results.warnings.push('Impossible de valider la structure DOM');
    }
  }

  return results;
}

/**
 * Valide un exercice de type code CSS
 */
export function validateCSSCode(userCode, validation) {
  const results = {
    isValid: true,
    errors: [],
    warnings: []
  };

  if (validation.css_doit_contenir) {
    for (const required of validation.css_doit_contenir) {
      if (!userCode.includes(required)) {
        results.isValid = false;
        results.errors.push(`Le CSS doit contenir : ${required}`);
      }
    }
  }

  return results;
}

/**
 * Exécute un snippet JS et vérifie la valeur d'une variable
 */
export function validateJSSnippet(config) {
  const results = {
    isValid: false,
    value: null,
    errors: []
  };

  try {
    // Crée un contexte isolé
    const sandbox = {
      console: {
        log: (...args) => console.log('[Sandbox]', ...args)
      }
    };

    // Exécute le code dans le sandbox
    const func = new Function(
      ...Object.keys(sandbox),
      `${config.code}\nreturn ${config.variableName};`
    );

    const value = func(...Object.values(sandbox));
    results.value = value;

    // Compare avec la valeur attendue
    if (value === config.expectedValue) {
      results.isValid = true;
    } else {
      results.errors.push(
        `Attendu: ${config.expectedValue}, Obtenu: ${value}`
      );
    }
  } catch (error) {
    results.errors.push(`Erreur d'exécution: ${error.message}`);
  }

  return results;
}

/**
 * Teste une fonction JS écrite par l'utilisateur
 */
export function validateJSFunction(userCode, config) {
  const results = {
    isValid: true,
    passedTests: 0,
    totalTests: config.tests.length,
    errors: []
  };

  try {
    // Exécute le code de l'utilisateur pour définir la fonction
    const func = new Function(`
      ${userCode}
      return ${config.functionName};
    `)();

    // Exécute chaque test
    for (const test of config.tests) {
      try {
        const result = func(...test.input);
        if (JSON.stringify(result) === JSON.stringify(test.expected)) {
          results.passedTests++;
        } else {
          results.isValid = false;
          results.errors.push(
            `Test "${test.description}" échoué: attendu ${JSON.stringify(test.expected)}, obtenu ${JSON.stringify(result)}`
          );
        }
      } catch (error) {
        results.isValid = false;
        results.errors.push(
          `Test "${test.description}" échoué: ${error.message}`
        );
      }
    }
  } catch (error) {
    results.isValid = false;
    results.errors.push(`Erreur de syntaxe: ${error.message}`);
  }

  return results;
}

/**
 * Valide un QCM
 */
export function validateQuiz(questions, userAnswers) {
  const results = {
    isValid: false,
    score: 0,
    totalQuestions: questions.length,
    details: []
  };

  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;
    
    if (isCorrect) {
      results.score++;
    }

    results.details.push({
      question: question.question,
      correct: isCorrect,
      userAnswer: question.options[userAnswer],
      correctAnswer: question.options[question.correctAnswer],
      explanation: question.explanation
    });
  });

  results.isValid = results.score === results.totalQuestions;
  
  return results;
}

/**
 * Validation générique selon le type d'exercice
 */
export function validateExercise(exercise, userCode, userAnswers = null) {
  switch (exercise.type) {
    case 'code-html':
      return validateHTMLCode(userCode, exercise.validation_attendue);
    
    case 'code-css':
      return validateCSSCode(userCode, exercise.validation_attendue);
    
    case 'js-snippet':
      return validateJSSnippet(exercise.code_initial);
    
    case 'js-function':
      return validateJSFunction(userCode, exercise.code_initial);
    
    case 'quiz':
      return validateQuiz(exercise.code_initial, userAnswers);
    
    default:
      return {
        isValid: false,
        errors: ['Type d\'exercice non supporté']
      };
  }
}

