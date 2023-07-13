import { FormField } from '@spark-ui/form-field'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Euro } from '@spark-ui/icons/dist/icons/Euro'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
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

  it('should render addons within group', () => {
    const leftText = 'https://'
    const rightText = '.com'
    const placeholder = 'Smartphone'

    render(
      <InputGroup>
        <InputGroup.LeadingAddon>{leftText}</InputGroup.LeadingAddon>
        <Input placeholder={placeholder} />
        <InputGroup.TrailingAddon>{rightText}</InputGroup.TrailingAddon>
      </InputGroup>
    )

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(screen.getByText(leftText)).toBeInTheDocument()
    expect(screen.getByText(rightText)).toBeInTheDocument()
  })

  it('should render elements within group', () => {
    const leftLabel = 'Check'
    const rightLabel = 'Euro'
    const placeholder = 'Smartphone'

    render(
      <InputGroup>
        <InputGroup.LeadingIcon label={leftLabel}>
          <Check />
        </InputGroup.LeadingIcon>
        <Input placeholder={placeholder} />
        <InputGroup.TrailingIcon label={rightLabel}>
          <Euro />
        </InputGroup.TrailingIcon>
      </InputGroup>
    )

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    expect(screen.getByText(rightLabel)).toBeInTheDocument()
    expect(screen.getByText(rightLabel)).toBeInTheDocument()
  })

  it('should render error state indicator', () => {
    const label = 'Error'
    const errorIcon = <AlertOutline title={label} />

    render(
      <InputGroup state="error">
        <Input />
        <InputGroup.StateIndicator errorIcon={errorIcon} />
      </InputGroup>
    )

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should render alert state indicator', () => {
    const label = 'Alert'
    const alertIcon = <WarningOutline title={label} />

    render(
      <InputGroup state="alert">
        <Input />
        <InputGroup.StateIndicator alertIcon={alertIcon} />
      </InputGroup>
    )

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should render success state indicator', () => {
    const label = 'Success'
    const successIcon = <Check title={label} />

    render(
      <InputGroup state="success">
        <Input />
        <InputGroup.StateIndicator successIcon={successIcon} />
      </InputGroup>
    )

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should render state indicator instead of trailing icon where there is state', () => {
    const stateLabel = 'Error'
    const trailingLabel = 'Euro'
    const errorIcon = <AlertOutline />

    render(
      <InputGroup state="error">
        <Input />

        <InputGroup.TrailingIcon label={trailingLabel}>
          <Euro />
        </InputGroup.TrailingIcon>

        <InputGroup.StateIndicator label={stateLabel} errorIcon={errorIcon} />
      </InputGroup>
    )

    expect(screen.queryByText(trailingLabel)).not.toBeInTheDocument()
    expect(screen.getByText(stateLabel)).toBeInTheDocument()
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
      <FormField name={name} state="error">
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
