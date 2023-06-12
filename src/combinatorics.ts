import { factorial } from "./factorial.ts";
import { isNatural } from "./utils.ts";

/** Return the total number of permutations of (`k` items from) `n` items. */
export function permutation(n: number, k?: number) {
  if (!isNatural(n)) return NaN;

  if (k !== undefined) {
    if (!isNatural(k) || k > n) {
      return NaN;
    }

    return factorial(n) / factorial(n - k);
  }

  return factorial(n);
}

/** Return the total number of combinations of `k` items from `n` items. */
export function combination(k: number, n: number) {
  if (!isNatural(n) || !isNatural(k) || k > n) {
    return NaN;
  }

  return permutation(n, k) / permutation(k);
}
