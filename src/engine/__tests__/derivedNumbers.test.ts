import { describe, it, expect } from 'vitest';
import {
  getMaturityNumber,
  getGenerationNumber,
  getCornerstone,
  getCapstone,
  getBalanceNumber,
  getRationalThoughtNumber,
  getSubconsciousSelfNumber,
} from '../derivedNumbers';

describe('derivedNumbers', () => {
  describe('getMaturityNumber', () => {
    it('sums life path and expression', () => {
      expect(getMaturityNumber(3, 5)).toBe(8);
      expect(getMaturityNumber(11, 7)).toBe(9); // 11+7=18 => 9
    });
  });

  describe('getGenerationNumber', () => {
    it('reduces birth year', () => {
      expect(getGenerationNumber(1990)).toBe(1);
      expect(getGenerationNumber(2000)).toBe(2);
      expect(getGenerationNumber(2024)).toBe(8);
    });
  });

  describe('getCornerstone', () => {
    it('returns number of first letter', () => {
      expect(getCornerstone('John')).toBe(1);
      expect(getCornerstone('Alice')).toBe(1);
      expect(getCornerstone('Bob')).toBe(2);
    });

    it('returns null for empty string', () => {
      expect(getCornerstone('')).toBeNull();
    });

    it('handles leading spaces', () => {
      expect(getCornerstone('  John')).toBe(1);
    });
  });

  describe('getCapstone', () => {
    it('returns number of last letter of last word', () => {
      expect(getCapstone('John')).toBe(5); // N=5
      expect(getCapstone('John Doe')).toBe(5); // E=5
    });

    it('returns null for empty string', () => {
      expect(getCapstone('')).toBeNull();
    });
  });

  describe('getBalanceNumber', () => {
    it('calculates from initials', () => {
      // J=1, D=4 => sum=5
      expect(getBalanceNumber('John Doe')).toBe(5);
    });

    it('returns 0 for empty string', () => {
      expect(getBalanceNumber('')).toBe(0);
    });

    it('handles multiple words', () => {
      // J=1, M=4, D=4 => sum=9
      expect(getBalanceNumber('John Michael Doe')).toBe(9);
    });
  });

  describe('getRationalThoughtNumber', () => {
    it('same as maturity number', () => {
      expect(getRationalThoughtNumber(3, 5)).toBe(8);
      expect(getRationalThoughtNumber(7, 9)).toBe(7);
    });
  });

  describe('getSubconsciousSelfNumber', () => {
    it('counts distinct numbers in name', () => {
      // ABC = 1,2,3 => 3 distinct
      expect(getSubconsciousSelfNumber('ABC')).toBe(3);
    });

    it('ignores duplicate numbers', () => {
      // AB = 1,2 => 2 distinct
      expect(getSubconsciousSelfNumber('ABAB')).toBe(2);
    });
  });
});
