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
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    // Then
    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()
    expect(within(element).getByRole('radio', { name: '2' })).not.toBeChecked()
    expect(within(element).getByRole('radio', { name: '3' })).not.toBeChecked()
    expect(document.querySelector('[data-spark-component="radio-group"]')).toBeInTheDocument()
  })

  it('should check and uncheck when a radio is clicked while in uncontrolled mode', async () => {
    // Given
    const props = { defaultValue: '1' }

    // When
    render(
      <RadioGroup {...props}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
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
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
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
