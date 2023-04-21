import { assertEquals } from "../deps.ts";
import { gcd, lcm } from "./gcd_lcm.ts";

// GCD

Deno.test({
  name: "The greatest common divisor of 4 and 6 is 2",
  fn: () => {
    assertEquals(gcd(4, 6), 2);
  },
});

Deno.test({
  name: "The greatest common divisor of 14, 16, and 22 is 2",
  fn: () => {
    assertEquals(gcd([14, 16, 22]), 2);
  },
});

// LCM

Deno.test({
  name: "The least common multiple of 4 and 6 is 12",
  fn: () => {
    assertEquals(lcm(4, 6), 12);
  },
});

Deno.test({
  name: "The least common multiple of 14, 16, and 22 is 1,232",
  fn: () => {
    assertEquals(lcm([14, 16, 22]), 1232);
  },
});
