/** Return the greatest common divisor (GCD) of the specified integers. */
export function gcd(...integers: number[]) {
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

/** Return the least common multiple (LCM) of the specified integers. */
export function lcm(...integers: number[]) {
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
