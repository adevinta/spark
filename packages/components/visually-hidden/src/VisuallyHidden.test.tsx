import { Check } from '@spark-ui/icons/dist/icons/Check'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { VisuallyHidden } from './VisuallyHidden'

describe('VisuallyHidden', () => {
  it('should render text inside the button even it is not visually', () => {
    // Given
    // When
    render(
      <button style={{ width: 24, height: 24 }}>
        <i className="text-on-surface">
          <Check />
        </i>
        <VisuallyHidden>Checkmark</VisuallyHidden>
      </button>
    )

    // Then
    expect(screen.getByRole('button', { name: 'Checkmark', hidden: true })).toBeInTheDocument()
  })
})
