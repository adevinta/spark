function isObject(x) {
  return !!x && x.constructor === Object
}

function isStringOrNumber(value) {
  return typeof value === 'string' || typeof value === 'number'
}

function isHex(value) {
  if (typeof value === 'number') {
    return false
  }

  const regexp = /^#[0-9a-fA-F]+$/

  return regexp.test(value)
}

function isAlphanumericWithLeadingLetter(v) {
  return /^[a-zA-Z](?=.*\d)[a-zA-Z\d]*$/.test(v)
}

function isCamelCase(value) {
  return /[A-Z]/.test(value.slice(1))
}

function hasNumber(value) {
  return /\d/.test(value)
}

function getRemEquivalentValue(remValue, htmlFontSize) {
  const defaultBrowserBase = 16
  const pxValue = parseFloat(remValue) * defaultBrowserBase

  return `${pxValue / htmlFontSize}rem`
}

function toKebabCase(v) {
  return v.replace(/[A-Z]+(?=[a-z0-9])|\d+/g, match => '-' + match.toLowerCase())
}

const doubleHyphensRegex = /(?<!var\()--+/g

function getAllObjectKeys(obj, path = '') {
  return Object.keys(obj).flatMap(key => {
    const newPath = path ? `${path}.${key}` : key
    if (isObject(obj[key])) {
      return getAllObjectKeys(obj[key], newPath)
    }

    return newPath
  })
}

function difference(as, bs) {
  const set = new Set(bs)

  return as.filter(a => !set.has(a))
}

function retrieveArrayDifferences({ ref, comp }) {
  const additionalItems = difference(comp, ref)
  const missingItems = difference(ref, comp)

  return {
    additionalItems,
    missingItems,
  }
}

module.exports = {
  isObject,
  isStringOrNumber,
  isHex,
  isAlphanumericWithLeadingLetter,
  isCamelCase,
  hasNumber,
  getRemEquivalentValue,
  toKebabCase,
  doubleHyphensRegex,
  getAllObjectKeys,
  retrieveArrayDifferences,
}
