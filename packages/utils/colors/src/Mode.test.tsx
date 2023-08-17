import { describe, expect, it } from 'vitest'

import { Mode } from './index'

describe('Mode', () => {
  const values = {
    fake: null,
    red: Mode.KEYWORD,
    '#DDD': Mode.HEX,
    '#DDDA': Mode.HEX,
    '#DDDAB': null,
    '#DDDDDD': Mode.HEX,
    '#DDDDDDAA': Mode.HEX,
    '#ddd': Mode.HEX,
    '#ababab00': Mode.HEX,
    '#00000000': Mode.HEX,
    '#GGGGGGGG': null,
    '#GGG': null,
    '#DDD#DDD': null,
    '#DDD #DDD': null,
    'rgb(0,0,0)': Mode.RGB,
    'rgb(0 0 0)': Mode.RGB,
    'rgb(255, 0, 153)': Mode.RGB,
    'rgb(255 0 153)': Mode.RGB,
    'rgb(255, 0, 153, 0.8)': Mode.RGB,
    'rgb(255, 0, 153, 40%)': Mode.RGB,
    'rgb(255 0 153 / 40%)': Mode.RGB,
    'rgb(30% 10% 100%)': Mode.RGB,
    'rgb(30%, 10%, 100%)': Mode.RGB,
    'rgb(30%,10%,100%)': Mode.RGB,
    'rgba(255, 0, 153, 0.8)': Mode.RGB,
    'rgba(255, 0, 153, 40%)': Mode.RGB,
    'rgba(255 0 153 / 40%)': Mode.RGB,
    'hsl(150 30% 60%)': Mode.HSL,
    'hsl(150 30% 60% / 0.8)': Mode.HSL,
    'hsl(150 30% 60% / 80%)': Mode.HSL,
    'hsl(390 1200% 120% / 80%)': Mode.HSL,
    'hsla(150 30% 60%)': Mode.HSL,
    'hsla(150 30% 60% / 80%)': Mode.HSL,
    'hwb(150 30% 60%)': Mode.HWB,
    'hwb(150 30% 60% / 0.8)': Mode.HWB,
    'hwb(150 30% 60% / 80%)': Mode.HWB,
    'hwb(390 1200% 120% / 80%)': Mode.HWB,
    'lab(50% 40 59.5)': Mode.LAB,
    'lab(50% 40 59.5 / 0.5)': Mode.LAB,
    'lch(52.2% 72.2 50)': Mode.LCH,
    'lch(52.2% 72.2 50 / 0.5)': Mode.LCH,
    'oklab(59% 0.1 0.1)': Mode.OkLAB,
    'oklab(59% 0.1 0.1 / 0.5)': Mode.OkLAB,
    'oklch(60% 0.15 50)': Mode.OkLCH,
    'oklch(60% 0.15 50 / 0.5)': Mode.OkLCH,
  }

  describe('static types', () => {
    it('given static KEYWORD enum should match the value', () => {
      const expected = 'keyword'

      const current = Mode.KEYWORD

      expect(current).toBe(expected)
    })

    it('given static HEX enum should match the value', () => {
      const expected = 'hex'

      const current = Mode.HEX

      expect(current).toBe(expected)
    })

    it('given static RGB enum should match the value', () => {
      const expected = 'rgb'

      const current = Mode.RGB

      expect(current).toBe(expected)
    })

    it('given static HSL enum should match the value', () => {
      const expected = 'hsl'

      const current = Mode.HSL

      expect(current).toBe(expected)
    })

    it('given static HWB enum should match the value', () => {
      const expected = 'hwb'

      const current = Mode.HWB

      expect(current).toBe(expected)
    })

    it('given static LAB enum should match the value', () => {
      const expected = 'lab'

      const current = Mode.LAB

      expect(current).toBe(expected)
    })

    it('given static LCH enum should match the value', () => {
      const expected = 'lch'

      const current = Mode.LCH

      expect(current).toBe(expected)
    })

    it('given static OkLAB enum should match the value', () => {
      const expected = 'oklab'

      const current = Mode.OkLAB

      expect(current).toBe(expected)
    })

    it('given static OkLCH enum should match the value', () => {
      const expected = 'oklch'

      const current = Mode.OkLCH

      expect(current).toBe(expected)
    })
  })

  describe('isKeyword', () => {
    const MODE = Mode.KEYWORD

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isKeyword()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isKeyword(value)

        expect(current).toBe(expected)
      })
    })
  })

  describe('isHEX', () => {
    const MODE = Mode.HEX

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isHEX()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isHEX(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isRGB', () => {
    const MODE = Mode.RGB

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isRGB()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isRGB(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isHSL', () => {
    const MODE = Mode.HSL

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isHSL()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isHSL(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isHWB', () => {
    const MODE = Mode.HWB

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isHWB()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isHWB(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isLAB', () => {
    const MODE = Mode.LAB

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isLAB()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isLAB(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isLCH', () => {
    const MODE = Mode.LCH

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isLCH()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isLCH(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isOkLAB', () => {
    const MODE = Mode.OkLAB

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isOkLAB()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isOkLAB(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isOkLCH', () => {
    const MODE = Mode.OkLCH

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isOkLCH()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isOkLCH(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('isOkLAB', () => {
    const MODE = Mode.OkLAB

    it('given an undefined color should NOT match the mode', () => {
      const expected = false

      const current = Mode.isOkLAB()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue === MODE

        const current = Mode.isOkLAB(value)

        expect.soft(current).toBe(expected)
      })
    })
  })

  describe('getFormat', () => {
    it('given an undefined color should NOT match the mode', () => {
      const expected = null

      const current = Mode.getFormat()

      expect(current).toBe(expected)
    })

    it('given a set of values should match the right ones', () => {
      const entries = { ...values }

      Object.entries(entries).map(([entryKey, entryValue]) => {
        const value = entryKey
        const expected = entryValue

        const current = Mode.getFormat(value)

        expect.soft(current).toBe(expected)
      })
    })
  })
})
