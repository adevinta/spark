import { Meta, StoryFn } from '@storybook/react'

import { TextInput } from '.'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
}

export default meta

export const Default: StoryFn = _args => <TextInput>default</TextInput>

export const Disabled: StoryFn = _args => <TextInput disabled />

export const Mandatory: StoryFn = _args => (
  <>
    <TextInput mandatory>input</TextInput>
    <TextInput mandatory="required">input r</TextInput>
  </>
)

export const Intent: StoryFn = _args => (
  <>
    <TextInput intent="primary">primary</TextInput>
    <TextInput intent="secondary">secondary</TextInput>
    <TextInput intent="success">success</TextInput>
    <TextInput intent="alert">alert</TextInput>
    <TextInput intent="danger">danger</TextInput>
    <TextInput intent="neutral">neutral</TextInput>
    <TextInput intent="surface">surface</TextInput>
  </>
)
