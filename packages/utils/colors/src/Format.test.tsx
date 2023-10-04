import { describe, expect, it } from 'vitest'

import { Format, Mode } from './index'

describe('Format', () => {
  const values = [
    'red',
    '#DDD',
    '#DDDA',
    '#DDDDDD',
    '#DDDDDDAA',
    '#ddd',
    '#ababab00',
    '#00000000',
    'rgb(0,0,0)',
    'rgb(0 0 0)',
    'rgb(255, 0, 153)',
    'rgb(255 0 153)',
    'rgb(255, 0, 153, 0.8)',
    'rgb(255, 0, 153, 40%)',
    'rgb(255 0 153 / 40%)',
    'rgb(30% 10% 100%)',
    'rgb(30%, 10%, 100%)',
    'rgb(30%,10%,100%)',
    'rgba(255, 0, 153, 0.8)',
    'rgba(255, 0, 153, 40%)',
    'rgba(255 0 153 / 40%)',
    'hsl(150 30% 60%)',
    'hsl(150 30% 60% / 0.8)',
    'hsl(150 30% 60% / 80%)',
    'hsl(390 1200% 120% / 80%)',
    'hsla(150 30% 60%)',
    'hsla(150 30% 60% / 80%)',
    'hwb(150 30% 60%)',
    'hwb(150 30% 60% / 0.8)',
    'hwb(150 30% 60% / 80%)',
    'hwb(390 1200% 120% / 80%)',
    'lab(50% 40 59.5)',
    'lab(50% 40 59.5 / 0.5)',
    'lch(52.2% 72.2 50)',
    'lch(52.2% 72.2 50 / 0.5)',
    'oklab(59% 0.1 0.1)',
    'oklab(59% 0.1 0.1 / 0.5)',
    'oklch(60% 0.15 50)',
    'oklch(60% 0.15 50 / 0.5)',
  ]

  describe('rgb', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.rgb).not.toBeNull()
        expect(Mode.isRGB(color.rgb)).to.equal(true)
      })
    })
  })

  describe('hex', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.hex).not.toBeNull()
        expect(Mode.isHEX(color.hex)).to.equal(true)
      })
    })
  })

  describe('hex8', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.hex8).not.toBeNull()
        expect(Mode.isHEX(color.hex8)).to.equal(true)
      })
    })
  })

  describe('hsl', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.hsl).not.toBeNull()
        expect(Mode.isHSL(color.hsl)).to.equal(true)
      })
    })
  })

  describe('hwb', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.hwb).not.toBeNull()
        expect(Mode.isHWB(color.hwb)).to.equal(true)
      })
    })
  })

  describe('lab', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.lab).not.toBeNull()
        expect(Mode.isLAB(color.lab)).to.equal(true)
      })
    })
  })

  describe('lch', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.lch).not.toBeNull()
        expect(Mode.isLCH(color.lch)).to.equal(true)
      })
    })
  })

  describe('oklab', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.oklab).not.toBeNull()
        expect(Mode.isOkLAB(color.oklab)).to.equal(true)
      })
    })
  })

  describe('oklch', () => {
    it('given a set of values should format the given one', () => {
      const entries = [...values]

      entries.map(value => {
        const color = new Format(value)

        expect(color.oklch).not.toBeNull()
        expect(Mode.isOkLCH(color.oklch)).to.equal(true)
      })
    })
  })
})
