import cssColorKeywords from 'css-color-keywords'

// import { hex, hex3, hexa, hexa4, rgb, rgba, hsl, hsla, hwb, hwba } from './detectors.js'
import { checkValues, COLOR_FN_RE, HEX_RE, RGB_MAX, RGB_RANGE } from './utils.js'

const unparsable = (raw, mode, log = true) =>
  log && console.warn(`Unable to parse color ${JSON.stringify(raw)}${mode ? ` as ${mode}` : ''}`)

export class Mode {
  static NUMBER = 'number'
  static KEYWORD = 'keyword'
  static HEX = 'hex'
  static RGB = 'rgb'
  static HSL = 'hsl'
  static HWB = 'hwb'
  static LAB = 'lab'
  static LCH = 'lch'
  static OkLAB = 'oklab'
  static OkLCH = 'oklch'

  static #checker = {
    type: function (raw, mode, warn = true) {
      if ([undefined, null, 'boolean', 'array'].includes(typeof raw)) {
        unparsable(raw, mode, warn)
      }

      return raw
    },
    string: function (raw, warn = true) {
      if (typeof raw === 'string') {
        const strVal = raw.trim()
        if (!strVal && warn) {
          console.warn('Expected color, received empty string')
        } else {
          return strVal.toLowerCase()
        }
      }
    },
  }

  static getFormat(value) {
    const [type] = Object.entries({
      [Mode.NUMBER]: Mode.isNumber,
      [Mode.KEYWORD]: Mode.isKeyword,
      [Mode.HEX]: Mode.isHEX,
      [Mode.RGB]: Mode.isRGB,
      [Mode.HSL]: Mode.isHSL,
      [Mode.HWB]: Mode.isHWB,
      [Mode.LAB]: Mode.isLAB,
      [Mode.LCH]: Mode.isLCH,
      [Mode.OkLAB]: Mode.isOkLAB,
      [Mode.OkLCH]: Mode.isOkLCH,
    }).find(([, checker]) => checker(value)) || [null]

    return type
  }

  static isNumber(raw) {
    const value = Mode.#checker.type(raw)

    // 0xff0000 (number)
    // !note: does NOT support alpha
    if (typeof value === 'number' && value > RGB_RANGE) {
      return Mode.NUMBER
    }
  }

  static isKeyword(raw) {
    const value = Mode.#checker.type(raw, Mode.KEYWORD)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      // named color
      if (Object.keys(cssColorKeywords).includes(strVal)) {
        return true
      }
    }

    return false
  }

  static isHEX(raw) {
    const value = Mode.#checker.type(raw, Mode.HEX)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      if (HEX_RE.test(strVal)) {
        const hex = strVal.replace('#', '')
        if (hex.length === 6 || hex.length === 8) {
          return !!hex
            .split(/(..)/)
            .filter(Boolean)
            .every(pair => {
              const num = parseInt(pair, 16)

              return num >= 0 && num < RGB_MAX
            })
        } else if (hex.length === 3 || hex.length === 4) {
          return !!hex.split('').every(char => {
            const num = parseInt(`${char}${char}`, 16)

            return num >= 0 && num < RGB_MAX
          })
        } else {
          unparsable(strVal, Mode.HEX)
        }
      }
    }

    return false
  }

  static isRGB(raw) {
    const value = Mode.#checker.type(raw, Mode.RGB)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['rgb', 'rgba', 'srgb'].includes(colorspace)) {
          return checkValues(valueStr, [255, 255, 255, 1])
        }
      } else {
        unparsable(strVal, Mode.RGB)
      }
    }

    return false
  }

  static isHSL(raw) {
    const value = Mode.#checker.type(raw, Mode.HSL)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['hsl', 'hsla'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.HSL)
      }
    }

    return false
  }

  static isHWB(raw) {
    const value = Mode.#checker.type(raw, Mode.HWB)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['hwb', 'hwba'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.HWB)
      }
    }

    return false
  }

  static isLAB(raw) {
    const value = Mode.#checker.type(raw, Mode.LAB)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['lab'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.LAB)
      }
    }

    return false
  }

  static isLCH(raw) {
    const value = Mode.#checker.type(raw, Mode.LCH)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['lch'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.LCH)
      }
    }

    return false
  }

  static isOkLAB(raw) {
    const value = Mode.#checker.type(raw, Mode.OkLAB)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['oklab'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.OkLAB)
      }
    }

    return false
  }

  static isOkLCH(raw) {
    const value = Mode.#checker.type(raw, Mode.OkLCH)
    const strVal = Mode.#checker.string(value)
    if (strVal) {
      const matches = strVal.match(COLOR_FN_RE)
      if (matches) {
        let [, colorspace, valueStr] = matches
        if (colorspace === 'color') {
          // if color() function, then split string by first occurrence of space
          const spaceI = valueStr.indexOf(' ')
          colorspace = valueStr.substring(0, spaceI)
          valueStr = valueStr.substring(spaceI)
        }
        if (['oklch'].includes(colorspace)) {
          return checkValues(valueStr)
        }
      } else {
        unparsable(strVal, Mode.OkLCH)
      }
    }

    return false
  }
}
