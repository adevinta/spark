import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'

import { FormField } from '.'
import { FormRequiredIndicator } from './FormRequiredIndicator'

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
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
          className="p-md border-neutral active:border-primary border-md rounded-sm"
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
          className="p-md border-neutral active:border-primary border-md rounded-sm"
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
        <FormRequiredIndicator className="text-caption text-neutral">
          Required
        </FormRequiredIndicator>
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
          className="p-md border-neutral active:border-primary border-md rounded-sm"
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
