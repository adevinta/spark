/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @example
 *
 * const item = {
 *   label: 'ten',
 *   id: 10,
 *   isValid: true
 * }
 *
 * const updatedItem = omit(item, ['label', 'isValid'])
 * // updatedItem === { id: 10 }
 *
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly (K | undefined)[]
): Omit<T, K> {
  const output = {} as {
    [K in keyof typeof obj]: (typeof obj)[K]
  }
  Object.keys(obj).forEach(k => {
    const key = k as K
    if (!keys.includes(key)) {
      output[key] = obj[key]
    }
  })

  return output
}
