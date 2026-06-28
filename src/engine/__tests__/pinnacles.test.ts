import { describe, it, expect } from 'vitest';
import { getPinnacles } from '../pinnacles';

describe('pinnacles', () => {
  it('returns 4 pinnacle cycles', () => {
    const p = getPinnacles(15, 5, 1990, 3);
    expect(p).toHaveLength(4);
  });

  it('calculates correct age ranges', () => {
    const lp = 3; // life path
    const p = getPinnacles(15, 5, 1990, lp);
    // firstEnd = 36 - lp = 33
    expect(p[0].ageStart).toBe(0);
    expect(p[0].ageEnd).toBe(33);
    expect(p[1].ageStart).toBe(34);
    expect(p[1].ageEnd).toBe(42);
    expect(p[2].ageStart).toBe(43);
    expect(p[2].ageEnd).toBe(51);
    expect(p[3].ageStart).toBe(52);
    expect(p[3].ageEnd).toBe(99);
  });

  it('calculates first pinnacle from month + day', () => {
    // month=5, day=15(6) => 5+6=11
    const p = getPinnacles(15, 5, 1990, 3);
    expect(p[0].number).toBe(11);
  });

  it('calculates second pinnacle from day + year', () => {
    // day=15(6), year=1990(1) => 6+1=7
    const p = getPinnacles(15, 5, 1990, 3);
    expect(p[1].number).toBe(7);
  });

  it('calculates third pinnacle from first + second', () => {
    const p = getPinnacles(15, 5, 1990, 3);
    expect(p[2].number).toBe(9); // 11+7=18 => 9
  });

  it('calculates fourth pinnacle from month + year', () => {
    // month=5, year=1990(1) => 5+1=6
    const p = getPinnacles(15, 5, 1990, 3);
    expect(p[3].number).toBe(6);
  });

  it('handles different life path values for age ranges', () => {
    const p = getPinnacles(1, 1, 2000, 7);
    expect(p[0].ageEnd).toBe(29); // 36-7
    expect(p[1].ageStart).toBe(30);
  });
});
