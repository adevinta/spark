import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { Input, InputGroup, InputProps } from '.'

const meta: Meta<typeof Input> = {
  title: 'Experimental/Input',
  component: Input,
}

export default meta

export const Default: StoryFn = _args => <Input />

export const Uncontrolled: StoryFn = _args => <Input defaultValue="IPhone 12" />

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 13')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return <Input value={value} onChange={handleChange} />
}

export const Disabled: StoryFn = _args => <Input defaultValue="IPhone" disabled />

const intents: InputProps['intent'][] = ['neutral', 'success', 'alert', 'error']

export const Intent: StoryFn = _args => {
  return (
    <div className="gap-md flex flex-col">
      {intents.map(intent => (
        <Input key={intent} intent={intent} />
      ))}
    </div>
  )
}

export const GroupAddons: StoryFn = _args => {
  return (
    <InputGroup>
      <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>
      <Input />
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

      <Input />

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
    <Input defaultValue="adevinta.com" />
    <InputGroup.RightElement>
      <Icon>
        <Check />
      </Icon>
    </InputGroup.RightElement>
  </InputGroup>
)

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>Title</FormField.Label>

      <Input />

      <FormField.HelperMessage>
        An effective title significantly increases your chances of making a sale
      </FormField.HelperMessage>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title" isInvalid>
      <FormField.Label>Title</FormField.Label>

      <Input />

      <FormField.ErrorMessage>The title is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
