import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'

import { FormField } from '.'

const meta: Meta<typeof FormField> = {
  title: 'Experimental/FormField',
  component: FormField,
}

export default meta

export const Default: StoryFn = () => (
  <FormField name="email">
    <FormField.Label>Email</FormField.Label>

    <FormField.State>
      {({ id, name, description }) => (
        <input
          type="email"
          id={id}
          name={name}
          aria-describedby={description}
          className="rounded-sm border-md border-neutral p-md active:border-primary"
        />
      )}
    </FormField.State>

    <FormField.ErrorMessage>Email is required</FormField.ErrorMessage>

    <FormField.HelperMessage>We will never share your email</FormField.HelperMessage>
  </FormField>
)

export const Required: StoryFn = () => (
  <FormField name="password" isRequired>
    <FormField.Label>Password</FormField.Label>

    <FormField.State>
      {({ id, name, description, isRequired }) => (
        <input
          type="password"
          id={id}
          name={name}
          aria-describedby={description}
          aria-required={isRequired}
          required={isRequired}
          className="rounded-sm border-md border-neutral p-md active:border-primary"
        />
      )}
    </FormField.State>

    <FormField.ErrorMessage>Password is required</FormField.ErrorMessage>
  </FormField>
)

export const CustomRequired: StoryFn = () => (
  <FormField name="password" isRequired>
    <FormField.Label
      requiredIndicator={
        <FormField.RequiredIndicator className="text-caption text-neutral">
          Required
        </FormField.RequiredIndicator>
      }
    >
      Password
    </FormField.Label>

    <FormField.State>
      {({ id, name, description, isRequired }) => (
        <input
          type="password"
          id={id}
          name={name}
          aria-describedby={description}
          aria-required={isRequired}
          required={isRequired}
          className="rounded-sm border-md border-neutral p-md active:border-primary"
        />
      )}
    </FormField.State>

    <FormField.ErrorMessage>Password is required</FormField.ErrorMessage>
  </FormField>
)

export const Invalid: StoryFn = () => (
  <FormField name="email" isInvalid>
    <FormField.Label>Name</FormField.Label>

    <FormField.State>
      {({ id, name, description, isInvalid }) => (
        <input
          type="text"
          id={id}
          name={name}
          aria-describedby={description}
          className={cx(
            'p-md border-md rounded-sm',
            isInvalid ? 'border-error' : 'border-neutral active:border-primary'
          )}
        />
      )}
    </FormField.State>

    <FormField.ErrorMessage>Name is invalid</FormField.ErrorMessage>
  </FormField>
)
