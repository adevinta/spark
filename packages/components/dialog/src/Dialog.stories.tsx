import { Meta, StoryFn } from '@storybook/react'

import { Dialog } from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
}

export default meta

export const Default: StoryFn = _args => <Dialog>Hello World!</Dialog>
