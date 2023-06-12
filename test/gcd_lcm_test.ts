import { assertEquals } from "../deps.ts";
import { gcd, lcm } from "../src/gcd_lcm.ts";

// GCD

Deno.test({
  name: "The greatest common divisor of 4 and 6",
  fn: () => {
    assertEquals(gcd(4, 6), 2);
  },
});

Deno.test({
  name: "The greatest common divisor of 14, 16, and 22",
  fn: () => {
    assertEquals(gcd(14, 16, 22), 2);
  },
});

// LCM

Deno.test({
  name: "The least common multiple of 4 and 6",
  fn: () => {
    assertEquals(lcm(4, 6), 12);
  },
});

Deno.test({
  name: "The least common multiple of 14, 16, and 22",
  fn: () => {
    assertEquals(lcm(14, 16, 22), 1232);
  },
});
