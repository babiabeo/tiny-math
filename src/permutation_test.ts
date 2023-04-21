import { assertEquals } from "../deps.ts";
import { combination, partialPermutation, permutation } from "./permutation.ts";

// Permutations

Deno.test({
  name: "The total number of permutations of 3 items is 6",
  fn: () => {
    assertEquals(permutation(3), 6);
  },
});

Deno.test({
  name: "The total number of permutations of 10 items is 3,628,800",
  fn: () => {
    assertEquals(permutation(10), 3628800);
  },
});

// Partial Permutations

Deno.test({
  name: "The total number of permutations of 4 items from 8 items is 1,680",
  fn: () => {
    assertEquals(partialPermutation(4, 8), 1680);
  },
});

Deno.test({
  name: "The total number of permutations of 5 items from 5 items is 120",
  fn: () => {
    assertEquals(partialPermutation(5, 5), 120);
  },
});

// Combination

Deno.test({
  name: "The total number of combinations of 7 items from 7 items is 1",
  fn: () => {
    assertEquals(combination(7, 7), 1);
  },
});

Deno.test({
  name: "The total number of combinations of 4 items from 12 items is 495",
  fn: () => {
    assertEquals(combination(4, 12), 495);
  },
});
