import { factorial } from "./factorial.ts";
import { isNatural } from "./utils.ts";

/**
 * Returns the total number of {@link https://en.wikipedia.org/wiki/Permutation | permutations} of (`k` items from) `n` items.
 * Returns `NaN` if it meets one of these cases:
 * - `n` is not a natural number.
 * - `k` is not a natural number.
 * - `k` > `n`.
 *
 * @example
 * ```ts
 * import { permutation } from "@babia/tiny-math";
 *
 * permutation(3); // 3! = 6
 * permutation(10, 6); // P(10, 6) = 151200
 * permutation(-10, 10); // NaN
 * ```
 */
export function permutation(n: number, k?: number): number {
  if (!isNatural(n)) return NaN;

  if (k !== undefined) {
    if (!isNatural(k) || k > n) {
      return NaN;
    }

    return factorial(n) / factorial(n - k);
  }

  return factorial(n);
}

/**
 * Returns the total number of {@link https://en.wikipedia.org/wiki/Combination | combinations} of `k` items from `n` items.
 * Returns `NaN` if it meets one of these cases:
 * - `n` is not a natural number.
 * - `k` is not a natural number.
 * - `k` > `n`.
 *
 * @example
 * ```ts
 * import { combination } from "@babia/tiny-math";
 *
 * combination(9, 6); // C(9, 6) = 84
 * combination(14, 8); // C(14, 8) = 3003
 * combination(-1, 0); // NaN
 * ```
 */
export function combination(n: number, k: number): number {
  if (!isNatural(n) || !isNatural(k) || k > n) {
    return NaN;
  }

  return permutation(n, k) / permutation(k);
}
