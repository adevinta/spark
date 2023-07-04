import { Checkbox } from '@spark-ui/checkbox'
import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { EyeOffOutline } from '@spark-ui/icons/dist/icons/EyeOffOutline'
import { EyeOutline } from '@spark-ui/icons/dist/icons/EyeOutline'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { Button } from 'packages/components/button/dist'
import { ChangeEvent, useState } from 'react'

import { Input, InputGroup, InputProps } from '.'

const meta: Meta<typeof Input> = {
  title: 'Experimental/Input',
  component: Input,
}

export default meta

export const WorstCase: StoryFn = _args => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [showLeadingAddon, setShowLeadingAddon] = useState(true)
  const [showTrailingAddon, setShowTrailingAddon] = useState(true)
  const [showLeadingIcon, setShowLeadingIcon] = useState(true)
  const [showTrailingIcon, setShowTrailingIcon] = useState(true)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        error state
      </Checkbox>

      <Checkbox checked={showLeadingAddon} onClick={() => setShowLeadingAddon(!showLeadingAddon)}>
        Leading addon
      </Checkbox>

      <Checkbox
        checked={showTrailingAddon}
        onClick={() => setShowTrailingAddon(!showTrailingAddon)}
      >
        Trailing addon
      </Checkbox>

      <Checkbox checked={showLeadingIcon} onClick={() => setShowLeadingIcon(!showLeadingIcon)}>
        Leading icon
      </Checkbox>

      <Checkbox checked={showTrailingIcon} onClick={() => setShowTrailingIcon(!showTrailingIcon)}>
        Trailing icon
      </Checkbox>

      <Checkbox checked={disabled} onClick={() => setDisabled(!disabled)}>
        Disabled
      </Checkbox>

      <Input value="IPhone" />

      <Input placeholder="IPhone" />

      <Input value="IPhone" disabled />

      <Input placeholder="IPhone" disabled />

      <InputGroup isDisabled={disabled} state={isInvalid ? 'error' : undefined}>
        {showLeadingAddon && (
          <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
        )}
        {showLeadingIcon && (
          <InputGroup.LeadingIcon>
            <Icon>
              <PenOutline />
            </Icon>
          </InputGroup.LeadingIcon>
        )}

        <Input aria-label="Website" />

        {showTrailingIcon && (
          <InputGroup.TrailingIcon>
            <Icon>
              <PenOutline />
            </Icon>
          </InputGroup.TrailingIcon>
        )}
        {showTrailingAddon && (
          <InputGroup.TrailingAddon className="px-lg">.com</InputGroup.TrailingAddon>
        )}
      </InputGroup>
    </div>
  )
}

export const Password: StoryFn = _args => {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(isVisible => !isVisible)
  }

  return (
    <InputGroup>
      <Input type={isVisible ? 'text' : 'password'} />

      <InputGroup.TrailingAddon className="px-md">
        <IconButton
          className="!text-body-1"
          intent="neutral"
          design="ghost"
          size="sm"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          onClick={handleToggle}
        >
          <Icon>{isVisible ? <EyeOffOutline /> : <EyeOutline />}</Icon>
        </IconButton>
      </InputGroup.TrailingAddon>
    </InputGroup>
  )
}

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

export const GroupAddons: StoryFn = _args => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className="flex flex-col items-start gap-lg">
      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        Toggle error state
      </Checkbox>

      <InputGroup state={isInvalid ? 'error' : undefined}>
        <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
        <Input aria-label="Website" />
        <InputGroup.TrailingAddon>.com</InputGroup.TrailingAddon>

        <InputGroup.StateIndicator errorIcon={<EyeOffOutline />} />
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

      <InputGroup state={isInvalid ? 'error' : undefined}>
        <InputGroup.LeadingIcon>
          <Icon>
            <PenOutline />
          </Icon>
        </InputGroup.LeadingIcon>

        <Input placeholder="Type here..." />
        <InputGroup.TrailingIcon>
          <Icon>
            <Check />
          </Icon>
        </InputGroup.TrailingIcon>
      </InputGroup>
    </div>
  )
}

export const GroupDisabled: StoryFn = _args => (
  <InputGroup isDisabled>
    <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
    <Input defaultValue="adevinta.com" aria-label="Website" />
    <InputGroup.TrailingIcon>
      <Icon>
        <Check />
      </Icon>
    </InputGroup.TrailingIcon>
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
        <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>

        <Input defaultValue="adevinta.com" />

        <InputGroup.TrailingIcon>
          <Icon>
            <Check />
          </Icon>
        </InputGroup.TrailingIcon>
      </InputGroup>

      <FormField.ErrorMessage>The URL is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
