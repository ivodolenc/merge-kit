<h1 align="center">Merge Kit</h1>

<p align="center">A tiny object handler with deep merge support.</p>

## Features

- **Zero dependencies!**
- Ultralight! **~330bytes** min
- Integrated TypeScript support
- Flexible and user friendly API
- Allows _module_ and _commonjs_ imports
- Supports deep merge with multiple sources
- Provides _combine_ and _overwrite_ methods
- Really fast

## Installation

```sh
npm i -D merge-kit
```

```js
// module
import { merge } from 'merge-kit'
```

```js
// commonjs
const { merge } = require('merge-kit')
```

## API

### merge()

```js
/**
 * Deeply merges multiple objects into one source.
 *
 * @param objects Array of objects, requires at least 2 objects.
 * @param [overwrite] Enables overwrite mode (optional).
 */
merge(objects, overwrite)
```

## Deep Merge

```js
import { merge } from 'merge-kit'

const o1 = {
  a: 'merge',
  b: {
    c: {
      d: [1, 2, 3]
    },
    e: {
      f: true
    }
  }
}

const o2 = {
  a: 'merge-kit',
  b: {
    c: {
      d: [4, 5, 6]
    },
    e: {
      f: {
        g: 33
      }
    },
    h: [23, 33]
  }
}

const config = merge([o1, o2])

console.log(config)

/*
{
  a: 'merge-kit',
  b: {
    c: {
      d: [1, 2, 3, 4, 5, 6]
    },
    e: {
      f: {
        g: 33
      }
    },
    h: [23, 33]
  }
}
*/
```

## Array Merge

### Combine

**`previous` + `current`**

By default, the right sources will merge the properties with the left sources and combine their values.

```js
merge([previous, current])
```

```js
import { merge } from 'merge-kit'

const o1 = { a: [1, 2, 3] }
const o2 = { a: [4, 5, 6] }

const config = merge([o1, o2])

console.log(config) // => { a: [1, 2, 3, 4, 5, 6] }
```

### Overwrite

**`previous` ← `current`**

If specified, the right sources will merge the properties with the left sources and overwrite their values.

To merge and overwrite, set the second parameter to `true`.

```js
merge([previous, current], true)
```

```js
import { merge } from 'merge-kit'

const o1 = { a: [1, 2, 3] }
const o2 = { a: [4, 5, 6] }

const config = merge([o1, o2], true)

console.log(config) // => { a: [4, 5, 6] }
```

## Multiple Sources

```js
import { merge } from 'merge-kit'

const o1 = { a: 'merge' }
const o2 = { a: 'merge-kit', b: { c: true, d: 33 } }
const o3 = { b: { e: 'merge-kit' }, e: [1, 2, 3], f: { g: 9, h: { i: true } } }
const o4 = { e: [4, 5, 6], k: [{ j: true }, { l: 6 }] }
const o5 = { e: [7, 8, 9], k: [23, 33] }

const config = merge([o1, o2, o3, o4, o5])

console.log(config)

/* 
{
  a: 'merge-kit',
  b: { c: true, d: 33, e: 'merge-kit' },
  e: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  f: { g: 9, h: { i: true } },
  k: [ { j: true }, { l: 6 }, 23, 33 ]
}
*/
```

## Show Support

This is a free and open source project available to everyone. If you like it, `leave a star` to show your support.

### Starring a repository

Navigate to the top-right corner of the page and click the <kbd>☆ Star</kbd> button.

## License

### Merge Kit

[MIT License](LICENSE)

Copyright © Ivo Dolenc

Developed in Croatia 🇭🇷
