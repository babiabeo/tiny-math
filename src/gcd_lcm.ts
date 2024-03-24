/**
 * Calculates the greatest common divisor (GCD) of the specified integers.
 * Returns `NaN` if one of the given numbers is not an integer.
 *
 * @example
 * ```ts
 * import { gcd } from "@babia/tiny-math";
 *
 * gcd(8, 9); // 1
 * gcd(6, 12); // 6
 * gcd(43, 10, 73); // 1
 * ```
 */
export function gcd(...integers: number[]): number {
  if (!integers.every((n) => Number.isInteger(n))) {
    return NaN;
  }

  return integers.reduce((a, b) => {
    let r: number;

    while (b) {
      r = a % b;
      a = b;
      b = r;
    }

    return (a < 0) ? -a : a;
  });
}

/**
 * Calculates the least common multiple (LCM) of the specified integers.
 * Returns `NaN` if one of the given numbers is not an integer.
 *
 * @example
 * ```ts
 * import { lcm } from "@babia/tiny-math";
 *
 * lcm(8, 9); // 72
 * lcm(2, 4); // 4
 * lcm(5, 18, 54); // 270
 * ```
 */
export function lcm(...integers: number[]): number {
  if (!integers.every((n) => Number.isInteger(n))) {
    return NaN;
  }

  return integers.reduce((a, b) => {
    if (a === 0 && b === 0) {
      return 0;
    }

    return Math.abs(a * b) / gcd(a, b);
  });
}
