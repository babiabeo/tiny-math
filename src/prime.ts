import { isNatural } from "./utils.ts";

/** Whether the given number is prime. */
export function isPrime(n: number) {
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

/** Return the prime factorization of `n`. */
export function primeFact(n: number) {
  if (!isNatural(n)) {
    return [];
  }

  const primes = [];

  if (isPrime(n)) {
    primes.push(n);
    return primes;
  }

  let k = 2;

  while (n > 1) {
    while (n % k !== 0) {
      k++;
    }

    primes.push(k);
    n /= k;
  }

  return primes;
}

/** Return the `ith` prime number after `n`. */
export function nextPrime(n: number, ith = 1) {
  if (n < 0 || !Number.isInteger(ith) || ith < 1) {
    return NaN;
  }

  let x = Math.floor(n);
  let primeCount = ith;

  while (primeCount > 0) {
    x++;

    if (isPrime(x)) {
      primeCount--;
      continue;
    }
  }

  return x;
}

/** Return the `ith` prime number before `n`. */
export function prevPrime(n: number, ith = 1) {
  if (n < 3) {
    throw new Error("No preceding primes");
  }

  if (!Number.isInteger(ith) || ith < 1) {
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
      continue;
    }
  }

  return x;
}
