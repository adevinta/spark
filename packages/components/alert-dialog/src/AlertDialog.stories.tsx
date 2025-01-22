import { Button } from '@spark-ui/button'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { AlertDialog } from '.'

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['overlays'],
}

export default meta

export const Usage: StoryFn = _args => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button intent="danger">Delete</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />

        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Delete account</AlertDialog.Title>
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

export const Controlled: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog.Trigger asChild>
          <Button intent="danger">Delete</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay />

          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>Delete account</AlertDialog.Title>
            </AlertDialog.Header>

            <AlertDialog.Body>
              Are you sure? You can not undo this action afterwards.
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
    </>
  )
}
