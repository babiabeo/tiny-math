import { gcd, lcm } from "../mod.ts";

const input = prompt("Type 2 or more numbers separated by space:");
if (input === null) {
  console.log("Oops something went wrong!");
} else {
  const numbers = input.split(" ").map((v) => Number(v));

  console.log(
    `The greatest common divisor of ${numbers.join(", ")} is ${
      gcd(...numbers)
    }`,
  );

  console.log(
    `The least common multiple of ${numbers.join(", ")} is ${lcm(...numbers)}`,
  );
}
