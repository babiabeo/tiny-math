import { assertEquals } from "@std/assert/assert_equals";
import { isPrime, nextPrime, prevPrime, primeFact } from "../src/prime.ts";

Deno.test("isPrime()", () => {
  assertEquals(isPrime(3), true);
  assertEquals(isPrime(23), true);
  assertEquals(isPrime(10), false);
  assertEquals(isPrime(-3), false);
  assertEquals(isPrime(1), false);
});

Deno.test("nextPrime()", () => {
  assertEquals(nextPrime(5), 7);
  assertEquals(nextPrime(4, 8), 29);
  assertEquals(nextPrime(10, 0), NaN);
  assertEquals(nextPrime(-3), NaN);
});

Deno.test("prevPrime()", () => {
  assertEquals(prevPrime(44, 8), 17);
  assertEquals(prevPrime(90), 89);
  assertEquals(prevPrime(10, 6), NaN);
  assertEquals(prevPrime(2), NaN);
  assertEquals(prevPrime(-2), NaN);
});

Deno.test("primeFact()", () => {
  assertEquals(primeFact(45), [3, 3, 5]);
  assertEquals(primeFact(123), [3, 41]);
  assertEquals(primeFact(816), [2, 2, 2, 2, 3, 17]);
  assertEquals(primeFact(-2), []);
});
