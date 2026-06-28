import { describe, it, expect } from 'vitest';
import { getChallenges } from '../challenges';

describe('challenges', () => {
  it('calculates first challenge as |month - day|', () => {
    const c = getChallenges(15, 5, 1990);
    // month=5(5), day=15(6) => |5-6| = 1
    expect(c.first).toBe(1);
  });

  it('calculates second challenge as |day - year|', () => {
    const c = getChallenges(15, 5, 1990);
    // day=15(6), year=1990(1) => |6-1| = 5
    expect(c.second).toBe(5);
  });

  it('calculates third challenge as |first - second|', () => {
    const c = getChallenges(15, 5, 1990);
    // first=1, second=5 => |1-5| = 4
    expect(c.third).toBe(4);
  });

  it('calculates fourth challenge as |month - year|', () => {
    const c = getChallenges(15, 5, 1990);
    // month=5(5), year=1990(1) => |5-1| = 4
    expect(c.fourth).toBe(4);
  });

  it('handles master numbers in challenge reduction', () => {
    // day=29(11->2), month=11(2), year=2000(2)
    const c = getChallenges(29, 11, 2000);
    // first: |2-2| = 0
    expect(c.first).toBe(0);
  });

  it('returns values between 0 and 9', () => {
    const c = getChallenges(1, 1, 1);
    expect(c.first).toBeGreaterThanOrEqual(0);
    expect(c.first).toBeLessThanOrEqual(9);
    expect(c.second).toBeGreaterThanOrEqual(0);
    expect(c.second).toBeLessThanOrEqual(9);
    expect(c.third).toBeGreaterThanOrEqual(0);
    expect(c.third).toBeLessThanOrEqual(9);
    expect(c.fourth).toBeGreaterThanOrEqual(0);
    expect(c.fourth).toBeLessThanOrEqual(9);
  });
});
