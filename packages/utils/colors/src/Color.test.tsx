import { describe, expect, it } from 'vitest'

import { Color, Mode } from './index'

describe('Color', () => {
  it('should generate a Color', () => {
    const value = '#A53235'

    const actual = new Color(value)

    expect(actual).not.toBe(null)
  })

  describe('random', () => {
    it('should generate a random color', () => {
      const actual = Color.random()

      expect(actual).not.toBe(null)
    })

    it('should generate a random color given an specific color mode', () => {
      const mode = Mode.HSL

      const actual = Color.random(mode)

      expect(actual).not.toBe(null)
      expect(Mode.getFormat(actual)).toBe(mode)
    })
  })

  describe('inverse', () => {
    it('should get an inverse of a given color', () => {
      const value = '#A53235'

      const actual = new Color(value)

      actual.inverse
    })
  })
})
