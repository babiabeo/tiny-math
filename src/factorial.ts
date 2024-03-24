import { isNatural } from "./utils.ts";

/**
 * Returns the {@link https://en.wikipedia.org/wiki/Factorial | factorial} of the given natural number.
 * Returns `NaN` if `n` is not a natural number.
 *
 * @example
 * ```ts
 * import { factorial } from "@babia/tiny-math";
 *
 * factorial(0); // 0! = 1
 * factorial(10); // 10! = 3628800
 * factorial(-1); // NaN
 * ```
 */
export function factorial(n: number): number {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;
}

/**
 * Returns the {@link https://en.wikipedia.org/wiki/Double_factorial | double factorial} of the given natural number.
 * Returns `NaN` if `n` is not a natural number.
 *
 * @example
 * ```ts
 * import { doubleFactorial } from "@babia/tiny-math";
 *
 * doubleFactorial(0); // 0!! = 1
 * doubleFactorial(10); // 10!! = 3840
 * doubleFactorial(-1); // NaN
 * ```
 */
export function doubleFactorial(n: number): number {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  let k = (n + 1) / 2;

  if (n % 2 === 0) {
    k = n / 2;
    return Math.pow(2, k) * factorial(k);
  }

  return factorial(2 * k) / (Math.pow(2, k) * factorial(k));
}

/**
 * Returns the {@link https://en.wikipedia.org/wiki/Superfactorial | superfactorial} of the given natural number.
 *
 * @example
 * ```ts
 * import { superFactorial } from "@babia/tiny-math";
 *
 * superFactorial(0); // sf(0) = 1
 * superFactorial(7); // sf(7) = 125411328000
 * superFactorial(-1); // NaN
 * ```
 */
export function superFactorial(n: number): number {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  let xFact = factorial(n);

  for (let i = n - 1; i >= 1; i--) {
    xFact *= factorial(i);
  }

  return xFact;
}
