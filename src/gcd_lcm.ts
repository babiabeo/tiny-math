/** Return the greatest common divisor (GCD) of two given numbers */
export function gcd(a: number, b: number): number;
/** Return the greatest common divisor (GCD) of given numbers */
export function gcd(input: number[]): number;
export function gcd(a: number | number[], b?: number) {
  if (typeof a === "number" && b !== undefined) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return NaN;
    }

    let r: number;
    while (b) {
      r = a % b;
      a = b;
      b = r;
    }

    return (a < 0) ? -a : a;
  } else if (Array.isArray(a) && b === undefined) {
    return a.reduce((x, y) => gcd(x, y));
  } else {
    return NaN;
  }
}

/** Return the least common multiple (LCM) of two given numbers */
export function lcm(a: number, b: number): number;
/** Return the least common multiple (LCM) of given numbers */
export function lcm(input: number[]): number;
export function lcm(a: number | number[], b?: number) {
  if (typeof a === "number" && b !== undefined) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return NaN;
    }

    if (a === 0 && b === 0) {
      return 0;
    }

    return Math.abs(a * b) / gcd(a, b);
  } else if (Array.isArray(a) && b === undefined) {
    return a.reduce((x, y) => lcm(x, y));
  } else {
    return NaN;
  }
}
