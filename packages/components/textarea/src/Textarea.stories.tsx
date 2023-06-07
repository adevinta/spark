import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { InputGroup } from '@spark-ui/input'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { Textarea } from '.'
import { TextareaProps } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
}

export default meta

export const Default: StoryFn = _args => <Textarea />

export const Uncontrolled: StoryFn = _args => <Textarea defaultValue="IPhone 12" />

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 13')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return <Textarea value={value} onChange={handleChange} />
}

export const Disabled: StoryFn = _args => <Textarea defaultValue="IPhone" disabled />

const intents: TextareaProps['intent'][] = ['neutral', 'success', 'alert', 'error']

export const Intent: StoryFn = _args => {
  return (
    <div className="gap-md flex flex-col">
      {intents.map(intent => (
        <Textarea key={intent} intent={intent} />
      ))}
    </div>
  )
}

export const GroupElements: StoryFn = _args => (
  <InputGroup>
    <InputGroup.LeftAddon>www</InputGroup.LeftAddon>

    <Textarea />

    <InputGroup.RightElement>
      <Icon>
        <Check />
      </Icon>
    </InputGroup.RightElement>
  </InputGroup>
)

export const GroupAddons: StoryFn = _args => {
  return (
    <InputGroup>
      <Textarea />
    </InputGroup>
  )
}

export const GroupDisabled: StoryFn = _args => (
  <InputGroup isDisabled>
    <InputGroup.LeftElement>
      <Icon>
        <PenOutline />
      </Icon>
    </InputGroup.LeftElement>
    <Textarea />
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

      <Textarea />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Textarea />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Textarea />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>Title</FormField.Label>

      <Textarea />

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

      <Textarea />

      <FormField.ErrorMessage>The title is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
