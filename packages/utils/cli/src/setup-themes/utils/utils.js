function toKebabCase(v) {
  return v.replace(/[A-Z0-9]/g, e => `-${e.toLocaleLowerCase()}`)
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

function isObject(x) {
  return !!x && x.constructor === Object
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

const doubleHyphensRegex = /(?<!var\()--+/g

export {
  toKebabCase,
  isHex,
  isStringOrNumber,
  isObject,
  isCamelCase,
  hasNumber,
  getRemEquivalentValue,
  doubleHyphensRegex,
}
