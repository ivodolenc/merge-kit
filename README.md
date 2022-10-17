<h1 align="center">Merge Kit</h1>

<p align="center">JavaScript object handler with deep merge support.</p>

## Features

- **Zero dependencies!** Nothing! None!
- Supports deep merge with multiple sources
- Provides Combine and Overwrite methods
- Ultralight & Really Fast
- Less than **300 bytes** minified

## Installation

```sh
yarn add -D merge-kit
```

```sh
npm i -D merge-kit
```

## API

### merge()

- Type: `Function`

Deeply merges multiple objects into one source.

```js
/**
 * @function
 * @param {Array} objects - Array of objects.
 * @param {Boolean} overwrite - Enables overwrite mode.
 * @return {Object} Returns merged object.
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
