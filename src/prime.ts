import { isNatural } from "./utils.ts";

/**
 * Reports whether the given number is prime.
 *
 * @example
 * ```ts
 * import { isPrime } from "@babia/tiny-math";
 *
 * isPrime(0); // false
 * isPrime(1); // false
 * isPrime(2); // true
 * ```
 */
export function isPrime(n: number): boolean {
  if (!isNatural(n)) {
    return false;
  }

  if (n === 0 || n === 1) {
    return false;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Returns an array of prime factors of `n`. Empty if `n` is not a natural number.
 *
 * @example
 * ```ts
 * import { primeFact } from "@babia/tiny-math";
 *
 * primeFact(3.4); // [] since 3.4 is not a natural number.
 * primeFact(123); // [3, 41] or 123 = 3 * 41
 * primeFact(816); // [2, 2, 2, 2, 3, 17] or 816 = 2^4 * 3 * 17
 * ```
 */
export function primeFact(n: number): number[] {
  if (!isNatural(n)) {
    return [];
  }

  const primes = [];
  let k = 2;

  while (n > 1) {
    while (n % k === 0) {
      primes.push(k);
      n /= k;
    }

    k++;
  }

  return primes;
}

/**
 * Returns the `ith` prime number after `n`. Returns `NaN` if it meets one of these cases:
 * - `n` < 0.
 * - `ith` is not an integer.
 * - `ith` < 1.
 *
 * @example
 * ```ts
 * import { nextPrime } from "@babia/tiny-math";
 *
 * nextPrime(3); // 5
 * nextPrime(7, 4); // 19
 * nextPrime(-10, 10); // NaN
 * ```
 */
export function nextPrime(n: number, ith = 1): number {
  if (n < 0 || !Number.isInteger(ith) || ith < 1) {
    return NaN;
  }

  let x = Math.floor(n);
  let primeCount = ith;

  while (primeCount > 0) {
    x++;

    if (isPrime(x)) {
      primeCount--;
    }
  }

  return x;
}

/**
 * Returns the `ith` prime number before `n`.  Returns `NaN` if it meets one of these cases:
 * - `ith` is not an integer.
 * - `n` < 3 (not enough prime numbers less than 3).
 * - `ith` < 1.
 * - Cannot find the `ith` prime number less than `n`.
 *
 * @example
 * ```ts
 * import { prevPrime } from "@babia/tiny-math";
 *
 * prevPrime(3); // 2
 * prevPrime(54, 6); // 31
 * prevPrime(-10, 10); // NaN
 * ```
 */
export function prevPrime(n: number, ith: number = 1): number {
  if (n < 3 || !Number.isInteger(ith) || ith < 1) {
    return NaN;
  }

  let x = Math.ceil(n);
  let primeCount = ith;

  while (primeCount > 0) {
    x--;

    if (isPrime(x)) {
      if (x === 2) {
        break;
      }

      primeCount--;
    }
  }

  if (primeCount > 0) {
    return NaN;
  }

  return x;
}
