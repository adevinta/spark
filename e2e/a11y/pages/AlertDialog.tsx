import { AlertDialog } from '@spark-ui/alert-dialog'
import { Button } from '@spark-ui/button'
import React from 'react'

export const A11yAlertDialog = () => (
  <section>
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
  </section>
)
