import { serializeHex8, serializeHsl, serializeRgb } from 'culori'

import { Mode } from './Mode.js'
import { clamp, twoDecimals } from './utils.js'

const serializeHWB = color => {
  if (color === undefined) {
    return undefined
  }

  const h = twoDecimals(color.h || 0)
  const w = color.w !== undefined ? twoDecimals(clamp(color.w) * 100) + '%' : 'none'
  const b = color.b !== undefined ? twoDecimals(clamp(color.b) * 100) + '%' : 'none'
  if (color.alpha === undefined || color.alpha === 1) {
    // opaque color
    return `hwb(${h} ${w} ${b})`
  }

  // transparent color
  return `hwb(${h} ${w} ${b} / ${twoDecimals(clamp(color.alpha))})`
}

const serializeLAB = color => {
  if (color === undefined) {
    return undefined
  }

  const l = twoDecimals(color.l || 0)
  const a = color.a !== undefined ? twoDecimals(clamp(color.a) * 100) + '%' : 'none'
  const b = color.b !== undefined ? twoDecimals(clamp(color.b) * 100) + '%' : 'none'
  if (color.alpha === undefined || color.alpha === 1) {
    // opaque color
    return `lab(${l} ${a} ${b})`
  }

  // transparent color
  return `lab(${l} ${a} ${b} / ${twoDecimals(clamp(color.alpha))})`
}

const serializeLCH = color => {
  if (color === undefined) {
    return undefined
  }

  const l = twoDecimals(color.l || 0)
  const c = color.c !== undefined ? twoDecimals(clamp(color.c) * 100) + '%' : 'none'
  const h = color.h !== undefined ? twoDecimals(clamp(color.h) * 100) + '%' : 'none'
  if (color.alpha === undefined || color.alpha === 1) {
    // opaque color
    return `lab(${l} ${c} ${h})`
  }

  // transparent color
  return `lab(${l} ${c} ${h} / ${twoDecimals(clamp(color.alpha))})`
}

const serializeOkLCH = color => {
  if (color === undefined) {
    return undefined
  }
  const l = twoDecimals(color.h || 0)
  const c = color.c !== undefined ? twoDecimals(clamp(color.c) * 100) + '%' : 'none'
  const h = color.h !== undefined ? twoDecimals(clamp(color.h) * 100) + '%' : 'none'
  if (color.alpha === undefined || color.alpha === 1) {
    // opaque color
    return `oklch(${l} ${c} ${h})`
  }

  // transparent color
  return `oklch(${l} ${c} ${h} / ${twoDecimals(clamp(color.alpha))})`
}

const SERIALIZE = {
  [Mode.HEX]: serializeHex8,
  [Mode.RGB]: serializeRgb,
  [Mode.HSL]: serializeHsl,
  [Mode.HWB]: serializeHWB,
  [Mode.LAB]: serializeLAB,
  [Mode.LCH]: serializeLCH,
  [Mode.OkLAB]: serializeLAB,
  [Mode.OkLCH]: serializeOkLCH,
}

const serialize = color => SERIALIZE[color.mode] && SERIALIZE[color.mode](color)

export {
  serializeHex8 as serializeHEX,
  serializeRgb as serializeRGB,
  serializeHsl as serializeHSL,
  serializeHWB,
  serializeLAB,
  serializeLCH,
  serializeLAB as serializeOkLAB,
  serializeOkLCH,
  serialize,
}
