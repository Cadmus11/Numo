import { describe, it, expect } from 'vitest';
import { Element, ElementYinYang, getElement, getYinYang, getFullElement } from '../elements';

describe('zodiac/elements', () => {
  describe('getElement', () => {
    it('returns Metal for years ending in 0 or 1', () => {
      expect(getElement(1990)).toBe(Element.Metal);
      expect(getElement(1991)).toBe(Element.Metal);
    });

    it('returns Water for years ending in 2 or 3', () => {
      expect(getElement(1992)).toBe(Element.Water);
      expect(getElement(1993)).toBe(Element.Water);
    });

    it('returns Wood for years ending in 4 or 5', () => {
      expect(getElement(1994)).toBe(Element.Wood);
      expect(getElement(1995)).toBe(Element.Wood);
    });

    it('returns Fire for years ending in 6 or 7', () => {
      expect(getElement(1996)).toBe(Element.Fire);
      expect(getElement(1997)).toBe(Element.Fire);
    });

    it('returns Earth for years ending in 8 or 9', () => {
      expect(getElement(1998)).toBe(Element.Earth);
      expect(getElement(1999)).toBe(Element.Earth);
    });
  });

  describe('getYinYang', () => {
    it('returns Yang for even last digits', () => {
      expect(getYinYang(1990)).toBe(ElementYinYang.Yang);
      expect(getYinYang(1992)).toBe(ElementYinYang.Yang);
    });

    it('returns Yin for odd last digits', () => {
      expect(getYinYang(1991)).toBe(ElementYinYang.Yin);
      expect(getYinYang(1993)).toBe(ElementYinYang.Yin);
    });
  });

  describe('getFullElement', () => {
    it('returns both element and yinYang', () => {
      const result = getFullElement(1990);
      expect(result.element).toBe(Element.Metal);
      expect(result.yinYang).toBe(ElementYinYang.Yang);
    });
  });
});
