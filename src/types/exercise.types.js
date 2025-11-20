/**
 * Types d'exercices disponibles
 * @typedef {'quiz' | 'code-html' | 'code-css' | 'code-js' | 'code-react' | 'js-snippet' | 'js-function'} ExerciseType
 */

/**
 * Niveau de difficulté (1 = débutant, 5 = avancé)
 * @typedef {1 | 2 | 3 | 4 | 5} DifficultyLevel
 */

/**
 * Question de QCM
 * @typedef {Object} QuizQuestion
 * @property {string} question - La question posée
 * @property {string[]} options - Les options de réponse
 * @property {number} correctAnswer - Index de la bonne réponse (0-based)
 * @property {string} [explanation] - Explication après réponse
 */

/**
 * Validation pour exercices de code
 * @typedef {Object} CodeValidation
 * @property {string[]} [doit_contenir] - Chaînes qui doivent être présentes
 * @property {string[]} [ne_doit_pas_contenir] - Chaînes interdites
 * @property {string[]} [css_doit_contenir] - Propriétés CSS requises
 * @property {Object} [dom_check] - Vérifications DOM
 * @property {string[]} [dom_check.elements] - Éléments qui doivent exister
 * @property {Object[]} [dom_check.attributes] - Attributs requis
 */

/**
 * Test pour exercices de fonction JS
 * @typedef {Object} FunctionTest
 * @property {string} description - Description du test
 * @property {any[]} input - Arguments d'entrée
 * @property {any} expected - Résultat attendu
 */

/**
 * Snippet JS avec question sur variables
 * @typedef {Object} JSSnippetConfig
 * @property {string} code - Le code JS à exécuter
 * @property {string} question - Question posée (ex: "Quelle est la valeur de x ?")
 * @property {string} variableName - Nom de la variable à vérifier
 * @property {any} expectedValue - Valeur attendue
 */

/**
 * Exercice de fonction JS
 * @typedef {Object} JSFunctionConfig
 * @property {string} functionName - Nom de la fonction à écrire
 * @property {FunctionTest[]} tests - Tests à exécuter
 * @property {string} [template] - Code de départ (squelette de fonction)
 */

/**
 * Configuration selon le type d'exercice
 * @typedef {string | {html?: string, css?: string, js?: string} | QuizQuestion[] | JSSnippetConfig | JSFunctionConfig} ExerciseConfig
 */

/**
 * Feedback de l'exercice
 * @typedef {Object} ExerciseFeedback
 * @property {string} success - Message de succès
 * @property {string} error - Message d'erreur
 * @property {string} [hint] - Indice optionnel
 */

/**
 * Exercice générique
 * @typedef {Object} Exercise
 * @property {string} id - Identifiant unique
 * @property {string} titre - Titre de l'exercice
 * @property {ExerciseType} type - Type d'exercice
 * @property {string} consigne - Consigne détaillée
 * @property {ExerciseConfig} code_initial - Configuration initiale selon le type
 * @property {CodeValidation | FunctionTest[] | number | any} validation_attendue - Validation selon le type
 * @property {DifficultyLevel} difficulte - Niveau de difficulté (1-5)
 * @property {ExerciseFeedback} [feedback] - Messages de feedback
 * @property {string[]} [tags] - Tags pour catégoriser
 * @property {number} [timeEstimate] - Temps estimé en minutes
 */

export {};

