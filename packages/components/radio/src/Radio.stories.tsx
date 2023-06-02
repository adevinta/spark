import { StoryLabel } from '@docs/helpers/StoryLabel'
import { FormField } from '@spark-ui/form-field'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { RadioGroup, RadioGroupProps } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup>
    <RadioGroup.Radio value="1">First</RadioGroup.Radio>
    <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
    <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup defaultValue="1">
    <RadioGroup.Radio value="1">First</RadioGroup.Radio>
    <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
    <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
  </RadioGroup>
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup value={value} onValueChange={handleChange}>
      <RadioGroup.Radio value="1">First</RadioGroup.Radio>
      <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
      <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
    </RadioGroup>
  )
}

const intents: RadioGroupProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Intent: StoryFn = _args => {
  return (
    <div className="gap-xl flex">
      {intents.map(intent => (
        <div key={intent}>
          <StoryLabel>{intent}</StoryLabel>
          <RadioGroup defaultValue="1" intent={intent}>
            <RadioGroup.Radio value="1">First</RadioGroup.Radio>
            <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
            <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const orientations: RadioGroupProps['orientation'][] = ['horizontal', 'vertical']

export const Orientation: StoryFn = _args => {
  return (
    <div className="gap-xl flex">
      {orientations.map(orientation => (
        <div key={orientation}>
          <StoryLabel>{orientation}</StoryLabel>
          <RadioGroup defaultValue="1" orientation={orientation}>
            <RadioGroup.Radio value="1">First</RadioGroup.Radio>
            <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
            <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const sizes: RadioGroupProps['size'][] = ['sm', 'md']

export const Size: StoryFn = _args => {
  return (
    <div className="gap-xl flex">
      {sizes.map(size => (
        <div key={size}>
          <StoryLabel>{size}</StoryLabel>
          <RadioGroup defaultValue="1" size={size}>
            <RadioGroup.Radio value="1">First</RadioGroup.Radio>
            <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
            <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export const Disabled: StoryFn = _args => (
  <RadioGroup disabled>
    <RadioGroup.Radio value="1">First</RadioGroup.Radio>
    <RadioGroup.Radio value="2">Second</RadioGroup.Radio>
    <RadioGroup.Radio value="3">Third</RadioGroup.Radio>
  </RadioGroup>
)

export const WithFormField: StoryFn = _args => {
  const [value, setValue] = useState<string>()

  const handleValueChange = (current: string) => {
    setValue(current)
  }

  return (
    <FormField name="condition" isRequired isInvalid={!value}>
      <FormField.Label asChild>
        <p>Apparel condition</p>
      </FormField.Label>

      <RadioGroup value={value} onValueChange={handleValueChange}>
        <RadioGroup.Radio value="1">New</RadioGroup.Radio>
        <RadioGroup.Radio value="2">Very good</RadioGroup.Radio>
        <RadioGroup.Radio value="3">Good</RadioGroup.Radio>
        <RadioGroup.Radio value="4">Satisfactory</RadioGroup.Radio>
      </RadioGroup>

      <FormField.ErrorMessage>The condition is required</FormField.ErrorMessage>
    </FormField>
  )
}
