import { assertEquals } from "../deps.ts";
import { isEqualApprox, isNatural } from "./utils.ts";

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
  name: "0.1 + 0.2 result is approximately equal to 0.3",
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
