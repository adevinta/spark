/* eslint-disable max-lines-per-function */

import { FormField } from '@spark-ui/form-field'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import { RadioGroup } from '.'

describe('Radio', () => {
  it('should render correctly', () => {
    const props = { defaultValue: '1' }

    render(
      <RadioGroup {...props}>
        <RadioGroup.Radio value="1">1</RadioGroup.Radio>
        <RadioGroup.Radio value="2">2</RadioGroup.Radio>
        <RadioGroup.Radio value="3">3</RadioGroup.Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()
    expect(within(element).getByRole('radio', { name: '2' })).not.toBeChecked()
    expect(within(element).getByRole('radio', { name: '3' })).not.toBeChecked()
    expect(document.querySelector('[data-spark-component="radio-group"]')).toBeInTheDocument()
  })

  it('should check and uncheck when a RadioGroup.Radio is clicked while in uncontrolled mode', async () => {
    const props = { defaultValue: '1' }

    render(
      <RadioGroup {...props}>
        <RadioGroup.Radio value="1">1</RadioGroup.Radio>
        <RadioGroup.Radio value="2">2</RadioGroup.Radio>
        <RadioGroup.Radio value="3">3</RadioGroup.Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(element).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(within(element).getByRole('radio', { name: '1' })).toBeChecked())
  })

  it('should check and uncheck when a RadioGroup.Radio is clicked while in controlled mode', async () => {
    const props = { value: '1', onValueChange: vitest.fn() }

    render(
      <RadioGroup {...props}>
        <RadioGroup.Radio value="1">1</RadioGroup.Radio>
        <RadioGroup.Radio value="2">2</RadioGroup.Radio>
        <RadioGroup.Radio value="3">3</RadioGroup.Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(element).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(props.onValueChange).toBeCalledWith('2'))
  })

  it('should render with label', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormField name="category">
        <FormField.Label asChild>
          <p>Category</p>
        </FormField.Label>

        <RadioGroup {...props}>
          <RadioGroup.Radio value="electronics">Electronics</RadioGroup.Radio>
          <RadioGroup.Radio value="furnitures">Furnitures</RadioGroup.Radio>
        </RadioGroup>
      </FormField>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })

    expect(groupEl).toBeInTheDocument()
  })

  it('should render with helper message as description', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormField name="category">
        <FormField.Label asChild>
          <p>Category</p>
        </FormField.Label>

        <RadioGroup {...props}>
          <RadioGroup.Radio value="electronics">Electronics</RadioGroup.Radio>
          <RadioGroup.Radio value="furnitures">Furnitures</RadioGroup.Radio>
        </RadioGroup>

        <FormField.HelperMessage>The category is required</FormField.HelperMessage>
      </FormField>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })
    const helperTextEl = screen.getByText('The category is required')

    expect(groupEl.getAttribute('aria-describedby')).toEqual(helperTextEl.getAttribute('id'))
  })

  it('should render with error message as description', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormField name="category" isInvalid>
        <FormField.Label asChild>
          <p>Category</p>
        </FormField.Label>

        <RadioGroup {...props}>
          <RadioGroup.Radio value="electronics">Electronics</RadioGroup.Radio>
          <RadioGroup.Radio value="furnitures">Furnitures</RadioGroup.Radio>
        </RadioGroup>

        <FormField.ErrorMessage>The category is required</FormField.ErrorMessage>
      </FormField>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })
    const errorTextEl = screen.getByText('The category is required')

    expect(groupEl).toHaveAttribute('aria-invalid', 'true')
    expect(groupEl).toHaveAttribute('aria-describedby', errorTextEl.getAttribute('id'))
  })

  it('should render as required', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormField name="category" isRequired>
        <FormField.Label asChild>
          <p>Category</p>
        </FormField.Label>

        <RadioGroup {...props}>
          <RadioGroup.Radio value="electronics">Electronics</RadioGroup.Radio>
          <RadioGroup.Radio value="furnitures">Furnitures</RadioGroup.Radio>
        </RadioGroup>
      </FormField>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })

    expect(groupEl).toHaveAttribute('aria-required', 'true')
  })
})
