import { describe, it, expect } from 'vitest';
import { Animal } from '../animals';
import {
  CompatibilityRating,
  getZodiacCompatibility,
  getZodiacCompatibilityScore,
} from '../compatibility';

describe('zodiac/compatibility', () => {
  describe('getZodiacCompatibility', () => {
    it('Rat + Dragon is Excellent', () => {
      expect(getZodiacCompatibility(Animal.Rat, Animal.Dragon)).toBe(CompatibilityRating.Excellent);
    });

    it('Rat + Horse is Challenging', () => {
      expect(getZodiacCompatibility(Animal.Rat, Animal.Horse)).toBe(
        CompatibilityRating.Challenging
      );
    });

    it('Tiger + Pig is Excellent', () => {
      expect(getZodiacCompatibility(Animal.Tiger, Animal.Pig)).toBe(CompatibilityRating.Excellent);
    });

    it('Rabbit + Rooster is Challenging', () => {
      expect(getZodiacCompatibility(Animal.Rabbit, Animal.Rooster)).toBe(
        CompatibilityRating.Challenging
      );
    });

    it('is symmetric', () => {
      expect(getZodiacCompatibility(Animal.Rat, Animal.Dragon)).toBe(
        getZodiacCompatibility(Animal.Dragon, Animal.Rat)
      );
    });
  });

  describe('getZodiacCompatibilityScore', () => {
    it('maps Excellent to 90', () => {
      expect(getZodiacCompatibilityScore(Animal.Rat, Animal.Dragon)).toBe(90);
    });

    it('maps Good to 70', () => {
      expect(getZodiacCompatibilityScore(Animal.Rat, Animal.Pig)).toBe(70);
      expect(getZodiacCompatibilityScore(Animal.Rat, Animal.Rooster)).toBe(70);
    });

    it('maps Moderate to 50', () => {
      expect(getZodiacCompatibilityScore(Animal.Rat, Animal.Rabbit)).toBe(50);
    });

    it('maps Challenging to 30', () => {
      expect(getZodiacCompatibilityScore(Animal.Rat, Animal.Horse)).toBe(30);
    });
  });
});
