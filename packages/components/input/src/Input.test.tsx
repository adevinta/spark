/* eslint-disable max-lines-per-function */

import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Input, InputGroup } from '.'

describe('Input', () => {
  it('should render', () => {
    const placeholder = 'Smartphone'

    render(<Input placeholder={placeholder} />)

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })

  it('should change value in uncontrolled mode', async () => {
    const onChange = vi.fn()
    const defaultValue = 'Smartphone'

    render(<Input defaultValue={defaultValue} onChange={onChange} />)

    const inputEl = screen.getByDisplayValue(defaultValue)

    const value = 'Iphone 12'

    await userEvent.clear(inputEl)
    await userEvent.type(inputEl, value)

    expect(inputEl).toHaveValue(value)
    expect(onChange).toHaveBeenCalled()
  })

  it('should change value in controlled mode', async () => {
    const onChange = vi.fn()
    const value = 'Smartphone'

    render(<Input value={value} onChange={onChange} />)

    const inputEl = screen.getByDisplayValue(value)

    const current = 'Iphone 12'

    await userEvent.clear(inputEl)
    await userEvent.type(inputEl, current)

    expect(onChange).toHaveBeenCalled()
  })

  it('should not change value when is disabled', async () => {
    const placeholder = 'Smartphone'

    render(<Input placeholder={placeholder} disabled />)

    const inputEl = screen.getByPlaceholderText(placeholder)

    await userEvent.type(inputEl, 'Iphone 12')

    expect(inputEl).not.toHaveValue()
    expect(inputEl).toBeDisabled()
  })

  it.only('should render addons within group', () => {
    const leftText = 'https://'
    const rightText = '.com'
    const placeholder = 'Smartphone'

    render(
      <InputGroup>
        <InputGroup.LeftAddon>{leftText}</InputGroup.LeftAddon>
        <Input placeholder={placeholder} />
        <InputGroup.RightAddon>{rightText}</InputGroup.RightAddon>
      </InputGroup>
    )

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(screen.getByText(leftText)).toBeInTheDocument()
    expect(screen.getByText(rightText)).toBeInTheDocument()
  })

  it('should render elements within group', () => {
    const leftId = 'id'
    const rightElement = '€'
    const placeholder = 'Smartphone'

    render(
      <InputGroup>
        <InputGroup.LeftElement>
          <Icon>
            <Check data-testid={leftId} />
          </Icon>
        </InputGroup.LeftElement>
        <Input placeholder={placeholder} />
        <InputGroup.RightElement>{rightElement}</InputGroup.RightElement>
      </InputGroup>
    )

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(screen.getByTestId(leftId)).toBeInTheDocument()
    expect(screen.getByText(rightElement)).toBeInTheDocument()
  })

  it('should render label within field', () => {
    const name = 'title'
    const label = 'Title'

    render(
      <FormField name={name}>
        <FormField.Label>{label}</FormField.Label>

        <Input />
      </FormField>
    )

    const inputEl = screen.getByLabelText(label)

    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveAttribute('name', name)
  })

  it('should render with required property within field', () => {
    render(
      <FormField name="title" isRequired>
        <FormField.Label>Title</FormField.Label>

        <Input />
      </FormField>
    )

    expect(screen.getByLabelText(/Title/)).toBeRequired()
  })

  it('should render with helper message within field', () => {
    const name = 'title'
    const label = 'Title'
    const helperText = 'An effective title significantly increases your chances of making a sale'

    render(
      <FormField name={name}>
        <FormField.Label>{label}</FormField.Label>

        <Input />

        <FormField.HelperMessage>{helperText}</FormField.HelperMessage>
      </FormField>
    )

    expect(screen.getByLabelText(label)).toHaveAccessibleDescription(helperText)
  })

  it('should render with validation error within field', () => {
    const name = 'title'
    const label = 'Title'
    const errorText = 'The title is invalid'

    render(
      <FormField name={name} isInvalid>
        <FormField.Label>{label}</FormField.Label>

        <Input />

        <FormField.ErrorMessage>{errorText}</FormField.ErrorMessage>
      </FormField>
    )

    const inputEl = screen.getByLabelText(label)

    expect(inputEl).toBeInvalid()
    expect(inputEl).toHaveAccessibleDescription(errorText)
  })
})
