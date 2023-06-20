import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { InputGroup } from '@spark-ui/input'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { TextField, TextFieldProps } from '.'

const meta: Meta<typeof TextField> = {
  title: 'Experimental/TextField',
  component: TextField,
}

export default meta

export const Default: StoryFn = _args => <TextField>Title</TextField>

export const Uncontrolled: StoryFn = _args => <TextField defaultValue="iPhone 12">Title</TextField>

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('iPhone 13')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <TextField value={value} onChange={handleChange}>
      Title
    </TextField>
  )
}

export const Disabled: StoryFn = _args => (
  <TextField defaultValue="iPhone" disabled>
    Title
  </TextField>
)

const intents: TextFieldProps['intent'][] = ['neutral', 'success', 'alert', 'error']

export const Intent: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {intents.map(intent => (
        <TextField key={intent} intent={intent}>
          {intent}
        </TextField>
      ))}
    </div>
  )
}

export const GroupAddons: StoryFn = _args => {
  return (
    <InputGroup>
      <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>

      <TextField>URL</TextField>

      <InputGroup.RightAddon>.com</InputGroup.RightAddon>
    </InputGroup>
  )
}

export const GroupElements: StoryFn = _args => {
  return (
    <InputGroup>
      <InputGroup.LeftElement>
        <Icon>
          <PenOutline />
        </Icon>
      </InputGroup.LeftElement>

      <TextField>Title</TextField>

      <InputGroup.RightElement>
        <Icon>
          <Check />
        </Icon>
      </InputGroup.RightElement>
    </InputGroup>
  )
}

export const GroupDisabled: StoryFn = _args => (
  <InputGroup isDisabled>
    <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>

    <TextField defaultValue="adevinta.com">URL</TextField>

    <InputGroup.RightElement>
      <Icon>
        <Check />
      </Icon>
    </InputGroup.RightElement>
  </InputGroup>
)

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField name="title" isRequired>
      <TextField>Title</TextField>
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField name="title">
      <TextField>Title</TextField>

      <FormField.HelperMessage>
        An effective title significantly increases your chances of making a sale
      </FormField.HelperMessage>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField name="title" isInvalid>
      <TextField>Title</TextField>

      <FormField.ErrorMessage>The title is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
