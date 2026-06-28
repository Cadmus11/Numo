import { Animal } from './animals';

export interface EnemyPair {
  animalA: Animal;
  animalB: Animal;
  conflictAreas: string[];
  growthAdvice: string;
}

const ENEMY_PAIRS: EnemyPair[] = [
  {
    animalA: Animal.Rat,
    animalB: Animal.Horse,
    conflictAreas: ['Communication', 'Lifestyle pace', 'Emotional expression'],
    growthAdvice:
      'Practice patience and find common ground in shared goals rather than trying to change each other.',
  },
  {
    animalA: Animal.Ox,
    animalB: Animal.Goat,
    conflictAreas: ['Decision making', 'Social preferences', 'Financial habits'],
    growthAdvice:
      'Respect differing approaches to life — stability vs spontaneity both have value when balanced.',
  },
  {
    animalA: Animal.Tiger,
    animalB: Animal.Monkey,
    conflictAreas: ['Competition', 'Trust', 'Risk tolerance'],
    growthAdvice:
      'Channel competitive energy toward shared projects rather than opposing each other.',
  },
  {
    animalA: Animal.Rabbit,
    animalB: Animal.Rooster,
    conflictAreas: ['Social style', 'Communication', 'Values'],
    growthAdvice:
      'Appreciate differences in expression — quiet diplomacy and bold honesty both have their place.',
  },
  {
    animalA: Animal.Dragon,
    animalB: Animal.Dog,
    conflictAreas: ['Idealism vs realism', 'Authority', 'Emotional openness'],
    growthAdvice:
      'Balance big visions with practical concerns. Both perspectives are needed for success.',
  },
  {
    animalA: Animal.Snake,
    animalB: Animal.Pig,
    conflictAreas: ['Trust', 'Emotional depth', 'Social energy'],
    growthAdvice:
      'Build trust through consistent honesty. Different emotional languages require translation, not judgment.',
  },
];

export function getEnemyPairs(): EnemyPair[] {
  return ENEMY_PAIRS;
}

export function isDirectEnemy(animalA: Animal, animalB: Animal): EnemyPair | undefined {
  return ENEMY_PAIRS.find(
    (pair) =>
      (pair.animalA === animalA && pair.animalB === animalB) ||
      (pair.animalA === animalB && pair.animalB === animalA)
  );
}
