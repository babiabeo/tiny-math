import { assertEquals } from "../deps.ts";
import { gamma, lgamma } from "./gamma.ts";
import { isEqualApprox } from "./utils.ts";

// gamma

Deno.test({
  name: "Gamma function of 2 is 1",
  fn: () => {
    assertEquals(gamma(2), 1);
  },
});

Deno.test({
  name:
    "Gamma function of 0.5 is approximately equal to 1.77245385090551588192",
  fn: () => {
    assertEquals(
      isEqualApprox(
        gamma(0.5),
        1.77245385090551588192,
        1e-15,
      ),
      true,
    );
  },
});

// lgamma

Deno.test({
  name: "Logarithm of the gamma function of 2 is 0",
  fn: () => {
    assertEquals(lgamma(2), 0);
  },
});

Deno.test({
  name:
    "Logarithm of the gamma function of 3.5 is approximately equal to 1.200973602347074224816",
  fn: () => {
    assertEquals(
      isEqualApprox(
        lgamma(3.5),
        1.200973602347074224816,
        1e-15,
      ),
      true,
    );
  },
});
