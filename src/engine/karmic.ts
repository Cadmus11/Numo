import { nameToNumbers } from './pythagorean';

const DEBT_NUMBERS = new Set([13, 14, 16, 19]);

export function isKarmicDebtNumber(n: number): boolean {
  return DEBT_NUMBERS.has(n);
}

export function getKarmicLessons(name: string): number[] {
  const presentNumbers = new Set(nameToNumbers(name));
  const missing: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (!presentNumbers.has(i)) {
      missing.push(i);
    }
  }
  return missing;
}

export function getKarmicDebtsFromNumbers(numbers: number[]): number[] {
  const rawSums: number[] = [];

  for (const n of numbers) {
    let current = n;
    while (current > 9 && !DEBT_NUMBERS.has(current)) {
      current = String(current)
        .split('')
        .reduce((s, d) => s + parseInt(d, 10), 0);
    }
    if (DEBT_NUMBERS.has(current)) {
      rawSums.push(current);
    }
  }

  return [...new Set(rawSums)];
}

export function getKarmicDebts(
  lifePath: number,
  expression: number,
  soulUrge: number,
  personality: number,
  dayOfBirth: number
): number[] {
  const sourceNumbers = [lifePath, expression, soulUrge, personality, dayOfBirth];
  return getKarmicDebtsFromNumbers(sourceNumbers);
}
