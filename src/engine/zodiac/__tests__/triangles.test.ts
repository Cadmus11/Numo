import { describe, it, expect } from 'vitest';
import { Animal } from '../animals';
import {
  getAllianceGroups,
  getAllianceGroup,
  areInSameTriangle,
  getSecretFriend,
  isSecretFriend,
} from '../triangles';

describe('zodiac/triangles', () => {
  describe('getAllianceGroups', () => {
    it('returns 4 groups', () => {
      expect(getAllianceGroups()).toHaveLength(4);
    });
  });

  describe('getAllianceGroup', () => {
    it('Rat belongs to The Innovators', () => {
      const group = getAllianceGroup(Animal.Rat);
      expect(group).toBeDefined();
      expect(group!.title).toBe('The Innovators');
    });

    it('returns undefined for unknown animals (all animals should be in a group)', () => {
      const allAnimals = Object.values(Animal);
      for (const animal of allAnimals) {
        expect(getAllianceGroup(animal)).toBeDefined();
      }
    });
  });

  describe('areInSameTriangle', () => {
    it('Rat and Dragon are in same triangle', () => {
      expect(areInSameTriangle(Animal.Rat, Animal.Dragon)).toBe(true);
    });

    it('Rat and Horse are not in same triangle', () => {
      expect(areInSameTriangle(Animal.Rat, Animal.Horse)).toBe(false);
    });
  });

  describe('getSecretFriend', () => {
    it("Rat's secret friend is Ox", () => {
      expect(getSecretFriend(Animal.Rat)).toBe(Animal.Ox);
    });

    it("Ox's secret friend is Rat", () => {
      expect(getSecretFriend(Animal.Ox)).toBe(Animal.Rat);
    });

    it('returns the other animal in the pair', () => {
      expect(getSecretFriend(Animal.Tiger)).toBe(Animal.Pig);
      expect(getSecretFriend(Animal.Pig)).toBe(Animal.Tiger);
    });
  });

  describe('isSecretFriend', () => {
    it('Rat and Ox are secret friends', () => {
      expect(isSecretFriend(Animal.Rat, Animal.Ox)).toBe(true);
    });

    it('is symmetric', () => {
      expect(isSecretFriend(Animal.Rat, Animal.Ox)).toBe(isSecretFriend(Animal.Ox, Animal.Rat));
    });

    it('Rat and Dragon are not secret friends', () => {
      expect(isSecretFriend(Animal.Rat, Animal.Dragon)).toBe(false);
    });
  });
});
