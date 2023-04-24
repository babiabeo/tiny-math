import { assertEquals } from "../deps.ts";
import { isPrime, nextPrime, prevPrime, primeFact } from "./prime.ts";

// isPrime

Deno.test({
  name: "3 is a prime number",
  fn: () => {
    assertEquals(isPrime(3), true);
  },
});

Deno.test({
  name: "10 is not a prime number",
  fn: () => {
    assertEquals(isPrime(10), false);
  },
});

// nextPrime

Deno.test({
  name: "The 8th prime number after 4 is 29",
  fn: () => {
    assertEquals(nextPrime(4, 8), 29);
  },
});

Deno.test({
  name: "The 1st prime number after 5 is 7",
  fn: () => {
    assertEquals(nextPrime(5), 7);
  },
});

// prevPrime

Deno.test({
  name: "The 8th prime number before 44 is 17",
  fn: () => {
    assertEquals(prevPrime(44, 8), 17);
  },
});

Deno.test({
  name: "The 1st prime number before 90 is 89",
  fn: () => {
    assertEquals(prevPrime(90), 89);
  },
});

// primeFact

Deno.test({
  name: "Prime factorization of 45 is 3 * 3 * 5",
  fn: () => {
    assertEquals(primeFact(45), [3, 3, 5]);
  },
});

Deno.test({
  name: "Prime factorization of 123 is 3 * 41",
  fn: () => {
    assertEquals(primeFact(123), [3, 41]);
  },
});
