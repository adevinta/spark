import { FormControl, FormErrorMessage, FormHelperMessage, FormLabel } from '@spark-ui/form-control'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import { Radio, RadioGroup } from '.'

describe('Radio', () => {
  it('should render', () => {
    const props = { defaultValue: '1' }

    render(
      <RadioGroup {...props}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()
    expect(within(element).getByRole('radio', { name: '2' })).not.toBeChecked()
    expect(within(element).getByRole('radio', { name: '3' })).not.toBeChecked()
    expect(document.querySelector('[data-spark-component="radio-group"]')).toBeInTheDocument()
  })

  it('should check and uncheck when a radio is clicked while in uncontrolled mode', async () => {
    const props = { defaultValue: '1' }

    render(
      <RadioGroup {...props}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup')

    expect(element).toBeInTheDocument()
    expect(within(element).getByRole('radio', { name: '1' })).toBeChecked()

    userEvent.click(within(element).getByRole('radio', { name: '2' }))

    await waitFor(() => expect(within(element).getByRole('radio', { name: '1' })).toBeChecked())
  })

  it('should check and uncheck when a radio is clicked while in controlled mode', async () => {
    const props = { value: '1', onValueChange: vitest.fn() }

    render(
      <RadioGroup {...props}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
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
      <FormControl name="category">
        <FormLabel asChild>
          <p>Category</p>
        </FormLabel>

        <RadioGroup {...props}>
          <Radio value="electronics">Electronics</Radio>
          <Radio value="furnitures">Furnitures</Radio>
        </RadioGroup>
      </FormControl>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })

    expect(groupEl).toBeInTheDocument()
  })

  it('should render with helper message as description', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormControl name="category">
        <FormLabel asChild>
          <p>Category</p>
        </FormLabel>

        <RadioGroup {...props}>
          <Radio value="electronics">Electronics</Radio>
          <Radio value="furnitures">Furnitures</Radio>
        </RadioGroup>

        <FormHelperMessage>The category is required</FormHelperMessage>
      </FormControl>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })
    const helperTextEl = screen.getByText('The category is required')

    expect(groupEl.getAttribute('aria-describedby')).toEqual(helperTextEl.getAttribute('id'))
  })

  it('should render with error message as description', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormControl name="category" isInvalid>
        <FormLabel asChild>
          <p>Category</p>
        </FormLabel>

        <RadioGroup {...props}>
          <Radio value="electronics">Electronics</Radio>
          <Radio value="furnitures">Furnitures</Radio>
        </RadioGroup>

        <FormErrorMessage>The category is required</FormErrorMessage>
      </FormControl>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })
    const errorTextEl = screen.getByText('The category is required')

    expect(groupEl).toHaveAttribute('aria-invalid', 'true')
    expect(groupEl).toHaveAttribute('aria-describedby', errorTextEl.getAttribute('id'))
  })

  it('should render as required', async () => {
    const props = { defaultValue: 'electronics' }

    render(
      <FormControl name="category" isRequired>
        <FormLabel asChild>
          <p>Category</p>
        </FormLabel>

        <RadioGroup {...props}>
          <Radio value="electronics">Electronics</Radio>
          <Radio value="furnitures">Furnitures</Radio>
        </RadioGroup>
      </FormControl>
    )

    const groupEl = screen.getByRole('radiogroup', { name: 'Category' })

    expect(groupEl).toHaveAttribute('aria-required', 'true')
  })
})
