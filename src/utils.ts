/** Whether the given number is a natural number */
export function isNatural(n: number) {
  return Number.isInteger(n) && n >= 0;
}

/** Whether `a` is close to `b` */
export function isEqualApprox(
  a: number,
  b: number,
  tolerance = Number.EPSILON,
) {
  if (a === b) return true;

  return Math.abs(a - b) < tolerance;
}
