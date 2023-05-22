import { Meta, StoryFn } from '@storybook/react'

import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta

export const Default: StoryFn = _args => (
  <>
    <Input />
    <Input>rewr</Input>
  </>
)
