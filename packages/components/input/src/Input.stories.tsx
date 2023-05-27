import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Meta, StoryFn } from '@storybook/react'

import { Input } from '.'
import { InputGroup } from './InputGroup'
import { InputLeftAddon } from './InputLeftAddon'
import { InputLeftElement } from './InputLeftElement'
import { InputRightAddon } from './InputRighAddon'
import { InputRightElement } from './InputRightElement'
import { TextField } from './TextField'

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

    <InputGroup>
      <InputLeftElement>
        <Icon>
          <Check />
        </Icon>
      </InputLeftElement>

      <Input />

      <InputRightElement>
        <Icon>
          <Check />
        </Icon>
      </InputRightElement>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <InputGroup>
      <InputLeftAddon>https://</InputLeftAddon>

      <TextField>Label</TextField>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <InputGroup>
      <InputLeftElement>
        <Icon>
          <Check />
        </Icon>
      </InputLeftElement>

      <TextField>Label</TextField>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <InputGroup>
      <TextField>Label</TextField>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <Input />

    <Input intent="error" />
  </>
)

/*
 <InputGroup>
      <InputLeftAddon>https://</InputLeftAddon>

      <TextField>Label</TextField>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <InputGroup>
      <TextField>Label</TextField>

      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <Input />

    <Input intent="error" />
    */
