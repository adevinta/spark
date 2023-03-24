import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import { Radio, RadioGroup } from '.'

describe('Radio', () => {
  it('should render correctly', () => {
    // Given
    const props = { defaultValue: '1' }

    // When
    render(
      <RadioGroup {...props}>
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    // Then
    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()
    expect(within(element).getByRole('radio', { name: '2' })).not.toBeChecked()
    expect(within(element).getByRole('radio', { name: '3' })).not.toBeChecked()
  })

  it('should check and uncheck when a radio is clicked while in uncontrolled mode', async () => {
    // Given
    const props = { defaultValue: '1' }

    // When
    render(
      <RadioGroup {...props}>
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    // Then
    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(element).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(within(element).getByRole('radio', { name: '1' })).toBeChecked())
  })

  it('should check and uncheck when a radio is clicked while in controlled mode', async () => {
    // Given
    const props = { value: '1', onValueChange: vitest.fn() }

    // When
    render(
      <RadioGroup {...props}>
        <label>
          1
          <Radio value="1" />
        </label>
        <label>
          2
          <Radio value="2" />
        </label>
        <label>
          3
          <Radio value="3" />
        </label>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    // Then
    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(element).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(props.onValueChange).toBeCalledWith('2'))
  })
})
