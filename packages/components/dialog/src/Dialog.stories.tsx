import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'

import { Dialog } from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Experimental/Dialog',
  component: Dialog,
}

export default meta

export const Usage: StoryFn = _args => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Edit profile</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>

          <p>Dialog contents</p>

          <Dialog.CloseButton aria-label="Close edit profile" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
