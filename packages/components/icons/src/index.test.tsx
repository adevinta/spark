import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import * as Icons from './index'

describe('Icons', () => {
  describe('', () => {
    it('should be an svg', () => {
      Object.entries(Icons).forEach(([name, Icon]) => {
        // Given
        const props = {}

        // When
        render(<Icon {...props} />)
        const element = screen.getByTitle(name.toLowerCase())

        // Then
        expect(element).not.toBeNull()
      })
    })
  })
})
