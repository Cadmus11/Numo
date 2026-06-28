import { describe, it, expect } from 'vitest';
import {
  getPersonalYear,
  getPersonalMonth,
  getPersonalDay,
  getPersonalCycles,
  getUniversalYear,
  getUniversalMonth,
  getUniversalDay,
  getUniversalCycles,
} from '../cycles';

describe('cycles', () => {
  describe('getPersonalYear', () => {
    it('calculates personal year from birth date and current year', () => {
      // birth month=5, day=15(6), current year=2026(1) => 5+6+1=12 => 3
      expect(getPersonalYear(5, 15, 2026)).toBe(3);
    });

    it('handles master numbers in components', () => {
      // month=11(2), day=29(2), year=2024(8) => 2+2+8=12 => 3
      expect(getPersonalYear(11, 29, 2024)).toBe(3);
    });
  });

  describe('getPersonalMonth', () => {
    it('calculates personal month from personal year and current month', () => {
      // PY=3, month=6 => 3+6=9
      expect(getPersonalMonth(3, 6)).toBe(9);
    });

    it('reduces current month', () => {
      // PY=3, month=12(3) => 3+3=6
      expect(getPersonalMonth(3, 12)).toBe(6);
    });
  });

  describe('getPersonalDay', () => {
    it('calculates personal day from personal month and current day', () => {
      // PM=5, day=15(6) => 5+6=11
      expect(getPersonalDay(5, 15)).toBe(11);
    });
  });

  describe('getPersonalCycles', () => {
    it('returns all three personal cycles', () => {
      const c = getPersonalCycles(5, 15, 2026, 6, 20);
      expect(c).toHaveProperty('personalYear');
      expect(c).toHaveProperty('personalMonth');
      expect(c).toHaveProperty('personalDay');
      expect(typeof c.personalYear).toBe('number');
      expect(typeof c.personalMonth).toBe('number');
      expect(typeof c.personalDay).toBe('number');
    });
  });

  describe('getUniversalYear', () => {
    it('reduces current year', () => {
      expect(getUniversalYear(2026)).toBe(1);
      expect(getUniversalYear(2024)).toBe(8);
    });
  });

  describe('getUniversalMonth', () => {
    it('combines universal year and month', () => {
      expect(getUniversalMonth(1, 6)).toBe(7);
    });
  });

  describe('getUniversalDay', () => {
    it('combines universal month and day', () => {
      expect(getUniversalDay(7, 15)).toBe(4); // 7+6=13 => 4
    });
  });

  describe('getUniversalCycles', () => {
    it('returns all three universal cycles', () => {
      const c = getUniversalCycles(2026, 6, 20);
      expect(c).toHaveProperty('universalYear');
      expect(c).toHaveProperty('universalMonth');
      expect(c).toHaveProperty('universalDay');
    });
  });
});
