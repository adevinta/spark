import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { AlertDialog } from '.'

const meta: Meta<typeof AlertDialog> = {
  title: 'Experimental/AlertDialog',
  component: AlertDialog,
}

export default meta

export const Default: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>
        <Button intent="danger">Delete</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />

        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Delete Customer</AlertDialog.Title>
          </AlertDialog.Header>

          <AlertDialog.Body>
            <AlertDialog.Description>
              Are you sure? You can not undo this action afterwards.
            </AlertDialog.Description>
          </AlertDialog.Body>

          <AlertDialog.Footer className="flex justify-end gap-md">
            <AlertDialog.Cancel asChild>
              <Button intent="neutral" design="ghost">
                Cancel
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button intent="danger">Delete</Button>
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}
