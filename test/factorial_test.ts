import { assertEquals } from "../deps.ts";
import {
  doubleFactorial,
  factorial,
  superFactorial,
} from "../src/factorial.ts";

// factorial

Deno.test({
  name: "The factorial of 7",
  fn: () => {
    assertEquals(factorial(7), 5040);
  },
});

Deno.test({
  name: "The factorial of 0",
  fn: () => {
    assertEquals(factorial(0), 1);
  },
});

// doubleFactorial

Deno.test({
  name: "The double factorial of 10",
  fn: () => {
    assertEquals(doubleFactorial(10), 3840);
  },
});

Deno.test({
  name: "The double factorial of 15",
  fn: () => {
    assertEquals(doubleFactorial(15), 2_027_025);
  },
});

// doubleFactorial

Deno.test({
  name: "The superfactorial of 4",
  fn: () => {
    assertEquals(superFactorial(4), 288);
  },
});

Deno.test({
  name: "The superfactorial of 15",
  fn: () => {
    assertEquals(superFactorial(6), 24_883_200);
  },
});
