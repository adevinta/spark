function objectKeys<T extends Record<string | number, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

function toKebabCase(v: string) {
  return v.replace(/[A-Z]/g, e => `-${e.toLocaleLowerCase()}`)
}

function isHex(value: string | number): value is string {
  if (typeof value === 'number') {
    return false
  }

  const regexp = /^#[0-9a-fA-F]+$/

  return regexp.test(value)
}

function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === 'string' || typeof value === 'number'
}

// eslint-disable-next-line @typescript-eslint/ban-types
function toKebabCaseKeys<T extends Object>(obj: T, level = 1): Record<string, T[keyof T]> {
  const result: any = {}
  for (const key in obj) {
    const value =
      typeof obj[key] === 'object' ? toKebabCaseKeys(obj[key] as T, level + 1) : obj[key]
    result[level > 1 ? key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() : key] = value
  }

  return result
}

export { objectKeys, objectEntries, toKebabCase, isHex, toKebabCaseKeys, isStringOrNumber }
