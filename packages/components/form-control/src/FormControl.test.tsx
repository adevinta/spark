import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { FormControl, FormControlState, FormErrorMessage, FormHelperMessage, FormLabel } from '.'

describe('FormControl', () => {
  it('should render', () => {
    render(
      <FormControl name="email">
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>
      </FormControl>
    )

    expect(screen.getByLabelText('Email')).toHaveAttribute('name', 'email')
  })

  it('should render helper message', () => {
    render(
      <FormControl name="email">
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>

        <FormHelperMessage>We will never share your email</FormHelperMessage>
      </FormControl>
    )

    const inputEl = screen.getByLabelText('Email')
    const helperTextEl = screen.getByText('We will never share your email')

    expect(inputEl.getAttribute('aria-describedby')).toEqual(helperTextEl.getAttribute('id'))
  })

  it('should not render error message when is not invalid', () => {
    render(
      <FormControl name="email">
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>

        <FormErrorMessage>We will never share your email</FormErrorMessage>
      </FormControl>
    )

    expect(screen.queryByText('We will never share your email')).toBeNull()
  })

  it('should render error message when is invalid', () => {
    render(
      <FormControl name="email" isInvalid>
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>

        <FormErrorMessage>Email is required</FormErrorMessage>
      </FormControl>
    )

    const inputEl = screen.getByLabelText('Email')
    const errorTextEl = screen.getByText('Email is required')

    expect(inputEl.getAttribute('aria-describedby')).toEqual(errorTextEl.getAttribute('id'))
    expect(errorTextEl).toHaveAttribute('aria-live', 'polite')
  })

  it('should render error and helper message when is invalid', () => {
    render(
      <FormControl name="email" isInvalid>
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>

        <FormErrorMessage>Email is required</FormErrorMessage>

        <FormHelperMessage>We will never share your email</FormHelperMessage>
      </FormControl>
    )

    const inputEl = screen.getByLabelText('Email')
    const errorTextEl = screen.getByText('Email is required')
    const helperTextEl = screen.getByText('Email is required')

    expect(inputEl).toHaveAttribute('aria-describedby')

    const ids = (inputEl.getAttribute('aria-describedby') as string).split(' ')

    expect(ids).toContain(helperTextEl.getAttribute('id'))
    expect(ids).toContain(errorTextEl.getAttribute('id'))
  })

  it('should render using custom elements', () => {
    render(
      <FormControl name="category" asChild>
        <fieldset>
          <FormLabel asChild>
            <legend>Category</legend>
          </FormLabel>

          <div role="radiogroup">
            <label>
              <FormControlState>
                {({ name }) => <input name={name} type="radio" value="electronics" />}
              </FormControlState>
              Electronics
            </label>

            <label>
              <FormControlState>
                {({ name }) => <input name={name} type="radio" value="furnitures" />}
              </FormControlState>
              Furnitures
            </label>
          </div>
        </fieldset>
      </FormControl>
    )

    expect(screen.getByRole('group', { name: 'Category' })).toBeInTheDocument()
    expect(screen.getByLabelText('Electronics')).toHaveAttribute('name', 'category')
    expect(screen.getByLabelText('Electronics')).toHaveAttribute('name', 'category')
  })
})
