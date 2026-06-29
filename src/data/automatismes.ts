import { Question } from '../types';
import { autoNombres } from './auto/nombres';
import { autoGeometrie } from './auto/geometrie';
import { autoDonnees } from './auto/donnees';
import { autoProportion } from './auto/proportion';
import { autoAlgo } from './auto/algo';

// Banque d'automatismes (calcul mental / réflexes, sans calculatrice) — Brevet 2026.
// Couvre la liste officielle d'automatismes (octobre 2025) : nombres & calculs,
// espace & géométrie (avec figures), données & probabilités, proportionnalité &
// fonctions, algorithmique & programmation.
export const automatismesQuestions: Question[] = [
  ...autoNombres,
  ...autoGeometrie,
  ...autoDonnees,
  ...autoProportion,
  ...autoAlgo,
];
