import { Meta, StoryFn } from '@storybook/react'

import { Input } from '.'
import { InputGroup } from './InputGroup'
import { InputLeftAddon } from './InputLeftAddon'
import { InputRightAddon } from './InputRighAddon'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta

export const Default: StoryFn = _args => (
  <>
    <InputGroup>
      <InputLeftAddon>https://</InputLeftAddon>

      <Input />

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <Input />

    <Input intent="error" />
  </>
)
