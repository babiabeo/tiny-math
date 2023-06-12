import { assertEquals } from "../deps.ts";
import { isEqualApprox, isNatural, clamp } from "../src/utils.ts";

// isNatural

Deno.test({
  name: "0 is a natural number",
  fn: () => {
    assertEquals(isNatural(0), true);
  },
});

Deno.test({
  name: "-10 is not a natural number",
  fn: () => {
    assertEquals(isNatural(-10), false);
  },
});

// isEqualApprox

Deno.test({
  name: "0.1 + 0.2 result",
  fn: () => {
    assertEquals(isEqualApprox(0.1 + 0.2, 0.3), true);
  },
});

Deno.test({
  name: "0.55 is not close to 0.6",
  fn: () => {
    assertEquals(isEqualApprox(0.55, 0.6), false);
  },
});

// clamp

Deno.test({
  name: "Clamp 3 between 4 and 7",
  fn: () => {
    assertEquals(clamp(3, { min: 4, max: 7 }), 4);
  },
});

Deno.test({
  name: "Clamp 10 between 7 and 20",
  fn: () => {
    assertEquals(clamp(10, { min: 7, max: 20 }), 10);
  },
});
