/* eslint-disable max-lines-per-function */
import { FormField } from '@spark-ui/form-field'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'

describe('Checkbox', () => {
  it('should render', () => {
    const label = 'Accept terms and conditions'

    render(<Checkbox>{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).toBeInTheDocument()
    expect(checkboxEl).not.toHaveAttribute('aria-required', 'true')
    expect(checkboxEl).not.toBeInvalid()
    expect(checkboxEl).not.toHaveAccessibleDescription()
    expect(document.querySelector('[data-spark-component="checkbox"]')).toBeInTheDocument()
  })

  it('should render checked state', () => {
    const label = 'Accept terms and conditions'

    render(<Checkbox defaultChecked>{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).toBeChecked()
    expect(checkboxEl).toHaveAttribute('value', 'on')
  })

  it('should render unchecked state', () => {
    const label = 'Accept terms and conditions'

    render(<Checkbox>{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).not.toBeChecked()
    expect(checkboxEl).toHaveAttribute('value', 'on')
  })

  it('should render indeterminate state', () => {
    const label = 'Accept terms and conditions'

    render(<Checkbox checked="indeterminate">{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).toHaveAttribute('aria-checked', 'mixed')
    expect(checkboxEl).toHaveAttribute('value', 'on')
  })

  it('should render as required', () => {
    const label = 'Accept terms and conditions'

    render(<Checkbox required>{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).toHaveAttribute('aria-required', 'true')
  })

  it('should toggle checked state when is clicked in uncontrolled mode', async () => {
    const onCheckedChange = vi.fn()
    const label = 'Accept terms and conditions'

    render(
      <Checkbox defaultChecked onCheckedChange={onCheckedChange}>
        {label}
      </Checkbox>
    )

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    await userEvent.click(checkboxEl)

    expect(checkboxEl).not.toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('should toggle checked state when is clicked in controlled mode', async () => {
    const onCheckedChange = vi.fn()
    const label = 'Accept terms and conditions'

    render(
      <Checkbox checked onCheckedChange={onCheckedChange}>
        {label}
      </Checkbox>
    )

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    expect(checkboxEl).toBeChecked()

    await userEvent.click(checkboxEl)

    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('should not toggle checked state when is disabled', async () => {
    const onCheckedChange = vi.fn()
    const label = 'Accept terms and conditions'

    render(<Checkbox disabled>{label}</Checkbox>)

    const checkboxEl = screen.getByRole('checkbox', { name: label })

    await userEvent.click(checkboxEl)

    expect(checkboxEl).not.toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledTimes(0)
  })

  it('should render group', () => {
    render(
      <FormField name="sports">
        <CheckboxGroup aria-label="Sports">
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>
      </FormField>
    )

    const groupEl = screen.getByRole('group', { name: 'Sports' })

    expect(groupEl).toBeInTheDocument()

    const checkboxEls = within(groupEl).getAllByRole('checkbox')

    expect(checkboxEls[0]).toBeInTheDocument()
    expect(checkboxEls[1]).toBeInTheDocument()
  })

  it('should toggle checked state in a group when is clicked in uncontrolled mode', async () => {
    const onCheckedChange = vi.fn()

    render(
      <CheckboxGroup
        defaultValue={['baseball']}
        name="sports"
        aria-label="Sports"
        onChange={onCheckedChange}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    )

    const groupEl = screen.getByRole('group', { name: 'Sports' })
    const checkboxEl = within(groupEl).getByRole('checkbox', { name: 'Soccer' })

    expect(groupEl).toBeInTheDocument()
    expect(checkboxEl).not.toBeChecked()
    expect(within(groupEl).getByRole('checkbox', { name: 'Baseball' })).toBeChecked()

    await userEvent.click(checkboxEl)

    expect(checkboxEl).toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(['baseball', 'soccer'])
  })

  it('should toggle checked state in a group when is clicked in controlled mode', async () => {
    const onCheckedChange = vi.fn()

    render(
      <CheckboxGroup
        value={['baseball']}
        name="sports"
        aria-label="Sports"
        onChange={onCheckedChange}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    )

    const groupEl = screen.getByRole('group', { name: 'Sports' })
    const checkboxEl = within(groupEl).getByRole('checkbox', { name: 'Soccer' })

    expect(groupEl).toBeInTheDocument()
    expect(checkboxEl).not.toBeChecked()
    expect(within(groupEl).getByRole('checkbox', { name: 'Baseball' })).toBeChecked()

    await userEvent.click(checkboxEl)

    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(['baseball', 'soccer'])
  })

  it('should render group with a label', () => {
    render(
      <FormField name="sports">
        <FormField.Label>Sports</FormField.Label>

        <CheckboxGroup>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>
      </FormField>
    )

    expect(screen.getByRole('group', { name: 'Sports' })).toBeInTheDocument()
  })

  it('should render group with required property', () => {
    render(
      <FormField name="sports" isRequired>
        <FormField.Label>Sports</FormField.Label>

        <CheckboxGroup>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>
      </FormField>
    )

    const groupEl = screen.getByRole('group', {
      name: 'Sports',
    })

    const checkboxEls = within(groupEl).getAllByRole('checkbox')

    expect(checkboxEls[0]).toHaveAttribute('aria-required', 'true')
    expect(checkboxEls[1]).toHaveAttribute('aria-required', 'true')
  })

  it('should render group with helper message', () => {
    render(
      <FormField name="sports">
        <FormField.Label>Sports</FormField.Label>

        <CheckboxGroup>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>

        <FormField.HelperMessage>Choose which sports you like</FormField.HelperMessage>
      </FormField>
    )

    expect(
      screen.getByRole('group', {
        name: 'Sports',
        description: 'Choose which sports you like',
      })
    ).toBeInTheDocument()
  })

  it('should render group with validation error', () => {
    render(
      <FormField name="sports" isInvalid>
        <FormField.Label>Sports</FormField.Label>

        <CheckboxGroup>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>

        <FormField.ErrorMessage>Sports combination is invalid</FormField.ErrorMessage>
      </FormField>
    )

    const groupEl = screen.getByRole('group', {
      name: 'Sports',
      description: 'Sports combination is invalid',
    })

    expect(groupEl).toBeInTheDocument()

    const checkboxEls = within(groupEl).getAllByRole('checkbox')

    expect(checkboxEls[0]).toBeInvalid()
    expect(checkboxEls[1]).toBeInvalid()
  })

  it('should render group with a specific validation error', () => {
    render(
      <FormField name="sports">
        <FormField.Label>Sports</FormField.Label>

        <CheckboxGroup>
          <Checkbox value="soccer">Soccer</Checkbox>

          <FormField isInvalid>
            <Checkbox value="baseball">Baseball</Checkbox>
          </FormField>
        </CheckboxGroup>

        <FormField.ErrorMessage>Sports combination is invalid</FormField.ErrorMessage>
      </FormField>
    )

    const groupEl = screen.getByRole('group', {
      name: 'Sports',
    })

    expect(groupEl).toBeInTheDocument()

    expect(within(groupEl).getByRole('checkbox', { name: 'Baseball' })).toBeInvalid()
  })
})
