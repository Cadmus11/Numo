import { Animal } from './animals';

export enum CompatibilityRating {
  Excellent = 'Excellent',
  Good = 'Good',
  Moderate = 'Moderate',
  Challenging = 'Challenging',
}

const COMPATIBILITY_MATRIX: Record<Animal, Record<Animal, CompatibilityRating>> = {
  [Animal.Rat]: {
    [Animal.Rat]: CompatibilityRating.Good,
    [Animal.Ox]: CompatibilityRating.Excellent,
    [Animal.Tiger]: CompatibilityRating.Challenging,
    [Animal.Rabbit]: CompatibilityRating.Moderate,
    [Animal.Dragon]: CompatibilityRating.Excellent,
    [Animal.Snake]: CompatibilityRating.Moderate,
    [Animal.Horse]: CompatibilityRating.Challenging,
    [Animal.Goat]: CompatibilityRating.Moderate,
    [Animal.Monkey]: CompatibilityRating.Excellent,
    [Animal.Rooster]: CompatibilityRating.Good,
    [Animal.Dog]: CompatibilityRating.Moderate,
    [Animal.Pig]: CompatibilityRating.Good,
  },
  [Animal.Ox]: {
    [Animal.Rat]: CompatibilityRating.Excellent,
    [Animal.Ox]: CompatibilityRating.Good,
    [Animal.Tiger]: CompatibilityRating.Moderate,
    [Animal.Rabbit]: CompatibilityRating.Moderate,
    [Animal.Dragon]: CompatibilityRating.Moderate,
    [Animal.Snake]: CompatibilityRating.Excellent,
    [Animal.Horse]: CompatibilityRating.Moderate,
    [Animal.Goat]: CompatibilityRating.Challenging,
    [Animal.Monkey]: CompatibilityRating.Challenging,
    [Animal.Rooster]: CompatibilityRating.Excellent,
    [Animal.Dog]: CompatibilityRating.Moderate,
    [Animal.Pig]: CompatibilityRating.Good,
  },
  [Animal.Tiger]: {
    [Animal.Rat]: CompatibilityRating.Challenging,
    [Animal.Ox]: CompatibilityRating.Moderate,
    [Animal.Tiger]: CompatibilityRating.Good,
    [Animal.Rabbit]: CompatibilityRating.Moderate,
    [Animal.Dragon]: CompatibilityRating.Challenging,
    [Animal.Snake]: CompatibilityRating.Moderate,
    [Animal.Horse]: CompatibilityRating.Excellent,
    [Animal.Goat]: CompatibilityRating.Moderate,
    [Animal.Monkey]: CompatibilityRating.Challenging,
    [Animal.Rooster]: CompatibilityRating.Moderate,
    [Animal.Dog]: CompatibilityRating.Excellent,
    [Animal.Pig]: CompatibilityRating.Excellent,
  },
  [Animal.Rabbit]: {
    [Animal.Rat]: CompatibilityRating.Moderate,
    [Animal.Ox]: CompatibilityRating.Moderate,
    [Animal.Tiger]: CompatibilityRating.Moderate,
    [Animal.Rabbit]: CompatibilityRating.Good,
    [Animal.Dragon]: CompatibilityRating.Good,
    [Animal.Snake]: CompatibilityRating.Moderate,
    [Animal.Horse]: CompatibilityRating.Moderate,
    [Animal.Goat]: CompatibilityRating.Excellent,
    [Animal.Monkey]: CompatibilityRating.Challenging,
    [Animal.Rooster]: CompatibilityRating.Challenging,
    [Animal.Dog]: CompatibilityRating.Excellent,
    [Animal.Pig]: CompatibilityRating.Excellent,
  },
  [Animal.Dragon]: {
    [Animal.Rat]: CompatibilityRating.Excellent,
    [Animal.Ox]: CompatibilityRating.Moderate,
    [Animal.Tiger]: CompatibilityRating.Challenging,
    [Animal.Rabbit]: CompatibilityRating.Good,
    [Animal.Dragon]: CompatibilityRating.Good,
    [Animal.Snake]: CompatibilityRating.Good,
    [Animal.Horse]: CompatibilityRating.Moderate,
    [Animal.Goat]: CompatibilityRating.Moderate,
    [Animal.Monkey]: CompatibilityRating.Excellent,
    [Animal.Rooster]: CompatibilityRating.Excellent,
    [Animal.Dog]: CompatibilityRating.Challenging,
    [Animal.Pig]: CompatibilityRating.Moderate,
  },
  [Animal.Snake]: {
    [Animal.Rat]: CompatibilityRating.Moderate,
    [Animal.Ox]: CompatibilityRating.Excellent,
    [Animal.Tiger]: CompatibilityRating.Moderate,
    [Animal.Rabbit]: CompatibilityRating.Moderate,
    [Animal.Dragon]: CompatibilityRating.Good,
    [Animal.Snake]: CompatibilityRating.Good,
    [Animal.Horse]: CompatibilityRating.Moderate,
    [Animal.Goat]: CompatibilityRating.Good,
    [Animal.Monkey]: CompatibilityRating.Excellent,
    [Animal.Rooster]: CompatibilityRating.Excellent,
    [Animal.Dog]: CompatibilityRating.Moderate,
    [Animal.Pig]: CompatibilityRating.Challenging,
  },
  [Animal.Horse]: {
    [Animal.Rat]: CompatibilityRating.Challenging,
    [Animal.Ox]: CompatibilityRating.Moderate,
    [Animal.Tiger]: CompatibilityRating.Excellent,
    [Animal.Rabbit]: CompatibilityRating.Moderate,
    [Animal.Dragon]: CompatibilityRating.Moderate,
    [Animal.Snake]: CompatibilityRating.Moderate,
    [Animal.Horse]: CompatibilityRating.Good,
    [Animal.Goat]: CompatibilityRating.Excellent,
    [Animal.Monkey]: CompatibilityRating.Moderate,
    [Animal.Rooster]: CompatibilityRating.Challenging,
    [Animal.Dog]: CompatibilityRating.Excellent,
    [Animal.Pig]: CompatibilityRating.Good,
  },
  [Animal.Goat]: {
    [Animal.Rat]: CompatibilityRating.Moderate,
    [Animal.Ox]: CompatibilityRating.Challenging,
    [Animal.Tiger]: CompatibilityRating.Moderate,
    [Animal.Rabbit]: CompatibilityRating.Excellent,
    [Animal.Dragon]: CompatibilityRating.Moderate,
    [Animal.Snake]: CompatibilityRating.Good,
    [Animal.Horse]: CompatibilityRating.Excellent,
    [Animal.Goat]: CompatibilityRating.Good,
    [Animal.Monkey]: CompatibilityRating.Good,
    [Animal.Rooster]: CompatibilityRating.Moderate,
    [Animal.Dog]: CompatibilityRating.Moderate,
    [Animal.Pig]: CompatibilityRating.Excellent,
  },
  [Animal.Monkey]: {
    [Animal.Rat]: CompatibilityRating.Excellent,
    [Animal.Ox]: CompatibilityRating.Challenging,
    [Animal.Tiger]: CompatibilityRating.Challenging,
    [Animal.Rabbit]: CompatibilityRating.Challenging,
    [Animal.Dragon]: CompatibilityRating.Excellent,
    [Animal.Snake]: CompatibilityRating.Excellent,
    [Animal.Horse]: CompatibilityRating.Moderate,
    [Animal.Goat]: CompatibilityRating.Good,
    [Animal.Monkey]: CompatibilityRating.Good,
    [Animal.Rooster]: CompatibilityRating.Moderate,
    [Animal.Dog]: CompatibilityRating.Moderate,
    [Animal.Pig]: CompatibilityRating.Good,
  },
  [Animal.Rooster]: {
    [Animal.Rat]: CompatibilityRating.Good,
    [Animal.Ox]: CompatibilityRating.Excellent,
    [Animal.Tiger]: CompatibilityRating.Moderate,
    [Animal.Rabbit]: CompatibilityRating.Challenging,
    [Animal.Dragon]: CompatibilityRating.Excellent,
    [Animal.Snake]: CompatibilityRating.Excellent,
    [Animal.Horse]: CompatibilityRating.Challenging,
    [Animal.Goat]: CompatibilityRating.Moderate,
    [Animal.Monkey]: CompatibilityRating.Moderate,
    [Animal.Rooster]: CompatibilityRating.Good,
    [Animal.Dog]: CompatibilityRating.Challenging,
    [Animal.Pig]: CompatibilityRating.Moderate,
  },
  [Animal.Dog]: {
    [Animal.Rat]: CompatibilityRating.Moderate,
    [Animal.Ox]: CompatibilityRating.Moderate,
    [Animal.Tiger]: CompatibilityRating.Excellent,
    [Animal.Rabbit]: CompatibilityRating.Excellent,
    [Animal.Dragon]: CompatibilityRating.Challenging,
    [Animal.Snake]: CompatibilityRating.Moderate,
    [Animal.Horse]: CompatibilityRating.Excellent,
    [Animal.Goat]: CompatibilityRating.Moderate,
    [Animal.Monkey]: CompatibilityRating.Moderate,
    [Animal.Rooster]: CompatibilityRating.Challenging,
    [Animal.Dog]: CompatibilityRating.Good,
    [Animal.Pig]: CompatibilityRating.Excellent,
  },
  [Animal.Pig]: {
    [Animal.Rat]: CompatibilityRating.Good,
    [Animal.Ox]: CompatibilityRating.Good,
    [Animal.Tiger]: CompatibilityRating.Excellent,
    [Animal.Rabbit]: CompatibilityRating.Excellent,
    [Animal.Dragon]: CompatibilityRating.Moderate,
    [Animal.Snake]: CompatibilityRating.Challenging,
    [Animal.Horse]: CompatibilityRating.Good,
    [Animal.Goat]: CompatibilityRating.Excellent,
    [Animal.Monkey]: CompatibilityRating.Good,
    [Animal.Rooster]: CompatibilityRating.Moderate,
    [Animal.Dog]: CompatibilityRating.Excellent,
    [Animal.Pig]: CompatibilityRating.Good,
  },
};

export function getZodiacCompatibility(animalA: Animal, animalB: Animal): CompatibilityRating {
  return COMPATIBILITY_MATRIX[animalA][animalB];
}

function ratingToScore(rating: CompatibilityRating): number {
  switch (rating) {
    case CompatibilityRating.Excellent:
      return 90;
    case CompatibilityRating.Good:
      return 70;
    case CompatibilityRating.Moderate:
      return 50;
    case CompatibilityRating.Challenging:
      return 30;
  }
}

export function getZodiacCompatibilityScore(animalA: Animal, animalB: Animal): number {
  return ratingToScore(getZodiacCompatibility(animalA, animalB));
}
