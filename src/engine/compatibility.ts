import { reduceNumber } from './reduction';
import type { CompatibilityScore } from './types';

function relationScore(a: number, b: number): number {
  const reducedA = reduceNumber(a);
  const reducedB = reduceNumber(b);
  if (reducedA === reducedB) return 90;
  const diff = Math.abs(reducedA - reducedB);
  if (diff === 1 || diff === 9) return 65;
  if (diff === 2 || diff === 8) return 75;
  if (diff === 3 || diff === 7) return 50;
  if (diff === 4 || diff === 6) return 40;
  return 30;
}

export function getCompatibility(
  lifePathA: number,
  lifePathB: number,
  soulUrgeA: number,
  soulUrgeB: number,
  personalityA: number,
  personalityB: number,
  expressionA: number,
  expressionB: number
): CompatibilityScore {
  const love = Math.round(
    relationScore(soulUrgeA, soulUrgeB) * 0.5 +
      relationScore(lifePathA, lifePathB) * 0.3 +
      relationScore(expressionA, expressionB) * 0.2
  );

  const friendship = Math.round(
    relationScore(expressionA, expressionB) * 0.4 +
      relationScore(lifePathA, lifePathB) * 0.3 +
      relationScore(personalityA, personalityB) * 0.3
  );

  const business = Math.round(
    relationScore(lifePathA, lifePathB) * 0.4 +
      relationScore(expressionA, expressionB) * 0.3 +
      relationScore(personalityA, personalityB) * 0.3
  );

  return {
    love: Math.min(100, Math.max(0, love)),
    friendship: Math.min(100, Math.max(0, friendship)),
    business: Math.min(100, Math.max(0, business)),
  };
}
