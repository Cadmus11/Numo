import { describe, it, expect } from 'vitest';
import { getLuckyInfo } from '../lucky';

describe('lucky', () => {
  it('returns numbers, days, months, colors for a life path', () => {
    const info = getLuckyInfo(3);
    expect(info).toHaveProperty('numbers');
    expect(info).toHaveProperty('days');
    expect(info).toHaveProperty('months');
    expect(info).toHaveProperty('colors');
  });

  it('returns correct data for life path 1', () => {
    const info = getLuckyInfo(1);
    expect(info.numbers).toEqual([1, 10, 19, 28]);
    expect(info.days).toEqual(['Sunday']);
    expect(info.months).toEqual(['January', 'October']);
    expect(info.colors).toEqual(['Red', 'Gold']);
  });

  it('returns correct data for life path 9', () => {
    const info = getLuckyInfo(9);
    expect(info.numbers).toEqual([9, 18, 27]);
    expect(info.days).toEqual(['Tuesday', 'Thursday']);
    expect(info.months).toEqual(['March', 'December']);
    expect(info.colors).toEqual(['Red', 'Pink']);
  });

  it('handles master numbers by using reduced value', () => {
    const infoMaster = getLuckyInfo(11);
    // 11 reduces to 2
    expect(infoMaster.numbers).toEqual([2, 11, 20, 29]);
    expect(infoMaster.days).toEqual(['Monday']);
  });

  it('falls back to life path 1 for unknown paths', () => {
    const info = getLuckyInfo(0);
    expect(info.numbers).toBeDefined();
  });
});
