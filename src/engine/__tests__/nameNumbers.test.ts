import { describe, it, expect } from 'vitest';
import { getExpressionNumber, getSoulUrgeNumber, getPersonalityNumber } from '../nameNumbers';

describe('nameNumbers', () => {
  describe('getExpressionNumber', () => {
    it('calculates expression number for a simple name', () => {
      // A=1, B=2, C=3 => sum=6
      expect(getExpressionNumber('ABC')).toBe(6);
    });

    it('calculates expression for a full name', () => {
      // JOHN = 1+6+8+5 = 20 => 2
      // DOE = 4+6+5 = 15 => 6
      // total = 35 => 8
      expect(getExpressionNumber('JOHN DOE')).toBe(8);
    });

    it('ignores non-letter characters', () => {
      expect(getExpressionNumber('JOHN DOE 123!@#')).toBe(8);
    });
  });

  describe('getSoulUrgeNumber', () => {
    it('calculates soul urge from vowels only', () => {
      // JOHN: O=6 => 6
      // DOE: O=6, E=5 => 11 => 2
      // total soul urge = 6 + 11 = 17 => 8
      expect(getSoulUrgeNumber('JOHN DOE')).toBe(8);
    });

    it('handles names with only vowels', () => {
      expect(getSoulUrgeNumber('A E I')).toBe(6);
    });

    it('handles name with no vowels', () => {
      // Y is not a vowel in this system, so "BCDF" has no vowels => sum=0
      expect(getSoulUrgeNumber('BCDF')).toBe(0);
    });
  });

  describe('getPersonalityNumber', () => {
    it('calculates personality from consonants only', () => {
      // JOHN: J=1, H=8, N=5 => 14 => 5
      // DOE: D=4 => 4
      // total = 5 + 4 = 9
      expect(getPersonalityNumber('JOHN DOE')).toBe(9);
    });

    it('handles name with only consonants', () => {
      // B=2, C=3, D=4, F=6 => sum=15 => 6
      expect(getPersonalityNumber('BCDF')).toBe(6);
    });
  });

  it('expression + soul urge + personality relationship for a known name', () => {
    const expr = getExpressionNumber('JOHN DOE');
    const soul = getSoulUrgeNumber('JOHN DOE');
    const pers = getPersonalityNumber('JOHN DOE');
    // expression = soul urge + personality (in raw sum, before reduction)
    expect(expr).toBe(8);
    expect(soul).toBe(8);
    expect(pers).toBe(9);
  });
});
