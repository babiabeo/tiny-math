import { factorial } from "./factorial.ts";

/** Return the total number of permutations of `n` items */
export function permutation(n: number) {
  return factorial(n);
}

/** Return the total number of permutations of `k` items from `n` items */
export function partialPermutation(k: number, n: number) {
  if (k > n || k < 1 || n < 1) {
    return NaN;
  }

  return permutation(n) / permutation(n - k);
}

/** Return the total number of combinations of `k` items from `n` items */
export function combination(k: number, n: number) {
  if (k > n) {
    return NaN;
  }

  return partialPermutation(k, n) / permutation(k);
}
