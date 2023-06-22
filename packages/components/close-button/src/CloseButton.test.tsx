import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('should render', () => {
    render(<CloseButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(<CloseButton onClick={clickEvent} />)

    // When
    await user.click(screen.getByRole('button'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })
})
