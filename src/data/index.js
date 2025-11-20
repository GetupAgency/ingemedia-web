import { modulesData } from './modulesData.js';
import { exercicesHTML } from './exercicesHTML.js';
import { exercicesCSS } from './exercicesCSS.js';
import { exercicesJavaScript } from './exercicesJavaScript.js';
import { exercicesReact } from './exercicesReact.js';
import { exercicesJSSnippets, exercicesJSFunctions, exercicesQuiz } from './exercicesAvances.js';

// Mappe chaque module à ses exercices
export const exercicesParModule = {
  'html': exercicesHTML,
  'css': exercicesCSS,
  'javascript': exercicesJavaScript,
  'react': exercicesReact,
  'js-snippets': exercicesJSSnippets,
  'js-functions': exercicesJSFunctions,
  'quiz': exercicesQuiz
};

// Exporte tout
export { 
  modulesData, 
  exercicesHTML, 
  exercicesCSS, 
  exercicesJavaScript, 
  exercicesReact,
  exercicesJSSnippets,
  exercicesJSFunctions,
  exercicesQuiz
};

// Fonction utilitaire pour récupérer les exercices d'un module
export const getExercicesByModule = (moduleId) => {
  return exercicesParModule[moduleId] || [];
};

// Fonction pour récupérer un exercice spécifique
export const getExerciceById = (exerciceId) => {
  for (const exercices of Object.values(exercicesParModule)) {
    const found = exercices.find(ex => ex.id === exerciceId);
    if (found) return found;
  }
  return null;
};

