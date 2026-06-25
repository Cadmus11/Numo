import { reduceNumber } from './reduction';

export function getLifePathNumber(day: number, month: number, year: number): number {
  const reducedDay = reduceNumber(day, false);
  const reducedMonth = reduceNumber(month, false);
  const reducedYear = reduceNumber(year, false);
  const total = reducedDay + reducedMonth + reducedYear;
  return reduceNumber(total);
}

export function getDayOfBirthNumber(day: number): number {
  return reduceNumber(day);
}

export function getAttitudeNumber(month: number, day: number): number {
  return reduceNumber(month + day);
}
