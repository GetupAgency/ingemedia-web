/**
 * Utilitaires pour la navigation entre exercices
 */

import { exercicesParModule } from '../data';

/**
 * Trouve le module d'un exercice donné
 */
export function findModuleForExercice(exerciceId) {
  for (const [moduleId, exercices] of Object.entries(exercicesParModule)) {
    if (exercices.some(ex => ex.id === exerciceId)) {
      return moduleId;
    }
  }
  return null;
}

/**
 * Trouve l'exercice suivant dans le même module
 */
export function getNextExercice(currentExerciceId) {
  const moduleId = findModuleForExercice(currentExerciceId);
  if (!moduleId) return null;

  const exercices = exercicesParModule[moduleId];
  const currentIndex = exercices.findIndex(ex => ex.id === currentExerciceId);
  
  if (currentIndex === -1 || currentIndex === exercices.length - 1) {
    return null; // Dernier exercice du module
  }

  return exercices[currentIndex + 1];
}

/**
 * Trouve l'exercice précédent dans le même module
 */
export function getPreviousExercice(currentExerciceId) {
  const moduleId = findModuleForExercice(currentExerciceId);
  if (!moduleId) return null;

  const exercices = exercicesParModule[moduleId];
  const currentIndex = exercices.findIndex(ex => ex.id === currentExerciceId);
  
  if (currentIndex === -1 || currentIndex === 0) {
    return null; // Premier exercice du module
  }

  return exercices[currentIndex - 1];
}

