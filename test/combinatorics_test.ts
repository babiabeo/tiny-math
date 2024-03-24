import { assertEquals } from "@std/assert/assert_equals";
import { combination, permutation } from "../src/combinatorics.ts";

Deno.test("permutation(n)", () => {
  assertEquals(permutation(3), 6);
  assertEquals(permutation(10), 3628800);
  assertEquals(permutation(-1), NaN);
});

Deno.test("permutation(n, k)", () => {
  assertEquals(permutation(8, 4), 1680);
  assertEquals(permutation(5, 5), 120);
  assertEquals(permutation(-1, 0), NaN);
  assertEquals(permutation(43, 5.4), NaN);
});

Deno.test("combination(n, k)", () => {
  assertEquals(combination(7, 7), 1);
  assertEquals(combination(12, 4), 495);
  assertEquals(combination(-1, 0), NaN);
});
