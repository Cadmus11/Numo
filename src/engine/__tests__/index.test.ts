import { describe, it, expect } from 'vitest';
import { getExpressionNumber, getSoulUrgeNumber, getPersonalityNumber } from '../nameNumbers';
import { calculateFullProfile } from '..';

describe('calculateFullProfile (integration)', () => {
  const profile = {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    nickname: 'Johnny',
    birthDay: 15,
    birthMonth: 5,
    birthYear: 1990,
  };

  it('returns a complete FullNumerologyReport', () => {
    const report = calculateFullProfile(profile);
    expect(report).toHaveProperty('lifePath');
    expect(report).toHaveProperty('dayOfBirth');
    expect(report).toHaveProperty('attitude');
    expect(report).toHaveProperty('expression');
    expect(report).toHaveProperty('soulUrge');
    expect(report).toHaveProperty('personality');
    expect(report).toHaveProperty('maturity');
    expect(report).toHaveProperty('generation');
    expect(report).toHaveProperty('cornerstone');
    expect(report).toHaveProperty('capstone');
    expect(report).toHaveProperty('balance');
    expect(report).toHaveProperty('rationalThought');
    expect(report).toHaveProperty('subconsciousSelf');
    expect(report).toHaveProperty('karmicLessons');
    expect(report).toHaveProperty('karmicDebts');
    expect(report).toHaveProperty('challenges');
    expect(report).toHaveProperty('pinnacles');
    expect(report).toHaveProperty('personalCycles');
    expect(report).toHaveProperty('universalCycles');
    expect(report).toHaveProperty('lucky');
  });

  it('calculates life path correctly', () => {
    const report = calculateFullProfile(profile);
    // LP = reduceNumber(reduceNumber(15,false) + reduceNumber(5,false) + reduceNumber(1990,false))
    // = reduceNumber(6 + 5 + 1) = reduceNumber(12) = 3
    expect(report.lifePath).toBe(3);
  });

  it('calculates day of birth', () => {
    const report = calculateFullProfile(profile);
    expect(report.dayOfBirth).toBe(6); // 15 => 1+5 = 6
  });

  it('calculates attitude number', () => {
    const report = calculateFullProfile(profile);
    expect(report.attitude).toBe(2); // 5+15 = 20 => 2
  });

  it('calculates expression number', () => {
    const report = calculateFullProfile(profile);
    // Full name: "John Michael Doe"
    const expr = getExpressionNumber('John Michael Doe');
    expect(report.expression).toBe(expr);
  });

  it('calculates soul urge number', () => {
    const report = calculateFullProfile(profile);
    const soul = getSoulUrgeNumber('John Michael Doe');
    expect(report.soulUrge).toBe(soul);
  });

  it('calculates personality number', () => {
    const report = calculateFullProfile(profile);
    const pers = getPersonalityNumber('John Michael Doe');
    expect(report.personality).toBe(pers);
  });

  it('provides karmic lessons array', () => {
    const report = calculateFullProfile(profile);
    expect(Array.isArray(report.karmicLessons)).toBe(true);
    expect(report.karmicLessons.every((n: number) => n >= 1 && n <= 9)).toBe(true);
  });

  it('provides pinnacles array with 4 cycles', () => {
    const report = calculateFullProfile(profile);
    expect(report.pinnacles).toHaveLength(4);
  });

  it('provides challenge set', () => {
    const report = calculateFullProfile(profile);
    expect(report.challenges).toHaveProperty('first');
    expect(report.challenges).toHaveProperty('second');
    expect(report.challenges).toHaveProperty('third');
    expect(report.challenges).toHaveProperty('fourth');
  });

  it('provides luck info', () => {
    const report = calculateFullProfile(profile);
    expect(report.lucky).toHaveProperty('numbers');
    expect(report.lucky).toHaveProperty('days');
    expect(report.lucky).toHaveProperty('months');
    expect(report.lucky).toHaveProperty('colors');
  });

  it('uses custom current date when provided', () => {
    const report = calculateFullProfile(profile, { year: 2025, month: 6, day: 1 });
    expect(report.personalCycles.personalYear).toBeDefined();
    expect(report.universalCycles.universalYear).toBeDefined();
  });
});
