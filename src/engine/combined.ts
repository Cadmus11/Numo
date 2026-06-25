import type { FullNumerologyReport, CompatibilityScore } from './types';
import { getCompatibility } from './compatibility';
import { getAnimal } from './zodiac/animals';
import { getZodiacCompatibilityScore , CompatibilityRating } from './zodiac/compatibility';
import { isDirectEnemy } from './zodiac/enemySigns';
import { areInSameTriangle, isSecretFriend } from './zodiac/triangles';

export interface CombinedCompatibility {
  numerology: CompatibilityScore;
  zodiac: {
    love: number;
    friendship: number;
    business: number;
    animalA: string;
    animalB: string;
    rating: CompatibilityRating;
    isEnemy: boolean;
    isTriangle: boolean;
    isSecretFriends: boolean;
  };
  love: number;
  friendship: number;
  business: number;
  overall: {
    score: number;
    rating: string;
    description: string;
  };
  strengths: string[];
  conflicts: string[];
  recommendations: string[];
}

function getOverallRating(score: number): string {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Very Good';
  if (score >= 55) return 'Good';
  if (score >= 40) return 'Moderate';
  if (score >= 25) return 'Challenging';
  return 'Difficult';
}

function getOverallDescription(score: number): string {
  if (score >= 85) return 'An exceptionally harmonious connection with strong potential across all areas of life.';
  if (score >= 70) return 'A strong, balanced connection with more strengths than challenges.';
  if (score >= 55) return 'A solid foundation with good potential, though some areas may need attention.';
  if (score >= 40) return 'A mixed connection with both promising and challenging aspects.';
  if (score >= 25) return 'Significant differences that will require conscious effort and understanding.';
  return 'A challenging dynamic that may require substantial compromise and growth work.';
}

export function compareProfiles(
  reportA: FullNumerologyReport,
  reportB: FullNumerologyReport,
  birthYearA: number,
  birthYearB: number,
): CombinedCompatibility {
  const numCompat = getCompatibility(
    reportA.lifePath,
    reportB.lifePath,
    reportA.soulUrge,
    reportB.soulUrge,
    reportA.personality,
    reportB.personality,
    reportA.expression,
    reportB.expression,
  );

  const animalA = getAnimal(birthYearA);
  const animalB = getAnimal(birthYearB);

  const zodiacLove = getZodiacCompatibilityScore(animalA, animalB);
  const zodiacFriendship = getZodiacCompatibilityScore(animalA, animalB);
  const zodiacBusiness = getZodiacCompatibilityScore(animalA, animalB);
  const zodiacRaw = getZodiacCompatibilityScore(animalA, animalB);

  const enemyInfo = isDirectEnemy(animalA, animalB);
  const triangle = areInSameTriangle(animalA, animalB);
  const secretFriends = isSecretFriend(animalA, animalB);

  const zodiacRating =
    zodiacRaw >= 80
      ? CompatibilityRating.Excellent
      : zodiacRaw >= 60
        ? CompatibilityRating.Good
        : zodiacRaw >= 40
          ? CompatibilityRating.Moderate
          : CompatibilityRating.Challenging;

  const love = Math.round(numCompat.love * 0.5 + zodiacLove * 0.5);
  const friendship = Math.round(numCompat.friendship * 0.5 + zodiacFriendship * 0.5);
  const business = Math.round(numCompat.business * 0.5 + zodiacBusiness * 0.5);
  const overallScore = Math.round((love + friendship + business) / 3);

  const strengths: string[] = [];
  const conflicts: string[] = [];
  const recommendations: string[] = [];

  if (love >= 70) strengths.push('Strong emotional and romantic connection — you naturally understand each other\'s needs.');
  else if (love < 40) conflicts.push('Romantic chemistry may require extra nurturing and understanding.');

  if (friendship >= 70) strengths.push('Natural friendship compatibility — you enjoy similar social rhythms.');
  else if (friendship < 40) conflicts.push('Different social styles may create misunderstandings in friendship.');

  if (business >= 70) strengths.push('Excellent collaborative energy — you make a strong team.');
  else if (business < 40) conflicts.push('Working styles differ significantly and may require clear boundaries.');

  if (secretFriends) {
    strengths.push('Secret Friends in the zodiac — a hidden bond that brings unexpected harmony and support.');
  }

  if (triangle) {
    strengths.push('You belong to the same zodiac alliance triangle, sharing core values and life approaches.');
  }

  if (enemyInfo) {
    conflicts.push(`Direct zodiac enemy signs — ${animalA} and ${animalB} have opposing energies that require conscious effort.`);
    recommendations.push(enemyInfo.growthAdvice);
  }

  if (reportA.lifePath === reportB.lifePath) {
    strengths.push(`Shared Life Path number ${reportA.lifePath} — you have deep karmic alignment and similar life purposes.`);
  }

  if (reportA.expression === reportB.expression) {
    strengths.push(`Shared Expression number ${reportA.expression} — you express yourselves in harmonizing ways.`);
  }

  const lpDiff = Math.abs(reportA.lifePath - reportB.lifePath);
  if (lpDiff === 5) {
    conflicts.push('Life Path numbers differ by 5 — you may have fundamentally different approaches to life.');
    recommendations.push('Celebrate your differences as complementary strengths rather than obstacles.');
  }

  if (reportA.soulUrge !== reportB.soulUrge) {
    recommendations.push('Explore each other\'s Soul Urge numbers to understand deeper emotional motivations.');
  }

  recommendations.push('Open communication about your different numerological strengths will deepen your connection.');

  return {
    numerology: numCompat,
    zodiac: {
      love: zodiacLove,
      friendship: zodiacFriendship,
      business: zodiacBusiness,
      animalA: animalA,
      animalB: animalB,
      rating: zodiacRating,
      isEnemy: !!enemyInfo,
      isTriangle: triangle,
      isSecretFriends: secretFriends,
    },
    love,
    friendship,
    business,
    overall: {
      score: overallScore,
      rating: getOverallRating(overallScore),
      description: getOverallDescription(overallScore),
    },
    strengths,
    conflicts,
    recommendations,
  };
}
