import { Button } from '@spark-ui/button'
import { Dialog } from '@spark-ui/dialog'
import React from 'react'

export const A11yDialog = () => (
  <Dialog defaultOpen>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay />

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
        </Dialog.Header>

        <Dialog.Body>
          <Dialog.Description>
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>

          <p>Lorem ipsum dolor sit amet</p>
        </Dialog.Body>

        <Dialog.Footer className="flex justify-end gap-md">
          <Dialog.Close asChild>
            <Button>Close</Button>
          </Dialog.Close>
        </Dialog.Footer>

        <Dialog.CloseButton aria-label="Close edit profile" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
)
