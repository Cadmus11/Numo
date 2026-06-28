import { describe, it, expect } from 'vitest';
import { reduceNumber, isMasterNumber } from '../reduction';

describe('reduction', () => {
  describe('reduceNumber', () => {
    it('reduces a single digit to itself', () => {
      expect(reduceNumber(5)).toBe(5);
    });

    it('reduces a multi-digit number to a single digit', () => {
      expect(reduceNumber(123)).toBe(6);
      expect(reduceNumber(999)).toBe(9);
      expect(reduceNumber(1000)).toBe(1);
    });

    it('preserves master numbers 11, 22, 33 by default', () => {
      expect(reduceNumber(11)).toBe(11);
      expect(reduceNumber(22)).toBe(22);
      expect(reduceNumber(33)).toBe(33);
    });

    it('reduces master numbers when allowMaster is false', () => {
      expect(reduceNumber(11, false)).toBe(2);
      expect(reduceNumber(22, false)).toBe(4);
      expect(reduceNumber(33, false)).toBe(6);
    });

    it('reduces numbers that sum to master numbers', () => {
      expect(reduceNumber(29)).toBe(11);
      expect(reduceNumber(38)).toBe(11);
      expect(reduceNumber(47)).toBe(11);
      expect(reduceNumber(56)).toBe(11);
      expect(reduceNumber(65)).toBe(11);
    });

    it('does not preserve intermediate master number when not final', () => {
      expect(reduceNumber(112)).not.toBe(11);
    });

    it('handles zero', () => {
      expect(reduceNumber(0)).toBe(0);
    });
  });

  describe('isMasterNumber', () => {
    it('returns true for 11, 22, 33', () => {
      expect(isMasterNumber(11)).toBe(true);
      expect(isMasterNumber(22)).toBe(true);
      expect(isMasterNumber(33)).toBe(true);
    });

    it('returns false for other numbers', () => {
      expect(isMasterNumber(1)).toBe(false);
      expect(isMasterNumber(10)).toBe(false);
      expect(isMasterNumber(44)).toBe(false);
    });
  });
});
