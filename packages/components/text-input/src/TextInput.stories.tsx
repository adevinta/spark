import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { TextInput } from '.'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
}

type TextInputProps = ComponentProps<typeof TextInput>

const intents: TextInputProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
  'surface',
]

export default meta

export const Default: StoryFn = _args => <TextInput>Default</TextInput>

export const Disabled: StoryFn = _args => <TextInput disabled>Disabled label</TextInput>

export const Placeholder: StoryFn = _args => (
  <div className="gap-lg flex">
    <TextInput placeholder="placeholder">Label</TextInput>
    <TextInput placeholder="placeholder">Label</TextInput>
  </div>
)

export const Mandatory: StoryFn = _args => (
  <div className="gap-lg flex">
    <TextInput mandatory>Label</TextInput>
    <TextInput mandatory="required">Label</TextInput>
  </div>
)

export const Intent: StoryFn = _args => (
  <div className="gap-lg flex flex-col flex-wrap">
    {intents.map(intent => (
      <div key={`${intent}`} className="gap-lg flex flex-row">
        <TextInput intent={intent}>{intent}</TextInput>
        <TextInput intent={intent} mandatory>
          {intent}
        </TextInput>
        <span className="flex items-center">{intent}</span>
      </div>
    ))}
  </div>
)
