import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    // Given
    const props = { children: 'Hello World!' }

    // When
    render(<Button {...props} />)
    const element = screen.getByRole('button')

    // Then
    expect(element).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      onClick: clickEvent,
      children: 'Hello World!',
    }

    // When
    render(<Button {...props} />)
    const element = screen.getByRole('button')
    await user.click(element)

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })

  it('should not trigger events', async () => {
    // Given
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      onClick: clickEvent,
      disabled: true,
      children: 'Hello World!',
    }

    // When
    render(<Button {...props} />)
    const element = screen.getByRole('button')
    await user.click(element)

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
    expect(element).toHaveAttribute('disabled')
  })
})
