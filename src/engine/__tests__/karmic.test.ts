import { describe, it, expect } from 'vitest';
import {
  isKarmicDebtNumber,
  getKarmicLessons,
  getKarmicDebtsFromNumbers,
  getKarmicDebts,
} from '../karmic';

describe('karmic', () => {
  describe('isKarmicDebtNumber', () => {
    it('returns true for 13, 14, 16, 19', () => {
      expect(isKarmicDebtNumber(13)).toBe(true);
      expect(isKarmicDebtNumber(14)).toBe(true);
      expect(isKarmicDebtNumber(16)).toBe(true);
      expect(isKarmicDebtNumber(19)).toBe(true);
    });

    it('returns false for other numbers', () => {
      expect(isKarmicDebtNumber(1)).toBe(false);
      expect(isKarmicDebtNumber(11)).toBe(false);
      expect(isKarmicDebtNumber(22)).toBe(false);
    });
  });

  describe('getKarmicLessons', () => {
    it('finds missing numbers 1-9 in name', () => {
      // A=1, B=2, C=3 => missing 4,5,6,7,8,9
      expect(getKarmicLessons('ABC')).toEqual([4, 5, 6, 7, 8, 9]);
    });

    it('returns empty array when all numbers present', () => {
      // Need letters covering 1-9: A(1)B(2)C(3)D(4)E(5)F(6)G(7)H(8)I(9)
      expect(getKarmicLessons('ABCDEFGHI')).toEqual([]);
    });

    it('returns empty for empty name', () => {
      expect(getKarmicLessons('')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('getKarmicDebtsFromNumbers', () => {
    it('finds debt numbers from raw numbers', () => {
      expect(getKarmicDebtsFromNumbers([13, 5, 7])).toEqual([13]);
    });

    it('reduces numbers to check for intermediate debt', () => {
      // 31 -> 4, no debt
      expect(getKarmicDebtsFromNumbers([31])).toEqual([]);
      // 49 -> 13 -> 4, debt detected
      expect(getKarmicDebtsFromNumbers([49])).toEqual([13]);
    });

    it('returns unique debt numbers', () => {
      expect(getKarmicDebtsFromNumbers([49, 58])).toEqual([13]); // both reduce through 13
    });

    it('handles empty input', () => {
      expect(getKarmicDebtsFromNumbers([])).toEqual([]);
    });
  });

  describe('getKarmicDebts', () => {
    it('combines source numbers and finds debts', () => {
      const debts = getKarmicDebts(13, 14, 5, 7, 11);
      expect(debts).toContain(13);
      expect(debts).toContain(14);
    });
  });
});
