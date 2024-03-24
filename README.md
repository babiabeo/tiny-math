# tiny-math

A tiny, easy-to-use, zero-dependency package providing some math utils.

## Usage

This package is available on [jsr.io](https://jsr.io) and compatible with any browsers and JavaScript runtimes.

To install:

```sh
# Deno
deno add @babia/tiny-math

# npm
npx jsr add @babia/tiny-math

# yarn
yarn dlx jsr add @babia/tiny-math

# pnpm
pnpm dlx jsr add @babia/tiny-math

# Bun
bunx jsr add @babia/tiny-math
```

For Deno user, this package is also available on [deno.land/x](https://deno.land/x)

```ts
import * as math from "https://deno.land/x/tiny_math@$VERSION/mod.ts";
```

Remember to use imports with pinned version to avoid unintended changes.

## Examples

Below are some examples of `factorial`, `gcd` and `lcm`. For more, see [examples](./examples/).

### `factorial`

```ts
import { factorial } from "@babia/tiny-math";

console.log(factorial(0));     // 0! = 1
console.log(factorial(7));     // 7! = 5040
console.log(factorial(15));    // 15! = 1307674368000
console.log(factorial(20));    // 20! = 2432902008176640000
```

### `gcd` and `lcm`

```ts
import { gcd, lcm } from "@babia/tiny-math";

console.log(gcd(27, 60));       // 3
console.log(gcd(24, 32, 21));   // 1
console.log(lcm(50, 90));       // 450
console.log(lcm(55, 30, 23));   // 7590
```

## Documentation

Please go to [this page](https://jsr.io/@babia/tiny-math/doc) and navigate to any function you want to see.

## License

This package is under [MIT License](./LICENSE).
