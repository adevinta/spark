import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Dummy } from './Dummy'

describe('Dummy', () => {
  it('should render', () => {
    render(<Dummy type="bar" />)

    expect(screen.getByText('bar')).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(<div onClick={clickEvent}>bar</div>)

    // When
    await user.click(screen.getByText('bar'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })
})
