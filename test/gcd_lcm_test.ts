import { assertEquals } from "@std/assert/assert_equals";
import { gcd, lcm } from "../src/gcd_lcm.ts";

Deno.test("gcd()", () => {
  assertEquals(gcd(4, 6), 2);
  assertEquals(gcd(14, -7), 7);
  assertEquals(gcd(14, 16, 22), 2);
  assertEquals(gcd(3.14), NaN);
});

Deno.test("lcm()", () => {
  assertEquals(lcm(4, 6), 12);
  assertEquals(lcm(-14, 7), 14);
  assertEquals(lcm(14, 16, 22), 1232);
  assertEquals(lcm(0, 0), 0);
  assertEquals(lcm(3.14), NaN);
});
