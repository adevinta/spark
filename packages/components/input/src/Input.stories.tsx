import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Button } from '@spark-ui/button'
import { Checkbox } from '@spark-ui/checkbox'
import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { EyeOffOutline } from '@spark-ui/icons/dist/icons/EyeOffOutline'
import { EyeOutline } from '@spark-ui/icons/dist/icons/EyeOutline'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { Search } from '@spark-ui/icons/dist/icons/Search'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { Input, InputGroup } from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta

export const Usage: StoryFn = _args => <Input placeholder="Type here..." aria-label="Phone type" />

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

export const Disabled: StoryFn = _args => {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <div className="flex flex-col gap-xl">
      <Checkbox checked={isDisabled} onClick={() => setIsDisabled(isDisabled => !isDisabled)}>
        Disabled
      </Checkbox>

      <div>
        <StoryLabel>Standalone input</StoryLabel>
        <Input
          className="max-w-sz-320"
          aria-label="Website"
          disabled={isDisabled}
          defaultValue="Hello world"
        />
      </div>

      <div>
        <StoryLabel>Addons - solid</StoryLabel>
        <InputGroup className="max-w-sz-320" disabled={isDisabled}>
          <InputGroup.LeadingAddon asChild>
            <IconButton intent="primary" design="filled" aria-label="Search">
              <Icon>
                <EyeOutline />
              </Icon>
            </IconButton>
          </InputGroup.LeadingAddon>
          <InputGroup.ClearButton aria-label="clear" />
          <InputGroup.LeadingIcon>
            <PenOutline />
          </InputGroup.LeadingIcon>
          <Input aria-label="Website" defaultValue="Hello world" />
          <InputGroup.TrailingAddon asChild>
            <IconButton intent="neutral" design="ghost" aria-label="Search">
              <Icon>
                <EyeOutline />
              </Icon>
            </IconButton>
          </InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div>
        <StoryLabel>Addons - text</StoryLabel>
        <InputGroup className="max-w-sz-320" disabled={isDisabled}>
          <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
          <InputGroup.LeadingIcon>
            <PenOutline />
          </InputGroup.LeadingIcon>
          <Input aria-label="Website" defaultValue="Hello world" />
          <InputGroup.TrailingAddon>.com</InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div>
        <StoryLabel>Addons - inline</StoryLabel>
        <InputGroup className="max-w-sz-320" disabled={isDisabled}>
          <InputGroup.LeadingIcon>
            <PenOutline />
          </InputGroup.LeadingIcon>
          <Input aria-label="Website" defaultValue="Hello world" />
          <InputGroup.TrailingAddon>
            <Button size="sm">Button</Button>
          </InputGroup.TrailingAddon>
        </InputGroup>
      </div>
    </div>
  )
}

export const Addons: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-xl">
      <div className="flex flex-col gap-sm">
        <StoryLabel>Solid</StoryLabel>
        <InputGroup className="max-w-sz-320">
          <InputGroup.LeadingAddon asChild>
            <Button design="ghost" intent="neutral">
              Click
            </Button>
          </InputGroup.LeadingAddon>
          <Input aria-label="Website" />
          <InputGroup.TrailingAddon asChild>
            <IconButton intent="neutral" design="ghost" aria-label="Search">
              <Icon>
                <Search />
              </Icon>
            </IconButton>
          </InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div className="flex flex-col gap-sm">
        <StoryLabel>Inline</StoryLabel>
        <InputGroup className="max-w-sz-320">
          <InputGroup.LeadingAddon className="px-lg">
            <Button size="sm">Click</Button>
          </InputGroup.LeadingAddon>
          <Input aria-label="Website" />
          <InputGroup.TrailingAddon className="px-lg">
            <IconButton size="sm" aria-label="Search">
              <Icon size="sm">
                <Search />
              </Icon>
            </IconButton>
          </InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div className="flex flex-col gap-sm">
        <StoryLabel>Raw text</StoryLabel>
        <InputGroup className="max-w-sz-320">
          <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
          <Input aria-label="Website" />
          <InputGroup.TrailingAddon className="px-lg">.com</InputGroup.TrailingAddon>
        </InputGroup>
      </div>
    </div>
  )
}

export const Icons: StoryFn = () => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className="flex flex-col items-start gap-lg">
      <InputGroup className="max-w-sz-320" state={isInvalid ? 'error' : undefined}>
        <InputGroup.LeadingIcon>
          <PenOutline />
        </InputGroup.LeadingIcon>

        <Input placeholder="Type here..." />

        <InputGroup.TrailingIcon>
          <Check />
        </InputGroup.TrailingIcon>
      </InputGroup>

      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        Toggle error state
      </Checkbox>
    </div>
  )
}

export const PasswordExample: StoryFn = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(isVisible => !isVisible)
  }

  return (
    <InputGroup className="max-w-sz-320">
      <Input type={isVisible ? 'text' : 'password'} aria-label="Password" />

      <InputGroup.TrailingAddon>
        <IconButton
          intent="neutral"
          design="ghost"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          onClick={handleToggle}
        >
          <Icon>{isVisible ? <EyeOffOutline /> : <EyeOutline />}</Icon>
        </IconButton>
      </InputGroup.TrailingAddon>
    </InputGroup>
  )
}

export const SearchExample: StoryFn = _args => {
  return (
    <InputGroup className="max-w-sz-320">
      <InputGroup.LeadingIcon>
        <Search />
      </InputGroup.LeadingIcon>

      <Input aria-label="Searcher" />

      <InputGroup.ClearButton aria-label="Clear value" />

      <InputGroup.TrailingAddon asChild>
        <Button design="contrast">Search</Button>
      </InputGroup.TrailingAddon>
    </InputGroup>
  )
}

export const State: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-xl">
      <div>
        <StoryLabel>error</StoryLabel>
        <InputGroup className="max-w-sz-320" state="error">
          <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
          <Input aria-label="Error state" />
          <InputGroup.TrailingAddon>.com</InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div>
        <StoryLabel>alert</StoryLabel>
        <InputGroup className="max-w-sz-320" state="alert">
          <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
          <Input aria-label="Alert state" />
          <InputGroup.TrailingAddon>.com</InputGroup.TrailingAddon>
        </InputGroup>
      </div>

      <div>
        <StoryLabel>success</StoryLabel>
        <InputGroup className="max-w-sz-320" state="success">
          <InputGroup.LeadingAddon>https://</InputGroup.LeadingAddon>
          <Input aria-label="Success state" />
          <InputGroup.TrailingAddon>.com</InputGroup.TrailingAddon>
        </InputGroup>
      </div>
    </div>
  )
}

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

export const FieldCharactersCount: StoryFn = _args => {
  const MAX_LENGTH = 90
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <FormField name="input-with-a-characters-count">
      <FormField.Label>Input with a characters count</FormField.Label>

      <Input value={value} onChange={handleChange} maxLength={MAX_LENGTH} />

      <div className="flex justify-between gap-md">
        <FormField.HelperMessage>
          Type the text but take into account the max length
        </FormField.HelperMessage>

        <FormField.CharactersCount value={value} maxLength={MAX_LENGTH} />
      </div>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField name="title" state="error">
      <FormField.Label>Title</FormField.Label>

      <Input defaultValue="adevinta.com" />

      <FormField.ErrorMessage>The URL is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
