import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    render(<Button>My button</Button>)

    expect(screen.getByText('My button')).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(<div onClick={clickEvent}>My button</div>)

    // When
    await user.click(screen.getByText('My button'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })
})
