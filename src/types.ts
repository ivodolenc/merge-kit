type Objects = [object, object, ...object[]]

export interface ObjectProps {
  [k: string]: any
}

export interface Merge {
  /**
   * Deeply merges multiple objects into one source.
   *
   * @param objects Array of objects, requires at least 2 objects.
   * @param [overwrite] Enables overwrite mode (optional).
   *
   * API
   *
   * ```js
   * merge(objects, overwrite)
   * ```
   *
   * Combine mode
   *
   * `previous` + `current`
   *
   * ```js
   * merge([previous, current])
   * ```
   *
   * By default, the right sources will merge the properties with the left sources and combine their values.
   *
   * ```js
   * const o1 = { a: [1, 2, 3] }
   * const o2 = { a: [4, 5, 6] }
   *
   * const config = merge([o1, o2])
   *
   * console.log(config) // => { a: [1, 2, 3, 4, 5, 6] }
   * ```
   *
   * Overwrite mode
   *
   * `previous` ← `current`
   *
   * ```js
   * merge([previous, current], true)
   * ```
   *
   * If specified, the right sources will merge the properties with the left sources and overwrite their values.
   *
   * To merge and overwrite, set the second parameter to `true`.
   *
   * ```js
   * const o1 = { a: [1, 2, 3] }
   * const o2 = { a: [4, 5, 6] }
   *
   * const config = merge([o1, o2], true)
   *
   * console.log(config) // => { a: [4, 5, 6] }
   * ```
   *
   *
   *
   * @since 1.1.0
   */
  (objects: Objects, overwrite?: boolean): ObjectProps
}
