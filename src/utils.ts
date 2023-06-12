/** Whether the given number is a natural number. */
export function isNatural(n: number) {
  return Number.isInteger(n) && n >= 0;
}

/** Whether `a` is close to `b`. */
export function isEqualApprox(a: number, b: number, options?: ToleranceOption) {
  if (a === b) return true;

  const epsilon = options?.tolerance ?? Number.EPSILON;
  return Math.abs(a - b) < epsilon;
}

/** Clamp `n` to be between `min` and `max`. */
export function clamp(n: number, options: MinMaxOptions) {
  return Math.min(Math.max(n, options.min), options.max);
}

interface ToleranceOption {
  tolerance: number;
}

interface MinMaxOptions {
  min: number;
  max: number;
}
