import { describe, it, expect } from 'vitest';
import { compareProfiles } from '../combined';
import { calculateFullProfile } from '..';

function makeProfile(
  firstName: string,
  lastName: string,
  day: number,
  month: number,
  year: number
) {
  return calculateFullProfile(
    { firstName, lastName, birthDay: day, birthMonth: month, birthYear: year },
    { year: 2026, month: 6, day: 20 }
  );
}

describe('combined', () => {
  const reportA = makeProfile('Alice', 'Smith', 15, 5, 1990);
  const reportB = makeProfile('Bob', 'Jones', 20, 8, 1988);

  it('returns CombinedCompatibility with all sections', () => {
    const result = compareProfiles(reportA, reportB, 1990, 1988);
    expect(result).toHaveProperty('numerology');
    expect(result).toHaveProperty('zodiac');
    expect(result).toHaveProperty('love');
    expect(result).toHaveProperty('friendship');
    expect(result).toHaveProperty('business');
    expect(result).toHaveProperty('overall');
    expect(result).toHaveProperty('strengths');
    expect(result).toHaveProperty('conflicts');
    expect(result).toHaveProperty('recommendations');
  });

  it('scores are in 0-100 range', () => {
    const result = compareProfiles(reportA, reportB, 1990, 1988);
    expect(result.love).toBeGreaterThanOrEqual(0);
    expect(result.love).toBeLessThanOrEqual(100);
    expect(result.friendship).toBeGreaterThanOrEqual(0);
    expect(result.friendship).toBeLessThanOrEqual(100);
    expect(result.business).toBeGreaterThanOrEqual(0);
    expect(result.business).toBeLessThanOrEqual(100);
  });

  it('identifies zodiac animals', () => {
    const result = compareProfiles(reportA, reportB, 1990, 1988);
    expect(result.zodiac.animalA).toBeDefined();
    expect(result.zodiac.animalB).toBeDefined();
  });

  it('returns array of strengths, conflicts, recommendations', () => {
    const result = compareProfiles(reportA, reportB, 1990, 1988);
    expect(Array.isArray(result.strengths)).toBe(true);
    expect(Array.isArray(result.conflicts)).toBe(true);
    expect(Array.isArray(result.recommendations)).toBe(true);
  });

  it('handles same profile comparison', () => {
    const result = compareProfiles(reportA, reportA, 1990, 1990);
    expect(result.love).toBeGreaterThanOrEqual(0);
    expect(result.zodiac.animalA).toBe(result.zodiac.animalB);
  });
});
