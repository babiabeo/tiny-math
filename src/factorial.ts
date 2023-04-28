import { isNatural } from "./utils.ts";

/** Return the factorial of the given natural number */
export function factorial(n: number) {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;
}

/** Return the double factorial of the given natural number */
export function doubleFactorial(n: number) {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  let k = (n + 1) / 2;

  if (n % 2 === 0) {
    k = n / 2;
    return Math.pow(2, k) * factorial(k);
  }

  return factorial(2 * k) / (Math.pow(2, k) * factorial(k));
}

/** Return the superfactorial of the given natural number */
export function superFactorial(n: number) {
  if (!isNatural(n)) return NaN;
  if (n <= 1) return 1;

  let xFact = factorial(n);

  for (let i = n - 1; i >= 1; i--) {
    xFact *= factorial(i);
  }

  return xFact;
}
