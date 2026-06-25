const MASTER_NUMBERS = new Set([11, 22, 33]);

export function isMasterNumber(n: number): boolean {
  return MASTER_NUMBERS.has(n);
}

export function reduceNumber(n: number, allowMaster: boolean = true): number {
  let num = n;
  while (num > 9 && !(allowMaster && isMasterNumber(num))) {
    num = String(num)
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return num;
}
