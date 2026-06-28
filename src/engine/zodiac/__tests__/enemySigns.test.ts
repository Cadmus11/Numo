import { describe, it, expect } from 'vitest';
import { Animal } from '../animals';
import { isDirectEnemy, getEnemyPairs } from '../enemySigns';

describe('zodiac/enemySigns', () => {
  describe('isDirectEnemy', () => {
    it('Rat and Horse are enemies', () => {
      const result = isDirectEnemy(Animal.Rat, Animal.Horse);
      expect(result).toBeDefined();
      expect(result!.conflictAreas).toContain('Communication');
    });

    it('is symmetric', () => {
      const a = isDirectEnemy(Animal.Rat, Animal.Horse);
      const b = isDirectEnemy(Animal.Horse, Animal.Rat);
      expect(a).toBeDefined();
      expect(b).toBeDefined();
    });

    it('Rat and Dragon are not enemies', () => {
      expect(isDirectEnemy(Animal.Rat, Animal.Dragon)).toBeUndefined();
    });

    it('checks all 6 enemy pairs', () => {
      expect(isDirectEnemy(Animal.Ox, Animal.Goat)).toBeDefined();
      expect(isDirectEnemy(Animal.Tiger, Animal.Monkey)).toBeDefined();
      expect(isDirectEnemy(Animal.Rabbit, Animal.Rooster)).toBeDefined();
      expect(isDirectEnemy(Animal.Dragon, Animal.Dog)).toBeDefined();
      expect(isDirectEnemy(Animal.Snake, Animal.Pig)).toBeDefined();
    });
  });

  describe('getEnemyPairs', () => {
    it('returns 6 pairs', () => {
      expect(getEnemyPairs()).toHaveLength(6);
    });
  });
});
