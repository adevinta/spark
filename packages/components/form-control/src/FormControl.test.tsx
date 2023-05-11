import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { FormControl, FormControlState, FormErrorMessage, FormHelperMessage, FormLabel } from '.'
import { FormRequiredIndicator } from './FormRequiredIndicator'

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

  it('should render default required indicator', () => {
    render(
      <FormControl name="email" isRequired>
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, description, isRequired }) => (
            <input
              type="email"
              id={id}
              name={name}
              aria-required={isRequired}
              required={isRequired}
              aria-describedby={description}
            />
          )}
        </FormControlState>
      </FormControl>
    )

    const inputEl = screen.getByLabelText(/Email/)
    const requiredEl = screen.getByText('*')

    expect(inputEl).toHaveAttribute('required')
    expect(inputEl).toHaveAttribute('aria-required', 'true')

    expect(requiredEl).toHaveAttribute('role', 'presentation')
    expect(requiredEl).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render custom required indicator', () => {
    render(
      <FormControl name="email" isRequired>
        <FormLabel requiredIndicator={<FormRequiredIndicator>Required</FormRequiredIndicator>}>
          Email
        </FormLabel>

        <FormControlState>
          {({ id, name, description }) => (
            <input type="email" id={id} name={name} aria-describedby={description} />
          )}
        </FormControlState>
      </FormControl>
    )

    const requiredEl = screen.getByText('Required')

    expect(requiredEl).toHaveAttribute('role', 'presentation')
    expect(requiredEl).toHaveAttribute('aria-hidden', 'true')
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
          {({ id, name, isInvalid, description }) => (
            <input
              type="email"
              id={id}
              name={name}
              aria-invalid={isInvalid}
              aria-describedby={description}
            />
          )}
        </FormControlState>

        <FormErrorMessage>We will never share your email</FormErrorMessage>
      </FormControl>
    )

    const inputEl = screen.getByLabelText('Email')

    expect(inputEl).toHaveAttribute('aria-invalid', 'false')
    expect(inputEl).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText('We will never share your email')).toBeNull()
  })

  it('should render error message when is invalid', () => {
    render(
      <FormControl name="email" isInvalid>
        <FormLabel>Email</FormLabel>

        <FormControlState>
          {({ id, name, isInvalid, description }) => (
            <input
              type="email"
              id={id}
              name={name}
              aria-invalid={isInvalid}
              aria-describedby={description}
            />
          )}
        </FormControlState>

        <FormErrorMessage>Email is required</FormErrorMessage>
      </FormControl>
    )

    const inputEl = screen.getByLabelText('Email')
    const errorTextEl = screen.getByText('Email is required')

    expect(inputEl).toHaveAttribute('aria-invalid', 'true')
    expect(inputEl).toHaveAttribute('aria-describedby', errorTextEl.getAttribute('id'))
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

  it('should render using custom label', () => {
    render(
      <FormControl name="category">
        <FormLabel asChild>
          <p>Category</p>
        </FormLabel>

        <FormControlState>
          {({ labelId, name }) => (
            <div role="radiogroup" aria-labelledby={labelId}>
              <label>
                <input name={name} type="radio" value="electronics" />
                Electronics
              </label>

              <label>
                <input name={name} type="radio" value="furnitures" />
                Furnitures
              </label>
            </div>
          )}
        </FormControlState>
      </FormControl>
    )

    expect(screen.getByRole('radiogroup', { name: 'Category' })).toBeInTheDocument()
    expect(screen.getByLabelText('Electronics')).toHaveAttribute('name', 'category')
    expect(screen.getByLabelText('Electronics')).toHaveAttribute('name', 'category')
  })
})
