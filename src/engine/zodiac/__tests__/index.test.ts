import { describe, it, expect } from 'vitest';
import { getFullZodiacProfile } from '../index';

describe('zodiac/index (integration)', () => {
  it('returns full zodiac profile for a given year', () => {
    const profile = getFullZodiacProfile(1990);
    expect(profile).toHaveProperty('animal');
    expect(profile).toHaveProperty('element');
    expect(profile).toHaveProperty('yinYang');
    expect(profile).toHaveProperty('allianceGroup');
    expect(profile).toHaveProperty('secretFriend');
  });

  it('returns correct animal for 1990 (Horse)', () => {
    const profile = getFullZodiacProfile(1990);
    expect(profile.animal).toBe('Horse');
  });

  it('returns element based on year', () => {
    const profile = getFullZodiacProfile(1990);
    expect(profile.element).toBe('Metal');
  });

  it('returns yinYang based on year', () => {
    const profile = getFullZodiacProfile(1991);
    expect(profile.yinYang).toBe('Yin');
  });

  it('returns alliance group for known animals', () => {
    const profile = getFullZodiacProfile(1990); // Horse
    expect(profile.allianceGroup).toBeDefined();
    expect(profile.allianceGroup!.title).toBe('The Adventurers');
  });

  it('returns secret friend for known animals', () => {
    const profile = getFullZodiacProfile(1990); // Horse -> Goat
    expect(profile.secretFriend).toBe('Goat');
  });
});
