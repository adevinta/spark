import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Chip } from './Chip'

describe('Chip', () => {
  it('should render', () => {
    render(<Chip>Hello World!</Chip>)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })

  it('should trigger click event by default', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })

  it('should NOT trigger click event when is disabled', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      disabled: true,
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(0)
  })

  it('should trigger click event managing the defaultPressed state true', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      defaultPressed: true,
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(expect.anything(), { pressed: true })
  })

  it('should trigger click event managing the defaultPressed state false', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      defaultPressed: false,
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(expect.anything(), { pressed: false })
  })

  it('should trigger click event managing the pressed state true', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      pressed: true,
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(expect.anything(), { pressed: true })
  })

  it('should trigger click event managing the pressed state false', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()
    const props = {
      pressed: false,
      onClick: clickEvent,
    }

    // Given
    render(<Chip {...props}>Hello World!</Chip>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
    expect(clickEvent).toHaveBeenCalledWith(expect.anything(), { pressed: false })
  })
})
