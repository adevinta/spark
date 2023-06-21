import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'

import { FormField } from '.'

const meta: Meta<typeof FormField> = {
  title: 'Experimental/FormField',
  component: FormField,
}

export default meta

export const Default: StoryFn = () => (
  <FormField className="!gap-md" name="email">
    <FormField.Label>Email</FormField.Label>

    <FormField.Control>
      {({ id, name, description }) => (
        <input
          type="email"
          id={id}
          name={name}
          aria-describedby={description}
          className="rounded-sm border-md border-neutral p-md outline-none"
        />
      )}
    </FormField.Control>

    <FormField.HelperMessage>We will never share your email</FormField.HelperMessage>
  </FormField>
)

export const Required: StoryFn = () => (
  <FormField className="!gap-md" name="password" isRequired>
    <FormField.Label>Password</FormField.Label>

    <FormField.Control>
      {({ id, name, description, isRequired }) => (
        <input
          type="password"
          id={id}
          name={name}
          aria-describedby={description}
          aria-required={isRequired}
          required={isRequired}
          className="rounded-sm border-md border-neutral p-md outline-none"
        />
      )}
    </FormField.Control>

    <FormField.ErrorMessage>Password is required</FormField.ErrorMessage>
  </FormField>
)

export const CustomRequired: StoryFn = () => (
  <FormField className="!gap-md" name="password" isRequired>
    <FormField.Label
      requiredIndicator={
        <FormField.RequiredIndicator className="text-caption text-neutral">
          Required
        </FormField.RequiredIndicator>
      }
    >
      Password
    </FormField.Label>

    <FormField.Control>
      {({ id, name, description, isRequired }) => (
        <input
          type="password"
          id={id}
          name={name}
          aria-describedby={description}
          aria-required={isRequired}
          required={isRequired}
          className="rounded-sm border-md border-neutral p-md outline-none"
        />
      )}
    </FormField.Control>

    <FormField.ErrorMessage>Password is required</FormField.ErrorMessage>
  </FormField>
)

export const State: StoryFn = () => (
  <div className="flex flex-col gap-lg">
    <FormField className="!gap-md" name="email" state="error">
      <FormField.Label>Name</FormField.Label>

      <FormField.Control>
        {({ id, name, description, state }) => (
          <input
            type="text"
            id={id}
            name={name}
            aria-describedby={description}
            className={cx(
              'p-md border-md rounded-sm outline-none',
              state === 'error' ? 'border-error' : 'border-neutral'
            )}
          />
        )}
      </FormField.Control>

      <FormField.ErrorMessage>Name is invalid</FormField.ErrorMessage>
    </FormField>

    <FormField className="!gap-md" name="email" state="success">
      <FormField.Label>Email</FormField.Label>

      <FormField.Control>
        {({ id, name, description, state }) => (
          <input
            type="email"
            id={id}
            name={name}
            aria-describedby={description}
            className={cx(
              'p-md border-md rounded-sm outline-none',
              state === 'success' ? 'border-success' : 'border-neutral'
            )}
          />
        )}
      </FormField.Control>

      <FormField.SuccessMessage>Email is valid</FormField.SuccessMessage>
    </FormField>

    <FormField className="!gap-md" name="email" state="alert">
      <FormField.Label>Password</FormField.Label>

      <FormField.Control>
        {({ id, name, description, state }) => (
          <input
            type="password"
            id={id}
            name={name}
            aria-describedby={description}
            className={cx(
              'p-md border-md rounded-sm outline-none',
              state === 'alert' ? 'border-alert' : 'border-neutral'
            )}
          />
        )}
      </FormField.Control>

      <FormField.AlertMessage>There is an issue with your password</FormField.AlertMessage>
    </FormField>
  </div>
)
