# tiny-math

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

console.log(factorial(0)); // 0!
console.log(factorial(7)); // 7!
console.log(factorial(15)); // 15!
console.log(factorial(20)); // 20!
```

Output:

```sh
1
5040
1307674368000
2432902008176640000
```

### `gcd` and `lcm`

```ts
import { gcd, lcm } from "https://deno.land/x/tiny_math@$VERSION/mod.ts";

console.log(gcd(27, 60));
console.log(gcd([24, 32, 21]));
console.log(lcm(50, 90));
console.log(lcm([55, 30, 23]));
```

Output:

```sh
3
1
450
7590
```

## Documentation

Please go to [this page](https://deno.land/x/tiny_math?doc) and navigate to any function you want to see.

## License

See [License](./LICENSE).
