import { FormControl, FormHelperMessage, FormLabel } from '@spark-ui/form-control'
import { Meta, StoryFn } from '@storybook/react'
import { FormErrorMessage } from 'packages/components/form-control/dist'
import { useState } from 'react'

import { Radio, RadioGroup, RadioGroupProps } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup defaultValue="1">
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup value={value} onValueChange={handleChange}>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  )
}

const intents: RadioGroupProps['intent'][] = [
  'primary',
  'secondary',
  'neutral',
  'success',
  'alert',
  'error',
  'info',
]

export const Intent: StoryFn = _args => {
  return (
    <div className="gap-lg flex flex-col">
      {intents.map(intent => (
        <div key={intent} className="gap-md flex flex-col justify-center">
          <p className="text-headline-2">{intent}</p>
          <RadioGroup key={intent} defaultValue="1" intent={intent} orientation="horizontal">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const sizes: RadioGroupProps['size'][] = ['sm', 'md']

export const Size: StoryFn = _args => {
  return (
    <div className="gap-lg flex flex-col">
      {sizes.map(size => (
        <div key={size} className="gap-lg flex flex-col justify-center">
          <p className="text-headline-2">{size}</p>
          <RadioGroup key={size} defaultValue="1" size={size} orientation="horizontal">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export const Disabled: StoryFn = _args => (
  <RadioGroup disabled>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Control: StoryFn = _args => (
  <form>
    <FormControl name="condition" asChild>
      <fieldset>
        <FormLabel asChild>
          <legend className="float-left">Apparel condition</legend>
        </FormLabel>

        <RadioGroup>
          <Radio value="1">New</Radio>
          <Radio value="2">Very good</Radio>
          <Radio value="3">Good</Radio>
          <Radio value="4">Satisfactory</Radio>
        </RadioGroup>

        <FormHelperMessage>The condition that best matches your product</FormHelperMessage>

        <FormErrorMessage>The condition is required</FormErrorMessage>
      </fieldset>
    </FormControl>
  </form>
)

export const Required: StoryFn = _args => (
  <form>
    <FormControl name="condition" isRequired asChild>
      <fieldset>
        <FormLabel asChild>
          <legend className="float-left">Apparel condition</legend>
        </FormLabel>

        <RadioGroup>
          <Radio value="1">New</Radio>
          <Radio value="2">Very good</Radio>
          <Radio value="3">Good</Radio>
          <Radio value="4">Satisfactory</Radio>
        </RadioGroup>

        <FormErrorMessage>The condition is required</FormErrorMessage>
      </fieldset>
    </FormControl>
  </form>
)

export const Invalid: StoryFn = _args => (
  <form>
    <FormControl name="condition" isInvalid asChild>
      <fieldset>
        <FormLabel asChild>
          <legend className="float-left">Apparel condition</legend>
        </FormLabel>

        <RadioGroup>
          <Radio value="1">New</Radio>
          <Radio value="2">Very good</Radio>
          <Radio value="3">Good</Radio>
          <Radio value="4">Satisfactory</Radio>
        </RadioGroup>

        <FormErrorMessage>The condition is required</FormErrorMessage>
      </fieldset>
    </FormControl>
  </form>
)
