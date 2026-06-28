import { reduceNumber } from './reduction';
import type { LuckyInfo } from './types';

const DAYS: Record<number, string[]> = {
  1: ['Sunday'],
  2: ['Monday'],
  3: ['Thursday', 'Friday'],
  4: ['Sunday'],
  5: ['Wednesday', 'Friday'],
  6: ['Tuesday', 'Thursday'],
  7: ['Monday', 'Sunday'],
  8: ['Saturday', 'Monday'],
  9: ['Tuesday', 'Thursday'],
};

const MONTHS: Record<number, string[]> = {
  1: ['January', 'October'],
  2: ['February', 'November'],
  3: ['March', 'December'],
  4: ['April', 'July'],
  5: ['May', 'September'],
  6: ['June', 'August'],
  7: ['January', 'July'],
  8: ['February', 'August'],
  9: ['March', 'December'],
};

const COLORS: Record<number, string[]> = {
  1: ['Red', 'Gold'],
  2: ['White', 'Green'],
  3: ['Yellow', 'Blue'],
  4: ['Blue', 'Green'],
  5: ['Light Blue', 'Gray'],
  6: ['Pink', 'White'],
  7: ['Purple', 'Violet'],
  8: ['Dark Blue', 'Gold'],
  9: ['Red', 'Pink'],
};

const LUCKY_NUMBERS: Record<number, number[]> = {
  1: [1, 10, 19, 28],
  2: [2, 11, 20, 29],
  3: [3, 12, 21, 30],
  4: [4, 13, 22, 31],
  5: [5, 14, 23],
  6: [6, 15, 24],
  7: [7, 16, 25],
  8: [8, 17, 26],
  9: [9, 18, 27],
};

export function getLuckyInfo(lifePath: number): LuckyInfo {
  const path = lifePath > 9 ? reduceNumber(lifePath, false) : lifePath;
  return {
    numbers: LUCKY_NUMBERS[path] ?? LUCKY_NUMBERS[1]!,
    days: DAYS[path] ?? DAYS[1]!,
    months: MONTHS[path] ?? MONTHS[1]!,
    colors: COLORS[path] ?? COLORS[1]!,
  };
}
