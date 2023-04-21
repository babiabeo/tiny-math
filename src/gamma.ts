import { factorial } from "./factorial.ts";

const MAX_GAM = 171.624376956302725;

// https://mrob.com/pub/ries/lanczos-gamma.html#code

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

/** Return the gamma function of `n` using the Lanczos method */
export function gamma(n: number): number {
  if (Number.isInteger(n)) {
    if (n <= 0 || n > 171) {
      return Infinity;
    }
    // z is an integer
    // => gamma(z) = (z - 1)!
    return factorial(n - 1);
  }

  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
  }

  if (n >= MAX_GAM) {
    return Infinity;
  }

  n--;

  let x = P[0];
  for (let i = 1; i < P.length; ++i) {
    x += P[i] / (n + i);
  }

  const t = n + G + 0.5;

  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}

/** Return the logarithm of the gamma function of `n` using the Lanczos method */
export function lgamma(n: number): number {
  if (n < 0) {
    return NaN;
  }

  if (n === 0) {
    return Infinity;
  }

  if (!isFinite(n)) {
    return n;
  }

  if (n === 1 || n === 2) {
    return 0;
  }

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
