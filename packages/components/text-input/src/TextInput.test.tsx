import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { TextInput } from './TextInput'

describe('Input', () => {
  it('should render', () => {
    render(<TextInput>Hello World!</TextInput>)

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
