import { combination, permutation } from "../mod.ts";

const fruits = ["apple", "orange", "mango", "banana"];

console.log(`Fruits: ${fruits.join(", ")}`);
console.log(
  `Number of ways to arrange these fruits: ${permutation(fruits.length)}`,
);
console.log(
  `Number of ways to get 2 fruits from these fruits: ${
    combination(2, fruits.length)
  }`,
);
console.log(
  `Number of ways to get 2 fruits from these fruits and arrange them: ${
    permutation(fruits.length, 2)
  }`,
);
