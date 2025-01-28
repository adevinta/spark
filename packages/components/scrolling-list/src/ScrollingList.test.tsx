import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ScrollingList } from './ScrollingList'

describe('ScrollingList', () => {
  it('should render', () => {
    render(<ScrollingList>Hello World!</ScrollingList>)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })

  it('should trigger click event', async () => {
    const user = userEvent.setup()
    const clickEvent = vi.fn()

    // Given
    render(<div onClick={clickEvent}>Hello World!</div>)

    // When
    await user.click(screen.getByText('Hello World!'))

    // Then
    expect(clickEvent).toHaveBeenCalledTimes(1)
  })
})
