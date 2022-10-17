import { merge } from '../index.js'

const o1 = {
  a: 'merge',
  b: [1, 2, 3],
  c: {
    d: [3, 9]
  }
}

const o2 = {
  a: 'merge-kit',
  b: [4, 5, 6],
  c: {
    d: [23, 33]
  }
}

const config = merge([o1, o2])

console.log(config)
