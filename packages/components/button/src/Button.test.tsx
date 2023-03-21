import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    // Given

    // When
    render(<Button>Hello World!</Button>)

    // Then
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(<Button onClick={clickEvent}>Hello World!</Button>)
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })

  it('should not trigger events', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // When
    render(
      <Button onClick={clickEvent} disabled>
        Hello World!
      </Button>
    )
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
  })
})
