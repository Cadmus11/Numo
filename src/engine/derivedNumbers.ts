import { reduceNumber } from './reduction';
import { nameToNumbers, letterToNumber } from './pythagorean';

export function getMaturityNumber(lifePath: number, expression: number): number {
  return reduceNumber(lifePath + expression);
}

export function getGenerationNumber(year: number): number {
  return reduceNumber(year);
}

export function getCornerstone(name: string): number | null {
  const firstChar = name.trim()[0];
  if (!firstChar) return null;
  return letterToNumber(firstChar);
}

export function getCapstone(name: string): number | null {
  const trimmed = name.trim();
  const parts = trimmed.split(/\s+/);
  const lastWord = parts[parts.length - 1];
  const lastChar = lastWord[lastWord.length - 1];
  if (!lastChar) return null;
  return letterToNumber(lastChar);
}

export function getBalanceNumber(name: string): number {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .join('');

  const numbers = initials
    .split('')
    .map((c) => letterToNumber(c))
    .filter((n): n is number => n !== null);

  if (numbers.length === 0) return 0;
  return reduceNumber(numbers.reduce((a, b) => a + b, 0));
}

export function getRationalThoughtNumber(lifePath: number, expression: number): number {
  return reduceNumber(lifePath + expression);
}

export function getSubconsciousSelfNumber(name: string): number {
  const uniqueNumbers = new Set(nameToNumbers(name));
  return uniqueNumbers.size;
}
