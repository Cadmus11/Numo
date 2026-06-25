import { reduceNumber } from './reduction';
import type { PersonalCycles, UniversalCycles } from './types';

export function getPersonalYear(month: number, day: number, year: number): number {
  const reducedMonth = reduceNumber(month, false);
  const reducedDay = reduceNumber(day, false);
  const reducedYear = reduceNumber(year, false);
  return reduceNumber(reducedMonth + reducedDay + reducedYear);
}

export function getPersonalMonth(personalYear: number, currentMonth: number): number {
  return reduceNumber(personalYear + reduceNumber(currentMonth, false));
}

export function getPersonalDay(personalMonth: number, currentDay: number): number {
  return reduceNumber(personalMonth + reduceNumber(currentDay, false));
}

export function getPersonalCycles(
  birthMonth: number,
  birthDay: number,
  currentYear: number,
  currentMonth: number,
  currentDay: number,
): PersonalCycles {
  const personalYear = getPersonalYear(birthMonth, birthDay, currentYear);
  const personalMonth = getPersonalMonth(personalYear, currentMonth);
  const personalDay = getPersonalDay(personalMonth, currentDay);
  return { personalYear, personalMonth, personalDay };
}

export function getUniversalYear(year: number): number {
  return reduceNumber(year);
}

export function getUniversalMonth(universalYear: number, currentMonth: number): number {
  return reduceNumber(universalYear + reduceNumber(currentMonth, false));
}

export function getUniversalDay(universalMonth: number, currentDay: number): number {
  return reduceNumber(universalMonth + reduceNumber(currentDay, false));
}

export function getUniversalCycles(
  currentYear: number,
  currentMonth: number,
  currentDay: number,
): UniversalCycles {
  const universalYear = getUniversalYear(currentYear);
  const universalMonth = getUniversalMonth(universalYear, currentMonth);
  const universalDay = getUniversalDay(universalMonth, currentDay);
  return { universalYear, universalMonth, universalDay };
}
