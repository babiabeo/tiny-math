import { permutation } from "./combinatorics.ts";

const MAX_GAM = 171.62;

// ref: https://mrob.com/pub/ries/lanczos-gamma.html#code

// log(2 * pi) / 2
const LN_SQRT_2_PI = 0.91893853320467274178;
const G = 4.7421875;
const P = [
  0.99999999999999709182,
  57.156235665862923517,
  -59.597960355475491248,
  14.136097974741747174,
  -0.49191381609762019978,
  0.33994649984811888699e-4,
  0.46523628927048575665e-4,
  -0.98374475304879564677e-4,
  0.15808870322491248884e-3,
  -0.21026444172410488319e-3,
  0.21743961811521264320e-3,
  -0.16431810653676389022e-3,
  0.84418223983852743293e-4,
  -0.26190838401581408670e-4,
  0.36899182659531622704e-5,
];

/**
 * Computes the gamma function of `n` using the Lanczos method.
 * - if `n` is 0, `+Infinity` is returned.
 * - if `n` < 0, `NaN` is returned.
 * - if `n` is `-Infinity`, `NaN` is returned.
 * - if `n` is `+Infinity`, `+Infinity` is returned.
 * - if `n` is `NaN`, `NaN` is returned.
 *
 * @example
 * ```ts
 * import { gamma } from "@babia/tiny-math";
 *
 * gamma(0); // Infinity
 * gamma(-1); // NaN
 * gamma(NaN); // NaN
 * ```
 */
export function gamma(n: number): number {
  if (isNaN(n) || n < 0 || n === Number.NEGATIVE_INFINITY) {
    return NaN;
  }
  if (n === 0 || n === Number.POSITIVE_INFINITY) {
    return Number.POSITIVE_INFINITY;
  }

  if (Number.isInteger(n)) {
    if (n > 171) {
      return Number.POSITIVE_INFINITY;
    }
    // z is an integer
    // => gamma(z) = (z - 1)!
    return permutation(n - 1);
  }

  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
  }

  if (n >= MAX_GAM) {
    return Number.POSITIVE_INFINITY;
  }

  n--;

  let x = P[0];
  for (let i = 1; i < P.length; ++i) {
    x += P[i] / (n + i);
  }

  const t = n + G + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}

/**
 * Computes the natural logarithm of the gamma function of `n` using the Lanczos method.
 * - if `n` is `NaN`, `NaN` is returned.
 * - if `n` < 0, `NaN` is returned.
 * - if `n` is 0, `+Infinity` is returned.
 * - if `n` is not finite, `+Infinity` is returned.
 * - if `n` is 1, `0` is returned.
 * - if `n` is 2, `0` is returned.
 *
 * @example
 * ```ts
 * import { lgamma } from "@babia/tiny-math";
 *
 * lgamma(2); // 0
 * lgamma(-1); // NaN
 * lgamma(-Infinity); // Infinity
 * ```
 */
export function lgamma(n: number): number {
  if (n < 0 || isNaN(n)) return NaN;
  if (n === 0 || !isFinite(n)) {
    return Number.POSITIVE_INFINITY;
  }
  if (n === 1 || n === 2) return 0;

  if (n < 0.5) {
    // Use Euler's reflection formula:
    // gamma(z) = Pi / [sin[Pi * z] * gamma[1 - z]];
    return Math.log(Math.PI / Math.sin(Math.PI * n)) - lgamma(1 - n);
  }

  n--;
  // Base of the Lanczos exponential
  const base = n + G + 0.5;
  let sum = 0;

  for (let i = P.length - 1; i >= 1; i--) {
    sum += P[i] / (n + i);
  }

  sum += P[0];
  // gamma[z] = sqrt(2 * PI) * sum * base^[z + 0.5] / E^base
  return LN_SQRT_2_PI + Math.log(sum) - base + Math.log(base) * (n + 0.5);
}
