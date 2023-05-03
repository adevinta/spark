import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { Search } from '@spark-ui/icons/dist/icons/Search'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Input, InputField, TextInput } from '.'

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

export const Icons: StoryFn = _args => (
  <InputField>
    <Icon>
      <PenOutline />
    </Icon>
    <Input>Label</Input>
    <Icon>
      <Search />
    </Icon>
  </InputField>
)

export const Compose: StoryFn = _args => (
  <InputField>
    <Input>Label1</Input>
    <Icon>
      <Search />
    </Icon>
    <Input>Label2</Input>
    <Icon>
      <PenOutline />
    </Icon>
    <Button shape="square">click</Button>
  </InputField>
)

export const Examples: StoryFn = _args => (
  <InputField>
    <Input htmlSize={4}>0000</Input> - <Input htmlSize={4}>1111</Input> -{' '}
    <Input htmlSize={4}>2222</Input> - <Input htmlSize={4}>3333</Input>
  </InputField>
)
