import { describe, it, expect } from 'vitest';
import { getCompatibility } from '../compatibility';

describe('compatibility', () => {
  it('returns love, friendship, business scores', () => {
    const result = getCompatibility(3, 3, 6, 6, 8, 8, 5, 5);
    expect(result).toHaveProperty('love');
    expect(result).toHaveProperty('friendship');
    expect(result).toHaveProperty('business');
  });

  it('scores 90 when life paths match', () => {
    const result = getCompatibility(3, 3, 6, 7, 8, 9, 5, 4);
    // Matching life paths contribute 90*0.3=27 to love
    expect(result.love).toBeGreaterThan(50);
  });

  it('scores within 0-100 range', () => {
    // Extreme opposites
    const low = getCompatibility(1, 9, 1, 9, 1, 9, 1, 9);
    expect(low.love).toBeGreaterThanOrEqual(0);
    expect(low.love).toBeLessThanOrEqual(100);
    expect(low.friendship).toBeGreaterThanOrEqual(0);
    expect(low.friendship).toBeLessThanOrEqual(100);
    expect(low.business).toBeGreaterThanOrEqual(0);
    expect(low.business).toBeLessThanOrEqual(100);

    // Perfect match
    const high = getCompatibility(3, 3, 6, 6, 8, 8, 5, 5);
    expect(high.love).toBeGreaterThanOrEqual(0);
    expect(high.love).toBeLessThanOrEqual(100);
  });

  it('gives higher scores for matching numbers', () => {
    const match = getCompatibility(3, 3, 6, 6, 8, 8, 5, 5);
    const mismatch = getCompatibility(1, 9, 1, 9, 1, 9, 1, 9);
    expect(match.love).toBeGreaterThan(mismatch.love);
    expect(match.friendship).toBeGreaterThan(mismatch.friendship);
    expect(match.business).toBeGreaterThan(mismatch.business);
  });
});
