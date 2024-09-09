import { FormField } from '@spark-ui/form-field'
import { Meta, StoryFn } from '@storybook/react'

import { Stepper } from '.'

const meta: Meta<typeof Stepper> = {
  title: 'Experimental/Stepper',
  component: Stepper,
}

export default meta

export const Default: StoryFn = _args => <Stepper />

export const WithFormField: StoryFn = _args => (
  <FormField name="Rooms">
    <FormField.Label>Rooms</FormField.Label>

    <Stepper />
  </FormField>
)
