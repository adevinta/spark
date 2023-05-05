import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'

import { FormControl, FormControlState, FormErrorMessage, FormHelperMessage, FormLabel } from '.'

const meta: Meta<typeof FormControl> = {
  title: 'Components/FormControl',
  component: FormControl,
}

export default meta

export const Default: StoryFn = () => (
  <FormControl name="email">
    <FormLabel>Email</FormLabel>

    <FormControlState>
      {({ id, name, description }) => (
        <input
          type="email"
          id={id}
          name={name}
          aria-describedby={description}
          className="p-md border-neutral active:border-primary border-md rounded-sm"
        />
      )}
    </FormControlState>

    <FormErrorMessage>Email is required</FormErrorMessage>

    <FormHelperMessage>We will never share your email</FormHelperMessage>
  </FormControl>
)

export const Invalid: StoryFn = () => (
  <FormControl name="email" isInvalid>
    <FormLabel>Name</FormLabel>

    <FormControlState>
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
    </FormControlState>

    <FormErrorMessage>Name is required</FormErrorMessage>
  </FormControl>
)
