import { assertEquals } from "../deps.ts";
import { doubleFactorial, factorial, superFactorial } from "./factorial.ts";

// factorial

Deno.test({
  name: "The factorial of 7 is 5040",
  fn: () => {
    assertEquals(factorial(7), 5040);
  },
});

Deno.test({
  name: "The factorial of 0 is 1",
  fn: () => {
    assertEquals(factorial(0), 1);
  },
});

// doubleFactorial

Deno.test({
  name: "The double factorial of 10 is 3,840",
  fn: () => {
    assertEquals(doubleFactorial(10), 3840);
  },
});

Deno.test({
  name: "The double factorial of 15 is 2,027,025",
  fn: () => {
    assertEquals(doubleFactorial(15), 2027025);
  },
});

// doubleFactorial

Deno.test({
  name: "The superfactorial of 4 is 288",
  fn: () => {
    assertEquals(superFactorial(4), 288);
  },
});

Deno.test({
  name: "The superfactorial of 15 is 24,883,200",
  fn: () => {
    assertEquals(superFactorial(6), 24883200);
  },
});
