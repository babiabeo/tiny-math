import { assertEquals } from "@std/assert/assert_equals";
import { gamma, lgamma } from "../src/gamma.ts";
import { isEqualApprox } from "../src/utils.ts";

Deno.test("gamma()", () => {
  assertEquals(gamma(2), 1);
  assertEquals(
    isEqualApprox(
      gamma(0.5),
      1.77245385090551588192,
      { tolerance: 1e-15 },
    ),
    true,
  );
  assertEquals(
    isEqualApprox(
      gamma(0.4),
      2.21815954375768775719,
      { tolerance: 1e-15 },
    ),
    true,
  );
  assertEquals(gamma(0), Infinity);
  assertEquals(gamma(172), Infinity);
  assertEquals(gamma(172.1), Infinity);
  assertEquals(gamma(-Infinity), NaN);
  assertEquals(gamma(-1), NaN);
  assertEquals(gamma(Infinity), Infinity);
});

Deno.test("lgamma()", () => {
  assertEquals(lgamma(2), 0);
  assertEquals(
    isEqualApprox(
      lgamma(3.5),
      1.200973602347074224816,
      { tolerance: 1e-15 },
    ),
    true,
  );
  assertEquals(
    isEqualApprox(
      lgamma(0.25),
      1.28802252469807765323,
      { tolerance: 1e-15 },
    ),
    true,
  );
  assertEquals(lgamma(1), 0);
  assertEquals(lgamma(Infinity), Infinity);
  assertEquals(lgamma(-1), NaN);
  assertEquals(lgamma(NaN), NaN);
});
