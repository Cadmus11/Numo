import { reduceNumber } from './reduction';
import type { PinnacleCycle } from './types';

function pinnacleNumber(a: number, b: number): number {
  return reduceNumber(a + b);
}

export function getPinnacles(
  day: number,
  month: number,
  year: number,
  lifePath: number
): PinnacleCycle[] {
  const reducedMonth = reduceNumber(month, false);
  const reducedDay = reduceNumber(day, false);
  const reducedYear = reduceNumber(year, false);

  const firstEnd = 36 - lifePath;
  const secondEnd = firstEnd + 9;
  const thirdEnd = secondEnd + 9;

  return [
    {
      ageStart: 0,
      ageEnd: firstEnd,
      number: pinnacleNumber(reducedMonth, reducedDay),
    },
    {
      ageStart: firstEnd + 1,
      ageEnd: secondEnd,
      number: pinnacleNumber(reducedDay, reducedYear),
    },
    {
      ageStart: secondEnd + 1,
      ageEnd: thirdEnd,
      number: pinnacleNumber(
        pinnacleNumber(reducedMonth, reducedDay),
        pinnacleNumber(reducedDay, reducedYear)
      ),
    },
    {
      ageStart: thirdEnd + 1,
      ageEnd: 99,
      number: pinnacleNumber(reducedMonth, reducedYear),
    },
  ];
}
