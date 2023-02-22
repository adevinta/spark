function toKebabCase(v) {
  return v.replace(/[A-Z]/g, e => `-${e.toLocaleLowerCase()}`)
}

function isHex(value) {
  if (typeof value === 'number') {
    return false
  }

  const regexp = /^#[0-9a-fA-F]+$/

  return regexp.test(value)
}

function isStringOrNumber(value) {
  return typeof value === 'string' || typeof value === 'number'
}

// eslint-disable-next-line @typescript-eslint/ban-types
function toKebabCaseKeys(obj, level = 1) {
  const result = {}
  for (const key in obj) {
    const value = typeof obj[key] === 'object' ? toKebabCaseKeys(obj[key], level + 1) : obj[key]
    result[level > 1 ? key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() : key] = value
  }

  return result
}

export { toKebabCase, isHex, toKebabCaseKeys, isStringOrNumber }
