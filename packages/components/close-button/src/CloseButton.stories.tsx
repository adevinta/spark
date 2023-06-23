import { Meta, StoryFn } from '@storybook/react'

import { CloseButton } from '.'

const meta: Meta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
}

export default meta

export const Default: StoryFn = _args => <CloseButton label="close" />
