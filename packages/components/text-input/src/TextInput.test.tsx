import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { TextInput } from '.'

describe('TextInput', () => {
  it('should render', () => {
    render(<TextInput>Hello World!</TextInput>)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should trigger onChange event', async () => {
    const user = userEvent.setup()
    const changeEvent = vi.fn()
    const value = 'value'

    // Given
    render(<TextInput onValueChange={changeEvent}>Hello World!</TextInput>)

    // When
    await user.type(screen.getByRole('textbox'), value)

    // Then
    expect(changeEvent).toHaveBeenCalledTimes(value.length)
  })
})
