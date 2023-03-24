import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'

import { Slot } from './Slot'

describe('Slot', () => {
  it('should render wrapped component', () => {
    // Given
    const props = {}

    // When
    render(
      <Slot {...props}>
        <button>Button</button>
      </Slot>
    )

    // Then
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })

  it('should pass props to child component', async () => {
    // Given
    const props = { onClick: vitest.fn() }

    // When
    render(
      <Slot {...props}>
        <button>Button</button>
      </Slot>
    )
    fireEvent.click(screen.getByRole('button', { name: 'Button' }))

    // Then
    await waitFor(() => expect(props.onClick).toBeCalled())
  })
})
