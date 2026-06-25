import { reduceNumber } from './reduction';
import { nameToNumbers, isVowel, isConsonant } from './pythagorean';

export function getExpressionNumber(name: string): number {
  const numbers = nameToNumbers(name);
  const sum = numbers.reduce((a, b) => a + b, 0);
  return reduceNumber(sum);
}

export function getSoulUrgeNumber(name: string): number {
  const sum = name
    .toUpperCase()
    .split('')
    .filter((c) => isVowel(c))
    .reduce((total, c) => {
      const val = c.charCodeAt(0) - 65;
      return total + (val >= 0 && val <= 25 ? (val % 9) + 1 : 0);
    }, 0);
  return reduceNumber(sum);
}

export function getPersonalityNumber(name: string): number {
  const sum = name
    .toUpperCase()
    .split('')
    .filter((c) => isConsonant(c))
    .reduce((total, c) => {
      const val = c.charCodeAt(0) - 65;
      return total + (val >= 0 && val <= 25 ? (val % 9) + 1 : 0);
    }, 0);
  return reduceNumber(sum);
}
