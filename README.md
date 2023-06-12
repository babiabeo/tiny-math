# tiny-math
[![tiny-math](https://shield.deno.dev/x/tiny_math)](https://deno.land/x/tiny_math)

A tiny Deno module providing some math utils.

## Usage

```ts
import * as math from "https://deno.land/x/tiny_math@$VERSION/mod.ts";
```

Remember to use imports with pinned version to avoid unintended changes.

## Examples

Below are some examples of `factorial`, `gcd` and `lcm`. For more, see [examples](./examples/).

### `factorial`

```ts
import { factorial } from "https://deno.land/x/tiny_math@$VERSION/mod.ts";

console.log(factorial(0));     // 0! = 1
console.log(factorial(7));     // 7! = 5040
console.log(factorial(15));    // 15! = 1307674368000
console.log(factorial(20));    // 20! = 2432902008176640000
```

### `gcd` and `lcm`

```ts
import { gcd, lcm } from "https://deno.land/x/tiny_math@$VERSION/mod.ts";

console.log(gcd(27, 60));       // 3
console.log(gcd(24, 32, 21));   // 1
console.log(lcm(50, 90));       // 450
console.log(lcm(55, 30, 23));   // 7590
```

## Documentation

Please go to [this page](https://deno.land/x/tiny_math?doc) and navigate to any function you want to see.

## License

[MIT License](./LICENSE)
