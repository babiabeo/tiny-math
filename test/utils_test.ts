import { assertEquals } from "@std/assert/assert_equals";
import { clamp, isEqualApprox, isNatural } from "../src/utils.ts";

Deno.test("isNatural()", () => {
  assertEquals(isNatural(0), true);
  assertEquals(isNatural(123), true);
  assertEquals(isNatural(-4), false);
  assertEquals(isNatural(NaN), false);
});

Deno.test("isEqualApprox()", () => {
  assertEquals(isEqualApprox(0.1 + 0.2, 0.3), true);
  assertEquals(isEqualApprox(Infinity, Infinity), true);
  assertEquals(isEqualApprox(-Infinity, -Infinity), true);
  assertEquals(isEqualApprox(0.55, 0.6), false);
  assertEquals(isEqualApprox(NaN, NaN), false);
});

Deno.test("clamp()", () => {
  assertEquals(clamp(3, { min: 4, max: 7 }), 4);
  assertEquals(clamp(10, { min: 7, max: 20 }), 10);
  assertEquals(clamp(100, { min: 64, max: 87 }), 87);
});
