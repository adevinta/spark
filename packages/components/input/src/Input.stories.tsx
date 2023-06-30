import { Checkbox } from '@spark-ui/checkbox'
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

export const Default: StoryFn = _args => (
  <Input placeholder="Type here..." aria-label="Phone type" />
)

export const Uncontrolled: StoryFn = _args => (
  <Input defaultValue="IPhone 12" aria-label="Phone type" />
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 13')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return <Input value={value} onChange={handleChange} aria-label="Phone type" />
}

export const Disabled: StoryFn = _args => (
  <Input defaultValue="IPhone" disabled aria-label="Phone type" />
)

const states: InputProps['state'][] = ['success', 'alert', 'error']

export const State: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {states.map(state => (
        <InputGroup state={state}>
          <Input key={state} aria-label="Phone type" />
          <InputGroup.StateIndicator />
        </InputGroup>
      ))}
    </div>
  )
}

export const GroupAddons: StoryFn = _args => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        Toggle error state
      </Checkbox>

      <InputGroup state={isInvalid ? 'error' : null}>
        <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>
        <Input aria-label="Website" />
        <InputGroup.StateIndicator />
        <InputGroup.RightAddon>.com</InputGroup.RightAddon>
      </InputGroup>
    </div>
  )
}

export const GroupElements: StoryFn = _args => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        Toggle error state
      </Checkbox>

      <InputGroup state={isInvalid ? 'error' : null}>
        <InputGroup.LeftElement>
          <Icon>
            <PenOutline />
          </Icon>
        </InputGroup.LeftElement>

        <Input placeholder="Type here..." />
        <InputGroup.StateIndicator />
        <InputGroup.RightElement>
          <Icon>
            <Check />
          </Icon>
        </InputGroup.RightElement>
      </InputGroup>
    </div>
  )
}

export const GroupDisabled: StoryFn = _args => (
  <InputGroup isDisabled>
    <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>
    <Input defaultValue="adevinta.com" aria-label="Website" />
    <InputGroup.RightElement>
      <Icon>
        <Check />
      </Icon>
    </InputGroup.RightElement>
  </InputGroup>
)

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField name="title">
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
    <FormField name="title" state="error">
      <FormField.Label>Title</FormField.Label>

      <InputGroup>
        <InputGroup.LeftAddon>https://</InputGroup.LeftAddon>

        <Input defaultValue="adevinta.com" />

        <InputGroup.RightElement>
          <Icon>
            <Check />
          </Icon>
        </InputGroup.RightElement>
      </InputGroup>

      <FormField.ErrorMessage>The URL is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
