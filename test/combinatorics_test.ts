import { assertEquals } from "../deps.ts";
import { combination, permutation } from "../src/combinatorics.ts";

// Permutations

Deno.test({
  name: "The total number of permutations of 3 items",
  fn: () => {
    assertEquals(permutation(3), 6);
  },
});

Deno.test({
  name: "The total number of permutations of 10 items",
  fn: () => {
    assertEquals(permutation(10), 3628800);
  },
});

// Partial Permutations

Deno.test({
  name: "The total number of permutations of 4 items from 8 items",
  fn: () => {
    assertEquals(permutation(8, 4), 1680);
  },
});

Deno.test({
  name: "The total number of permutations of 5 items from 5 items",
  fn: () => {
    assertEquals(permutation(5, 5), 120);
  },
});

// Combination

Deno.test({
  name: "The total number of combinations of 7 items from 7 items",
  fn: () => {
    assertEquals(combination(7, 7), 1);
  },
});

Deno.test({
  name: "The total number of combinations of 4 items from 12 items",
  fn: () => {
    assertEquals(combination(4, 12), 495);
  },
});
