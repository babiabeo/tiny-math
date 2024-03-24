/**
 * Whether the given number is a natural number.
 *
 * @example
 * ```ts
 * import { isNatural } from "@babia/tiny-math";
 *
 * isNatural(0);    // true
 * isNatural(43.5); // false
 * isNatural(-1);   // false
 * ```
 */
export function isNatural(n: number): boolean {
  return Number.isInteger(n) && n >= 0;
}

/**
 * Whether `a` is close to `b`.
 *
 * @example
 * ```ts
 * import { isEqualApprox } from "@babia/tiny-math";
 *
 * isEqualApprox(0.5555, 0.5); // false
 * isEqualApprox(0.1 + 0.2, 0.3); // true
 * isEqualApprox(0.4999999, 0.5, { tolerance: 0.0001 }); // true
 * ```
 */
export function isEqualApprox(
  a: number,
  b: number,
  options?: ToleranceOption,
): boolean {
  if (a === b) return true;

  const epsilon = options?.tolerance ?? Number.EPSILON;
  return Math.abs(a - b) < epsilon;
}

/**
 * Clamp `n` to be between `min` and `max`.
 *
 * @example
 * ```ts
 * import { clamp } from "@babia/tiny-math";
 *
 * clamp(4, { min: 9, max: 15 }); // 9
 * clamp(80, { min: 20, max: 100 }); // 80
 * clamp(-1, { min: -10, max: -4 }); // -4
 * ```
 */
export function clamp(n: number, options: MinMaxOptions): number {
  return Math.min(Math.max(n, options.min), options.max);
}

export interface ToleranceOption {
  tolerance: number;
}

export interface MinMaxOptions {
  min: number;
  max: number;
}
