import { reduceNumber } from './reduction';
import type { ChallengeSet } from './types';

function challengeReduce(a: number, b: number): number {
  const diff = Math.abs(reduceNumber(a, false) - reduceNumber(b, false));
  return reduceNumber(diff, false);
}

export function getChallenges(day: number, month: number, year: number): ChallengeSet {
  return {
    first: challengeReduce(month, day),
    second: challengeReduce(day, year),
    third: (() => {
      const first = challengeReduce(month, day);
      const second = challengeReduce(day, year);
      return challengeReduce(first, second);
    })(),
    fourth: challengeReduce(month, year),
  };
}
