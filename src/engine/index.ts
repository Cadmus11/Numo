import type { ProfileData, FullNumerologyReport } from './types';
import { getLifePathNumber, getDayOfBirthNumber, getAttitudeNumber } from './lifePath';
import { getExpressionNumber, getSoulUrgeNumber, getPersonalityNumber } from './nameNumbers';
import {
  getMaturityNumber,
  getGenerationNumber,
  getCornerstone,
  getCapstone,
  getBalanceNumber,
  getSubconsciousSelfNumber,
} from './derivedNumbers';
import { getKarmicLessons, getKarmicDebts } from './karmic';
import { getChallenges } from './challenges';
import { getPinnacles } from './pinnacles';
import { getPersonalCycles, getUniversalCycles } from './cycles';
import { getLuckyInfo } from './lucky';

export function calculateFullProfile(
  data: ProfileData,
  currentDate?: { year: number; month: number; day: number },
): FullNumerologyReport {
  const now = currentDate ?? (() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
  })();

  const fullName = [data.firstName, data.middleName, data.lastName]
    .filter(Boolean)
    .join(' ');

  const lifePath = getLifePathNumber(data.birthDay, data.birthMonth, data.birthYear);
  const dayOfBirth = getDayOfBirthNumber(data.birthDay);
  const attitude = getAttitudeNumber(data.birthMonth, data.birthDay);
  const expression = getExpressionNumber(fullName);
  const soulUrge = getSoulUrgeNumber(fullName);
  const personality = getPersonalityNumber(fullName);
  const maturity = getMaturityNumber(lifePath, expression);
  const generation = getGenerationNumber(data.birthYear);
  const cornerstone = getCornerstone(data.firstName);
  const capstone = getCapstone(fullName);
  const balance = getBalanceNumber(fullName);
  const subconsciousSelf = getSubconsciousSelfNumber(fullName);

  const karmicLessons = getKarmicLessons(fullName);
  const karmicDebts = getKarmicDebts(
    lifePath,
    expression,
    soulUrge,
    personality,
    dayOfBirth,
  );

  const challenges = getChallenges(data.birthDay, data.birthMonth, data.birthYear);
  const pinnacles = getPinnacles(data.birthDay, data.birthMonth, data.birthYear, lifePath);

  const personalCycles = getPersonalCycles(
    data.birthMonth,
    data.birthDay,
    now.year,
    now.month,
    now.day,
  );

  const universalCycles = getUniversalCycles(now.year, now.month, now.day);

  const lucky = getLuckyInfo(lifePath);

  return {
    lifePath,
    dayOfBirth,
    attitude,
    expression,
    soulUrge,
    personality,
    maturity,
    generation,
    cornerstone: cornerstone ?? 0,
    capstone: capstone ?? 0,
    balance,
    rationalThought: maturity,
    subconsciousSelf,
    karmicLessons,
    karmicDebts,
    challenges,
    pinnacles,
    personalCycles,
    universalCycles,
    lucky,
  };
}

export * from './types';
export * from './reduction';
export * from './pythagorean';
export * from './lifePath';
export * from './nameNumbers';
export * from './derivedNumbers';
export * from './karmic';
export * from './challenges';
export * from './pinnacles';
export * from './cycles';
export * from './compatibility';
export * from './lucky';
