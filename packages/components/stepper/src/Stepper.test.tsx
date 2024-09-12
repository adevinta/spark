import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Stepper } from '.'

const defaultProps = {
  defaultValue: 0,
  'aria-label': 'Stepper',
  incrementAriaLabel: 'Increment',
  decrementAriaLabel: 'Decrement',
  onChange: vi.fn(),
}

describe('Stepper', () => {
  beforeEach(() => vi.clearAllMocks())

  it('should handle callback on changing value', async () => {
    const user = userEvent.setup()

    render(<Stepper {...defaultProps} />)

    const input = screen.getByRole('textbox')

    // Changing value through stepper buttons...
    await user.click(screen.getByLabelText('Increment'))
    expect(screen.getByRole('textbox')).toHaveValue('1')

    await user.click(screen.getByLabelText('Decrement'))
    expect(screen.getByRole('textbox')).toHaveValue('0')

    expect(defaultProps.onChange).toHaveBeenCalledTimes(2)

    // ... or via direct input
    await user.type(input, '1')
    act(() => input.blur())

    expect(input).toHaveValue('1')
  })

  it('should change value on scrolling up or down', () => {
    render(<Stepper {...defaultProps} />)

    const input = screen.getByRole('textbox')

    act(() => input.focus())

    fireEvent.wheel(input, { deltaY: 10 })
    expect(input).toHaveValue('1')

    fireEvent.wheel(input, { deltaY: -10 })
    expect(input).toHaveValue('0')

    expect(defaultProps.onChange).toHaveBeenCalledTimes(2)
  })

  describe('disabled', () => {
    it('should not change value nor accept interaction', async () => {
      const user = userEvent.setup()

      render(<Stepper {...defaultProps} disabled />)

      await user.click(screen.getByLabelText('Increment'))
      await user.click(screen.getByLabelText('Decrement'))

      expect(defaultProps.onChange).not.toHaveBeenCalled()

      expect(screen.getByLabelText('Increment')).toBeDisabled()
      expect(screen.getByLabelText('Decrement')).toBeDisabled()
    })

    it('should not change value on scrolling up or down', () => {
      render(<Stepper {...defaultProps} disabled />)

      const input = screen.getByRole('textbox')

      act(() => input.focus())

      fireEvent.wheel(input, { deltaY: 10 })
      fireEvent.wheel(input, { deltaY: -10 })

      expect(defaultProps.onChange).not.toHaveBeenCalled()
    })
  })

  describe('readOnly', () => {
    it('should not change value nor accept interaction when readonly', async () => {
      const user = userEvent.setup()

      render(<Stepper {...defaultProps} readOnly />)

      const input = screen.getByRole('textbox')

      await user.click(screen.getByLabelText('Increment'))
      await user.click(screen.getByLabelText('Decrement'))

      await user.type(input, '11')
      act(() => input.blur())

      expect(defaultProps.onChange).not.toHaveBeenCalled()
      expect(input).toHaveValue('0')
    })

    it('should not change value on scrolling up or down', () => {
      render(<Stepper {...defaultProps} readOnly />)

      const input = screen.getByRole('textbox')

      act(() => input.focus())

      fireEvent.wheel(input, { deltaY: 10 })
      fireEvent.wheel(input, { deltaY: -10 })

      expect(defaultProps.onChange).not.toHaveBeenCalled()
    })
  })

  describe('min and max values', () => {
    // @todo: ensure behavior is compliant with specs

    it('should not change the value if max limit has been reached', async () => {
      const user = userEvent.setup()

      render(<Stepper {...defaultProps} maxValue={5} step={5} />)

      await user.click(screen.getByLabelText('Increment'))
      expect(screen.getByRole('textbox')).toHaveValue('5')
      expect(screen.getByLabelText('Increment')).toBeDisabled()

      await user.click(screen.getByLabelText('Increment'))
      expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    })

    it('should not change the value if min limit has been reached', async () => {
      const user = userEvent.setup()

      render(<Stepper {...defaultProps} minValue={-10} step={5} />)

      await user.click(screen.getByLabelText('Decrement'))
      await user.click(screen.getByLabelText('Decrement'))

      expect(screen.getByRole('textbox')).toHaveValue('-10')
      expect(screen.getByLabelText('Decrement')).toBeDisabled()

      await user.click(screen.getByLabelText('Decrement'))
      expect(defaultProps.onChange).toHaveBeenCalledTimes(2)
    })
  })
})
