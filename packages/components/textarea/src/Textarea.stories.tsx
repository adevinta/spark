import { FormField } from '@spark-ui/form-field'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { Textarea, TextareaGroup } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'Experimental/Textarea',
  component: Textarea,
}

export default meta

export const Default: StoryFn = _args => <Textarea rows={2} aria-label="Message" />

export const Uncontrolled: StoryFn = _args => (
  <Textarea defaultValue="IPhone 12" aria-label="Message" />
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 13')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return <Textarea value={value} onChange={handleChange} aria-label="Message" />
}

export const Disabled: StoryFn = _args => (
  <Textarea defaultValue="IPhone" aria-label="Message" disabled />
)

export const GroupElements: StoryFn = _args => (
  <TextareaGroup>
    <TextareaGroup.LeadingIcon>
      <Check />
    </TextareaGroup.LeadingIcon>

    <Textarea rows={2} aria-label="Message" />

    <TextareaGroup.TrailingIcon>
      <Check />
    </TextareaGroup.TrailingIcon>
  </TextareaGroup>
)

export const GroupDisabled: StoryFn = _args => (
  <TextareaGroup disabled>
    <TextareaGroup.LeadingIcon>
      <PenOutline />
    </TextareaGroup.LeadingIcon>

    <Textarea rows={2} aria-label="Message" />

    <TextareaGroup.TrailingIcon>
      <Check />
    </TextareaGroup.TrailingIcon>
  </TextareaGroup>
)

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title">
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />

      <FormField.HelperMessage>
        An effective title significantly increases your chances of making a sale
      </FormField.HelperMessage>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField className="!gap-sm" name="title" state="error">
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />

      <FormField.ErrorMessage>The title is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
