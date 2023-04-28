import { isPrime } from "../mod.ts";

const primes = [];

for (let i = 0; i < 100; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log(`From 0 to 99, the prime numbers are:\n${primes.join(", ")}`);
