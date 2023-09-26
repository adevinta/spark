import { Meta, StoryFn } from '@storybook/react'

import { Toggle } from '.'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
}

export default meta

export const Default: StoryFn = _args => <Toggle>Hello World!</Toggle>
