import { describe, expect, it } from 'vitest'

import { Color } from './index'

describe('Color', () => {
  it('should generate a Color', () => {
    const value = '#D53235'

    const actual = new Color(value)

    expect(actual).not.toBe(null)
  })
})
