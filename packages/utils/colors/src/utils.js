import { round } from 'culori'

export const twoDecimals = round(2)
export const clamp = value => Math.max(0, Math.min(1, value))
export const fixup = value => Math.round(clamp(value) * 255)

export const FLOAT_RE = /-?[0-9.]+%?/g

export const HEX_RE = /^#[0-9a-f]{3,8}$/i

export const COLOR_FN_RE = /^([^( ]+)\s*\(\s*([^)]+)\)$/

export const RGB_MAX = 2 ** 8
export const RGB_RANGE = 16 ** 6
export const R_FACTOR = 16 ** 4 // base 16, starting after 4 digits (GGBB)
export const G_FACTOR = 16 ** 2 // base 16, starting after 2 digits (BB)

/**
 * hex num to sRGB (doesn’t support alpha as 0x000000 == 0x00000000)
 * V8 handles number ops ~ 2x faster than parseInt(hex, 16) with string manipulations
 */
export function hexNumTosRGB(hex) {
  if (hex > RGB_RANGE) throw new Error('8-digit hex values (with transparency) aren’t supported')
  let remaining = hex
  const r = Math.floor(remaining / R_FACTOR) // Math.floor gets rid of G + B
  remaining -= r * R_FACTOR
  const g = Math.floor(remaining / G_FACTOR) // Math.floor gets rid of B
  remaining -= g * G_FACTOR
  const b = remaining

  return [r / 255, g / 255, b / 255, 1]
}

export function checkValues(colorStr, ranges) {
  const matches = colorStr.match(FLOAT_RE)
  if (!matches) console.warn(`Unexpected color format: ${colorStr}`)

  return matches
    .reduce((acc, curr, i) => {
      if (!curr) return [...acc, false]
      // percentage (already normalized)
      if (curr.includes('%')) {
        return [...acc, !isNaN(parseFloat(curr))]
      }
      // unbounded
      else if (!ranges || ranges[i] === Infinity || ranges[i] === 1) {
        return [...acc, true]
      }
      // bounded
      return [...acc, true]
    }, [])
    .every(Boolean)
}
