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

export const Default: StoryFn = _args => (
  <Textarea rows={2} placeholder="Describe what you want to sell" aria-label="Description" />
)

export const Uncontrolled: StoryFn = _args => (
  <Textarea rows={2} defaultValue="IPhone 12 in good condition" aria-label="Description" />
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 12 in good condition')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return <Textarea rows={2} value={value} onChange={handleChange} aria-label="Description" />
}

export const Disabled: StoryFn = _args => (
  <div className="flex flex-col gap-md">
    <Textarea
      rows={2}
      defaultValue="IPhone 12 in good condition"
      aria-label="Description"
      disabled
    />

    <TextareaGroup disabled>
      <TextareaGroup.LeadingIcon>
        <PenOutline />
      </TextareaGroup.LeadingIcon>

      <Textarea rows={2} defaultValue="IPhone 12 in good condition" aria-label="Message" />

      <TextareaGroup.TrailingIcon>
        <Check />
      </TextareaGroup.TrailingIcon>
    </TextareaGroup>
  </div>
)

export const Icon: StoryFn = _args => (
  <TextareaGroup>
    <TextareaGroup.LeadingIcon>
      <PenOutline />
    </TextareaGroup.LeadingIcon>

    <Textarea rows={2} aria-label="Message" />

    <TextareaGroup.TrailingIcon>
      <Check />
    </TextareaGroup.TrailingIcon>
  </TextareaGroup>
)

export const State: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-xl">
      <TextareaGroup state="error">
        <Textarea rows={2} aria-label="Description" />
      </TextareaGroup>

      <TextareaGroup state="alert">
        <TextareaGroup.LeadingIcon>
          <PenOutline />
        </TextareaGroup.LeadingIcon>

        <Textarea rows={2} aria-label="Description" />
      </TextareaGroup>

      <TextareaGroup state="success">
        <TextareaGroup.LeadingIcon>
          <PenOutline />
        </TextareaGroup.LeadingIcon>

        <Textarea rows={2} aria-label="Description" />

        <TextareaGroup.TrailingIcon>
          <Check />
        </TextareaGroup.TrailingIcon>
      </TextareaGroup>
    </div>
  )
}

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Textarea rows={2} />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField name="description">
      <FormField.Label>Description</FormField.Label>

      <Textarea rows={2} />

      <FormField.HelperMessage>
        An effective description significantly increases your chances of making a sale
      </FormField.HelperMessage>
    </FormField>
  )
}

export const FieldCharactersCount: StoryFn = () => {
  const maxLength = 90
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <FormField name="description">
      <FormField.Label>Description</FormField.Label>

      <Textarea rows={2} value={value} onChange={handleChange} maxLength={maxLength} />

      <div className="flex justify-between gap-md">
        <div className="grow">
          <FormField.HelperMessage>
            An effective description significantly increases your chances of making a sale
          </FormField.HelperMessage>

          <FormField.ErrorMessage>The description is invalid</FormField.ErrorMessage>
        </div>

        <FormField.CharactersCount value={value} maxLength={maxLength} />
      </div>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField name="description" state="error">
      <FormField.Label>Description</FormField.Label>

      <Textarea rows={2} />

      <FormField.ErrorMessage>The description is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
