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

function toKebabCaseKeys(obj, level = 1) {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    const transformedKey =
      level > 1 ? key.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase() : key

    if (Array.isArray(value)) {
      result[transformedKey] = value.map(v =>
        typeof v === 'object' ? toKebabCaseKeys(v, level + 1) : v
      )
    } else if (typeof value === 'object') {
      result[transformedKey] = toKebabCaseKeys(value, level + 1)
    } else {
      result[transformedKey] = value
    }
  }

  return result
}

export { toKebabCase, isHex, toKebabCaseKeys, isStringOrNumber }
