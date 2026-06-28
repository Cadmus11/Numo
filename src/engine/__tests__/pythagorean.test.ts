import { describe, it, expect } from 'vitest';
import { letterToNumber, nameToNumbers, isVowel, isConsonant } from '../pythagorean';

describe('pythagorean', () => {
  describe('letterToNumber', () => {
    it('maps A to 1, Z to 8', () => {
      expect(letterToNumber('A')).toBe(1);
      expect(letterToNumber('Z')).toBe(8);
    });

    it('maps all letters correctly', () => {
      expect(letterToNumber('A')).toBe(1);
      expect(letterToNumber('B')).toBe(2);
      expect(letterToNumber('C')).toBe(3);
      expect(letterToNumber('D')).toBe(4);
      expect(letterToNumber('E')).toBe(5);
      expect(letterToNumber('F')).toBe(6);
      expect(letterToNumber('G')).toBe(7);
      expect(letterToNumber('H')).toBe(8);
      expect(letterToNumber('I')).toBe(9);
      expect(letterToNumber('J')).toBe(1);
      expect(letterToNumber('K')).toBe(2);
      expect(letterToNumber('L')).toBe(3);
      expect(letterToNumber('M')).toBe(4);
      expect(letterToNumber('N')).toBe(5);
      expect(letterToNumber('O')).toBe(6);
      expect(letterToNumber('P')).toBe(7);
      expect(letterToNumber('Q')).toBe(8);
      expect(letterToNumber('R')).toBe(9);
      expect(letterToNumber('S')).toBe(1);
      expect(letterToNumber('T')).toBe(2);
      expect(letterToNumber('U')).toBe(3);
      expect(letterToNumber('V')).toBe(4);
      expect(letterToNumber('W')).toBe(5);
      expect(letterToNumber('X')).toBe(6);
      expect(letterToNumber('Y')).toBe(7);
      expect(letterToNumber('Z')).toBe(8);
    });

    it('handles lowercase input', () => {
      expect(letterToNumber('a')).toBe(1);
      expect(letterToNumber('z')).toBe(8);
    });

    it('returns null for non-letter characters', () => {
      expect(letterToNumber('1')).toBeNull();
      expect(letterToNumber('-')).toBeNull();
      expect(letterToNumber(' ')).toBeNull();
    });
  });

  describe('nameToNumbers', () => {
    it('converts a name to an array of numbers', () => {
      expect(nameToNumbers('ABC')).toEqual([1, 2, 3]);
    });

    it('skips non-letter characters', () => {
      expect(nameToNumbers('A B C')).toEqual([1, 2, 3]);
      expect(nameToNumbers('A1B2C')).toEqual([1, 2, 3]);
    });

    it('handles empty string', () => {
      expect(nameToNumbers('')).toEqual([]);
    });
  });

  describe('isVowel', () => {
    it('returns true for vowels', () => {
      expect(isVowel('A')).toBe(true);
      expect(isVowel('E')).toBe(true);
      expect(isVowel('I')).toBe(true);
      expect(isVowel('O')).toBe(true);
      expect(isVowel('U')).toBe(true);
    });

    it('handles lowercase vowels', () => {
      expect(isVowel('a')).toBe(true);
      expect(isVowel('e')).toBe(true);
    });

    it('returns false for consonants', () => {
      expect(isVowel('B')).toBe(false);
      expect(isVowel('Z')).toBe(false);
    });

    it('returns false for non-letters', () => {
      expect(isVowel('1')).toBe(false);
      expect(isVowel('-')).toBe(false);
    });
  });

  describe('isConsonant', () => {
    it('returns true for consonants', () => {
      expect(isConsonant('B')).toBe(true);
      expect(isConsonant('Z')).toBe(true);
    });

    it('returns false for vowels', () => {
      expect(isConsonant('A')).toBe(false);
      expect(isConsonant('E')).toBe(false);
    });

    it('returns false for non-letters', () => {
      expect(isConsonant('1')).toBe(false);
    });
  });
});
