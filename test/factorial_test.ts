import { assertEquals } from "@std/assert/assert_equals";
import {
  doubleFactorial,
  factorial,
  superFactorial,
} from "../src/factorial.ts";

Deno.test("factorial()", () => {
  assertEquals(factorial(7), 5040);
  assertEquals(factorial(0), 1);
  assertEquals(factorial(-1), NaN);
  assertEquals(factorial(3.14), NaN);
});

Deno.test("doubleFactorial()", () => {
  assertEquals(doubleFactorial(1), 1);
  assertEquals(doubleFactorial(10), 3840);
  assertEquals(doubleFactorial(15), 2_027_025);
  assertEquals(doubleFactorial(-1), NaN);
  assertEquals(doubleFactorial(3.14), NaN);
});

Deno.test("superFactorial()", () => {
  assertEquals(superFactorial(1), 1);
  assertEquals(superFactorial(4), 288);
  assertEquals(superFactorial(6), 24_883_200);
  assertEquals(superFactorial(-1), NaN);
  assertEquals(superFactorial(3.14), NaN);
});
