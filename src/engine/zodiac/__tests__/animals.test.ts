import { describe, it, expect } from 'vitest';
import { Animal, getAnimal, getAnimalYears } from '../animals';

describe('zodiac/animals', () => {
  describe('getAnimal', () => {
    it('returns Rat for 2020', () => {
      expect(getAnimal(2020)).toBe(Animal.Rat);
    });

    it('returns Ox for 2021', () => {
      expect(getAnimal(2021)).toBe(Animal.Ox);
    });

    it('returns Tiger for 2022', () => {
      expect(getAnimal(2022)).toBe(Animal.Tiger);
    });

    it('returns Rabbit for 2023', () => {
      expect(getAnimal(2023)).toBe(Animal.Rabbit);
    });

    it('returns Dragon for 2024', () => {
      expect(getAnimal(2024)).toBe(Animal.Dragon);
    });

    it('returns Snake for 2025', () => {
      expect(getAnimal(2025)).toBe(Animal.Snake);
    });

    it('returns Horse for 2026', () => {
      expect(getAnimal(2026)).toBe(Animal.Horse);
    });

    it('returns Goat for 2027', () => {
      expect(getAnimal(2027)).toBe(Animal.Goat);
    });

    it('returns Monkey for 2028', () => {
      expect(getAnimal(2028)).toBe(Animal.Monkey);
    });

    it('returns Rooster for 2029', () => {
      expect(getAnimal(2029)).toBe(Animal.Rooster);
    });

    it('returns Dog for 2030', () => {
      expect(getAnimal(2030)).toBe(Animal.Dog);
    });

    it('returns Pig for 2031', () => {
      expect(getAnimal(2031)).toBe(Animal.Pig);
    });

    it('handles year 4 (Rat, index 0)', () => {
      expect(getAnimal(4)).toBe(Animal.Rat);
    });

    it('handles years before 4', () => {
      expect(getAnimal(1)).toBe(Animal.Rooster); // 1-4=-3 => (-3%12+12)%12=9 => Rooster
      expect(getAnimal(0)).toBe(Animal.Monkey); // 0-4=-4 => (-4%12+12)%12=8 => Monkey
    });
  });

  describe('getAnimalYears', () => {
    it('returns correct years for Rat starting from 2020', () => {
      const years = getAnimalYears(Animal.Rat, 2020, 3);
      expect(years).toEqual([2020, 2032, 2044]);
    });

    it('returns correct years for Dragon', () => {
      const years = getAnimalYears(Animal.Dragon, 2020, 2);
      expect(years).toEqual([2024, 2036]);
    });
  });
});
